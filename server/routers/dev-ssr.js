const Router =require('koa-router')
const axios=require('axios')
const MemoryFS=require('memory-fs')
const webpack=require('webpack')
const VueServerRenderer=require('vue-server-renderer')
const path=require('path')
const fs=require('fs')

const serverRender=require('./server-render')

const serverConfig=require('../../build/webpack.config.server')

const serverCompiler=webpack(serverConfig)

const mfs=new MemoryFS()

serverCompiler.outputFileSystem=mfs

let bundle

serverCompiler.watch({},(err,stats)=>{
  if(err) throw err
  stats=stats.toJson()
  stats.errors.forEach(err=>console.log(err))
  stats.warnings.forEach(warn=>console.warn(warn))
  const bundlePath=path.join(serverConfig.output.path,'vue-ssr-server-bundle.json')
  bundle=JSON.parse(mfs.readFileSync(bundlePath,'utf-8'))
  console.log(`new bundle generator`)
})

const handleSSR=async (ctx)=>{
  if(!bundle){
    ctx.body='你等一会，别着急'
    return
  }
  const clientManifestResp=await axios.get('http://127.0.0.1:8000/vue-ssr-client-manifest.json')
  const clientManifest=clientManifestResp.data
  console.log('clientManifest',clientManifest)
  const template=fs.readFileSync(path.join(__dirname,'../server.template.ejs'),'utf-8')
  const renderer=VueServerRenderer
    .createBundleRenderer(bundle,{
      inject:false,
      clientManifest
    })
    console.log('renderer',renderer)
    // console.log('renderer',renderer)
    await serverRender(ctx,renderer,template)
}
const router=new Router()

router.get('*',handleSSR)

module.exports=router

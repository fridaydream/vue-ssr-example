const ejs = require('ejs')
module.exports = async(ctx, renderer, template) => {
  ctx.headers['Content-Type'] = 'text/html'

  const context = { url: ctx.path }
  console.log(ctx.path)
  console.log('renderer', renderer);
  try {
    const appString = await renderer.renderToString(context)
    console.log('appString', appString);
    const {
      title
    } = context.meta.inject()
    const html = ejs.render(template, {
      appString,
      title: title.text(),
      style: context.renderStyles(),
      scripts: context.renderScripts()
    })
    ctx.body = html
  } catch (err) {
    console.log('appString', 'errr');
    console.log('render error', err)
    throw err
  }
}

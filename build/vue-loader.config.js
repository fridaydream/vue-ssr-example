module.exports=(isDev)=>{
	return {
		//不小心添加了空格去掉
		preserveWhitepace:true,
		//提取到单独css文件中
		// extractCss:true
		// cssModules:{
		// 	localIdentName:'[path]-[name]-[hash:base64:5]',
		// 	camelCase:true
		// }
		// hotReload:false,//根据环境变量生成
	}
}

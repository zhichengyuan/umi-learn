export default {
    plugins:[
        ["umi-plugin-react",{
            title:true,//开启title插件
            dva:true,//开启dva插件
            routes:{
                exclude:[/.*\/models\/.*/,/.*\/model\.js/]
            }
        }]
    ],
    // history:"hash",
    outputPath:"./out",
    // base:"/abc",
    publicPath:"./public/"
}
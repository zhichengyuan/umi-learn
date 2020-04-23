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
    proxy:{//相当于webpack的devServer中的proxy配置
        "/api":{
            target:"http://api.duyiedu.com",
            changeOrigin:true//修改源
        }

    }
}
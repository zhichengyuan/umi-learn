export default {
    proxy:{//相当于webpack的devServer中的proxy配置
        "/api":{
            target:"http://api.duyiedu.com",
            changeOrigin:true//修改源
        }

    }
}
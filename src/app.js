export function patchRoutes(routes){
    //动态的配置路由
    //参数routes是默认路由配置
    // routes[0].routes.shift()
    //在此位置，可以动态的改变路由配置
    console.log(routes);
}

export const dva = {
    config:{},
    plugins:[]
}
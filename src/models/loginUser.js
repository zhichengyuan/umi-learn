import{ routerRedux } from "dva/router"
export default{
    state:null,//默认为null，表示没有任何用户登录
    subscriptions:{
        syncLocalstorage({dispatch}){
            //同步本地存储
            var loginId = localStorage.getItem('loginId');
            if(loginId){
                //已经登录过了
                dispatch({type:"setLoginUser",payload:loginId});
            }
        }
    },
    reducers:{
        setLoginUser(state,action){
            return action.payload //通过payload传递登录成功的账号
        }
    },
    effects:{
        *login({payload},{put}) {
            const {loginId,loginPwd} = payload;
            if(loginId === 'admin' && loginPwd  === '123'){
                //登录成功
                yield put({type:'setLoginUser',payload:loginId})
                localStorage.setItem('loginId',loginId);
                //跳转页面
                // yield put(routerRedux.push("/"))
                return true;
            }else{
                return false;
                // window.alert("账号密码错误1")
            }
        },
        *loginOut(action,{put}) {
            localStorage.removeItem('loginId')
            yield put({type:'setLoginUser',payload:null});
            return true;
        }
    }
}
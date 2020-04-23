import { searchStudents } from '../services/student'
import { routerRedux } from 'dva/router'

export default{
    state:{
        condition:{
            page:1,
            limit:10,
            key:"",
            sex:-1
        },
        result:{
            datas:[],
            total:0,
        }
    },
    subscriptions:{
        // initStudents({dispatch}){
        //     dispatch({type:'fetchStudents'})
        // },
        listenUrl({history,dispatch}) {
            history.listen((newLocation) => {
                if(newLocation.pathname !== "/student"){
                    return;
                }
                const query = newLocation.query;
                query.limit && (query.limit = +query.limit)
                query.page && (query.page = +query.page)
                query.sex && (query.sex = +query.sex)
                dispatch({
                    type:'changeCondition',
                    payload:newLocation.query
                })
                console.log(newLocation);
                dispatch({
                    type:'fetchStudents'
                })
            })
            
        }
    },
    reducers:{
        changeCondition(state,{ payload }){
            return{
                ...state,
                condition:{
                    ...state.condition,
                    ...payload
                }
            }
        },
        setResult(state,{payload}){
            return{
                ...state,
                result:payload
            }
        }
    },
    effects:{
        *setCondition(action,{put,select}){
            yield put({
                type:"changeCondition",
                payload:action.payload
            });
            //改变地址
            const condition = yield select(state => state.students.condition);
            yield put(routerRedux.push(`?page=${condition.page}&limit=${condition.limit}&key=${condition.key}&sex=${condition.sex}`))
        },
        /**
         * 根据当前的条件，搜索学生
         * @param {*} action 
         * @param {*} param1 
         */
        *fetchStudents(action,{ put,call,select}){
            //拿到仓库中当前的搜索条件
            const condition = yield select(state => state.students.condition);
            const result = yield call(searchStudents,condition);
            console.log(result);
            yield put({
                type:"setResult",
                payload:{
                    total:result.cont,
                    datas:result.datas
                }
            })
            // searchStudents(condition)
        }
    }
}
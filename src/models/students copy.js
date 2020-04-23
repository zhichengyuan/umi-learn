import { searchStudents } from '../services/student'
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
        initStudents({dispatch}){
            dispatch({type:'fetchStudents'})
        }
    },
    reducers:{
        setCondition(state,{ payload }){
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
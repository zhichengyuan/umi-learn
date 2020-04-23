import {connect} from 'dva'
import StudentSearchBar from '../StudentSearchBar'

const mapStateToProps = state => ({
    defaultValue:{
        key:state.students.condition.key,
        sex:state.students.condition.sex
    }
})
const mapDispachToProps = dispacth => ({
    onSearch(newCondition){
        newCondition.page = 1;
        dispacth({
            type:'students/setCondition',
            payload:newCondition
        })
    }
})

export default connect(mapStateToProps,mapDispachToProps)(StudentSearchBar)
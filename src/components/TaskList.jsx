import React, { Component } from 'react'
import { Container,Row } from 'react-bootstrap'
import {connect} from 'react-redux'

const mapStateToPrps = (state)=> state
const mapDispatchToProps= (dispatch)=>({
    removeTask: task =>dispatch({
        type: "REMOVE_TASK",
        payload:task
    })
})


 class TaskList extends Component {
    render() {
        return (
            <Container>
                <Row>
                <ul>
                {this.props.tasks.map((task,i)=> <li 
                onClick ={()=>this.props.removeTask(task)}
                style= {{cursor:"pointer"}}
                 key={i}>{task}</li>)}
                </ul>
                </Row>
            </Container>
            
        )
    }
}


export default connect(mapStateToPrps,mapDispatchToProps)( TaskList)
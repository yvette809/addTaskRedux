import React from 'react'
import { Container,Row, Button } from 'react-bootstrap'
import {connect} from 'react-redux'


const mapStateToProps = (state)=> state

const mapDispatchToProps = (dispatch)=> ({
    addTask : (someText)=> dispatch({
        type: "ADD_TASK",
        payload:someText
    })
})


class AddTask extends React.Component{
    state={
        text:""
    }

    render(){
        return (
    
                <Container>
                    <Row>
                        <input type="text" 
                        value = {this.state.text}
                        placeholder= "New task..."
                        onChange = {e=> this.setState({text:e.currentTarget.value})}
                        />
                        <Button onClick= {()=>this.props.addTask(this.state.text)}>Add Task</Button>
                    </Row>
                </Container>
           
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddTask)
import  React, { Component } from "react";


class Message extends Component {
    constructor() {
        super()
        this.state = {
            message:'Welcome Visitor'
        }
    }
    messageChange(){
        this.setState({
            message: 'ThankYou For Subscribe'
        })
    }
    render() {
        return(
            <div>
            <h1> {this.state.message} </h1>
            <button onClick = {() => this.messageChange()}> Click </button>
            </div>
        )
    }        
}
export default Message;
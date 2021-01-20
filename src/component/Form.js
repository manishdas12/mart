import React, {Component} from 'react'
import { Dialog } from 'primereact/dialog';
import { Accordion,AccordionTab } from 'primereact/accordion';
import { InputText } from 'primereact/inputtext';
import { useForm } from 'react-hook-form';

class Form extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            firstname: '', 
            lastname: '',
            email: '',
            phone: '',
            course: '',        
        }
    }

    
    handleFirstnameChange = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }

    handleLastnameChange = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handlePhoneChange= (event) => {
        this.setState({
            phone: event.target.value
        })
    }
    handleCourseChange= (event) => {
        this.setState({
            course: event.target.value})
      }

    handleSubmit = event => {
        alert(`${this.state.firstname} ${this.state.lastname} ${this.state.email} ${this.state.phone}`)
        event.preventDefault()
    }

    
    render() {
        const { firstname, lastname, email, phone} = this.state
        
        return (
           
            <div className="card">
                <div className="p-field"> <h1> Candidate Form </h1></div>

           <form onSubmit={this.handleSubmit}>  

           <div className="p-fluid">
    <div className="p-field p-grid">
        <label htmlFor="firstname" className="p-col-6 p-md-2">Firstname</label>
        <div className="p-col-6 p-md-2">
        <span> <InputText id="firstname" type="text" required onChange = {this.handleFirstnameChange}/>
        </span>           
        </div>        
    </div>

    <div className="p-field p-grid">
        <label htmlFor="lastname" className="p-col-6 p-md-2">Lastname</label>
        <div className="p-col-6 p-md-2">
            <InputText id="lastname" type="text" required onChange = {this.handleLastnameChange}/> 
        </div>
    </div>

    <div className="p-field p-grid">
        <label htmlFor="email" className="p-col-6 p-md-2">Email</label>
        <div className="p-col-6 p-md-2">
            <InputText id="email" type="text"             
            onChange = {this.handleEmailChange}/> 
        
        </div>
        
    </div>

    <div className="p-field p-grid">
        <label htmlFor="phone" className="p-col-6 p-md-2">Phone</label>
        <div className="p-col-6 p-md-2">
            <InputText id="phone" type="text" required onChange = {this.handlePhoneChange}/> 
        </div>
    </div>

    <div className="p-field p-grid">
        <label htmlFor="course" className="p-col-6 p-md-2">course</label>        
        <select value={this.state.value} onChange={this.handleCourseChange}>
            <option value="java">java</option>
            <option value="python">python</option>
            <option value="javascript">javascript</option>
            <option value="node">node</option>
        </select>
    </div>
    
    <div className="p-field p-grid">
        <button type= 'submit' onClick="refreshPage()">Submit</button>
    </div>

    </div>                    
    </form>
    </div>
           
        )
    }        
}
 export default Form
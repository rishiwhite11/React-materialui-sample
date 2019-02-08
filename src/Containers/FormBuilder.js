import React, { Component } from 'react'
import BasicDetails from '../Components/Forms/BasicDetails'

export class FormBuilder extends Component {
  
  state = {
      step: 1,
      name:'',
      errorName:'',
      qualification:null,
      skills:null,
      date: '',
      professionalQualifications:[{
          companyName:'',
          startDate:'',
          endDate:''
      }]
  } 
  nextStep = () => {
      console.log(this.state)
      const {step} = this.state;
      this.setState({
          step: step + 1
      })
  }
  prevStep = () => {
      const {step} = this.state;
      this.setState({
          step: step - 1
      })
  } 
  handleChange = (key, value) => {
      this.setState({
          [key]: value
      })
  }

  handleTextField = (value) => {
      console.log(value);
  }

  changeDate = (date) => {
      this.setState({
          date: date
      })
  }
  render() {
    const {step} = this.state;
    switch(step){
        case 1:
            return <BasicDetails 
            handleChange={this.handleChange} 
            qualification={this.state.qualification}
            changeDate={this.changeDate} birthday={this.state.date}
            setName={this.handleTextField} submitBasicForm={this.nextStep}/>
        case 2:
            return <h1>Hello Mayukh</h1>
        default:
    }  
    
  }
}

export default FormBuilder

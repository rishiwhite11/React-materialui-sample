import React, { Component } from 'react'
import BasicDetails from '../Components/Forms/BasicDetails'

export class FormBuilder extends Component {
  
  state = {
      step: 1,
      name:'',
      qualification:null,
      skills:null,
      date: ''
  } 
  nextStep = () => {
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
            changeDate={this.changeDate} birthday={this.state.date}/>
        default:
    }  
    
  }
}

export default FormBuilder

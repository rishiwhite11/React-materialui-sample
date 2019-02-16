import React, { Component } from 'react'
import BasicDetails from '../Components/Forms/BasicDetails'
import ProfessionalDetails from '../Components/Forms/ProfessionalDetails'
export class FormBuilder extends Component {
  
  state = {
      step: 1,
      name:'',
      errorName:'',
      qualification:null,
      skills:null,
      date: '',
      professionalQualifications:[]
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
      this.setState({
          name: value
      })
  }

  changeDate = (date) => {
      this.setState({
          date: date
      })
  }

  addProfessionalData = (data) => {
      this.setState({
        professionalQualifications: this.state.professionalQualifications.concat(data)
      })
  }

  updateProfessionalData = (data) => {
      console.log(JSON.stringify(data))
      const index = this.state.professionalQualifications.findIndex((item, i) => {
          return item.company === data.company
      })
      console.error(index);
      this.setState({
          professionalQualifications: this.state.professionalQualifications
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
            return <ProfessionalDetails 
            companies={this.state.professionalQualifications}
            addProfessionalData={this.addProfessionalData}
            updateProfessionalData={this.updateProfessionalData}/>
        default:
    }  
    
  }
}

export default FormBuilder

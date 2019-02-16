import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import FormDialog from '../UI/FormDialog';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    
})
export class ProfessionalDetails extends Component {
  
  addCompany = (data) => {
    this.props.addProfessionalData(data);
  }

  updateCompany = (data) => {
    this.props.updateProfessionalData(data);
  }
  render() {
    console.warn(this.props.companies);
    return (
      <Grid container spacing={8} alignItems="center" justify="center">
        <FormDialog companies={this.props.companies} 
        addProfessionalData={this.addCompany}
        updateProfessionalData={this.updateCompany}/>
      </Grid>
    )
  }
}

export default withStyles(styles)(ProfessionalDetails);

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import SingleSelect from '../UI/SingleSelect';
import MultiSelect from '../UI/MultiSelect';
import DateField from '../UI/DateField';
import Button from '../UI/Button'

const styles = theme => ({
    root:{
        flexGrow: 1
    },
    card: {
        minWidth: 275,
        marginTop: '100px',
        padding: '25px 0'
    },
    title: {
        fontSize: 14
    }
})
export class BasicDetails extends Component {
  
  state = {
      error: false,
      errorText:'',
      disabled:true
  }  
  handleChange = (key) => value => {
    this.props.handleChange(key, value);
  }

  handleTextField = (event) => {
      const name = event.target.value;
      console.warn(name.length)
      const regex = /^[a-zA-Z0-9- ,_]*$/;
      if(!regex.test(name)){
          this.setState({
              error:true,
              errorText:"Special Characters not allowed",
              disabled:true
          })
      }else if(name.length < 5){
          this.setState({
              error: true,
              errorText:"Name Must be at least 5 Characters Long",
              disabled: true
          })
      }else{
        this.setState({
            error:false,
            errorText:"",
            disabled:false
        })
          this.props.setName(name);
      }
  }

  changeDate = (event) => {
    event.preventDefault();
    const birthday = event.target.value;
    this.props.changeDate(birthday)
  }
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={16} direction="row" justify="center">
            <Grid item xs={8}>
                <Card className={classes.card}>
                    <CardContent>
                        <TextField
                        id="standard-name"
                        label="Name"
                        type="name"
                        fullWidth
                        onChange={this.handleTextField}
                        error={this.state.error}
                        helperText={this.state.errorText}
                        />
                        <SingleSelect changed={this.handleChange}
                         qualification={this.props.qualification}/>
                        <MultiSelect changed={this.handleChange} skills={this.props.skills}/>
                        <DateField birthday={this.props.birthday} 
                        changeDate={this.changeDate}/>
                        <Button color="primary" 
                        text="continue" disabled={this.state.disabled}
                        submit={this.props.submitBasicForm}></Button>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)( BasicDetails)

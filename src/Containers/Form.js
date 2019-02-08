import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import SingleSelect from "../Components/UI/SingleSelect";
import MultiSelect from "../Components/UI/MultiSelect";
import Button from "../Components/UI/Button";

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

class MaterialForm extends Component{
    state = {
        single: null,
        multi: null,
        error: false,
        errorText:"",
        textField:"",
        disabled: true,
        color: "default"
    }

    handleChange = name => value => {
        this.setState({
          [name]: value,
        });
      };
    
      handleTextField = (event) => {
          const data = event.target.value;
          if(data.indexOf("@") !== -1){
              this.setState({
                  error:true,
                  errorText:"No Special Character Allowed",
                  textField: data
              })
          }else{
              this.setState({
                  error: false,
                  errorText:"",
                  textField: data,
                  disabled: false,
                  color:"primary"
              })
          }
      }

    nextStep = () => {
        console.log(this.state);
    }  
    render(){
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={16} direction="row" justify="center">
                    <Grid item xs={8}>
                        <Card className={classes.card}>
                            <CardContent>
                            <TextField
                            onChange={this.handleTextField}
                            id="standard-name"
                            label="Name"
                            type="name"
                            fullWidth
                            className={classes.textField}
                            margin="normal"
                            error={this.state.error}
                            helperText={this.state.errorText}
                          />
    
                          <SingleSelect changed={this.handleChange} single={this.state.single}/>
                          <MultiSelect changed={this.handleChange} single={this.state.multi}/>  
                          <Button 
                          disabled={this.state.disabled} 
                          color={this.state.color} submit={this.nextStep}></Button>
                          </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(MaterialForm);
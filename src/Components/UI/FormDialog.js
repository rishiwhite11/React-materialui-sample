import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CompanyList from './CompanyList';
import moment from 'moment';

const styles = theme => ({
    date:{
        marginTop:'30px',
        display:'inlineBlock',
        marginRight:'25px'
    }
})

 class FormDialog extends React.Component {
  state = {
    open: false,
    currentJob:false,
    editable:false,
    company:'',
    startdate:'',
    enddate:'',
    datediff:{
      years:0,
      months:0
    }
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
      
    this.setState({ open: false, editable:false });
  };

  handleSubmit = () => {
      const startDate = moment(this.state.startdate);
      const endDate = moment(this.state.enddate);
      //console.log('Difference is ', endDate.diff(startDate, 'months'), 'months');
      const difference = endDate.diff(startDate, 'months');
      
      const diffInYears = (difference/12);
      const diffInMonths = difference % 12;
      const diffInYearsInNumbers = Math.floor(diffInYears);
      const profData = {
          company: this.state.company,
          startdate:this.state.startdate,
          enddate:this.state.enddate,
          datediff:{
            years:diffInYearsInNumbers,
            months: diffInMonths
          }
      }
      if(!this.state.editable){
        this.props.addProfessionalData(profData);
      }else{
        this.props.updateProfessionalData(profData);
      }
      
      
      console.log(difference);
      this.setState({ open: false });
      
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleData = name => event => {
    this.setState({[name]: event.target.value})
  }

  handleEdit = (data) => {
    this.setState({
      editable:true,
      open:true,
      company: data.company,
      startdate: data.startdate,
      enddate: data.enddate
    })
  }

  render() {
    const {classes} = this.props;
    if(this.state.editable){
      return (
        <div>
              <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                Add Professional Details
              </Button>
              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
              >
              
                <DialogTitle id="form-dialog-title">Add Company Details</DialogTitle>
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Company Name"
                    type="text"
                    value={this.state.company}
                    onChange={this.handleData('company')}
                    fullWidth
                  />
                  <FormControlLabel
                      control={
                      <Checkbox
                      checked={this.state.currentJob}
                      onChange={this.handleChange('currentJob')}  
                      value="currentJob"
                      color="primary"
                  />
                  
                }
                label="I currently work here"
              />
              <br/>
                  <TextField
                  id="date"
                  label="Start Date"
                  type="date"
                  className={classes.date}
                  value={this.state.startdate}
                  onChange={this.handleData('startdate')}
                  InputLabelProps={{
                  shrink: true,
                  }}
                  />
                  <TextField
                  id="date"
                  label="Start Date"
                  type="date"
                  className={classes.date}
                  value={this.state.enddate}
                  onChange={this.handleData('enddate')}
                  InputLabelProps={{
                  shrink: true,
                  }}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    Discard
                  </Button>
                  <Button onClick={this.handleUpdate} color="primary">
                    Update 
                  </Button>
                </DialogActions>
              </Dialog>
              <CompanyList companies={this.props.companies} clicked={(data) =>this.handleEdit(data)}/>
            </div>
          );
      
    }
    if(this.state.currentJob){
        return (
            <div>
              <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                Add Professional Details
              </Button>
              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
              >
              
                <DialogTitle id="form-dialog-title">Add Company Details</DialogTitle>
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Company Name"
                    type="text"
                    value={this.state.company}
                    onChange={this.handleData('company')}
                    fullWidth
                  />
                  <FormControlLabel
                      control={
                      <Checkbox
                      checked={this.state.currentJob}
                      onChange={this.handleChange('currentJob')}  
                      value="currentJob"
                      color="primary"
                  />
                  
                }
                label="I currently work here"
              />
              <br/>
                  <TextField
                  id="date"
                  label="Start Date"
                  type="date"
                  className={classes.date}
                  value={this.state.startdate}
                  onChange={this.handleData('startdate')}
                  InputLabelProps={{
                  shrink: true,
                  }}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleSubmit} color="primary">
                    Discard
                  </Button>
                  <Button onClick={this.handleSubmit} color="primary">
                    Add 
                  </Button>
                </DialogActions>
              </Dialog>
              <CompanyList companies={this.props.companies} clicked={(data) =>this.handleEdit(data)}/>
            </div>
          );
    }
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Add Professional Details
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          
        >
          <DialogTitle id="form-dialog-title">Add Company Details</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Company Name"
              type="text"
              value={this.state.company}
              onChange={this.handleData('company')}
              fullWidth
            />
            <FormControlLabel
                control={
                <Checkbox
                checked={this.state.currentJob}
                onChange={this.handleChange('currentJob')}  
                value="currentJob"
                color="primary"
            />
            
          }
          label="I currently work here"
        />
        <br/>
            <TextField
            id="date"
            label="Start Date"
            type="date"
            className={classes.date}
            value={this.state.startdate}
            error={true}
            onChange={this.handleData('startdate')}
            InputLabelProps={{
            shrink: true,
            }}
            />
            <TextField
            id="date"
            label="EndDate"
            type="date"
            className={classes.date}
            value={this.state.enddate}
            onChange={this.handleData('enddate')}
            InputLabelProps={{
            shrink: true,
            }}
          />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Discard
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Add 
            </Button>
          </DialogActions>
        </Dialog>
        <CompanyList companies={this.props.companies} clicked={this.handleEdit}/>
      </div>
    );
  }
}

export default withStyles(styles)(FormDialog)
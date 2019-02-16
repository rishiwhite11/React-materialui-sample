import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft:'-12px',
    height:'100px',
    marginRight:'50px',
    marginTop: '30px'
  },
  textField: {
    marginLeft: theme.spacing.unit*2,
    marginRight: theme.spacing.unit*2,
    width: 200,
  },
});

function DatePickers(props) {
  const { classes } = props;

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        fullWidth
        label={props.label}
        type="date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        value={props.birthday}
        onChange={(event) => props.changeDate(event)}
      />
    </form>
  );
}

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePickers);

import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



const styles = {
    card: {
      minWidth: 500,
      marginTop:'50px'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };


class CompanyList extends Component{

    editCompany = (company) => {
        console.log(company);
        this.props.clicked(company);
    }
    render(){
        const {classes} = this.props;
        return (
            <div>
                {
                    this.props.companies.map((company, id) => (
                        <Card key={id} className={classes.card}>
                            <CardContent onClick={() => this.editCompany(company)}>
                                <strong>{company.company}</strong>
                                <br/>
                                {company.datediff.years} years and {company.datediff.months} months
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
        )
    }
}

export default withStyles(styles)(CompanyList);
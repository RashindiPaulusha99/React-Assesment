import { Typography } from '@mui/material';
import { withStyles } from '@mui/styles';
import { Component } from 'react';
import { styleSheet } from './style';
import Grid from '@mui/material/Grid';
import GDSEButton from "../../../components/Home/Common/Button";

class DashBoard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { classes } = this.props
        return (
            <div className={classes.container}>
                <div className={classes.title__container}>
                    <Grid container spacing="{0.5}">
                        <Grid item lg={4} md={4} sm={4} xm={4} style={{paddingLeft: '3%', paddingTop: '1%'}}>
                            <GDSEButton variant="contained" label="DashBoard"/>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xm={4} style={{paddingTop: '1%'}}>
                            <div style={{display:'flex',justifyContent:'space-around'}}>
                                <GDSEButton variant="contained" label="Product" color="success"/>
                                <GDSEButton variant="contained" label="Cart" color="secondary"/>
                            </div>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xm={4} style={{display:'flex',justifyContent:'flex-end',paddingRight: '3%',paddingTop: '1%',color:'white'}} >
                            <Typography variant="h4" >Danu</Typography>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.form__container}>
                    <div className={classes.left__form}>
                        <div style={{width:'40%',height:'50%',backgroundColor:'gray'}}>
                            <Typography variant="h2"  style={{textAlign:'center'}}>Products</Typography>
                            <Typography variant="h2"  style={{textAlign:'center'}}>100</Typography>
                        </div>
                    </div>
                    <div className={classes.right__form}>
                        <div style={{width:'40%',height:'50%',backgroundColor:'gray'}}>
                            <Typography variant="h2" style={{textAlign:'center'}}>Cart</Typography>
                            <Typography variant="h2"  style={{textAlign:'center'}}>43</Typography>
                        </div>
                    </div>
                </div>
                <div className={classes.form__container1}>
                    <div style={{width:'20%',height:'50%',backgroundColor:'gray'}}>
                        <Typography variant="h2"  style={{textAlign:'center'}}>Users</Typography>
                        <Typography variant="h2"  style={{textAlign:'center'}}>100</Typography>
                    </div>
                </div>
            </div >
        )
    }
}
export default withStyles(styleSheet)(DashBoard)
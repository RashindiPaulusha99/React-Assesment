import { withStyles } from "@mui/styles";
import React, {Component, Fragment} from "react";
import { styleSheet } from "./style";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import GDSEButton from "../../../components/Home/Common/Button";

class UserRegister extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} =this.props;
        return(
            <Fragment>
                <Grid container spacing="12">
                    <Grid item lg={12} md={12} sm={12} xm={12} style={{paddingLeft:'5%',paddingTop:'2%',paddingBottom:'1%'}}>
                        <Typography variant="h3">User Registration</Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft:'5%'}}>
                        <TextField id="outlined-basic" label="First Name" variant="outlined" size="small" style={{width:'90%'}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" size="small" style={{width:'90%'}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft:'5%'}}>
                        <TextField id="outlined-basic" label="Email" variant="outlined" size="small" style={{width:'90%'}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField id="outlined-basic" label="User Name" variant="outlined" size="small" style={{width:'90%'}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft:'5%'}}>
                        <TextField id="outlined-basic" label="Password" variant="outlined" size="small" style={{width:'90%'}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField id="outlined-basic" label="City" variant="outlined" size="small" style={{width:'90%'}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft:'5%'}}>
                        <TextField id="outlined-basic" label="Street" variant="outlined" size="small" style={{width:'90%'}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField id="outlined-basic" label="Street NO" variant="outlined" size="small" style={{width:'90%'}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft:'5%'}}>
                        <TextField id="outlined-basic" label="Zip Code" variant="outlined" size="small" style={{width:'90%'}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField id="outlined-basic" label="Lat Value" variant="outlined" size="small" style={{width:'90%'}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft:'5%'}}>
                        <TextField id="outlined-basic" label="Long Value" variant="outlined" size="small" style={{width:'90%'}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField id="outlined-basic" label="Mobile NO" variant="outlined" size="small" style={{width:'90%'}}/>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xm={12} style={{display:'flex',justifyContent:'flex-end',paddingRight:'5%'}}>
                        <div style={{paddingRight:'1%'}}>
                            <GDSEButton variant="contained" label="Clear" color='error'/>
                        </div>
                       <div>
                           <GDSEButton variant="contained" label="Save"/>
                       </div>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xm={12}>

                    </Grid>
                </Grid>
            </Fragment>
        )
    }

}

export default withStyles(styleSheet)(UserRegister)
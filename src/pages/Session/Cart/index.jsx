import { withStyles } from "@mui/styles";
import React, {Component, Fragment} from "react";
import { styleSheet } from "./style";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import GDSEButton from "../../../components/Home/Common/Button";
import Autocomplete from "@mui/material/Autocomplete";

class Cart extends Component{
    constructor(props) {
        super(props);

        this.state = {
            top100Films: [
                {label: 'The Shawshank Redemption', year: 1994},
                {label: 'The Godfather', year: 1972},
                {label: 'The Godfather: Part II', year: 1974},
                {label: 'The Dark Knight', year: 2008},
                {label: '12 Angry Men', year: 1957},
                {label: "Schindler's List", year: 1993},
                {label: 'Pulp Fiction', year: 1994}
            ]
        }
    }

    render() {
        const {classes} =this.props;
        return(
            <Fragment>
                <Grid container spacing="12">
                    <Grid item lg={12} md={12} sm={12} xm={12} style={{paddingLeft:'5%',paddingTop:'2%',paddingBottom:'1%'}}>
                        <Typography variant="h3">Cart Manage</Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft:'5%'}}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={this.state.top100Films}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="User Names" />}
                            getOptionLable={
                                (option) => option.label
                            }
                            onChange={(e,value) =>{
                                console.log(value.label+" "+value.year);
                            }}
                            size="small"
                            style={{width:'90%'}}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField id="outlined-basic" type='date' variant="outlined" size="small" style={{width:'90%'}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft:'5%'}}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={this.state.top100Films}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Product Title" />}
                            getOptionLable={
                                (option) => option.label
                            }
                            onChange={(e,value) =>{
                                console.log(value.label+" "+value.year);
                            }}
                            size="small"
                            style={{width:'90%'}}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField id="outlined-basic" type='number' label="Qty" variant="outlined" size="small" style={{width:'90%'}}/>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xm={12} style={{display:'flex',justifyContent:'flex-end',paddingRight:'5%'}}>
                        <div style={{paddingRight:'1%'}}>
                            <GDSEButton variant="contained" label="Clear" color='error'/>
                        </div>
                        <div>
                            <GDSEButton variant="contained" label="Save"/>
                        </div>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }

}

export default withStyles(styleSheet)(Cart)
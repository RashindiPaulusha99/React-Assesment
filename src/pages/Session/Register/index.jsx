import {withStyles} from "@mui/styles";
import React, {Component, Fragment} from "react";
import {styleSheet} from "./style";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import GDSEButton from "../../../components/Home/Common/Button";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


class UserRegister extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formData:{
                firstName:"",
                lastName:"",
                email:"",
                username:"",
                password:"",
                city:"",
                street:"",
                streetNo:"",
                zipCode:"",
                latValue:"",
                longValue:"",
                mobileNo:""
            }
        }

        function createData(name, calories, fat, carbs, protein) {
            return { name, calories, fat, carbs, protein };
        }

        this.state={
            rows : [
                createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
                createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
                createData('Eclair', 262, 16.0, 24, 6.0),
                createData('Cupcake', 305, 3.7, 67, 4.3),
                createData('Gingerbread', 356, 16.0, 49, 3.9),
            ]
        }

    }

    render() {

        return (
            <Fragment>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                >
                    <Grid container spacing="12">
                        <Grid item lg={12} md={12} sm={12} xm={12}
                              style={{paddingLeft: '5%', paddingTop: '2%', paddingBottom: '1%'}}>
                            <Typography variant="h3">User Registration</Typography>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft: '5%'}}>
                            <TextValidator id="outlined-basic" label="First Name" variant="outlined" size="small"
                                       style={{width: '90%'}}
                                           validators={['required','isString']}
                                           value={this.state.formData.firstName}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.firstName=e.target.value
                                               this.setState(data);
                                           }}
                            />
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TextValidator id="outlined-basic" label="Last Name" variant="outlined" size="small"
                                       style={{width: '90%'}}
                                           validators={['required','isString']}
                                           value={this.state.formData.lastName}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.lastName=e.target.value
                                               this.setState(data);
                                           }}
                            />
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft: '5%'}}>
                            <TextValidator id="outlined-basic" label="Email" variant="outlined" size="small"
                                       style={{width: '90%'}}
                                           validators={['required','isEmail']}
                                           value={this.state.formData.email}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.email=e.target.value
                                               this.setState(data);
                                           }}
                            />
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TextValidator id="outlined-basic" label="User Name" variant="outlined" size="small"
                                       style={{width: '90%'}}
                                           validators={['required','isString']}
                                           value={this.state.formData.username}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.username=e.target.value
                                               this.setState(data);
                                           }}
                            />
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft: '5%'}}>
                            <TextValidator id="outlined-basic" label="Password" variant="outlined" size="small"
                                       style={{width: '90%'}}
                                           validators={['required','isPositive']}
                                           value={this.state.formData.password}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.password=e.target.value
                                               this.setState(data);
                                           }}
                            />
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TextValidator id="outlined-basic" label="City" variant="outlined" size="small"
                                       style={{width: '90%'}}
                                           validators={['required','isString']}
                                           value={this.state.formData.city}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.city=e.target.value
                                               this.setState(data);
                                           }}
                            />
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft: '5%'}}>
                            <TextValidator id="outlined-basic" label="Street" variant="outlined" size="small"
                                       style={{width: '90%'}}
                                           validators={['required','isString']}
                                           value={this.state.formData.street}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.street=e.target.value
                                               this.setState(data);
                                           }}
                            />
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TextValidator id="outlined-basic" label="Street NO" variant="outlined" size="small"
                                       style={{width: '90%'}}
                                           validators={['required','isPositive']}
                                           value={this.state.formData.streetNo}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.streetNo=e.target.value
                                               this.setState(data);
                                           }}
                            />
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft: '5%'}}>
                            <TextValidator id="outlined-basic" label="Zip Code" variant="outlined" size="small"
                                       style={{width: '90%'}}
                                           validators={['required','isPositive']}
                                           value={this.state.formData.zipCode}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.zipCode=e.target.value
                                               this.setState(data);
                                           }}
                            />
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TextValidator id="outlined-basic" label="Lat Value" variant="outlined" size="small"
                                       style={{width: '90%'}}
                                           validators={['required','isPositive']}
                                           value={this.state.formData.latValue}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.latValue=e.target.value
                                               this.setState(data);
                                           }}
                            />
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft: '5%'}}>
                            <TextValidator id="outlined-basic" label="Long Value" variant="outlined" size="small"
                                       style={{width: '90%'}}
                                           validators={['required','isPositive']}
                                           value={this.state.formData.longValue}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.longValue=e.target.value
                                               this.setState(data);
                                           }}
                            />
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TextValidator id="outlined-basic" label="Mobile NO" variant="outlined" size="small"
                                       style={{width: '90%'}}
                                           validators={['required','isPositive']}
                                           value={this.state.formData.mobileNo}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.mobileNo=e.target.value
                                               this.setState(data);
                                           }}
                            />
                            />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xm={12}
                              style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '5%'}}>
                            <div style={{paddingRight: '1%'}}>
                                <GDSEButton variant="contained" label="Clear" color='error'/>
                            </div>
                            <div>
                                <GDSEButton variant="contained" label="Save"/>
                            </div>
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xm={12}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Dessert (100g serving)</TableCell>
                                            <TableCell align="right">Calories</TableCell>
                                            <TableCell align="right">Fat(g)</TableCell>
                                            <TableCell align="right">Carbs(g)</TableCell>
                                            <TableCell align="right">Protein(g)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.rows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right">{row.calories}</TableCell>
                                                <TableCell align="right">{row.fat}</TableCell>
                                                <TableCell align="right">{row.carbs}</TableCell>
                                                <TableCell align="right">{row.protein}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </Fragment>
        )
    }

}

export default withStyles(styleSheet)(UserRegister)
import {withStyles} from "@mui/styles";
import React, {Component, Fragment} from "react";
import {styleSheet} from "./style";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import GDSEButton from "../../../components/Home/Common/Button";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import registerService from "../../../Services/registerService";
import GDSESnackBar from "../../../components/Home/Common/SnakBar";
import GDSEDataTable from "../../../components/Home/Common/Table";

class UserRegister extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formData:{
                email:"",
                username:"",
                password:"",
                name:{
                    firstName:"",
                    lastName:""
                },
                address:{
                    city:"",
                    street:"",
                    number:"",
                    zipCode:"",
                    geolocation:{
                        latValue:"",
                        longValue:""
                    }
                },
                phone:"",
            },

            open:false,
            message:'',
            severity:'',

            data:[],

            loaded: false,

            columns: [
                {
                    field: 'id',
                    headerName: 'User Id',
                    width: 70
                },
                {
                    field: 'firstName',
                    headerName: 'First Name',
                    width: 130
                },
                {
                    field: 'lastName',
                    headerName: 'Last Name',
                    width: 130
                },
                {
                    field: 'email',
                    headerName: 'Email',
                    width: 130
                },
                {
                    field: 'phone',
                    headerName: 'Phone Number',
                    width: 130
                },
                {
                    field: 'city',
                    headerName: 'City',
                    width: 130
                },
                {
                    field: 'street',
                    headerName: 'Street',
                    width: 130
                },
                {
                    field: 'number',
                    headerName: 'Street NO',
                    width: 130
                },
                {
                    field: 'zipCode',
                    headerName: 'Zip Code',
                    width: 130
                },
                {
                    field: 'latValue',
                    headerName: 'Lat Value',
                    width: 130
                },
                {
                    field: 'longValue',
                    headerName: 'Long Value',
                    width: 130
                }
            ]

        }
    }

    clearFields = ()=>{
        this.setState({
            formData:{
                email:"",
                username:"",
                password:"",
                name:{
                    firstName:"",
                    lastName:""
                },
                address:{
                    city:"",
                    street:"",
                    number:"",
                    zipCode:"",
                    geolocation:{
                        latValue:"",
                        longValue:""
                    }
                },
                phone:""
            }
        })
    }

    submitUser= async (e) =>{
        let formData = this.state.formData

        let res = await registerService.registerPost(formData);
        if(res.status === 200){
            this.setState({
                open:true,
                message:'User Saved!',
                severity:'success'
            });
            this.clearFields();
        }else {
            this.setState({
                open:true,
                message:'User Saved Unsuccessful!',
                severity:'error'
            });
        }
    };

    loadData =async (e)=>{
        let promise = await registerService.fetchUser();
        if(promise.status === 200){
            this.setState({
                loaded:true,
                data:promise.data
            })
        }
        console.log(this.state.data)
    }

    componentDidMount() {
        this.loadData();
    }

    render() {

        return (
            <Fragment>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.submitUser}
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
                                           value={this.state.formData.name.firstName}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.name.firstName=e.target.value
                                               this.setState(data);
                                           }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TextValidator id="outlined-basic" label="Last Name" variant="outlined" size="small"
                                       style={{width: '90%'}}
                                           validators={['required','isString']}
                                           value={this.state.formData.name.lastName}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.name.lastName=e.target.value
                                               this.setState(data);
                                           }}
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
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft: '5%'}}>
                            <TextValidator id="outlined-basic" type="password" label="Password" variant="outlined" size="small"
                                       style={{width: '90%'}}
                                           validators={['required','isString']}
                                           value={this.state.formData.password}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.password=e.target.value
                                               this.setState(data);
                                           }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TextValidator id="outlined-basic" label="City" variant="outlined" size="small"
                                       style={{width: '90%'}}
                                           validators={['required','isString']}
                                           value={this.state.formData.address.city}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.address.city=e.target.value
                                               this.setState(data);
                                           }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft: '5%'}}>
                            <TextValidator id="outlined-basic" label="Street" variant="outlined" size="small"
                                       style={{width: '90%'}}
                                           validators={['required','isString']}
                                           value={this.state.formData.address.street}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.address.street=e.target.value
                                               this.setState(data);
                                           }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TextValidator id="outlined-basic" label="Street NO" variant="outlined" size="small"
                                       style={{width: '90%'}}
                                           validators={['required','isPositive']}
                                           value={this.state.formData.address.number}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.address.number=e.target.value
                                               this.setState(data);
                                           }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft: '5%'}}>
                            <TextValidator id="outlined-basic" label="Zip Code" variant="outlined" size="small"
                                       style={{width: '90%'}}
                                           validators={['required','isPositive']}
                                           value={this.state.formData.address.zipCode}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.address.zipCode=e.target.value
                                               this.setState(data);
                                           }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TextValidator id="outlined-basic" label="Lat Value" variant="outlined" size="small"
                                       style={{width: '90%'}}
                                           validators={['required','isPositive']}
                                           value={this.state.formData.address.geolocation.latValue}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.address.geolocation.latValue=e.target.value
                                               this.setState(data);
                                           }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft: '5%'}}>
                            <TextValidator id="outlined-basic" label="Long Value" variant="outlined" size="small"
                                       style={{width: '90%'}}
                                           validators={['required','isPositive']}
                                           value={this.state.formData.address.geolocation.longValue}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.address.geolocation.longValue=e.target.value
                                               this.setState(data);
                                           }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TextValidator id="outlined-basic" label="Mobile NO" variant="outlined" size="small"
                                       style={{width: '90%'}}
                                           validators={['required','isPositive']}
                                           value={this.state.formData.phone}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.phone=e.target.value
                                               this.setState(data);
                                           }}
                            />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xm={12}
                              style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '5%'}}>
                            <div style={{paddingRight: '1%'}}>
                                <GDSEButton variant="contained" label="Clear" color='error' onClick={this.clearFields}/>
                            </div>
                            <div>
                                <GDSEButton variant="contained" label="Save" type="submit" />
                            </div>
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xm={12}>

                        </Grid>
                    </Grid>
                </ValidatorForm>
                <Grid container style={{ height: 400, width: '100%', marginTop: '50px' }}>
                    <GDSEDataTable
                        stickyHeader aria-label="sticky table"
                        columns={this.state.columns}
                        rows={this.state.data}
                        rowsPerPageOptions={5}
                        pageSize={5}
                        checkboxSelection={true}
                    />
                </Grid>
                <GDSESnackBar
                    open={this.state.open}
                    onClose={() => {
                        this.setState({ open: false })
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />
            </Fragment>
        )
    }

}

export default withStyles(styleSheet)(UserRegister)
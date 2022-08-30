import React, {Component, Fragment} from "react";
import { styleSheet } from "./style";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import GDSEButton from "../../../components/Home/Common/Button";
import GDSESnackBar from "../../../components/Home/Common/SnakBar";
import { withStyles } from "@mui/styles";
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import App from "../../../app/App";
import loginService from "../../../Services/loginService";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import Grid from "@mui/material/Grid";

class Login extends Component{
    constructor(props) {
        super(props);
        this.state={
            formData:{
                username:'',
                password:''
            },
            open:false,
            message:'',
            severity:''
        }
    }

    async checkValide(){
        /*console.log("username :"+this.state.username);
        console.log("password :"+this.state.password);
        console.log(this.state.formData);*/

        let formData = this.state.formData
        let response = await  loginService.loginPost(formData);
        if (response.status === 200){
            this.setState({
                open:true,
                message:'Post created successfully',
                severity:'success'
            })
            /*let res = await postService.fetchPost();
            console.log(res.data)
            console.log(JSON.stringify(res.data))
            if (res.data.username===this.state.formData.username && res.data.password===this.state.formData.password){
                console.log("match");
                this.setState({
                    open:true,
                    message:"User credential matching",
                    severity:'success'
                })

            }else {
                this.setState({
                    open:true,
                    message:"Check username and password",
                    severity:'error'
                })
            }*/
        }else {
            this.setState({
                open:true,
                message:'Post created unsuccessfully',
                severity:'error'
            })


        }
    }

    render() {
        const {classes} =this.props;
        return(
            <Fragment>
                <ValidatorForm ref="form" onSubmit={this.checkValide()} onError={errors => console.log(errors)}>
                    {/*<Grid container spacing="12">
                        <Grid item lg={12} md={12} sm={12} xm={12}
                              style={{paddingLeft: '5%', paddingTop: '2%', paddingBottom: '1%'}}>
                            <Typography variant="h3">Login</Typography>
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xm={12} style={{paddingLeft: '5%'}}>
                            <TextValidator id="outlined-basic" label="Username" variant="outlined" size="small"
                                           style={{width: '90%'}}
                                           validators={['required','isString']}
                                           value={this.state.formData.username}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.username=e.target.value
                                               this.setState({data})
                                           }}
                            />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xm={12} style={{paddingLeft: '5%'}}>
                            <TextValidator id="outlined-basic" label="Password" variant="outlined" size="small"
                                           style={{width: '90%'}}
                                           validators={['required','isString']}
                                           value={this.state.formData.password}
                                           onChange={(e)=>{
                                               let  data=this.state.formData
                                               data.password=e.target.value
                                               this.setState({data})
                                           }}
                            />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xm={12}
                              style={{display: 'flex', justifyContent: 'center', paddingRight: '5%'}}>
                            <div>
                                <GDSEButton variant="contained" label="Login" type="submit" />
                            </div>
                        </Grid>*/}

                    <div className={classes.container}>
                    <div className={classes.login_cover}>
                        <div className={classes.title_container}>
                            <Typography variant="h3">Login</Typography>
                        </div>
                        <div className={classes.form_container}>
                            {/*<TextField className={classes.outlined_basic} id="outlined-basic" label="Username"  variant="outlined"
                            onChange={(e)=>{
                                let data=this.state.formData
                                data.username=e.target.value
                                this.setState({data})
                            }}
                            />*/}
                            <TextValidator id="outlined-basic" label="Username" variant="outlined" size="large"
                                           style={{width: '100%'}}
                                           validators={['required','isString']}
                                           value={this.state.formData.username}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.username=e.target.value
                                               this.setState({data})
                                           }}
                            />
                            <TextField className={classes.outlined_basic} id="outlined-basic" label="Password" type="password" autoComplete="current-password" variant="outlined"
                                       onChange={(e)=>{
                                           let  data=this.state.formData
                                           data.password=e.target.value
                                           this.setState({data})
                                       }}
                            />
                        </div>
                        <div className={classes.btn_container}>
                            <GDSEButton variant="contained" label="login" className={classes.btn_login}
                            onClick={()=>{
                                this.checkValide()
                            }}
                            />
                        </div>
                        <div className={classes.create_account_container}>
                            <Typography variant="h7">Create new user account ?
                                <Link to="/register">
                                    <Button>Click here</Button>
                                </Link>
                            </Typography>
                        </div>
                    </div>
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
                </div>
                    {/*</Grid>*/}
                </ValidatorForm>
            </Fragment>
        )
    }

}

export default withStyles(styleSheet) (Login)
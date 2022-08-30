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
import registerService from "../../../Services/registerService";
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

            let res = await registerService.fetchUser();

            if(res.status === 200){
                for (let i = 0; i <res.data.length ; i++) {
                    if (res.data[i].username===this.state.formData.username && res.data[i].password===this.state.formData.password){
                        this.setState({
                            open:true,
                            message:"User credential matching",
                            severity:'success'
                        })
                        break;
                    }
                }
            }
        }else{
            this.setState({
                open:true,
                message:"User credential unmatching",
                severity:'error'
            })
        }
    }

    render() {
        const {classes} =this.props;
        return(
            <Fragment>
                <ValidatorForm ref="form">
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
                            <TextValidator className={classes.outlined_basic} id="outlined-basic" label="Username" variant="outlined" size="large"
                                           validators={['required','isString']}
                                           value={this.state.formData.username}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.username=e.target.value
                                               this.setState({data})
                                           }}
                            />
                            <TextValidator className={classes.outlined_basic} id="outlined-basic" label="Password" variant="outlined" size="large" type="password"
                                           validators={['required','isString']}
                                           value={this.state.formData.password}
                                           onChange={(e)=>{
                                               let  data=this.state.formData
                                               data.password=e.target.value
                                               this.setState({data})
                                           }}
                            />
                        </div>
                        <div className={classes.btn_container}>
                            {/*<Link to="/dash">*/}
                                <GDSEButton variant="contained" label="login" className={classes.btn_login}
                                            onClick={()=>{
                                                this.checkValide()
                                                }}/>
                           {/*</Link>*/}

                        </div>
                        <div className={classes.create_account_container}>
                            <Typography variant="h7">Create new user account ?
                                <Link to="/register">
                                    <Button>Click here</Button>
                                </Link>
                            </Typography>
                        </div>
                    </div>
                </div>
                </ValidatorForm>
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

export default withStyles(styleSheet) (Login)
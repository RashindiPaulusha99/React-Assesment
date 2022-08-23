import React,{ Component } from "react";
import { styleSheet } from "./style";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import GDSEButton from "../../../components/Home/Common/Button";
import GDSESnackBar from "../../../components/Home/Common/SnakBar";
import { withStyles } from "@mui/styles";
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import App from "../../../app/App";

class Login extends Component{
    constructor(props) {
        super(props);
        this.state={
            username:"admin",
            password:"admin",
            formData:{
                user_name:'',
                pw:''
            },
            open:false,
            message:'',
            severity:''
        }
    }

    checkValide(){
        console.log("username :"+this.state.username);
        console.log("password :"+this.state.password);
        console.log(this.state.formData);
        if (this.state.formData.user_name===this.state.username && this.state.formData.pw===this.state.password){
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
        }
    }

    render() {
        const {classes} =this.props;
        return(
            <div className={classes.container}>
                <div className={classes.login_cover}>
                    <div className={classes.title_container}>
                        <Typography variant="h3">Login</Typography>
                    </div>
                    <div className={classes.form_container}>
                        <TextField className={classes.outlined_basic} id="outlined-basic" label="username"  variant="outlined"
                        onChange={(e)=>{
                            let formdata=this.state.formData
                            formdata.user_name=e.target.value
                            this.setState({formdata})
                        }}
                        />
                        <TextField className={classes.outlined_basic} id="outlined-basic" label="Password" type="password" autoComplete="current-password" variant="outlined"
                                   onChange={(e)=>{
                                       let  formdata=this.state.formData
                                       formdata.pw=e.target.value
                                       this.setState({formdata})
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
        )
    }

}

export default withStyles(styleSheet) (Login)
import { withStyles } from "@mui/styles";
import React, {Component, Fragment} from "react";
import { styleSheet } from "./style";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import GDSEButton from "../../../components/Home/Common/Button";
import Autocomplete from "@mui/material/Autocomplete";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import productService from "../../../Services/productService";
import registerService from "../../../Services/registerService";
import cartService from "../../../Services/cartService";

class Cart extends Component{
    constructor(props) {
        super(props);

        this.state = {
            formData:{
                userId:'',
                date:'',
                products:[
                    {
                        productId: '',
                        quantity: ''
                    }
                ]
            },
            userNames: [
                'dgfg','fgfg','dggd'
            ],

            productTitles: ['dgfg','fgfg','dggd']
        }
    }

    loadUsernames = async (e)=>{
        let promise = await registerService.fetchUser();
        if(promise.status === 200){
            for (let i = 0; i < promise.data.length; i++) {
                //console.log(promise.data[i].username)
                this.setState({
                    userNames:promise.data[i].username
                })
            }
            //console.log(promise.data)
        }
    }

    loadTitles = async (e)=>{
        let promise = await productService.fetchProduct();
        if(promise.status === 200){
            for (let i = 0; i < promise.data.length; i++) {
                console.log(promise.data[1].title)
                this.setState({
                    productTitles:promise.data.title
                })
            }
            //console.log(promise.data)
        }
        console.log(this.state.productTitles)
    }

    componentDidMount() {
        //this.loadUsernames();
        //this.loadTitles();
    }

    submitCartDetails=async (e) =>{
        let formData = this.state.formData

        let res = await cartService.cartPost(formData);
        if(res.status === 200){
            this.setState({
                open:true,
                message:'Cart Added!',
                severity:'success'
            });
            this.clearFields();
        }else {
            this.setState({
                open:true,
                message:'Cart Added Unsuccessful!',
                severity:'error'
            });
        }
    };

    clearFields = ()=>{
        this.setState({
            formData:{
                userId:'',
                date:'',
                products:[
                    {
                        productId: '',
                        quantity: ''
                    }
                ]
            }
        })
    }

    render() {
        const {classes} =this.props;
        return(
            <Fragment>
                <ValidatorForm ref="form"  onSubmit={this.submitCartDetails} onError={errors => console.log(errors)}>
                    <Grid container spacing="12">
                    <Grid item lg={12} md={12} sm={12} xm={12} style={{paddingLeft:'5%',paddingTop:'2%',paddingBottom:'1%'}}>
                        <Typography variant="h3">Cart Manage</Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft:'5%'}}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={this.state.userNames}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="User Names" />}
                            getOptionLable={
                                (option) => option.label
                            }
                            onChange={(e,value) =>{
                                let data=this.state.formData
                                data.userId=e.target.value.label
                                this.setState(data);
                            }}
                            size="small"
                            style={{width:'90%'}}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextValidator id="outlined-basic" type='date' variant="outlined" size="small" style={{width:'90%'}}
                                       validators={['required','isString']}
                                       value={this.state.formData.date}
                                       onChange={(e)=>{
                                           let data=this.state.formData
                                           data.date=e.target.value
                                           this.setState(data);
                                       }}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft:'5%'}}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={this.state.productTitles}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Product Title" />}
                            getOptionLable={
                                (option) => option.label
                            }
                            onChange={(e,value) =>{
                                let data=this.state.formData
                                data.products.productId=e.target.value.label
                                this.setState(5);
                            }}
                            size="small"
                            style={{width:'90%'}}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextValidator id="outlined-basic" label="Qty" type='number' variant="outlined" size="small" style={{width:'90%'}}
                                       validators={['required','isPositive']}
                                       value={this.state.formData.products.quantity}
                                       onChange={(e)=>{
                                           let data=this.state.formData
                                           data.products.quantity=e.target.value
                                           this.setState(data);
                                       }}
                        />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xm={12} style={{display:'flex',justifyContent:'flex-end',paddingRight:'5%'}}>
                        <div style={{paddingRight:'1%'}}>
                            <GDSEButton variant="contained" label="Clear" color='error'
                                        onClick={()=>{
                                            this.clearFields()
                                        }}/>
                        </div>
                        <div>
                            <GDSEButton variant="contained" label="Save" type="submit"/>
                        </div>
                    </Grid>
                </Grid>
                </ValidatorForm>
            </Fragment>
        )
    }

}

export default withStyles(styleSheet)(Cart)
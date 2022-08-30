import { withStyles } from "@mui/styles";
import React, {Component, Fragment} from "react";
import { styleSheet } from "./style";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Autocomplete from '@mui/material/Autocomplete';
import GDSEButton from "../../../components/Home/Common/Button";
import Button from '@mui/material/Button'
import profile from "../../../assets/images/blank-profile-picture-973460_640.png";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import GDSESnackBar from "../../../components/Home/Common/SnakBar";
import productService from "../../../Services/productService";
import registerService from "../../../Services/registerService";

class Product extends Component{
    constructor(props) {
        super(props);

        this.state = {
            categories: [],

            loaded:false,

            formData:{
                title:'',
                price:'',
                description:'',
                image:'',
                category:''
            },

            open:false,
            message:'',
            severity:''

        }
    }

    submitProduct= async (e) =>{
        let formData = this.state.formData

        let res = await productService.productPost(formData);
        if(res.status === 200){
            this.setState({
                open:true,
                message:'Product Added!',
                severity:'success'
            });
            this.clearFields();
        }else {
            this.setState({
                open:true,
                message:'Product Added Unsuccessful!',
                severity:'error'
            });
        }
    };

    clearFields = ()=>{
        this.setState({
            formData:{
                title:'',
                price:'',
                category:'',
                description:'',
                image:''
            }
        })
    }

    loadCategory =async (e)=>{
        let promise = await productService.fetchCategory();
        if(promise.status === 200){
            this.setState({
                loaded:true,
                categories:promise.data
            })
        }
        console.log(this.state.categories)
    }

    componentDidMount() {
        this.loadCategory();
    }

    render() {
        const {classes} =this.props;
        return(
            <Fragment>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.submitProduct}
                    onError={errors => console.log(errors)}
                >
                    <Grid container spacing="12">
                        <Grid item lg={12} md={12} sm={12} xm={12} style={{paddingLeft:'5%',paddingTop:'2%',paddingBottom:'1%'}}>
                            <Typography variant="h3">Product Manage</Typography>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft:'5%'}}>
                            <TextValidator id="outlined-basic" label="Title" variant="outlined" size="small"
                                           style={{width: '90%'}}
                                           validators={['required','isString']}
                                           value={this.state.formData.title}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.title=e.target.value
                                               this.setState(data);
                                           }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TextValidator id="outlined-basic" label="Price" type='number' variant="outlined" size="small"
                                           style={{width: '90%'}}
                                           validators={['required','isPositive']}
                                           value={this.state.formData.price}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.price=e.target.value
                                               this.setState(data);
                                           }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft:'5%'}}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={this.state.categories}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Category" />}
                                getOptionLable={
                                    (option) => option.label
                                }
                                onChange={(e,value) =>{
                                    let data=this.state.formData
                                    data.category=e.target.value.label
                                    this.setState(data);
                                }}
                                size="small"
                                style={{width:'90%'}}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TextValidator id="outlined-basic" label="Description" variant="outlined" size="large"
                                           style={{width: '90%' ,height:'10%'}}
                                           validators={['required','isString']}
                                           value={this.state.formData.description}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.description=e.target.value
                                               this.setState(data);
                                           }}
                            />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xm={12} style={{paddingLeft:'5%',paddingTop:'6%'}}>
                            <div style={{border: '1px dashed grey',width:'10%',height:'79%'}}>
                                <img
                                    src={`${profile}?w=162&auto=format`}
                                    loading="lazy"
                                    style={{
                                        borderBottomLeftRadius: 4,
                                        borderBottomRightRadius: 4,
                                        display: 'block',
                                        width: '100%',
                                    }}
                                    value={this.state.formData.image}
                                    onChange={(e)=>{
                                        //set to box
                                    }}
                                />
                            </div>
                            <div style={{paddingLeft:'13%',paddingTop:'-2%'}} >
                                <Button variant="contained" component="label" >
                                    Choose Image
                                    <input hidden accept="image/*" multiple type="file"
                                           value={this.state.formData.image}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.image=e.target.value
                                               this.setState(data);
                                           }}
                                    />
                                </Button>
                            </div>
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xm={12} style={{display:'flex',justifyContent:'flex-end',paddingRight:'5%',paddingTop:'5%'}}>
                            <div style={{paddingRight:'1%'}}>
                                <GDSEButton variant="contained" label="Clear" color='error'
                                            onClick={()=>{
                                                this.clearFields()
                                            }}
                                />
                            </div>
                            <div>
                                <GDSEButton variant="contained" label="Save" type='submit'/>
                            </div>
                        </Grid>
                </Grid>
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

export default withStyles(styleSheet)(Product)
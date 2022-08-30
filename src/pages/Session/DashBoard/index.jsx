import { Typography } from '@mui/material';
import { withStyles } from '@mui/styles';
import React, { Component } from 'react';
import { styleSheet } from './style';
import Grid from '@mui/material/Grid';
import GDSEButton from "../../../components/Home/Common/Button";
import {Link} from "react-router-dom";
import registerService from "../../../Services/registerService";
import productService from "../../../Services/productService";
import cartService from "../../../Services/cartService";

class DashBoard extends Component {
    constructor(props) {
        super(props);

        this.state={
            products:[],
            carts:[],
            users:[]
        }
    }

    loadData =async (e)=>{
        let promise = await registerService.fetchUser();
        if(promise.status === 200){
            this.setState({
                users:promise.data
            })
        }

        let res = await productService.fetchProduct();
        if(res.status === 200){
            this.setState({
                products:res.data
            })
        }

        let response = await cartService.fetchCart();
        if(response.status === 200){
            this.setState({
                carts:response.data
            })
        }

    }

    componentDidMount() {
        this.loadData();
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
                                <Link to="/product">
                                    <GDSEButton variant="contained" label="Product" color="success"/>
                                </Link>
                                <Link to="/cart">
                                    <GDSEButton variant="contained" label="Cart" color="secondary"/>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xm={4} style={{display:'flex',justifyContent:'flex-end',paddingRight: '3%',paddingTop: '1%',color:'white'}} >
                            <Typography variant="h4" >Danu</Typography>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.form__container}>
                    <div className={classes.left__form}>
                        <div style={{width:'50%',height:'50%',backgroundColor:'gray'}}>
                            <Typography variant="h3"  style={{textAlign:'center'}}>Products</Typography>
                            <Typography variant="h2"  style={{textAlign:'center'}} >{this.state.products.length}</Typography>
                        </div>
                    </div>
                    <div className={classes.right__form}>
                        <div style={{width:'50%',height:'50%',backgroundColor:'gray'}}>
                            <Typography variant="h3" style={{textAlign:'center'}}>Cart</Typography>
                            <Typography variant="h2"  style={{textAlign:'center'}} >{this.state.carts.length}</Typography>
                        </div>
                    </div>
                </div>
                <div className={classes.form__container1}>
                    <div style={{width:'25%',height:'50%',backgroundColor:'gray'}}>
                        <Typography variant="h3"  style={{textAlign:'center'}}>Users</Typography>
                        <Typography variant="h2"  style={{textAlign:'center'}} >{this.state.users.length}</Typography>
                    </div>
                </div>
            </div >
        )
    }
}
export default withStyles(styleSheet)(DashBoard)
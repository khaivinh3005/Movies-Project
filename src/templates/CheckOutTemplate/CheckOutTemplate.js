import { Fragment } from "react";
import { Route } from 'react-router'
import { Redirect } from "react-router-dom";
import { USER_LOGIN } from "../../redux/actions/types/CarouselTypes";
import { useEffect } from "react";


const CheckOutTemplate = (props) => {
    const {Component,...restProps} = props;
    // if(!localStorage.getItem(USER_LOGIN)){
    //     return <Redirect to='/login' />
    // }
    useEffect(() => {
        window.scrollTo(0,0)
     })
    return <Route {...restProps} render = {(propsRoute) => {
        return (
            <Fragment>
                <Component {...propsRoute}/>
            </Fragment>
        )
    }} />
}

export default CheckOutTemplate;
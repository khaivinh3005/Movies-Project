import { Fragment } from "react";
import { Route } from 'react-router'
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";
import { useEffect } from "react";



export const HomeTemplate = (props) => {
    window.scrollTo(0,0)
    const {Component,...restProps} = props;
    
    return <Route {...restProps} render = {(propsRoute) => {
        //props.location , props.history,props.match
        return (
            <Fragment>
                <Header {...propsRoute}/>
                <Component {...propsRoute}/>
                <Footer {...propsRoute}/>
            </Fragment>
        )
    }} />
}
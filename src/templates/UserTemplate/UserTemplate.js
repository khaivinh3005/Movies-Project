import { Fragment } from "react";
import { Route } from 'react-router'
import { useEffect } from "react";


export const UserTemplate = (props) => {
    window.scrollTo(0,0)
    const {Component,...restProps} = props;
    return <Route {...restProps} render = {(propsRoute) => {
        return (
            <Fragment>
                <Component {...propsRoute}/>
            </Fragment>
        )
    }} />
}

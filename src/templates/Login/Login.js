import { Fragment } from "react";
import { Route } from 'react-router'



export const LoginTemplate = (props) => {
    const {Component,...restProps} = props;
    return <Route {...restProps} render = {(propsRoute) => {
        return (
            <Fragment>
                <Component {...propsRoute}/>
            </Fragment>
        )
    }} />
}
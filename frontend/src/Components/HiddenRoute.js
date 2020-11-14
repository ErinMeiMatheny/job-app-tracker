import React from 'react'
import { Route, Redirect} from "react-router-dom"
import { useAuth } from "../Context/AuthContext"

export default function HiddenRoute({component: Components, ...rest}) {

const {currentUser} = useAuth()

    return (
        <Route>
            {...rest}
            render={props => {
               return currentUser ? <Components {...props} /> :<Redirect to="/login"></Redirect>
            }}
        </Route>
    )
}



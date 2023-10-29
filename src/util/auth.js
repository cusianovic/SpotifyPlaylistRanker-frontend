import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function AuthWrapper(props){
    const {isAuthenticated, isLoading } = useAuth0();
    const navigate = useNavigate();

    React.useEffect(()=>{
        if(!isAuthenticated){
            navigate("/login", {replace: true});
        }
    }, isLoading)


    if(isLoading){
        return(
            <div>
                loading
            </div>
        )
    }

    return(
        isAuthenticated && (props.component)
    )




}

export default AuthWrapper;
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function AuthWrapper(props){
    const {getAccessTokenSilently, isAuthenticated, isLoading } = useAuth0();
    getAccessTokenSilently();
    const navigate = useNavigate();

    React.useEffect(()=>{
        console.log(isAuthenticated);
        if(!isAuthenticated){
            navigate("/login", {replace: true});
        }
    }, [])


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
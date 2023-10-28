import React from 'react';


function AuthWrapper(...props){
    const {isAuthenticated, isLoading } = useAuth0();

    if(isLoading){
        return(
            <div>
                loading
            </div>
        )
    }
    return(
        isAuthenticated && (props)
        )
}
import React from 'react'
import { Button } from '@mui/material'
import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth'



const SignIn = () => {
    
    const auth = getAuth()

    const SignInWithGoogle = () => {
        
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
    }
    
    return (
        <div className='signin-container' style={{ height:"inherit", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "100px" }}>
            <Button onClick={SignInWithGoogle}  variant="contained">Sign In With Google</Button>

        </div>
    )
}



export default SignIn

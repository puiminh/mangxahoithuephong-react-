import React from 'react'

const Sign_In = () => {

    const click = ()=>{
            localStorage.setItem("accessToken", false);
            console.log("Clicked!!")
    }
    return (
        <div onClick={click}>
            <h1>Sign In</h1>
        </div>
    )
}

export default Sign_In

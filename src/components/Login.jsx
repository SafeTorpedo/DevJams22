import React from "react";
import Header from "./Header";
import Loginform from "./Loginform";

const Login = () => {
    return (
        <>
            <Header
                heading="Sign in to your account"
                paragraph="Don't have an account?"
                linkName="Sign up"
                link="/signup"
            />
            <Loginform />
        </>
    );
};

export default Login;

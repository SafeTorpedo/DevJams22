import React from "react";
import Header from "./Header";

const Login = () => {
    return (
        <>
            <Header
                heading="Sign in to your account"
                paragraph="Don't have an account?"
                linkName="Sign up"
                link="/signup"
            />
        </>
    );
};

export default Login;

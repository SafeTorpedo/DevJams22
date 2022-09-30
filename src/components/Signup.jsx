import React from "react";
import Header from "./Header";
import Signupform from "./Signupform";

const Signup = () => {
    return (
        <>
            <Header
                heading="Create an account"
                paragraph="Already have an account?"
                linkName="Sign in"
                link="/"
            ></Header>
            <Signupform />
        </>
    );
};

export default Signup;

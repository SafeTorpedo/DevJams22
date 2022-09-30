import { React, useState } from "react";
import { loginFields } from "./formFields";
import Input from "./Input";
import LoginFormAction from "./LoginFormAction";
import LoginFormExtra from "./LoginFormExtra";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const Loginform = () => {
    const [loginState, setLoginState] = useState(fieldsState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginState({ ...loginState, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        authenticateUser();
    };

    //Login API
    const authenticateUser = () => {};

    return (
        <form className="mt-8 space-y-6">
            <div className="-space-y-px">
                {fields.map((field) => (
                    <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={loginState[field.id]}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                        placeholder={field.placeholder}
                    />
                ))}
            </div>

            <LoginFormExtra />
            <LoginFormAction handleSubmit={handleSubmit} text="Sign in" />
        </form>
    );
};

export default Loginform;

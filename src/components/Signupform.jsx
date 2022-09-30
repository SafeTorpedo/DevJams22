import { React, useState } from "react";
import { signupFields } from "./formFields";
import Input from "./Input";
import LoginFormAction from "./LoginFormAction";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

const Signupform = () => {
    const [signupState, setSignupState] = useState(fieldsState);

    const handleChange = (e) =>
        setSignupState({ ...signupState, [e.target.id]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(signupState);
        createAccount();
    };

    //Signup API
    const createAccount = () => {};

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
                {fields.map((field) => (
                    <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={signupState[field.id]}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                        placeholder={field.placeholder}
                    />
                ))}
                <LoginFormAction handleSubmit={handleSubmit} text="Sign up" />
            </div>
        </form>
    );
};

export default Signupform;

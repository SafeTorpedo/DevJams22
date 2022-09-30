import React from "react";
import { Link } from "react-router-dom";
import login from "../assets/login-icon.jpg";

const Header = ({ heading, paragraph, linkName, link = "#" }) => {
    return (
        <div className="mb-10">
            <div className="flex justify-center">
                <img className="h-14 w-20" src={login} alt="" />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="mt-2 text-center text-md text-black font-bold">
                {paragraph}{" "}
                <Link
                    to={link}
                    className="font-medium text-purple-600 hover:text-purple-500"
                >
                    {linkName}
                </Link>
            </p>
        </div>
    );
};

export default Header;

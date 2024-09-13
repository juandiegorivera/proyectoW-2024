import React, { useState } from "react";

const SignUpForm = () => {
    conts [ userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({ ...userData, [name]: value});
    };

} 
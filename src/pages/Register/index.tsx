import React from "react";

import SignUpForm from "../../components/SignUpForm";
import logo from "../../images/logo-EloGroup-branco.png";

import {Container} from "./style";

const Register = () => {
    return (
        <Container>
            <img src={logo} alt="EloGroup"/>
            <SignUpForm/>
        </Container>
    );
}

export default Register;

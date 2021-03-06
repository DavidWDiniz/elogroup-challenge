import React from "react";

import SignUpForm from "../../components/SignUpForm";
import logo from "../../images/logo-EloGroup-branco.png";

import {Container} from "./style";

const Register = () => {
    return (
        <Container>
            <SignUpForm/>
            <img src={logo} alt="EloGroup"/>
        </Container>
    );
}

export default Register;

import React from "react";

import logo from "../../images/logo-EloGroup-branco.png";

import {Container} from "./style";
import SignUpForm from "../../components/SignUpForm";

const Register = () => {
    return (
        <Container>
            <img src={logo} alt="EloGroup" />
            <SignUpForm />
        </Container>
    );
}

export default Register;

import React from "react";

import SignInForm from "../../components/SignInForm";
import logo from "../../images/logo-EloGroup-branco.png";

import {Container} from "./style";


const Login = () => {
    return (
        <Container>
            <img src={logo} alt="EloGroup"/>
            <SignInForm/>
        </Container>
    );
}

export default Login;

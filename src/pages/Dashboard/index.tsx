import React from "react";

import {Container} from "./style";
import {Button} from "../../components/SignUpForm/style";

import Grid from "../../components/Grid";
import logo from "../../images/logo-EloGroup-branco.png";

const Dashboard = () => {
    return (
        <Container>
            <img src={logo} alt="EloGroup" />
            <h1>Painel de Leads</h1>
            <Button>Novo Lead (+)</Button>
            <Grid />
        </Container>
    );
}

export default Dashboard;

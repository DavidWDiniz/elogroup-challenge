import React, {useCallback} from "react";

import {Container} from "./style";
import {Button} from "../../components/SignUpForm/style";

import Grid from "../../components/Grid";
import logo from "../../images/logo-EloGroup-branco.png";
import { useHistory } from "react-router-dom";
import {ToastContainer} from "react-toastify";

const Dashboard = () => {
    const history = useHistory();

    const handleClickToCreateLead = useCallback(() => {
        history.push("/create-lead");
    }, [history]);

    return (
        <>
            <Container>
                <img src={logo} alt="EloGroup" />
                <h1>Painel de Leads</h1>
                <Button onClick={handleClickToCreateLead}>Novo Lead (+)</Button>
                <Grid />
            </Container>
            <ToastContainer position="top-right" />
        </>
    );
}

export default Dashboard;

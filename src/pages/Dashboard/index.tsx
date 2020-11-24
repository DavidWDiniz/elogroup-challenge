import React, {useCallback} from "react";
import 'react-toastify/dist/ReactToastify.css';
import {useHistory} from "react-router-dom";
import {ToastContainer} from "react-toastify";

import Grid from "../../components/Grid";
import logo from "../../images/logo-EloGroup-branco.png";

import {Button, Container} from "./style";

const Dashboard = () => {
    const history = useHistory();

    const handleClickToCreateLead = useCallback(() => {
        history.push("/create-lead");
    }, [history]);

    return (
        <>
            <Container>
                <img src={logo} alt="EloGroup"/>
                <h1>Painel de Leads</h1>
                <Button onClick={handleClickToCreateLead}>Novo Lead (+)</Button>
                <Grid/>
            </Container>
            <ToastContainer position="top-right"/>
        </>
    );
}

export default Dashboard;

import React, {useCallback} from "react";
import 'react-toastify/dist/ReactToastify.css';
import {Link, useHistory} from "react-router-dom";
import {ToastContainer} from "react-toastify";

import Grid from "../../components/Grid";
import logo from "../../images/logo-EloGroup-branco.png";

import {Button, Container} from "./style";

const Dashboard = () => {
    const history = useHistory();

    const handleClickToCreateLead = useCallback(() => {
        history.push("/create-lead");
    }, [history]);

    const removeLocalStorage = useCallback(() => {
        localStorage.removeItem("@User");
        localStorage.removeItem("@Leads");
        localStorage.removeItem("@Logged");
    }, []);

    return (
        <>
            <Container>
                <img src={logo} alt="EloGroup"/>
                <h1>Painel de Leads</h1>
                <Link to="/" onClick={removeLocalStorage}>Sair</Link>
                <Button onClick={handleClickToCreateLead}>Novo Lead (+)</Button>
                <Grid/>
            </Container>
            <ToastContainer position="top-right"/>
        </>
    );
}

export default Dashboard;

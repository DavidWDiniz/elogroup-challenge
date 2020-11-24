import React from "react";
import CreateLeadForm from "../../components/CreateLeadForm";

import logo from "../../images/logo-EloGroup-branco.png";

import {Container} from "./style";

const CreateLead = () => {
    return (
        <Container>
            <div>
                <img src={logo} alt="EloGroup" />
                <h1>Novo Lead</h1>
            </div>
            <CreateLeadForm />
        </Container>
    );
}

export default CreateLead;

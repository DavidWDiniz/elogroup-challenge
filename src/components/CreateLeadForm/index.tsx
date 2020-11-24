import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {AllCheckerCheckbox, Checkbox, CheckboxGroup} from "@createnl/grouped-checkboxes";
import {toast} from "react-toastify";
import {useHistory} from "react-router-dom";

import {schemaCreateLead} from "../../services/FormValidation";
import {leads} from "../../services/GridData";
import {Leads} from "../Grid";

import {Button, Form} from "./style";

interface Inputs {
    name: string;
    phone: number;
    email: string;
    items: string;
}

const CreateLeadForm = () => {

    const history = useHistory();
    const [items, setItems] = useState<Leads[]>(leads);
    const {register, handleSubmit, errors} = useForm<Inputs>({
        resolver: yupResolver(schemaCreateLead)
    });

    useEffect(() => {
        const data = localStorage.getItem("@Leads");
        if (data) {
            setItems(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("@Leads", JSON.stringify(items))
    }, [items]);

    const onSubmit = (data: Inputs) => {
        setItems(prevState => [
            ...prevState,
            {
                id: prevState.length + 1,
                name: `Item ${prevState.length + 1}`,
                value: data.name,
                email: data.email,
                opportunities: data.items,
                phone: data.phone,
                column: "Cliente em Potencial"
            }]);

        localStorage.setItem("@Leads", JSON.stringify(items));
        history.push("/dashboard");
        toast.success("Lead incluído com sucesso!");
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nome *</label>
                <input
                    name="name"
                    ref={register}
                />
                <p>{errors.name?.message}</p>
            </div>
            <div>
                <label>Telefone *</label>
                <input
                    type="number"
                    name="phone"
                    ref={register}
                />
                <p>{errors.phone?.message}</p>
            </div>
            <div>
                <label>Email *</label>
                <input
                    name="email"
                    ref={register}
                />
                <p>{errors.email?.message}</p>
            </div>
            <label>Oportunidades *</label>
            <CheckboxGroup>
                <label>
                    <AllCheckerCheckbox name="items" ref={register} value=""/>
                    Selecionar todas
                </label>
                <label>
                    <Checkbox name="items" ref={register} value="RPA"/>
                    RPA
                </label>
                <label>
                    <Checkbox name="items" ref={register} value="Produto"/>
                    Produto Digital
                </label>
                <label>
                    <Checkbox name="items" ref={register} value="Analytics"/>
                    Analytics
                </label>
                <label>
                    <Checkbox name="items" ref={register} value="BMP"/>
                    BMP
                </label>
            </CheckboxGroup>
            <p>{errors.items?.message}</p>
            <Button type="submit">Salvar</Button>
        </Form>
    );
}

export default CreateLeadForm;

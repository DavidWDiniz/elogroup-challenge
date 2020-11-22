import React from "react";
import {Button, Form} from "./style";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import { AllCheckerCheckbox, Checkbox, CheckboxGroup } from '@createnl/grouped-checkboxes';

import {schemaCreateLead} from "../../services/FormValidation";

interface Inputs {
    name: string;
    phone: number;
    email: string;
    items: string;
}

const CreateLeadForm = () => {
    const {register, handleSubmit, errors} = useForm<Inputs>({
        resolver: yupResolver(schemaCreateLead)
    });

    const onSubmit = (data: Inputs) => {
        console.log(data);
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
                <AllCheckerCheckbox />
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
                <p>{errors.items?.message}</p>
            </CheckboxGroup>

            <Button type="submit">Salvar</Button>
        </Form>
    );
}

export default CreateLeadForm;

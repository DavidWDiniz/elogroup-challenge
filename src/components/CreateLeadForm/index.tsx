import React from "react";
import {Button, Form} from "./style";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

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

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        console.log('change', event.target.value);
    };

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
            <input
                name="items"
                type="checkbox"
                onChange={onChange}
                ref={register({ required: 'Please select fruits' })}
            />
            <label>
                <input
                    name="items"
                    type="checkbox"
                    value="RPA"
                    ref={register({ required: 'Please select fruits' })}
                />
                RPA
            </label>
            <label>
                <input
                    name="items"
                    type="checkbox"
                    value="Produto Digital"
                    ref={register({ required: 'Please select fruits' })}
                />
                Produto Digital
            </label>
            <label>
                <input
                    name="items"
                    type="checkbox"
                    value="Analytics"
                    ref={register({ required: 'Please select fruits' })}
                />
                Analytics
            </label>
            <label>
                <input
                    name="items"
                    type="checkbox"
                    value="BPM"
                    ref={register({ required: 'Please select fruits' })}
                />
                BPM
            </label>

            {errors.items && <p>{errors.items.message}</p>}

            <Button type="submit">Registrar</Button>
        </Form>
    );
}

export default CreateLeadForm;

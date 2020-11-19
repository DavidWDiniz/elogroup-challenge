import React, {FormEvent, useCallback} from "react";
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import logo from "../../images/logo-EloGroup-branco.png";
import {schema} from "../../services/FormValidation";
import {Container, Button} from "./style";

const Register = () => {
    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = useCallback((event: FormEvent) => {
        console.log(event);
    }, []);

    return (
        <Container>
            <img src={logo} alt="EloGroup" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Usuário *</label>
                <input
                    name="user"
                    ref={register({required: true})}
                />
                <p>{errors.user?.message}</p>
                <label>Password *</label>
                <input
                    type="password"
                    name="password"
                    ref={register({required: true})}
                />
                <p>{errors.password?.message}</p>
                <label>Confirmação password *</label>
                <input
                    name="password_confirmation"
                    type="password"
                    ref={register({required: true})}
                />
                <p>{errors.password_confirmation?.message}</p>

                <Button type="submit">Registrar</Button>
            </form>
        </Container>
    );
}

export default Register;

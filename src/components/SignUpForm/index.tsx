import React, {useCallback} from "react";
import {Button, Form} from "./style";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

import {schemaSignUp} from "../../services/FormValidation";

const SignUpForm = () => {
    const history = useHistory();

    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schemaSignUp)
    });

    const onSubmit = useCallback(() => {
        history.push("/dashboard");
    }, [history]);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Usuário *</label>
                <input
                    name="user"
                    ref={register}
                />
                <p>{errors.user?.message}</p>
            </div>
            <div>
                <label>Password *</label>
                <input
                    type="password"
                    name="password"
                    ref={register}
                />
                <p>{errors.password?.message}</p>
            </div>
            <div>
                <label>Confirmação password *</label>
                <input
                    name="password_confirmation"
                    type="password"
                    ref={register}
                />
                <p>{errors.password_confirmation?.message}</p>
            </div>

            <Button type="submit">Registrar</Button>
        </Form>
    );
}

export default SignUpForm;

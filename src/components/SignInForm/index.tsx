import React, {useCallback} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Link, useHistory} from "react-router-dom";

import {schemaSignIn} from "../../services/FormValidation";

import {Button, Form} from "./style";
import {toast, ToastContainer} from "react-toastify";

const SignInForm = () => {
    const history = useHistory();

    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schemaSignIn)
    });

    const onSubmit = useCallback((data) => {

        const localData = localStorage.getItem("@User");
        if (localData) {
            const account = JSON.parse(localData);
            if (account.user === data.user && account.password === data.password) {
                localStorage.setItem("@Logged", JSON.stringify(data));
                history.push("/dashboard");
            } else {
                toast.error("Usuário ou senha incorreto!");
            }
        } else {
            toast.error("Usuário não cadastrado!");
        }

    }, [history]);

    return (
        <>
            <div>
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

                    <Button type="submit">Entrar</Button>
                </Form>
                <Link to="/register">Registrar</Link>
            </div>
            <ToastContainer position="top-right"/>
        </>
    );
}

export default SignInForm;

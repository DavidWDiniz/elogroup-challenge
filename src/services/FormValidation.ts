import * as Yup from "yup";

export const schemaSignUp = Yup.object().shape({
    user: Yup.string().required("Usuário obrigatório."),
    password: Yup.string()
        .required("Senha obrigatória.")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Necessário ao menos 8 caracteres, com letra, número e caracter especial."
        ),
    password_confirmation: Yup.string()
        .required("Confirmação de senha obrigatória.")
        .oneOf([Yup.ref("password")], "confirmação de senha incorreta."),
});

export const schemaCreateLead = Yup.object().shape({
    name: Yup.string().required("Nome obrigatório."),
    phone: Yup.string().required("Telefone obrigatório"),
    email: Yup.string().required("email obrigatório").email("Insira um email válido"),
    items: Yup.string().required("Selecione ao menos um item.")
});

import { Form, FormikHelpers, FormikProvider, useFormik } from "formik";
import { useState } from "react";
import { useActions } from "../../../hooks/useActions";
import InputGroup from "../../common/InputGroup";
import { IErrorFields } from "../types";
import { IRegisterModel } from "./types";
import { RegisterSchema } from "./validation";

const RegisterPage = () => {
    const initialState: IRegisterModel = {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    }

    const [error, setError] = useState<string>("");

    const { UserRegister } = useActions();

    const onHandleSubmit = async (
        values: IRegisterModel,
        { setFieldError }: FormikHelpers<IRegisterModel>
    ) => {
        try {
            let fields: IErrorFields = { setFieldError: setFieldError, setError: setError };

            UserRegister(values, fields);
        } catch (ex) {
        }
    };

    const formik = useFormik({
        initialValues: initialState,
        validationSchema: RegisterSchema,
        onSubmit: onHandleSubmit
    });

    const { errors, touched, handleChange, handleSubmit } = formik;

    return (
        <>
            <div className="container">
                <div className="row text-center">
                    <div className="">
                        <img className="invert-25" src="/public/storage-logo.svg" alt="Logotype" />
                    </div>
                    {
                        error ?
                            <div className="text-center alert-danger m-1 p-2 rounded shadow-lg">
                                {error}
                            </div> : null
                    }
                    <FormikProvider value={formik}>
                        <Form onSubmit={handleSubmit}>
                            <div className="mt-2">
                                <p className="m-0">Create a username</p>
                            </div>
                            <InputGroup
                                className="input w-300px"
                                label=""
                                field="cv-name"
                                error={errors.name}
                                touched={touched.name}
                                onChange={handleChange} />
                            <div className="mt-2">
                                <p className="m-0">Email</p>
                            </div>
                            <InputGroup
                                className="input w-300px"
                                label=""
                                field="cv-email"
                                error={errors.email}
                                touched={touched.email}
                                onChange={handleChange}
                            />
                            <div className="mt-2">
                                <p className="m-0">Create a password</p>
                            </div>
                            <InputGroup
                                className="input w-300px"
                                label=""
                                field="password"
                                type="password"
                                error={errors.password}
                                touched={touched.password}
                                onChange={handleChange} />
                            <div className="mt-2">
                                <p className="m-0">Confirm the password</p>
                            </div>
                            <div className="mt-2">
                                <InputGroup
                                    className="input w-300px"
                                    label=""
                                    field="password_confirmation"
                                    type="password"
                                    error={errors.password_confirmation}
                                    touched={touched.password_confirmation}
                                    onChange={handleChange} />
                            </div>
                        </Form>
                    </FormikProvider>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;
import { useState } from "react";
// import { Link } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import InputGroup from "../../common/InputGroup";
import { ILoginModel } from "./types";
import { useFormik, Form, FormikProvider, FormikHelpers } from "formik";
import { LoginSchema } from './validation';
import { IErrorFields } from "../types";

const LoginPage = () => {
    const initialState: ILoginModel = {
        email: "",
        password: "",
    }

    const [error, setError] = useState<string>("");

    const { UserLogin } = useActions();

    const onHandleSubmit = async (
        values: ILoginModel,
        { setFieldError }: FormikHelpers<ILoginModel>
    ) => {
        try {
            let fields: IErrorFields = { setFieldError: setFieldError, setError: setError };

            UserLogin(values, fields);
        } catch (ex) {
        };
    }

    const formik = useFormik({
        initialValues: initialState,
        validationSchema: LoginSchema,
        onSubmit: onHandleSubmit
    });

    const { errors, touched, handleChange, handleSubmit } = formik;

    return (
        <>
            <div className="container">
                <div className="row text-center">
                    <div className="invert-25">
                        <img src="/public/storage-logo.svg" alt="Logotype" />
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
                                <p className="m-0">Email</p>
                            </div>
                            <InputGroup
                                className="input w-300px "
                                label=""
                                field="cv-email"
                                error={errors.email}
                                touched={touched.email}
                                onChange={handleChange}
                            />
                            <div className="mt-2">
                                <p className="m-0">Password</p>
                            </div>

                            <InputGroup
                                className="input w-300px "
                                label=""
                                field="password"
                                type="password"
                                error={errors.password}
                                touched={touched.password}
                                onChange={handleChange}
                            />
                        </Form>
                    </FormikProvider>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
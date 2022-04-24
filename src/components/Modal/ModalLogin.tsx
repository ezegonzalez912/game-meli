import { ErrorMessage, Field, Form, Formik, FormikErrors, FormikValues } from "formik";
import React, { useContext, useState } from "react";
import { firebaseContext } from "../../context/firebase/firebaseContext";
import { modalContext } from "../../context/modal/modalContext";
import { GoogleIcon } from "../../assets/GoogleIcon";

interface Values {
    email: string;
    password: string;
}

export const ModalLogin: React.FC = () => {

    const handleModalDialogClick = (e: React.MouseEvent<HTMLInputElement>) => {
        e.stopPropagation();
    }

    const { loginUser, loginUserWithGoogle } = useContext(firebaseContext);
    const { handleOpenModal, setModal } = useContext(modalContext);

    const [errors, setErrors] = useState<String>("")

    const handleLogin = (values: Values, actions: any) => {
        setErrors("")
        loginUser(values.email, values.password)
        .then(() => {
            actions.setSubmitting(false);
            actions.resetForm();
            handleOpenModal(false)
            setErrors("")
        })
        .catch((err:string) => {
            actions.setSubmitting(false);
            setErrors(err)
        })
    }

    const handleLoginWithGoogle = () => {
        setErrors("")
        loginUserWithGoogle()
        .then(() => {
            handleOpenModal(false)
            setErrors("")
        })
        .catch((res) => {
            setErrors(res)
        })
    }

    const validateForm = (values: Values) => {
        const errors: FormikErrors<FormikValues> = {};
        if (!values.email) {
            errors.email = 'Name is required';
        }
        if (!values.password) {
            errors.password = 'Name is required';
        }
        return errors;
    }

    return (
        <div className="modal-container" onClick={handleModalDialogClick}>
            <Formik
                initialValues={{email: "", password: ""}}
                validate={validateForm}
                onSubmit={handleLogin}
                >
                {({isSubmitting}) => (
                    <>
                        <Form>
                            <h1>Login to view content</h1>
                            <Field name="email" placeholder="Email"/>
                            <ErrorMessage name="email" component="p"/>
                            <Field name="password" placeholder="Password" type="Password"/>
                            <ErrorMessage name="password" component="p"/>
                            <button type="submit" disabled={isSubmitting}>Login</button>
                        </Form>
                        <button className="googleBTN" disabled={isSubmitting} onClick={handleLoginWithGoogle}>
                            <GoogleIcon />
                            Sing up with Google
                        </button>
                        <h6 onClick={() => setModal("register")}>I do not have an account</h6>
                    </>
                )}
            </Formik>
            <p>{errors}</p>
        </div>
    )
}

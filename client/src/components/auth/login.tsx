import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./login.css";
import { auth } from "../../logic/users.ts";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="form-container">
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={Yup.object({
          username: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          password: Yup.string()
            .min(6, "Must be at least 6 characters")
            .required("Required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          if (await auth(values)) navigate("/control");

          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <div className="form-field">
              <label htmlFor="username">Username</label>
              <Field name="username" type="text" className="input" />
              <ErrorMessage
                name="username"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-field">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" className="input" />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>

            <button
              type="submit"
              className={`submit-btn ${isSubmitting ? "submitting" : ""}`}
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;

import React from 'react';
import * as Ons from 'react-onsenui';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { authenticate } from 'utils';

const InnerForm = props => {
  return (
    <Formik
      initialValues={{ adminCode: '', username: '', password: '' }}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await authenticate(values);
          props.toggle();
        } catch (err) {
          props.toggle(err.toString());
          // console.log(err);
        }
        setSubmitting(false);
      }}
      validationSchema={Yup.object().shape({
        adminCode: Yup.string().required('Required'),
        username: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
      })}
    >
      {props => {
        const { values, isSubmitting, handleChange, handleSubmit } = props;
        const { adminCode, username, password } = values;
        return (
          <Form onSubmit={handleSubmit}>
            <p>
              <Ons.Input
                name="adminCode"
                type="text"
                placeholder="Admin code"
                modifier="underbar"
                float
                autoComplete="off"
                onChange={handleChange}
                value={adminCode}
                style={{ width: '100%' }}
              />
            </p>
            <p>
              <Ons.Input
                name="username"
                type="text"
                placeholder="Username"
                modifier="underbar"
                float
                autoComplete="off"
                onChange={handleChange}
                value={username}
                style={{ width: '100%' }}
              />
            </p>
            <p>
              <Ons.Input
                name="password"
                type="password"
                placeholder="Password"
                modifier="underbar"
                float
                autoComplete="off"
                onChange={handleChange}
                value={password}
                style={{ width: '100%' }}
              />
            </p>
            <p>
              <Ons.Button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                modifier="cta"
              >
                Sign in
              </Ons.Button>
            </p>
          </Form>
        );
      }}
    </Formik>
  );
};

export default InnerForm;

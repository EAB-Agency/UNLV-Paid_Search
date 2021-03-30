import React from 'react';
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Input } from 'components/common';
import { navigate } from 'gatsby-link';
import { Error, Center, InputField } from './styles';

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

export default () => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      success: false,
    }}
    validationSchema={Yup.object().shape({
      name: Yup.string().required('Full name field is required'),
      email: Yup.string()
        .email('Invalid email')
        .required('Email field is required'),
    })}
    onSubmit={(values, actions) => {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'unlv-contact', ...values }),
      })
        .then(() => {
          // alert('Success');
          actions.setFieldValue('success', true);
          actions.resetForm();
          navigate('continue');
        })
        .catch(() => {
          actions.setSubmitting(false);
          actions.setFieldValue('success', false);
          alert('Error');
        })
        .finally(() => actions.setSubmitting(false));
    }}
  >
    {({ values, touched, errors, isSubmitting }) => (
      <Form name="unlv-contact" data-netlify>
        <InputField className="question">
          <label htmlFor="name">Name</label>
          <div className="input">
            <Input
              as={FastField}
              type="text"
              name="name"
              component="input"
              aria-label="name"
              placeholder="Full name*"
              error={touched.name && errors.name}
            />
            <ErrorMessage component={Error} name="name" />
          </div>
        </InputField>
        <InputField className="question">
          <label htmlFor="email">Email</label>
          <div className="input">
            <Input
              id="email"
              aria-label="email"
              component="input"
              as={FastField}
              type="email"
              name="email"
              placeholder="Email*"
              error={touched.email && errors.email}
            />
            <ErrorMessage component={Error} name="email" />
          </div>
        </InputField>

        {/* {values.name && values.email && values.message && (
          <InputField>
            <FastField
              component={Recaptcha}
              // sitekey={process.env.GATSBY_PORTFOLIO_RECAPTCHA_KEY}
              name="recaptcha"
              onChange={value => setFieldValue('recaptcha', value)}
            />
            <ErrorMessage component={Error} name="recaptcha" />
          </InputField>
        )} */}
        {values.success && (
          <InputField>
            <Center>
              <h4>Thank you for submitting your infomation! We will be in touch with you soon!</h4>
            </Center>
          </InputField>
        )}
        <Center>
          <Button secondary type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Center>
      </Form>
    )}
  </Formik>
);

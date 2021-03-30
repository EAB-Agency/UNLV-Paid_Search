/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import styled from 'styled-components';
import { Formik, Form, FastField, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import { Button, StyledInput, StyledSelect } from 'components/common';
import { navigate } from 'gatsby-link';
import { Error, Center, InputField } from './styles';

const TextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  const { id, name } = props;
  return (
    <>
      <label htmlFor={id || name}>
        {label}
        <StyledInput className="text-input" {...field} {...props} />
      </label>
      <ErrorMessage component={Error} name={name} />

      {/* {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null} */}
    </>
  );
};

// Styled components ....

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: '❌ ';
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const MultiSelect = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  const { id, name } = props;
  return (
    <>
      <StyledLabel htmlFor={id || name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? <StyledErrorMessage>{meta.error}</StyledErrorMessage> : null}
    </>
  );
};

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

export default () => (
  <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      success: false,
    }}
    validationSchema={Yup.object().shape({
      // name: Yup.string().required('Full name field is required'),
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
          navigate('/continue');
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
        <TextInput
          label="First Name"
          name="firstName"
          type="text"
          placeholder=""
          aria-label="name"
          error={touched.firstName && errors.firstName}
        />
        <TextInput
          label="Last Name"
          name="lastName"
          type="text"
          placeholder=""
          aria-label="name"
          error={touched.lastName && errors.lastName}
        />

        <TextInput
          label="Email Address"
          id="email"
          aria-label="email"
          component="input"
          as={FastField}
          type="email"
          name="email"
          placeholder="Email*"
          error={touched.email && errors.email}
        />
        <MultiSelect label="High School Graduation Year" name="gradYear">
          <option value="">Select a graduation year</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </MultiSelect>
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

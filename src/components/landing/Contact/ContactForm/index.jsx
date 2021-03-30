/* eslint-disable jsx-a11y/label-has-for */
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import { DatePicker } from 'formik-material-ui-pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

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
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        dobMonth: '',
        dobyear: '',
        dobDay: '',
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
            type="email"
            name="email"
            placeholder="Email*"
            error={touched.email && errors.email}
          />
          <TextInput
            label="Phone Number"
            id="phoneNumber"
            aria-label="Phone Number"
            component="input"
            type="numeric"
            name="phoneNumber"
            placeholder="Phone Number"
            error={touched.phoneNumber && errors.phoneNumber}
          />
          <MultiSelect label="High School Graduation Year" name="gradYear">
            <option value="">Select a graduation year</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </MultiSelect>
          <TextInput
            label="Date of Birth - Day"
            id="dobDay"
            aria-label="Date of Birth - Day"
            component="input"
            type="numeric"
            name="dobDay"
          />
          <MultiSelect label="Date of Birth - Month" name="dobMonth">
            <option value="">---</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </MultiSelect>
          <MultiSelect label="Date of Birth - Year" name="dobYear">
            <option value="">---</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
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
  </MuiPickersUtilsProvider>
);

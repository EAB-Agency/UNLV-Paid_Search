/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import styled from 'styled-components';
import { Formik, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';

import { Button, StyledInput, StyledSelect } from 'components/common';
import { Error, Center, InputField } from './styles';
import { Debug } from './Debug';

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
      {/* {meta.touched && meta.error ? <StyledErrorMessage>{meta.error}</StyledErrorMessage> : null} */}
      <ErrorMessage component={Error} name={name} />
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
      // firstName: '',
      // lastName: '',
      // email: '',
      // phoneNumber: '',
      // dobMonth: '',
      // dobYear: '',
      // dobDay: '',
      success: false,
    }}
    validationSchema={Yup.object().shape({
      firstName: Yup.string().required('Your first name is required'),
      lastName: Yup.string().required('Your last name is required'),
      email: Yup.string()
        .email('Invalid email')
        .required('Your email address is required'),
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
          // alert(JSON.stringify(values, null, 2));
          // alert(encode({ 'form-name': 'unlv-contact', ...values }));
          // actions.resetForm();
          // navigate('/continue');
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
      <Form name="paid-search-landing-unlv" className="form" data-netlify>
        {!values.success && (
          <div className="form-fields">
            <div className="contact-header">
              <h1>Learn More About Degree Options and Financial Aid </h1>
              <p>Share your information and we’ll be in touch soon.</p>
            </div>

            <TextInput
              label="First Name"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              aria-label="firstName"
              error={touched.firstName && errors.firstName}
            />
            <TextInput
              label="Last Name"
              name="lastName"
              id="lastName"
              type="text"
              placeholder="Last Name"
              aria-label="lastName"
              error={touched.lastName && errors.lastName}
            />
            <TextInput
              label="Email Address"
              id="email"
              aria-label="email"
              component="input"
              type="email"
              name="email"
              placeholder="Email Address"
              error={touched.email && errors.email}
            />
            <div className="gradyear-question">
              <label htmlFor="gradYear">High School Graduation Year</label>
              <div className="grad-select">
                <MultiSelect
                  label="Grad Year"
                  as="select"
                  id="gradYear"
                  value={values.gradYear}
                  name="gradYear"
                  error={touched.gradYear && errors.gradYear}
                >
                  <option value="">Select a graduation year</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                </MultiSelect>
              </div>
            </div>
            <TextInput
              label="Phone Number"
              id="phoneNumber"
              aria-label="Phone Number"
              component="input"
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              error={touched.phoneNumber && errors.phoneNumber}
            />
            <div className="dob-question">
              <label>Date of Birth</label>
              <div className="dob-selects">
                <MultiSelect label="Date of Birth - Day" id="dobDay" name="dobDay" as="select" value={values.dobDay}>
                  <option value="">---</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </MultiSelect>
                <MultiSelect label="Date of Birth - Month" id="dobMonth" name="dobMonth" value={values.dobMonth}>
                  <option value="">---</option>
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </MultiSelect>
                <MultiSelect label="Date of Birth - Year" id="dobYear" name="dobYear" value={values.dobYear}>
                  <option value="">---</option>
                  <option value="2002">2002</option>
                  <option value="2003">2003</option>
                  <option value="2004">2004</option>
                  <option value="2005">2005</option>
                  <option value="2006">2006</option>
                  <option value="2007">2007</option>
                </MultiSelect>
              </div>
            </div>

            {/* <Debug /> */}
            <Center className="type-button">
              <Button secondary type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Center>
          </div>
        )}
        {values.success && (
          <InputField>
            <Center>
              <h4>Thank you for submitting your infomation! We will be in touch with you soon!</h4>
            </Center>
          </InputField>
        )}
      </Form>
    )}
  </Formik>
);

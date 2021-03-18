import { SEO } from 'components/common';
import React from 'react';

export default () => (
  <div id="mauticform_wrapper_paidsearchcontactformv1" className="mauticform_wrapper">
    <form
      autoComplete="false"
      method="post"
      action="https://university-of-nevada-las-vegas.contact-server.com/form/submit?formId=1"
      id="mauticform_paidsearchcontactformv1"
      data-mautic-form="paidsearchcontactformv1"
      encType="multipart/form-data"
    >
      <div className="mauticform-error" id="mauticform_paidsearchcontactformv1_error" />
      <div className="mauticform-message" id="mauticform_paidsearchcontactformv1_message" />
      <div className="mauticform-innerform">
        <div className="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page={1}>
          <div
            id="mauticform_paidsearchcontactformv1_first_name"
            className="mauticform-row mauticform-text mauticform-field-1"
          >
            <label
              id="mauticform_label_paidsearchcontactformv1_first_name"
              htmlFor="mauticform_input_paidsearchcontactformv1_first_name"
              className="mauticform-label"
            >
              <input
                id="mauticform_input_paidsearchcontactformv1_first_name"
                name="mauticform[first_name]"
                defaultValue=""
                className="mauticform-input"
                type="text"
              />
              First Name
            </label>
            <span className="mauticform-errormsg" style={{ display: 'none' }} />
          </div>
          <div
            id="mauticform_paidsearchcontactformv1_last_name"
            className="mauticform-row mauticform-text mauticform-field-2"
          >
            <label
              id="mauticform_label_paidsearchcontactformv1_last_name"
              htmlFor="mauticform_input_paidsearchcontactformv1_last_name"
              className="mauticform-label"
            >
              <input
                id="mauticform_input_paidsearchcontactformv1_last_name"
                name="mauticform[last_name]"
                defaultValue=""
                className="mauticform-input"
                type="text"
              />
              Last Name
            </label>
            <span className="mauticform-errormsg" style={{ display: 'none' }} />
          </div>
          <div
            id="mauticform_paidsearchcontactformv1_preferred_email_address"
            data-validate="preferred_email_address"
            data-validation-type="email"
            className="mauticform-row mauticform-email mauticform-field-3 mauticform-required"
          >
            <label
              id="mauticform_label_paidsearchcontactformv1_preferred_email_address"
              htmlFor="mauticform_input_paidsearchcontactformv1_preferred_email_address"
              className="mauticform-label"
            >
              <input
                id="mauticform_input_paidsearchcontactformv1_preferred_email_address"
                name="mauticform[preferred_email_address]"
                defaultValue=""
                className="mauticform-input"
                type="email"
              />
              Preferred Email Address
            </label>
            <span className="mauticform-errormsg" style={{ display: 'none' }}>
              This is required.
            </span>
          </div>
          <div
            id="mauticform_paidsearchcontactformv1_date_of_birth"
            className="mauticform-row mauticform-date mauticform-field-4"
          >
            <label
              id="mauticform_label_paidsearchcontactformv1_date_of_birth"
              htmlFor="mauticform_input_paidsearchcontactformv1_date_of_birth"
              className="mauticform-label"
            >
              <input
                id="mauticform_input_paidsearchcontactformv1_date_of_birth"
                name="mauticform[date_of_birth]"
                className="mauticform-input"
                type="date"
              />
              Date of Birth
            </label>
            <span className="mauticform-errormsg" style={{ display: 'none' }} />
          </div>
          <div
            id="mauticform_paidsearchcontactformv1_high_school_graduation_ye"
            className="mauticform-row mauticform-select mauticform-field-5"
          >
            <label
              id="mauticform_label_paidsearchcontactformv1_high_school_graduation_ye"
              htmlFor="mauticform_input_paidsearchcontactformv1_high_school_graduation_ye"
              className="mauticform-label"
            >
              High School Graduation Year
              <select
                id="mauticform_input_paidsearchcontactformv1_high_school_graduation_ye"
                name="mauticform[high_school_graduation_ye]"
                defaultValue=""
                className="mauticform-selectbox"
              >
                <option aria-label="Graduation Years" />
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
              </select>
            </label>
            <span className="mauticform-errormsg" style={{ display: 'none' }} />
          </div>
          <input
            id="mauticform_input_paidsearchcontactformv1_campaign"
            name="mauticform[campaign]"
            defaultValue="unlv_paid_search_2021"
            className="mauticform-hidden"
            type="hidden"
          />
          <div
            id="mauticform_paidsearchcontactformv1_submit"
            className="mauticform-row mauticform-button-wrapper mauticform-field-6"
          >
            <button
              type="submit"
              name="mauticform[submit]"
              id="mauticform_input_paidsearchcontactformv1_submit"
              className="mauticform-button btn btn-default"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <input type="hidden" name="mauticform[formId]" id="mauticform_paidsearchcontactformv1_id" defaultValue={1} />
      <input type="hidden" name="mauticform[return]" id="mauticform_paidsearchcontactformv1_return" defaultValue />
      <input
        type="hidden"
        name="mauticform[formName]"
        id="mauticform_paidsearchcontactformv1_name"
        defaultValue="paidsearchcontactformv1"
      />
    </form>
  </div>
);

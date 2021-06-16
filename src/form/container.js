import React from 'react';
import { reduxForm } from 'redux-form';
import FormComponent from './component';




export const FormContainer = ({ handleSubmit }) => {
  const submitForm = (formValues) => {
    console.log('submitting Form: ', formValues);
  }
  return (
    <FormComponent
      onSubmit={submitForm}
      handleSubmit={handleSubmit}
    />
  );
}
const formConfiguration = {
  form: 'form'
}
export default reduxForm(formConfiguration)(FormContainer);
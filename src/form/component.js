import React from 'react';
import { Field } from 'redux-form';

export const FormComponent = ({ handleSubmit, onSubmit }) => {
  return (
    <div className="container">
      <h1>Redux Form</h1>
      <div className ="col-md-3 offset-md-4 mt-5 justify-content-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="firstName"
          component="input"
          placeholder="firstName"
          className="form-control mt-2"
          type="text"
        />
        <Field
          name="LastName"
          component="input"
          placeholder="LastName"
          className="form-control mt-2"
          type="text"
        />
         <Field
          name="password"
          component="input"
          placeholder="password"
          className="form-control mt-2"
          type="number"
        />
            
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default FormComponent;
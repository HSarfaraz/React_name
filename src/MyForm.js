import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      
      <TextField {...input} type={type} placeholder={label} id="outlined-basic" variant="outlined" />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    <li>
      <Button variant="contained" color="primary" type="button" onClick={() => fields.push({})}>
        Add Member
      </Button>
      {submitFailed && error && <span>{error}</span>}
    </li><br />
    {fields.map((member, index) => (
      <li key={index}>
        <Button variant="contained" color="primary" type="button" onClick={() => fields.remove(index)}>
          Remove Member
        </Button>
        <h4>Member #{index + 1}</h4>
        <Field
          name={`${member}.firstName`}
          type="text"
          component={renderField}
          label="First Name"
        />
        <Field
          name={`${member}.lastName`}
          type="text"
          component={renderField}
          label="Last Name"
        />
      </li>
    ))}
  </ul>
);

const MyForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FieldArray name="members" component={renderMembers} />
      <div>
        <Button variant="contained" color="primary" type="submit" disabled={submitting}>
          Submit
        </Button>
        <Button variant="contained" color="primary" type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
        <br />
      </div>
    </form>
  );
};

export default reduxForm({
  form: "MyForm"
})(MyForm);

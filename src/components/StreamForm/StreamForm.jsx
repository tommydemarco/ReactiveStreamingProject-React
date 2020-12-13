import React from 'react';
import { withRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form';
import Button from '../Button/Button'
import './StreamForm.scss'

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div>
          <div>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta, required, type }) => {
    return (
      <div className="streamform__group">
        <label className="streamform__label">{label}</label>
        <input className="streamform__input" {...input} autoComplete="off" required={required} type={type}/>
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmitForm(formValues, this.props.history)
  };

  render() {
    return (
      <form
        className="streamform"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field 
          name="name" 
          initialValue={this.props.initialValues ? this.props.initialValues.streamName : ''}
          component={this.renderInput} 
          label="Enter Title" 
          type="text" 
          required/>
        <Field
          initialValue={this.props.initialValues ? this.props.initialValues.streamDescription : ''}
          name="description"
          component={this.renderInput}
          label="Enter Description"
          type="text"
          required
        />
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'streamForm',
})(withRouter(StreamForm));



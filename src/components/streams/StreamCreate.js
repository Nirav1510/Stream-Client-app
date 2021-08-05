import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input, lable }) {
    return (
      <div className="field">
        <label>{lable}</label>
        <input {...input} />
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field name="title" component={this.renderInput} lable="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          lable="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

export default reduxForm({ form: "streamCreate" })(StreamCreate);

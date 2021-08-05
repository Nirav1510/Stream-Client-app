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

  render() {
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} lable="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          lable="Enter Description"
        />
      </form>
    );
  }
}

export default reduxForm({ form: "streamCreate" })(StreamCreate);

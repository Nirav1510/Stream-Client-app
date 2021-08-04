import React, { Component } from "react";

export default class GoogleAuth extends Component {
  state = { isSingedIn: null };

  //for 1 time rendering
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "1031496197276-nuuh6fjbt1nn71fu9sr6pslpj8kg2thp.apps.googleusercontent.com",
          scope: "eamil",
        })
        .then(() => {
          // to check whether user is logged in or not?
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSingedIn: this.auth.isSingedIn.get() });
          this.auth.isSingedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSingedIn: this.auth.isSingedIn.get() });
  };

  render() {
    return <div>GoogleAuth</div>;
  }
}

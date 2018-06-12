import React, { Component } from "react";

class App extends Component {
  submit = e => {
    e.preventDefault();
    console.log("---- is form valid:", this.validate());
  };

  validate = () => {
    const formLength = this.el.length;
    let result = false;
    if (this.el.checkValidity() === false) {
      for (let i = 0; i < formLength; i++) {
        const elem = this.el[i];
        const errorLabel = elem.parentNode.querySelector(".error");
        if (errorLabel && elem.nodeName.toLowerCase() === "input") {
          if (!elem.validity.valid) {
            errorLabel.textContent = elem.validationMessage;
          } else {
            errorLabel.textContent = "";
          }
        }
      }
      result = false;
    } else {
      for (let i = 0; i < formLength; i++) {
        const elem = this.el[i];
        const errorLabel = elem.parentNode.querySelector(".error");
        if (errorLabel && elem.nodeName.toLowerCase() !== "button") {
          errorLabel.textContent = "";
        }
      }
      result = true;
    }
    return result;
  };

  render() {
    return (
      <div className="App">
        Form Validation Test
        <form onSubmit={this.submit} noValidate ref={el => (this.el = el)}>
          <div>
            <input
              type="text"
              required
              data-testid="input1"
              minLength={3}
              maxLength={4}
            />
            <div
              className="error"
              style={{ color: "red" }}
              data-testid="error1"
            />
          </div>
          <button type="submit" data-testid="btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;

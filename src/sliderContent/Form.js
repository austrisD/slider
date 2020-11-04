import React from "react";
import "../style.scss";

const Form = () => {
  return (
    <div className="form">
      <h2>Registration Form</h2>
      <form className="form__container">
        <label className="form__name">
          NAME
          <input type="text" name="Name" />
        </label>
        <label className="form__surname">
          SURNAME
          <input type="text" name="Surname" />
        </label>
        <label className="form__email">
          EMAIL
          <input type="email" name="Email" />
        </label>
        <label className="form__birthday">
          BIRTHDAY
          <input type="date" name="Birthday"></input>
        </label>
        <label className="form__password1">
          PASSWORD
          <input type="password" name="Password" />
        </label>
        <label className="form__password2">
          REPEAT PASSWORD
          <input type="password" name="Password repeat" />
        </label>
        <div className="form__submit">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default Form;

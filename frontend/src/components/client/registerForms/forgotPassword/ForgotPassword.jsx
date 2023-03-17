import React, { useState } from "react";

export const ForgotPassword = () => {
  const [mail, setMail] = useState({mail: ""});

  const handleChange = (event) => {
    setMail(() => {
      return {
        [event.target.name]: event.target.value,
      };
    });
  };

  const sendMail = () => {
    console.log("se mando el mail")
  }

  return (
    <div>
      <label htmlFor="mail">Inserte su mail
        <input
          onChange={handleChange}
          id="mail"
          name="mail"
          value={mail.mail}
          type="text"
          placeholder="Escriba su mail"
          required
        />
      </label>
      <button onClick={sendMail}>Enviar</button>
    </div>
  );
};

import React from "react";

export const SendCode = () => {
  const [code, setCode] = useState("");

  const handleChange = (event) => {
    setCode(() => {
      return {
        [event.target.name]: event.target.value,
      };
    });
  };

  console.log(code);

  return (
    <div>
      <p>Enviamos a tu email un código numerico de 6 dígitos</p>
      <label htmlFor="code">
        {" "}
        Inserte su mail
        <input
          onChange={handleChange}
          id="code"
          name="code"
          value={logIn.code}
          type="text"
          placeholder="Escriba el código"
          required
        />
      </label>
    </div>
  );
};

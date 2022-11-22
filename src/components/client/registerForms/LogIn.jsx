import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { db } from "../../db/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import { useContext } from "react";
import { clientContext } from "../context/ClientContext";

export const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { logged, setLogged } = useContext(clientContext);

  const userExists = (res, data) => {
    const dbResponse = res.docs.map((doc) => doc.data());
    const userName = dbResponse[0].user;
    const password = dbResponse[0].password;

    if (userName === data.user && password === data.password) {
      setLogged(true);
    } else {
      toast.error("El usuario o la contraseña son incorrectos");
    }
  };

  const logUser = (data) => {
    const usersCollection = collection(db, "users");
    const filter = query(usersCollection, where("user", "==", data.user));
    const request = getDocs(filter);
    request
      .then((res) => userExists(res, data))
      .catch((err) => toast.error(`hubo un error. Err: ${err}`));
    setLogged((logged) => !logged);
  };

  return (
    <div>
      <div>
        <h1>Ingresa al panel de control de tu tiendita</h1>
      </div>
      <form onSubmit={handleSubmit(logUser)}>
        <input
          placeholder="Nombre de usuario"
          type="text"
          {...register("user", { required: true })}
        />
        {errors.password && <p>Este campo es requerido</p>}

        <input
          placeholder="Contraseña"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && <p>Este campo es requerido</p>}

        <input type="submit" />
      </form>
      <p>
        ¿No tenés cuenta? <Link to={"/registrarse"}>Creala!</Link>
      </p>
      <p>
        <Link to="/recuperarContrasena">Olvidé mi contraseña</Link>
      </p>
      <ToastContainer />
    </div>
  );
};

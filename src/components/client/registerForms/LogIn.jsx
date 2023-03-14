import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { db } from "../../db/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import { useContext } from "react";
import { LoggedContext } from "../../../context/loggedContext";
import { NavbarClient } from "../NavbarClient"

export const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setLogged } = useContext(LoggedContext);
  console.log("adminContext", LoggedContext)
  const navigate = useNavigate();

  const logUser = async (data) => {
    try {
      const usersCollection = await collection(db, "users");
      const filter = await query(usersCollection, where("user", "==", data.user));
      const request = await getDocs(filter);
      userExists(request, data);
    }
    catch (err) {
      toast.error("No se encontró un usuario con ese nombre");
    }
  };

  const userExists = (request, data) => {
    const dbResponse = request.docs.map((doc) => doc.data());
    const userName = dbResponse[0].user;
    const password = dbResponse[0].password;

    if (userName === data.user && password === data.password) {
      setLogged(true);
      navigate("/client/admin");
    } else {
      toast.error("El usuario o la contraseña son incorrectos");
    }
  };

  return (
    <div>
      <NavbarClient />
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
        ¿No tenés cuenta? <Link to={"/client/registrarse"}>Creala!</Link>
      </p>
      <p>
        <Link to="/client/recuperarContrasena">Olvidé mi contraseña</Link>
      </p>
      <ToastContainer />
    </div>
  );
};

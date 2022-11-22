import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../db/firebase";
import { doc, setDoc, collection, query, where, getDocs } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { clientContext } from "../context/ClientContext";

export const CreateUser = () => {
  const { logged, setLogged } = useContext(clientContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ reValidateMode: "onSubmit" });

  const userExist = data => {
    const usersCollection = collection(db, "users");
    const filter = query(
      usersCollection,
      where("user", "==", data.user),
      where("email", "==", data.email)
    );
    const request = getDocs(filter);
    request
      .then((res) => res.docs.map((doc) => console.log(doc.data())))
      .catch(() => toast.error("Hubo un error. Por favot intente de nuevo"))
  };

  const sendData = (data) => {
    if (data.password === data.repeatedPassword) {
      //envia la info y crea el obj
      const request = setDoc(doc(db, "users", data.user), {
        ...data,
        products: [],
      });
      request
        .then(toast.success("Se creó su usuario con éxito"))
        .then(reset())
        .then(setLogged((logged) => !logged))
        .catch((err) =>
          toast.error(`Hubo un problema al crear tu usuario. Error: ${err}`)
        );
    }
  };

  const hola = data => {
    if (userExist(data)){
      console.log("hola")
    } else {
      console.log("no llego nada")
    }
  }

  return (
    <div>
      <div>
        <h1>Crea tu usuario en La tiendita!</h1>
      </div>
      <form onSubmit={handleSubmit(hola)}>
        <input
          {...register("email", { required: true })}
          placeholder="Escribe tu mail"
          type="email"
        />
        {errors?.email && <p>Este campo es requerido</p>}
        <input
          {...register("user", { required: true })}
          placeholder="Crea tu usuario"
          type="text"
        />
        {errors?.user && <p>Este campo es requerido</p>}
        <input
          {...register("password", { required: true, minLength: 6 })}
          placeholder="Crea tu contraseña"
          type="password"
        />
        {errors?.password && <p>Este campo es requerido</p>}
        <input
          {...register("repeatedPassword", { required: true, minLength: 6 })}
          placeholder="Repite tu contraseña"
          type="password"
        />
        {errors?.repeatedPassword && <p>Este campo es requerido</p>}
        <button type="submit">Registrarme</button>
      </form>
      <div>
        <p>
          ¿Ya tenés una cuenta? <Link to={"/login"}>Ingresa!</Link>
        </p>
      </div>
      <ToastContainer theme="colored" draggablePercent={80} />
    </div>
  );
};

import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../db/firebase";
import {
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { useForm } from "react-hook-form";
import { adminContext } from "../context/ClientContext";

export const CreateUser = () => {
  const { logged, setLogged } = useContext(adminContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ reValidateMode: "onSubmit" });

  // const userExist = (data) => {
  //   const usersCollection = collection(db, "users");
  //   const filter = query(
  //     usersCollection,
  //     where("user", "==", data.user),
  //     where("email", "==", data.email)
  //   );
  //   const request = getDocs(filter);
  //   request
  //     .then((res) => {return res.docs.length})
  //     .catch((err) => console.log(err));
  // };

    const userExist = async (data) => {
      try{
        const usersCollection = await collection(db, "users");
        const filter = await query(
          usersCollection,
          where("user", "==", data.user),
          where("email", "==", data.email)
        );
        const request = await getDocs(filter);
        return request.docs.length
      }
      catch(err){
        console.log(err)
      }
  };

  const sendData = async (data) => {
    if (data.password === data.repeatedPassword) {
      //envia la info y crea el obj
      try{
        await setDoc(doc(db, "users", data.user), {
          ...data,
          products: [],
          orders: [],
        });
        await toast.success("Se creó su usuario con éxito")
        await setLogged((logged) => !logged)
        await reset()
      }
      catch(err){
        console.error(err)
      }
    } else {
      toast.error("Las contraseñas no coinciden")
    }
  };

  const createUserManager = async (data) => {
    const info = await userExist(data)
    if (info === 0){
      await sendData(data)
    } else {
      toast.error("ese usuario ya existe")
    }
  };

  return (
    <div>
      <div>
        <h1>Crea tu usuario en La tiendita!</h1>
      </div>
      <form onSubmit={handleSubmit(createUserManager)}>
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

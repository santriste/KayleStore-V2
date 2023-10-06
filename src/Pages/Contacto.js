import { useForm } from "react-hook-form";
import { useState } from "react";
import "./Contacto.css";

const Contacto = () => {
  const { register, handleSubmit } = useForm();
  const [contactomensaje, setcontactomensaje] = useState(false);

  const enviar = (data) => {
    console.log(data);
    setcontactomensaje(true);
  };

  return (
    <div className="container">
      <h1 className="main-title">Contacto</h1>
      {contactomensaje ? (
        <p className="mensaje-exito">
          Gracias por contactarte con nosotros, te enviaremos un correo.
        </p>
      ) : (
        <form className="formulario" onSubmit={handleSubmit(enviar)}>
          <input type="text" placeholder="Nombre" {...register("nombre")} />
          <input type="email" placeholder="Email" {...register("email")} />
          <input type="tel" placeholder="Teléfono" {...register("telefono")} />
          <button className="enviar" type="submit">
            Enviar
          </button>
        </form>
      )}
    </div>
  );
};

export default Contacto;

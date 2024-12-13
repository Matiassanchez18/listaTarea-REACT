import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import ListaTarea from "./ListaTarea"
import { PlusCircle } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";

const FormularioTarea = () => {
  // formulario requisitos
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  // creamos el array con la variente que va a guardar los elementos en ella
  const [arrayTareas, setarrayTareas] = useState([])


  // aqui data se encarga de recibir lo que se escribio en el form, la variable enviadoForm es la que sucede cuando se toca el boton enviar, some sirve para ir objeto por objeto en el array, setarrayTareas es la funcion que ayuda a guardar los objetos en el array y adentro se la llama a la variante y a los datos que se necesitan agregar,reset se usa para resetear el form.
const enviadoForm = (data)=>{
  if (arrayTareas.some((itarea) => itarea === data.tarea.trim())) {
    alert('la tarea ya existe')
  }else{
    setarrayTareas([...arrayTareas, data.tarea])
    reset()
    console.log(arrayTareas)
  }
}


  return (
    <section>
      <h1 className="text-center mt-5 border-bottom ">Lista de tarea</h1>
      {/* onSubmit = crea el evento del click en el boton, el handlesubmit se usa para prevenir el enviado y (enviadoForm) llama a la funcion que hace lo que queremos cuando se envie el form */}
      <form action="" className="w-50 mx-auto px-4 mt-5"  onSubmit={handleSubmit(enviadoForm)}>
        <InputGroup className="mb-3">
          <Form.Control
            className="bg-white text-dark"
            placeholder="Ingrese su tarea"
            aria-describedby="basic-addon2"
            // {...register} es para agregar validaciones al form, "tarea" es como queremos que se llame el gurdado de los datos obtenidos en el input
           {...register("tarea",{
            required: "Este campo es obligatorio",
            minLength: {
              value: 3,
              message: "El minimo de caracteres es de 3",
            },
            maxLength:{
              value: 15,
              message: "El maximo de caracteres permitido es de 15",
            },
           })}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            type="submit"
            className="bg-primary text-dark button px-3 text-white"
          >
            <PlusCircle></PlusCircle>
          </Button>
        </InputGroup>
        {/* Form.text es para agregar el mensaje de error cuando no se cumple las validaciones */}
        <Form.Text className="text-danger">{errors.tarea?.message}</Form.Text>
        
      </form>
      {/* aqui se envia la informacion del array al componente que dibuja los slots de las acciones, se puede mandar informacion de padre a hijo */}
      <ListaTarea className="mt-3" arrayTareas={arrayTareas}></ListaTarea>
    </section>
  );
};

export default FormularioTarea;

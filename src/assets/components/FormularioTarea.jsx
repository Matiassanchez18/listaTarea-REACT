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
      <form action="" className="w-50 mx-auto px-4 mt-5"  onSubmit={handleSubmit(enviadoForm)}>
        <InputGroup className="mb-3">
          <Form.Control
            className="bg-white text-dark"
            placeholder="Ingrese su tarea"
            aria-describedby="basic-addon2"
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
        <Form.Text className="text-danger">{errors.tarea?.message}</Form.Text>
        
      </form>
      <ListaTarea className="mt-3" arrayTareas={arrayTareas}></ListaTarea>
    </section>
  );
};

export default FormularioTarea;

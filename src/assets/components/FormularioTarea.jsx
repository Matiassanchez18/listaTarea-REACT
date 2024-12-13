import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { PlusCircle } from "react-bootstrap-icons";
import ListaTarea from "./ListaTarea";

const FormularioTarea = () => {
  return (
    <section>
      <h1 className="text-center mt-5 border-bottom ">Lista de tarea</h1>
      <form action="" className="w-50 mx-auto px-4 mt-5">
        <InputGroup className="mb-3">
          <Form.Control
            className="bg-white text-dark"
            placeholder="Ingrese su tarea"
            aria-describedby="basic-addon2"
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
      </form>
      <ListaTarea></ListaTarea>
    </section>
  );
};

export default FormularioTarea;

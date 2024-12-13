import React from "react";
import { XCircle } from "react-bootstrap-icons";
import Button from 'react-bootstrap/Button';

const Tarea = ({tarea, borrarTarea}) => {
    return (
        <div>
             <article className="mx-auto w-50">
      <div className="ms-3 p-3">
        <div className="d-flex ms-5 text-dark justify-content-between align-items-center w-75 bg-white p-3 rounded">
          <p className="mb-0 ms-3">{tarea}</p>          
          <Button variant="outline-danger py-2 px-3">
            {/* se agrega la funcion de flecha para que se ejecute la funcion borrarTarea solamente cuando toque el boton */}
          <XCircle onClick={()=>borrarTarea(tarea)}></XCircle>
          </Button>
        </div>
      </div>
    </article>
        </div>
    );
};

export default Tarea;
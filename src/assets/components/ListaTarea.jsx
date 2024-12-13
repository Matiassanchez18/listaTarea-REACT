import React from 'react';
import Tarea from './Tarea'

const ListaTarea = ({arrayTareas}) => {
    return (
        <section>
        <article>
          {arrayTareas.map((tarea, posicion) => (
            <Tarea key={posicion} tarea={tarea}/>
          ))}
        </article>
      </section>
    );
};

export default ListaTarea;
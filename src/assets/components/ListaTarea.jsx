import React from 'react';
import Tarea from './Tarea'

// dentro de los () va la informacion que recibe el componente hijo
const ListaTarea = ({arrayTareas}) => {
    return (
        <section>
            {/* .map recorre todos los espacio que tiene el array y dibujo 1 slot de tarea x las tareas que hay en el array, se le envia los datos tarea para iterar los objetos dentro del array, y posicion ya que el map tiene la posicion de cada uno de los objetos y este no se repite, ademas es necesaria la posicion porque react necesita un identifucador unico por cada componente */}
        <article>
          {arrayTareas.map((tarea, posicion) => (
            <Tarea key={posicion} tarea={tarea}/>
          ))}
        </article>
      </section>
    );
};

export default ListaTarea;
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TareasPrincipal from "./TareasPrincipal";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { TareaFinal } from "./TareaFinal";

export const RenderizarT = () => {
  const [NewTaks, setNewTaks] = useState([]);

  function RecibeTaks(NeTaks) {
    const newTask = {
      name: NeTaks,
      id: uuidv4(),
    };
    setNewTaks([...NewTaks, newTask]);
  }

  const EliminarTarea = (id) => {
    const eliminando = NewTaks.filter((tarea) => tarea.id !== id);
    setNewTaks(eliminando);
  };

  const HandleDragEnd = (event) => {
    const { active, over } = event;
    const oldIndex = NewTaks.findIndex((task) => task.id === active.id);
    const newIndex = NewTaks.findIndex((task) => task.id === over.id);
    const newOrden = arrayMove(NewTaks, oldIndex, newIndex);
    setNewTaks(newOrden);
  };

  return (
    <div id="fondoDeTareas" className="flex justify-center items-center">
      <div className="w-4/6">
        <div className="FondoT">
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={HandleDragEnd}
          >
            <SortableContext
              items={NewTaks}
              strategy={verticalListSortingStrategy}
            >
              <TareasPrincipal RecibeTaks={RecibeTaks} />
              {NewTaks.map((tarea) => (
                <TareaFinal
                  key={tarea.id}
                  tareass={tarea}
                  onDelete={EliminarTarea}
                />
              ))}
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </div>
  );
};

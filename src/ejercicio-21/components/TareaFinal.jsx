import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const TareaFinal = ({ tareass, onDelete }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: tareass.id,
    });

  const EliminarTarea = () => {
    onDelete(tareass.id);
  };

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div>
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="bg-white p-3 rounded-md shadow-mb text-black my-2"
      >
        <h1>{tareass.name}</h1>
      </div>
      <button className="btn btn-danger" onClick={EliminarTarea}>
        eliminar
      </button>
    </div>
  );
};

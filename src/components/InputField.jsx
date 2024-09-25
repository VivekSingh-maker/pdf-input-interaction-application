import { useDrag } from 'react-dnd';

const InputField = ({ type, label }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'inputField',
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} className={`p-2 ${isDragging ? 'opacity-50' : 'opacity-100'} bg-gray-200 border rounded-md`}>
      {label}
    </div>
  );
};

export default InputField;
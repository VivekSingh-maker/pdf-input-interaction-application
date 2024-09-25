import { useDrop } from 'react-dnd';
import ResizableField from './ResizableField';

const PdfDropZone = () => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'inputField',
    drop: (item) => handleDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  const handleDrop = (item) => {
    console.log('Dropped item:', item);
  };

  return (
    <div ref={drop} className={`w-full h-full ${canDrop ? 'bg-blue-100' : 'bg-white'}`}>
      {isOver && <p>Drop here!</p>}
      <ResizableField width={100} height={40}>
        <input type="text" className="border p-2" placeholder="Text Field" />
      </ResizableField>
    </div>
  );
};

export default PdfDropZone;

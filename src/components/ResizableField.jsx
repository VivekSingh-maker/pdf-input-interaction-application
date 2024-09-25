import { Resizable } from 'react-resizable';

const ResizableField = ({ children, width, height }) => {
  return (
    <Resizable width={width} height={height} resizeHandles={['se']}>
      <div style={{ width: '100%', height: '10%' }}>{children}</div>
    </Resizable>
  );
};

export default ResizableField;
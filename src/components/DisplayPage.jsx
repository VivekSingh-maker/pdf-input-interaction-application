import { loadFieldsFromLocalStorage } from '../utils/localStorage';

const DisplayPage = () => {
  const savedFields = loadFieldsFromLocalStorage();

  return (
    <div className="pdf-container">
      {savedFields.map((field, index) => (
        <div key={index} style={{ position: 'absolute', top: field.y, left: field.x }}>
          {field.type === 'text' && <input type="text" value={field.value} readOnly />}
          {field.type === 'checkbox' && <input type="checkbox" checked={field.checked} readOnly />}
        </div>
      ))}
    </div>
  );
};

export default DisplayPage;
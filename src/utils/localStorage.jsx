export const saveFieldsToLocalStorage = (fields) => {
    localStorage.setItem('pdfFields', JSON.stringify(fields));
  };
  
  export const loadFieldsFromLocalStorage = () => {
    const savedFields = localStorage.getItem('pdfFields');
    return savedFields ? JSON.parse(savedFields) : [];
  };
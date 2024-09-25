//import './App.css';
import React from 'react';
import PdfViewer from './components/PdfViewer';
import PdfDropZone from './components/PdfDropZone';
import InputField from './components/InputField';
import DisplayPage from './components/DisplayPage';
function App() {
  return (
    <div className="flex h-screen">
      <div className="w-1/4 p-4 bg-gray-100">
        <h2 className="text-lg"><b>Input Fields</b></h2>
        <br></br>
        <InputField type="text" label="Enter your Name" for="Full Name" />
        
        <input name="myInput" placeholder='Enter Full Name' id='Full Name' />
        
        <br></br>
        <br></br>
        <InputField type="checkbox" label="Langauage" for="Language"  />
        

        
          Hindi: <input type="checkbox" name="Hindi" id='Language' />
          <br></br>
          English: <input type="checkbox" name="English" id='Language' />
          <br></br>
          Others: <input type="checkbox" name="Others" id='Language' />
        
        <br></br>
        <br></br>
        <InputField type="radio" label="Gender" for="Gender" />

        <label>
          <input type="radio" name="Male" value="Male" id='Gender' />
          Male
        </label>
        <label>
          <input type="radio" name="Female" value="Female" id='Gender' />
          Female
        </label>
        <label>
          <input type="radio" name="Others" value="Others" id='Gender' />
          Others
        </label>
        <br></br>
        <br></br>
        <InputField type="dropdown" value="abc" label="Pick a Profession:" for="Profession" />

        
          <select name="selectedProfession">
            <option value="Engineer" id="Profession">Engineer</option>
            <option value="Doctor" id="Profession">Doctor</option>
            <option value="Teacher" id="Profession">Teacher</option>
            <option value="Government" id="Profession">Government</option>
            <option value="Others" id="Profession">Others</option>
          </select>
        
        <br></br><br></br>
      </div>

      <div className="w-3/4">
        <PdfDropZone />
        <PdfViewer />
        <DisplayPage />
      </div>
    </div>
  );
}

export default App;

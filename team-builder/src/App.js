import React from 'react';
import './App.css';
import Form from './components/form'





function App() {
  return (

    <div className="App">
      <form><fieldset>    {/* DISPLAY TEAM MEMBER LIST*/}
<legend>List of Team Members</legend>
        

          <div className="member-list">
            <div className="name-field">
          name email role</div>
          <button type="submit" className="btn btn-primary">
          Edit
        </button>
        </div>
        

        </fieldset></form>

  < Form /> {/* DISPLAY FORM COMPONENT*/}
    </div>
  );
}

export default App;

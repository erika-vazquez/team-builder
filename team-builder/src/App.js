import React, { useState } from "react";
import './App.css';
import Form from './components/form'
import Member from "./components/Member";



function App() {
  const [members, setMembers] = useState([]);

  const addMember = member => setMembers([...members, member]);

  const updateMember = uMember =>
    setMembers([
      ...members.map(member => {
        if (member.id === uMember.id) {
          return uMember;
        }
        return member;
      })
    ]);

  console.log("members", members);

  return (


    <div className="App">
      <form><fieldset>
        <legend>List of Team Members</legend>
        {members.map(member => (
          <Member member={member} updateMember={updateMember} />
        ))}    </fieldset></form>

      <Form addMember={addMember} />




    </div>
  )
}

export default App;

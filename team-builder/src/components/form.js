import React, { useState } from "react";


export default function Form() {
  // Use an object to track multiple fields:
  const [member, setMember] = useState({ name: "", email: "", role: "" });
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  /*
Controlled Inputs

1. ✅ onChange handler
2. ✅ Somewhere track our state
3. ✅ Apply state to the input

*/
  function handleChange(event) {
    /*
demonstrate the ability to handle multiple inputs in a form
* Use an object to track our state (user)
* Set a `name` on each input that correlates with the state object's keys (email, password, etc.)
* When updating state, copy values into the `user` object (using spread: ...user)
* Then set the changed input based on target.name & target.value.
    */
    const updatedMember = { ...member, [event.target.name]: event.target.value };
    console.log(
      "handleChange",
      event.target.name,
      event.target.value,
      updatedMember
    );
    setMember(updatedMember);
  }
  // function handleEmail(event) {
  //   console.log("changed Email", event.target.value);
  //   setUser({ email: event.target.value });
  // }

  function handleSubmit(event) {
    event.preventDefault();
    //console.log("name", name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>New Member</legend>
        <div className="form-group row">
          <label for="name" className="col-sm-2 col-form-label">
            Name
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter name"
                value={member.name}
                onChange={handleChange}
              />
            </div>
          </label>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={member.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Role</label>
          <input
            type="text"
            className="form-control"
            name="role"
            placeholder="Enter role"
            onChange={handleChange}
            value={member.role}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </fieldset>
    </form>
  );
}

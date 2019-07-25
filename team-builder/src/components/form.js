import React, { useState } from "react";


export default function Form(props) {
  // Use an object to track multiple fields:
  const [member, setMember] = useState({
    name: "", email: "", role: "", id: null
  });


  function handleChange(event) {

    const updatedMember = { ...member, [event.target.name]: event.target.value };
    console.log(
      "handleChange",
      event.target.name,
      event.target.value,
      updatedMember
    );
    setMember(updatedMember);
  }


  function handleSubmit(event) {
    event.preventDefault();
    console.log("user state", member);
    props.addMember({ ...member, id: Math.random() });
    setMember({
      name: "",
      email: "",
      role: "",
      id: null
    })
  }


  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>New Member</legend>
        <div className="form-group row">
          <label for="name" className="col-sm-2 col-form-label">
            Name:{" "}
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
          <label for="email">
            Email:{" "}</label>
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
          <label for="role">Role:{" "}</label>
          <input
            type="text"
            className="form-control"
            name="role"
            placeholder="Enter role"
            onChange={handleChange}
            value={member.role}
          />
        </div>
        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </fieldset>
    </form>
  );

}
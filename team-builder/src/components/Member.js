import React, { useState } from "react";

function Member(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [input, setInput] = useState({
        name: props.member.name,
        email: props.member.email,
        role: props.member.role,
        id: props.member.id
    });

    // console.log("props", props);

    const handleInput = e => {
        // console.log("target name:", e.target.name);
        // console.log("target value", e.target.value);

        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleEdit = e => {
        setIsEditing(!isEditing);
    };

    const updateHandler = e => {
        e.preventDefault();
        props.updateMember(input);
        setIsEditing(!isEditing);
    };

    console.log("inputs", input);
    console.log("edit", isEditing);
    if (isEditing) {
        return (
            <div>
                <h1>Edit Member</h1>
                <form onSubmit={updateHandler}>
                    <div>
                        <label htmlFor="name">
                            Name:{" "}
                            <input
                                type="text"
                                value={input.name}
                                name="name"
                                onChange={handleInput}
                            />
                        </label>
                        <label htmlFor="email">
                            Email:{" "}
                            <input
                                type="text"
                                value={input.email}
                                name="email"
                                onChange={handleInput}
                            />
                        </label>
                        <label htmlFor="role">
                            Role:{" "}
                            <input
                                type="text"
                                value={input.role}
                                name="role"
                                onChange={handleInput}
                            />
                        </label>
                    </div>

                    <button>Update Member</button>
                </form>
                <button onClick={handleEdit}>go back</button>
            </div>
        );
    }
    return (
        <div className="member-list">
            <div className="name-field">
                <p>{props.member.name}</p>
            </div>
            <div className="email-field">
                <p>{props.member.email}</p>
            </div>
            <div className="role-field">
                <p>{props.member.role}</p>
            </div>
            <button onClick={handleEdit}>Edit</button>
        </div>
    );
}

export default Member;

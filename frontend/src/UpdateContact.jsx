import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./CreateContact.module.css";
import axios from "axios";

function UpdateContact() {
  const { state } = useLocation();
  console.log(state);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    event.preventDefault();
    const contact = {
      name: e.target[0].value ? e.target[0].value : state.name,
      phone: e.target[1].value ? e.target[1].value : state.phone,
      email: e.target[2].value ? e.target[2].value : state.email,
      about: e.target[3].value ? e.target[3].value : state.about,
    };
    console.log(state._id, contact);
    axios
      .post("http://localhost:3000/update", { id: state._id, user: contact })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.container}>
      <h2>Update Contact: {state.name}</h2>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
        <label>Name</label>
        <input type="text" placeholder={state.name}></input>
        <label>Phone</label>
        <input type="tel" pattern="[0-9]{10}" placeholder={state.phone}></input>
        <label>Email</label>
        <input type="email" placeholder={state.email}></input>
        <label>About</label>
        <textarea type="text" placeholder={state.about}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UpdateContact;

import React from "react";
import styles from "./CreateContact.module.css";

function CreateContact() {
  const handleSubmit = (e) => {
    event.preventDefault();
    const contact = {name: e.target[0].value, phone: e.target[1].value, email: e.target[2].value, about: e.target[3].value};
    console.log(contact);
  };

  return (
    <div className={styles.container}>
      <h2>Add Contact</h2>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
        <label>Name</label>
        <input type="text" placeholder="Enter Name" required></input>
        <label>Phone</label>
        <input type="tel" pattern="[0-9]{10}" placeholder="Enter Phone"></input>
        <label>Email</label>
        <input type="email" placeholder="Enter Email"></input>
        <label>About</label>
        <textarea type="text" placeholder="Enter About"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateContact;

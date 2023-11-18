import { useEffect, useState } from "react";
import editIcon from "./assets/edit.svg";
import deleteIcon from "./assets/delete.svg";
import styles from "./Contacts.module.Css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Contacts = () => {
  const [contacts, setContacts] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const res = axios
      .get("http://localhost:3000/users")
      .then((res) => setContacts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const res = axios
      .get(`http://localhost:3000/delete/${id}`)
      .then((res) => setContacts(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.container}>
      <>
        <table className={styles.contactsTable}>
          <thead>
            <tr>
              <th style={{ width: "8%" }}>S.No.</th>
              <th style={{ width: "23%" }}>Name</th>
              <th style={{ width: "24%" }}>Email/Phone</th>
              <th style={{ width: "38%" }}>About</th>
              <th style={{ width: "7%" }}></th>
            </tr>
          </thead>
          <tbody>
            {!contacts || contacts.length === 0 ? (
              <p style={{ textAlign: "center" }}>Loading....</p>
            ) : (
              contacts.map((contact, index) => (
                <tr
                  key={contact._id}
                  style={index % 2 == 0 ? { backgroundColor: "#e3eefa" } : null}
                >
                  <td style={{ width: "8%" }}>{index + 1}</td>
                  <td style={{ width: "23%" }}>{contact.name}</td>
                  <td style={{ width: "24%" }}>
                    {contact.phone} - {contact.email}
                  </td>
                  <td style={{ width: "38%" }}>{contact.about}</td>
                  <td style={{ width: "7%" }}>
                    <img
                      style={{ float: "left" }}
                      src={editIcon}
                      onClick={() =>
                        navigate("update/" + contact._id, { state: contact })
                      }
                    ></img>
                    <img
                      style={{ float: "right" }}
                      src={deleteIcon}
                      onClick={() => handleDelete(contact._id)}
                    ></img>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <button onClick={() => navigate("/create")}>Add +</button>
      </>
    </div>
  );
};

export default Contacts;

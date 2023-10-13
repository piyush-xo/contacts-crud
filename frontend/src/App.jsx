import { useEffect, useState } from "react";
import editIcon from "./assets/edit.svg";
import deleteIcon from "./assets/delete.svg";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    const res = fetch(
      "https://mocki.io/v1/faaaf8f8-7711-473a-b186-3f6665dfc85f"
    )
      .then((res) => res.json())
      .then((res) => setContacts(res));
  }, []);

  const handleAdd = () => {
    console.log("adding");
  };

  const handleEdit = (id) => {
    console.log("editing " + id);
  };

  const handleDelete = (id) => {
    console.log("deleting " + id);
  };

  return (
    <div className="container">
      <>
        {!contacts ? (
          <div>Loading...</div>
        ) : (
          <>
            <table className="contactsTable">
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
                {contacts.map((contact, index) => (
                  <tr
                    key={contact.id}
                    style={
                      index % 2 == 0 ? { backgroundColor: "#e3eefa" } : null
                    }
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
                        onClick={() => handleEdit(contact.id)}
                      ></img>
                      <img
                        style={{ float: "right" }}
                        src={deleteIcon}
                        onClick={() => handleDelete(contact.id)}
                      ></img>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
        <button onClick={handleAdd}>Add +</button>
      </>
    </div>
  );
}

export default App;

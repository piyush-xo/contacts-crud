import { useEffect, useState } from "react";
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

  return (
    <main className="container">
      {!contacts ? (
        <div>Loading...</div>
      ) : (
        <>
          
          <table className="contactsTable">
            <thead>
              <tr>
                <th style={{width:"10%"}}>ID</th>
                <th style={{width:"25%"}}>Name</th>
                <th style={{width:"25%"}}>Email/Phone</th>
                <th style={{width:"40%"}}>About</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={contact.id}>
                  <td style={{width:"10%"}}>{index+1}</td>
                  <td style={{width:"25%"}}>{contact.name}</td>
                  <td style={{width:"25%"}}>{contact.phone} - {contact.email}</td>
                  <td style={{width:"40%"}}>{contact.about}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </main>
  );
}

export default App;

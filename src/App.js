import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

const remainingContacts = [...contacts];
const initAgenda = remainingContacts.splice(0, 5);

function App() {
    const [agenda, setAgenda] = useState(initAgenda);

    const addContact = () => {
        const randomIndex = Math.floor(
            Math.random() * remainingContacts.length
        );
        const randomContact = remainingContacts.splice(randomIndex, 1);

        setAgenda(agenda.concat(randomContact));
    };

    const sortByPopularity = () => {
        const agendaSortPopularity = remainingContacts.sort((a, b) => {
            if (a.popularity > b.popularity) return 1;
            if (a.popularity < b.popularity) return -1;
            return 0;
        });
        console.log(agendaSortPopularity);
        setAgenda([...agendaSortPopularity]);
    };

    const sortByName = () => {
        const agendaSortName = remainingContacts.sort((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        });
        console.log(agendaSortName);
        setAgenda([...agendaSortName]);
    };

    return (
        <>
            <h1>IRONCONTACTS</h1>
            <button onClick={addContact}>Add contact</button>
            <button onClick={sortByPopularity}>Sort by popularity</button>
            <button onClick={sortByName}>Sort by name</button>
            <div className="App">
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Oscar Winner?</th>
                            <th>Emmy Winner?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {agenda.map((contact) => {
                            return (
                                <tr key={contact.id}>
                                    <td>
                                        <img
                                            src={contact.pictureUrl}
                                            alt={contact.name}
                                            width="100px"
                                            heigt="150px"
                                        />
                                    </td>
                                    <td>{contact.name}</td>
                                    <td>{contact.popularity.toFixed(2)}</td>
                                    <td>{contact.wonOscar && "🏆"}</td>
                                    <td>{contact.wonEmmy && "🏆"}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default App;

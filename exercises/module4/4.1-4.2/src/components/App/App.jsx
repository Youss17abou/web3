import { useEffect, useState } from "react";
import personService from "../../services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      let isToUpdate = window.confirm(`${newName}  is already added to phonebook, replace the Old number with a new one?`);
      if (isToUpdate) {
        const person = persons.find((person) => person.name === newName);
        const changedPerson = { ...person, number: newNumber };
        personService.update(person.id, changedPerson).then((returnedPerson) => {
          setPersons(persons.map((person) => (person.id !== returnedPerson.id ? person : returnedPerson)));
        });
      }
      return;
    }
    const personObject = {
      name: newName, 
      number: newNumber,
    };
    personService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      // Réinitialise les champs après l'ajout
      setNewName("");
      setNewNumber("");
    });
    console.log("🦧🦧🦧🦧");
  };

  const deletePerson = (id) => {
    const person = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService.deletePerson(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name} {person.number} <button type="submit" onClick={() => deletePerson(person.id)} >delete</button>
          </li>
        ))}
      </ul>
    </div>
  );    
};

export default App;

import { useState } from "react"
import allContacts from "./contacts.json"
import ContactList from "./ContactList"
import SearchField from "./SearchField"
import "./App.css"

function App() {
    const [contacts, setContacts] = useState(allContacts.slice(0, 5))
    const [query, setQuery] = useState("")

    const addContact = () => {
        const randomContact = allContacts[Math.floor(Math.random() * allContacts.length)]

		// Check if there are still contacts to add
        if (contacts.length === allContacts.length) {
			return
        }

        // Check if randomContact is already in contacts
        if (contacts.find(contact => contact.id === randomContact.id)) {
            console.log("found")
            addContact()
            return
        }

        setContacts((contacts) => [randomContact, ...contacts])
    }

    const sortByName = () => {
        const contactsCopy = [...contacts]
        contactsCopy.sort((a, b) => a.name.localeCompare(b.name))

        setContacts(contactsCopy)
    }

    const sortByPopularity = () => {
        const contactsCopy = contacts.slice()
        contactsCopy.sort((a, b) => b.popularity - a.popularity)

        setContacts(contactsCopy)
    }

    const deleteContact = (contactId) => {
        setContacts(contacts => {
            return contacts.filter(contact => contact.id !== contactId)
		})
    }

    return (
        <div className="App">
            <h1>IronContacts</h1>

            <SearchField setQueryProp={setQuery} />

            <button onClick={addContact}>Add random contact</button>
            <button onClick={sortByName}>Sort by name</button>
            <button onClick={sortByPopularity}>Sort by popularity</button>

            <ContactList contacts={contacts} deleteContactProp={deleteContact} queryProp={query}/>
        </div>
    )
}

export default App

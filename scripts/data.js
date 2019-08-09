


const entriesFetcher = () => {
    return fetch("http://localhost:3000/entries")
        .then(entries => entries.json())

}


// Use `fetch` with the POST method to add your entry to your API
// Invoke the factory function, passing along the form field values
const saveJournalEntry = (newJournalEntry) => {
    console.log(newJournalEntry)
    return fetch("http://localhost:3000/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)

    })
        .then(entries => entries.json())

}

const deleteEntry = (journalEntryID) => {
    return fetch(`http://localhost:3000/entries/${journalEntryID}`, {
        method: "DELETE"
    })
        .then(response => response.json())

// Calling the function.
}



export default {
    entriesFetcher, saveJournalEntry, deleteEntry
}






const createJournalEntryComponent = (journalEntry) => {
    return `
     <article class="entryLog">
     <h2>${journalEntry.Date}</h2>
     <h3>${journalEntry.Topic}</h3>
     <h3>${journalEntry.Entry}</h3>
     <h3>${journalEntry.Mood}</h3>
     <button id="deleteBTN--${journalEntry.id}">Delete Button</button>
     </article>`


}

const createEntryObj = (date, topic, entry, mood) => {
    return {
        Date: date,
        Topic: topic,
        Entry: entry,
        Mood: mood
    }
}



export default {
    createJournalEntryComponent, createEntryObj
}
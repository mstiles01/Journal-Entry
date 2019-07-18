const journalEntries = []


const addEntry = (journalEntry) =>{
journalEntries.push(journalEntry)}


const puttingentrytoDOM = document.querySelector("#entryLog")

const makeJournalEntryComponent = (journalEntry) => {
   const journalEntryTemplate = `
    <article class="entryLog">
    <h2>${journalEntry.Date}</h2>
    <h3>${journalEntry.Concepts}</h3>
    <h3>${journalEntry.Journal}</h3>
    <h3>${journalEntry.Mood}</h3>
    </article>`
    
    puttingentrytoDOM.innerHTML += journalEntryTemplate
}

const journalEntry1 = {
    Date:"7/13/19",
    Concepts:"Objects, Arrays, Dot notation, Bracket notation",
    Journal:"I'm confused",
    Mood:"Sad"
}
makeJournalEntryComponent(journalEntry1)

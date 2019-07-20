const journalEntries = []


const addEntry = (journalEntry) =>{
journalEntries.push(journalEntry)}


const puttingentrytoDOM = document.querySelector(".entries")

const makeJournalEntryComponent = (journalEntry) => {
   const journalEntryTemplate = `
    <article class="entryLog">
    <h2>${journalEntry.Date}</h2>
    <h3>${journalEntry.Topic}</h3>
    <h3>${journalEntry.Entry}</h3>
    <h3>${journalEntry.Mood}</h3>
    </article>`
    
    puttingentrytoDOM.innerHTML += journalEntryTemplate
}

const journalEntry1 = {
    Date:"7/13/19",
    Topic:"Objects, Arrays, Dot notation, Bracket notation",
    Entry:"I'm confused",
    Mood:"Sad"
}

const journalEntry2 = {
    Date: "7/20/2019",
    Topic: "Test",
    Entry: "Test",
    Mood: "Happy"
}
makeJournalEntryComponent(journalEntry1)
makeJournalEntryComponent(journalEntry2)


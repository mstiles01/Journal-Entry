/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/


const saveButton = document.querySelector("#saveBtn")
const moodInput = document.querySelector("#moodInput")
const textInput = document.querySelector("#textInput")
const topicInput = document.querySelector("#topicInput")
const dateInput = document.querySelector("#dateInput")
const clearingDOM = document.querySelector(".entries")


const dataRender = () => {
    clearingDOM.innerHTML = ""
    entriesFetcher()
    .then(arrayOfEntries => {
        console.log(arrayOfEntries)
        for (let currentEntry of arrayOfEntries) {
            let convertedJournal = createJournalEntryComponent(currentEntry);
            displayEntriesInDOM(convertedJournal)

        }
    })


dataRender()

document.querySelector("#saveBtn").addEventListener("click", (event) => {
    const newJournalEntry = createEntryObj(moodInput.value, textInput.value, topicInput.value, dateInput.value)
    event.preventDefault();
    console.log(newJournalEntry)
    const newHTMLRep = createJournalEntryComponent(newJournalEntry)
   saveJournalEntry(newJournalEntry).then(dataRender)
  
})





import dataManager from "./data.js"
import HTMLRep from "./entryComponent.js"
import DOMRep from "./entriesDOM.js"


const saveButton = document.querySelector("#saveBtn")
const moodInput = document.querySelector("#moodInput")
const textInput = document.querySelector("#textInput")
const topicInput = document.querySelector("#topicInput")
const dateInput = document.querySelector("#dateInput")
const entriesDIV = document.querySelector(".entries")
const entryLog = document.querySelector(".entryLog")

const getDataRender = () => {
    entriesDIV.innerHTML = ""
    dataManager.entriesFetcher()
        .then(arrayOfEntries => {
            
            for (let currentEntry of arrayOfEntries) {
                let convertedJournal = HTMLRep.createJournalEntryComponent(currentEntry);
                DOMRep.displayEntriesInDOM(convertedJournal)
        }
        })

    }       

            


document.querySelector("#saveBtn").addEventListener("click", (event) => {
    event.preventDefault();
    const newJournalEntry = HTMLRep.createEntryObj(dateInput.value, topicInput.value, textInput.value, moodInput.value)
    console.log(newJournalEntry)
    dataManager.saveJournalEntry(newJournalEntry).then(getDataRender)
})

const happyBTN = document.querySelector("#radioHap")
const newtBTN = document.querySelector("#radioNeut")
const frusBTN = document.querySelector("#radioFrust")
const sadBTN = document.querySelector("#radioSad")


happyBTN.addEventListener("click", (event) => {
    const mood = event.target.value
    dataManager.entriesFetcher().then(entries => {
        const filteredEntries = entries.filter(entry => entry.Mood === mood)
        entriesDIV.innerHTML = ""
        for (const journal of filteredEntries) {
            const converted = HTMLRep.createJournalEntryComponent(journal)
            DOMRep.displayEntriesInDOM(converted);
        } 
    })
})
newtBTN.addEventListener("click", (event) => {
    const mood = event.target.value
    dataManager.entriesFetcher().then(entries => {
        const filteredEntries = entries.filter(entry => entry.Mood === mood)
        console.log(filteredEntries)
        entriesDIV.innerHTML = ""
        for (const journal of filteredEntries) {
            const converted = HTMLRep.createJournalEntryComponent(journal)
            DOMRep.displayEntriesInDOM(converted);
        } 
    })
})
frusBTN.addEventListener("click", (event) => {
    const mood = event.target.value
    dataManager.entriesFetcher().then(entries => {
        const filteredEntries = entries.filter(entry => entry.Mood === mood)
        console.log(filteredEntries)
        entriesDIV.innerHTML = ""
        for (const journal of filteredEntries) {
            const converted = HTMLRep.createJournalEntryComponent(journal)
            DOMRep.displayEntriesInDOM(converted);
        } 
    })
})
sadBTN.addEventListener("click", (event) => {
    const mood = event.target.value
    dataManager.entriesFetcher().then(entries => {
        const filteredEntries = entries.filter(entry => entry.Mood === mood)
        console.log(filteredEntries)
        entriesDIV.innerHTML = ""
        for (const journal of filteredEntries) {
            const converted = HTMLRep.createJournalEntryComponent(journal)
            DOMRep.displayEntriesInDOM(converted);
        } 
    })
})



// Can't read add eventlistener, entryLog is coming back NULL
// tried clearingDOM no errors, but also did not render any entries 
// DELTE in data.js not working
// Filter Button Still works though/will render Entries. 
// Offically FUBAR, Sir
// That's German.
// const registerDeleteListener 
    entriesDIV.addEventListener("click", (event) => {
    if (event.target.id.startsWith("deleteBTN--")) { 
        const deleteBTNID = event.target.id.split("--")[1]
        console.log(deleteBTNID)
        dataManager.deleteEntry(deleteBTNID)
        .then(dataManager.entriesFetcher)
        .then(DOMRep.displayEntriesInDOM)
        
    }

  
})


  getDataRender()
// registerDeleteListener()
dataManager.entriesFetcher().then(DOMRep.displayEntriesInDOM)

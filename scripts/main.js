
import dataManager from "./data.js"
import HTMLRep from "./entryComponent.js"
import DOMRep from "./entriesDOM.js"


const saveButton = document.querySelector("#saveBtn")
const moodInput = document.querySelector("#moodInput")
const textInput = document.querySelector("#textInput")
const topicInput = document.querySelector("#topicInput")
const dateInput = document.querySelector("#dateInput")
const clearingDOM = document.querySelector(".entries")

const getData = () => {
    clearingDOM.innerHTML = ""
    dataManager.entriesFetcher()
        .then(arrayOfEntries => {
            console.log(arrayOfEntries)
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
    dataManager.saveJournalEntry(newJournalEntry).then(getData)
})

const happyBTN = document.querySelector("#radioHap")
const newtBTN = document.querySelector("#radioNeut")
const frusBTN = document.querySelector("#radioFrust")
const sadBTN = document.querySelector("#radioSad")
const moodContainer = document.querySelector("#radioContainer")

happyBTN.addEventListener("click", (event) => {
    const mood = event.target.value
    console.log("mood", mood)
    dataManager.entriesFetcher().then(entries => {
        const filteredEntries = entries.filter(entry => entry.Mood === mood)
        console.log(filteredEntries)
        clearingDOM.innerHTML = ""
        for (const journal of filteredEntries) {
            const converted = HTMLRep.createJournalEntryComponent(journal)
            DOMRep.displayEntriesInDOM(converted);
        } 
    })
})
newtBTN.addEventListener("click", (event) => {
    const mood = event.target.value
    console.log("mood", mood)
    dataManager.entriesFetcher().then(entries => {
        const filteredEntries = entries.filter(entry => entry.Mood === mood)
        console.log(filteredEntries)
        clearingDOM.innerHTML = ""
        for (const journal of filteredEntries) {
            const converted = HTMLRep.createJournalEntryComponent(journal)
            DOMRep.displayEntriesInDOM(converted);
        } 
    })
})
frusBTN.addEventListener("click", (event) => {
    const mood = event.target.value
    console.log("mood", mood)
    dataManager.entriesFetcher().then(entries => {
        const filteredEntries = entries.filter(entry => entry.Mood === mood)
        console.log(filteredEntries)
        clearingDOM.innerHTML = ""
        for (const journal of filteredEntries) {
            const converted = HTMLRep.createJournalEntryComponent(journal)
            DOMRep.displayEntriesInDOM(converted);
        } 
    })
})
sadBTN.addEventListener("click", (event) => {
    const mood = event.target.value
    console.log("mood", mood)
    dataManager.entriesFetcher().then(entries => {
        const filteredEntries = entries.filter(entry => entry.Mood === mood)
        console.log(filteredEntries)
        clearingDOM.innerHTML = ""
        for (const journal of filteredEntries) {
            const converted = HTMLRep.createJournalEntryComponent(journal)
            DOMRep.displayEntriesInDOM(converted);
        } 
    })
})

    getData()
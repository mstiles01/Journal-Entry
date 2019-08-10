// import createJournalEntryComponent from "./entryComponent.js"
// const Entries
// Refernce to DOM element to where we put out data
const placingEntries = document.querySelector(".entries")
// This is rendering 
const displayEntriesInDOM = (entriesHTMLRep) => {
    // entriesDIV.innerHTML = ""
    // for (let currentEntry of arrayOfEntries) {
    //     let convertedJournal = HTMLRep.createJournalEntryComponent(currentEntry);
        placingEntries.innerHTML += entriesHTMLRep

    }

    export default  {displayEntriesInDOM}
    
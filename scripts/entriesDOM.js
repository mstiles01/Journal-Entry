// Refernce to DOM element to where we put out data
const placingEntries = document.querySelector(".entries")
// This is rendering 
const displayEntriesInDOM = (entriesHTMLRep) => {
    placingEntries.innerHTML += entriesHTMLRep
}
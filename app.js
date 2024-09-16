// List of people on the island (remove when they are killed)
let players = [
    "charlie",
    "hurley",
    "jack",
    "kate",
    "locke",
    "michael",
    "sawyer",
    "sayid",
    "sun",
]

// DOM Elements (get by ID)
const btnKill = document.getElementById("kill")
const countHeaderEl = document.getElementById("count-header")

// Add Event Listener
btnKill.addEventListener("click", handleBtnKillClick)

// Functions
function handleBtnKillClick() {
    console.log("Kill Button Clicked!")

    // Get a random number between 0 and 8 (there are 9 people)
    const victimId = Math.trunc(Math.random() * players.length)
    console.log("VictimId: ", victimId)

    // Use the victimId to get a name
    // Use the name to get an <img> element
    const victimImgEl = document.getElementById(players[victimId])
    console.log(victimImgEl)

    // Changed the victim img CSS
    victimImgEl.className = "dead" // blurry and grayscale

    // Remove the victim from the array so they can't be killed again
    // Let's use iterator methods (.filter, .reduce, .map, ...)
    players = players.filter((item, idx) => idx !== victimId) // keep everyone in the list who's id is not the victimId

    console.log(players)

    // Display survivor count (rerender survivor count)
    renderSurvivorCount()

    // if there is a single survivor:
    if (players.length == 1)
        announceSurvivor() // announce winner of the island
}

function renderSurvivorCount() {
    countHeaderEl.innerText = "Remaining survivors: " + players.length
}

function announceSurvivor() {
    const winnerText = document.createElement("h3")
    winnerText.innerText = "Survivor: " + players[0].toUpperCase()
    winnerText.style.color = "red"

    document.body.appendChild(winnerText)
}
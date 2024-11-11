// Initial character stats
let hunger = 50;
let happiness = 50;
let energy = 50;

// Update stats display
function updateStats() {
    document.getElementById("hunger").innerText = hunger;
    document.getElementById("happiness").innerText = happiness;
    document.getElementById("energy").innerText = energy;
}

// Interactions
function feed() {
    hunger = Math.min(hunger + 20, 100);
    happiness = Math.min(happiness + 5, 100);
    energy = Math.max(energy - 5, 0);
    updateStats();
}

function play() {
    happiness = Math.min(happiness + 15, 100);
    energy = Math.max(energy - 10, 0);
    hunger = Math.max(hunger - 5, 0);
    updateStats();
}

function sleep() {
    energy = Math.min(energy + 25, 100);
    hunger = Math.max(hunger - 10, 0);
    happiness = Math.max(happiness - 5, 0);
    updateStats();
}

// Automatic need decay over time
setInterval(() => {
    hunger = Math.max(hunger - 1, 0);
    happiness = Math.max(happiness - 1, 0);
    energy = Math.max(energy - 1, 0);

    if (hunger === 0 || happiness === 0 || energy === 0) {
        alert("Your character needs attention!");
    }

    updateStats();
}, 3000); // Every 3 seconds

// Initialize stats on load
updateStats();

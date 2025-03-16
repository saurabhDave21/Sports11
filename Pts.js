let tr = 0; // Global variable for total runs
let pts = 0; // Global variable for total points
let wts = 0; // Bowling points
let wk = 0;  // Wicket count

// Function to update the HTML with current stats
function updateDisplay() {
    document.getElementById('totalRun').innerHTML = `Total Runs: ${tr}`;
    document.getElementById('totalPts').innerHTML = `Total Points: ${pts + wts}`;  // Sum of batting and bowling points
    document.getElementById('totalWts').innerHTML = `Total Wickets: ${wk}`;
}

function batting(rn) {
    if (rn === undefined || rn < 0) {
        console.log("Invalid input. Please enter a valid run.");
        return;
    }

    tr += rn;  // Add the new run to total runs
    pts += rn; // Add the new run to total points

    if (rn > 6) {
        console.log("Error: Invalid run value");
        return;
    }

    if (tr >= 50) {
        console.log("Half Century!");
        pts += 5;  // Bonus points for half century
    }

    console.log(`Total Runs: ${tr}`);
    console.log(`Total Points: ${pts}`);

    // Update the display on the page
    updateDisplay();
}

// Simulating a match
batting(5);  // 5 runs, Total Runs = 5, Total Points = 5
batting(4);  // 4 runs, Total Runs = 9, Total Points = 9

// Bowling function to update wickets and points
function bowling(wkt) {
    if (wkt == 1) {
        wts += 10;  // Add 10 points for 1 wicket
        wk += 1;    // Increment the wicket count by 1
        console.log("Bowling points:", wts);
    } else if (wkt == 2) {
        wts += 25;  // Add 25 points for 2 wickets
        wk += 2;    // Increment the wicket count by 2
        console.log("Bowling points:", wts);
    }

    // Update the display on the page with updated bowling stats
    updateDisplay();
}

// Simulating bowling (1 wicket)
bowling(1); // 1 wicket, Total Bowling Points = 10
bowling(2); // 2 wickets, Total Bowling Points = 35

// Calculate and display total points after all actions
let totalPoints = pts + wts;
console.log(`Total Points (Batting + Bowling): ${totalPoints}`);

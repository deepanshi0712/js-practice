const candidates = {
    Aman: 0,
    Rohit: 0,
    Priya: 0
};

function vote(candidate) {
    if (candidates.hasOwnProperty(candidate)) {
        candidates[candidate]++;
    } else {
        console.log("Candidate not found");
    }
}

function showResults() {
    console.log("Voting Results");
    console.table(candidates);

    let winner = Object.keys(candidates).reduce((a, b) =>
        candidates[a] > candidates[b] ? a : b
    );

    console.log("Winner:", winner);
}

vote("Aman");
vote("Priya");
vote("Priya");
vote("Rohit");
vote("Priya");

showResults();
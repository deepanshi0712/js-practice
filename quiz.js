const questions = [
    {
        question: "Capital of India?",
        answer: "Delhi"
    },
    {
        question: "2 + 2 ?",
        answer: "4"
    }
];

const userAnswers = [
    "Delhi",
    "5"
];

let score = 0;

questions.forEach((q, index) => {

    if (
        userAnswers[index]
            .toLowerCase()
        ===
        q.answer.toLowerCase()
    ) {
        score++;
    }

});

console.log(
    `Score: ${score}/${questions.length}`
);
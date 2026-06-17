const movies = [
    { title: "Inception", rating: 9 },
    { title: "Avatar", rating: 8 },
    { title: "Batman", rating: 7 }
];

function topRatedMovie() {

    const best =
        movies.reduce((prev, current) =>
            prev.rating > current.rating
                ? prev
                : current
        );

    return best;
}

console.table(movies);

console.log(
    "Top Rated:",
    topRatedMovie().title
);
const movies = [
    { title: 'Movie 1', rating: 4.5 },
    { title: 'Movie 2', rating: 3.2 },
    { title: 'Movie 3', rating: 5.0 },
    { title: 'Movie 4', rating: 2.8 }
];

const totalRating = movies.reduce((first, second) => {
    return first + second.rating;
}, 0);

const averageRating = totalRating / movies.length;

console.log(averageRating);

const n = parseInt(readline());

let count = 0
let ranges = []

for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    const a = parseInt(inputs[0]);
    const b = parseInt(inputs[1]);

    ranges.push([a,b])
}

function findMaxMovies(movies) {
    // Sort movies by ending time
    movies.sort((a, b) => a[1] - b[1]);
  
    // Initialize the maximum number of movies John can watch
    let maxMovies = 0;
  
    // Keep track of the current end time
    let currentEndTime = 0;
  
    // Iterate over the movies
    for (const movie of movies) {
      // If the start time of the current movie is greater than or equal to the
      // current end time, then John can watch this movie entirely
      if (movie[0] >= currentEndTime) {
        maxMovies++;
        currentEndTime = movie[1];
      }
    }
  
    return maxMovies;
  }

console.log(findMaxMovies(ranges))
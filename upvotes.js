// When you post on the website Reddit, people can Upvote or Downvote your post. The website does not show you the exact number of Upvotes and Downvotes, but instead it shows you the Score and the Upvote Rate.

// Score is the number of Upvotes minus the number of Downvotes. For example, if you have 8 Upvotes and 2 Downvotes, then your Score is 6.

// Upvote Rate is the percentage of Upvotes. For example, if you have 8 Upvotes and 2 Downvotes, then your Upvote Rate is 80%.

// Given a Score S and an Upvote Rate R, find the number of Upvotes U and Downvotes D.

const S = parseInt(readline());
const R = parseInt(readline());

const U = (S + R) / 2
const D = (S - R) / 2

print(U)
print(D)
// Three kangaroos are playing in the desert. They are playing on a number line, each occupying a different integer. 
// In a single move, one of the outer kangaroos jumps into the space between the other two. At no point may two kangaroos occupy the same position. Help them play as long as possible.

// Input
// Three integers A, B and C (0<A<B<C<100), the initial positions of the kangaroos.

// Output
// Output the largest number of moves the kangaroos can make.

numberLine = (A, B, C) => {
  let turnCount = 0
  let gameStatus = true
  let first = A
  let middle = B
  let last = C
  while (gameStatus) {
    let temp = 0
    if (first + 1 > middle && first + 1 < last) {
      
      first = middle
      turnCount ++
    }
    else {
      
    }
      
  }
}

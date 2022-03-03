function removeFive(numString) {
  // remove a 5 from the string to make the largest nunmber
  if(N < 0){
    let tempLowestValue = 100000000
    let Neg = Array.from(String(numString))
    Neg.splice(0, 1)
    let convertedNeg = Neg.map((value) => Number(value))
    for (let y = 0; y < convertedNeg.length; y++) {
      let negCopy = [...convertedNeg]
      if (convertedNeg[y] === 5){
        negCopy.slice(y, 1)
        if ((Number(negCopy.join(''))) < tempLowestValue) {
          tempLowestValue = Number(negCopy.join(''))
        }
      }
    }
    return tempLowestValue
  

  } else {
    let tempHighestValue = 0
    let convertedNum = Array.from(String(N)).map(Number) 
    for (let x = 0; x < convertedNum.length; x++) {
      let copy = [...convertedNum]
      if (convertedNum[x] === 5){
        copy.splice(x, 1)
        if ((Number(copy.join(''))) > tempHighestValue){
          tempHighestValue = Number(copy.join(''))
        }
      }
    }
    return tempHighestValue
  }
}

console.log(removeFive(-515958))
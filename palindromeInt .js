palindromeInt = (someInt) => {
  let convertedInt = someInt.toString()
  for (let x = 0; x < convertedInt.length; x ++) {
    if (convertedInt[x] !== convertedInt[convertedInt.length-(x+1)]){
      return false
    }
  }
  return true
}

console.log(palindromeInt(1221221))
// With a sample input of "?ab??a", replace the "?" with letter to create a palindrome. If one cannot be created, return "NO"


function replaceToMakePalindrome(someString) {
  let newS = [...someString]
  for (let x = 0; x < newS.length; x++) {
      if(newS[x] !== newS[newS.length-(x+1)]){
          if (newS[x] === '?' && newS[newS.length-(x+1)] === '?'){
              newS.splice(x, 1, 'a')
              newS.splice((newS.length-(x+1)), 1, 'a')
          } else if (newS[x] === '?'){
              newS.splice(x, 1, newS[newS.length-(x+1)])
          } else if (newS[newS.length-(x+1)] === '?'){
              newS.splice((newS.length-(x+1)), 1, newS[x])
          }
      }
  }
  for(let y = 0; y < newS.length; y++) {
      if (newS[y] === newS[newS.length-(y+1)]){    
      } else {
          return "NO"
      }
  }
  return newS.join("")
}


console.log(replaceToMakePalindrome("?ab??a"))

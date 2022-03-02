firstPalindromeOfPhrases = (words) => {
  for (const phrase of words) {
    let check = true
    for (let x = 0; x < phrase.length; x++){
      if (phrase[x] !== phrase[phrase.length - (x+1)]){
        check = false
        break // we know that this isnt a palindrome
      }
    }
    if (check) {
      return phrase
    }
    // break takes you here
    // completing the loop also takes you here
  }
}


console.log(firstPalindromeOfPhrases(["notapalindromen","racecar"]))



//hard to consider linear time, needs nested loop


// to check outside // this takes n time
  //conditrional to remove of one of them
  // hits b !==c 
  //does 
  
 









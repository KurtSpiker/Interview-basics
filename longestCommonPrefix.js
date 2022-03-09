//Write a function to find the longest common prefix string amongst an array of strings.

//If there is no common prefix, return an empty string "".

 

//Example 1:

//Input: strs = ["flower","flow","flight"]
//Output: "fl"


commonPrefix = (someArray) => {
  let prefix = ""
  for (let x = 0; x < someArray[0].length; x ++) {
   // cycle through the first word, and each time compare it to the other words in the input array
    let prefixCheck = 0
    for (let y = 1; y < someArray.length; y ++) {
      if (someArray[0][x] === someArray[y][x]) {
        prefixCheck ++
      }
    }
    if (prefixCheck === (someArray.length - 1)) {
      prefix.push(someArray[0][x])
    }
  }
  return prefix
}

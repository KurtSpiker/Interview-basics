//Non linear, but clean
containsDuplicate = (array) => {
  for (let i = 0; i < array.length; i ++) {
    if (array.splice(i).includes(array[i])){
      return true
    }
  }
  return false
}


// Linear
containsDuplicate = (array) => {
  object = {}
  for (const num of array) {
    if (object[num]) {
      return true
    } 
    object[num] = 1
    
  }
  return false
} 

function accum(s) {
    let stringArr = s.split("")
    let finalArr = []
      for (let i = 0; i < stringArr.length; i ++) {
      finalArr.push(stringArr[i].toUpperCase() + repetition(stringArr[i],i) )
    }
    return finalArr.join("-")
  }
  
  function repetition(str, num) {
    let rep = ""
    for (let i = 0 ; i < num; i++) {
      rep += str.toLowerCase()
    }
    return rep
  }
  
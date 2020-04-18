function divisible_num (n) {
let arr = [] 
for(let i = 1; i < 100;  i++){
  if(i % n === 0)
    return arr

    else if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
    arr.push("yu-gi-oh")
  }

    else if(i % 2 === 0 && i % 5 === 0){
    arr.push("yu-oh")
  }
    else if(i % 2 === 0 && i % 3 === 0){
    arr.push("yu-gi")
  } 
    else if(i % 2 === 0){
    arr.push("yu")
  } else if(i % 3 === 0){
    arr.push("gi")
  } else if(i % 5 === 0){
    arr.push("oh")
  } else {
    arr.push(i)
  }

}
return arr
}

divisible_num()
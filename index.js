function theBeatlesPlay(musician_arr, instruments_arr){
  var combo_arr = [];

  for(var i = 0; i < musician_arr.length; i++){
    combo_arr.push(`${musician_arr[i]} plays ${instruments_arr[i]}`);
  }
  return combo_arr;
}

function johnLennonFacts(arr){
  var i = 0
  while(i < arr.length){
    arr[i] += '!!!'
    i++
  }
  return arr
}

function iLoveTheBeatles(num){
  var arr = [];
  do {
    arr.push("I love the Beatles!")
    num++
  } while(num < 15)
  return arr
}
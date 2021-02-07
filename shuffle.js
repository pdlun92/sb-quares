function shuffle(array) {
  var i = array.length, t, r;
  while (0 != i) {
    r = Math.floor(Math.random() * i);
    i -= 1;
    t = array[i];
    array[i] = array[r];
    array[r] = t;
  }
  return array;
}

var arr = ['Pat', 'Stud', 'Copp', 'Jake', 'Shil', 'Tom', 'Pete'];
shuffle(arr);
console.log(arr)
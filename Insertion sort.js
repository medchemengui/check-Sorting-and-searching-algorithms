function sort(arr) {
    for (let i = 1; i < arr.length; i++) {
      var j = i;
      while (j > 0 && arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        j--;
      }
    }
    return arr;
  }
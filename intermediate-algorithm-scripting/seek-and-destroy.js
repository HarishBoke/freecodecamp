function destroyer(arr) {
    for(let i = 1; i <= arguments.length; i++){
      console.log("arguments[i]",arguments[i])
        for(let j = 0; j < arr.length; j++){
            if(arguments[i] == arr[j]) {
              arr.splice(j, 1);
              j--;
            }
        }
    }
    console.log("output arr", arr);
    return arr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  
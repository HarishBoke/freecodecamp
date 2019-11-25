function sliceArray(anim, beginSlice, endSlice) {
    // Add your code below this line
      let newArray = [];
     newArray = anim.slice(beginSlice, endSlice);
      return newArray;
    // Add your code above this line
  }
  var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);
  
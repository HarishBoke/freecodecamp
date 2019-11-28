function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    let oddOcc = [];
    let objMap = {};
    newArr = arr2.concat(arr1);
    for(let i = 0; i < newArr.length; i++){
        if(!objMap.hasOwnProperty(newArr[i])) {
          objMap[newArr[i]] = { "type": typeof newArr[i], "count": 1};
        }else {
          objMap[newArr[i]] = { "type": typeof newArr[i], "count": 2};
        }
    }
    for(let key in objMap){
        if(objMap[key].type == "number"){
          key = parseInt(key);
        }
        if(objMap[key].count === 1) {
           oddOcc.push(key);
        }
    }
    return oddOcc;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  

  // Method 2
//   function diffArray(arr1, arr2) {
//     var newArr = [];
//     // Same, same; but different.
//     let oddOcc = [];
//     let objMap = {};
//     newArr = arr2.concat(arr1);
//     for(let i = 0; i < newArr.length; i++){
//         if(!objMap.hasOwnProperty(newArr[i])) {
//           if(typeof newArr[i] == "number"){
//               objMap[newArr[i]] =  newArr[i]+"N";
//           }else {
//              objMap[newArr[i]] = newArr[i]
//           }
//         }else {
//           objMap[newArr[i]] = 2;
//         }
//     }
  
//     for(let key in objMap){
//       if(objMap[key] != 2){
//               if(key == objMap[key]+"N"){
//                 key = parseInt(key);
//               }
//               //if(key == "1S") {
//                 oddOcc.push(key);
//               //}
//       }
//       // if(decodeType(key) == 1){
//       //     if(key)
//       // }
//         // if(objMap[key].type == "number"){
//         //   key = parseInt(key);
//         // }
//         // if(objMap[key].count === 1) {
//         //    oddOcc.push(key);
//         // }
//     }
  
//     return oddOcc;
//   }
  
//   function decodeType(e) {
//       if(e == "1S") return "string"
//       if( e == "1N") return "number"
//   }
//   diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  
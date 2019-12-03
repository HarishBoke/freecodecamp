function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    var count = 0;
    
    for(var item of collection){
        //currentCollecationItem = Object.keys(item);
        for(var key in source){
              if (item.hasOwnProperty(key)) {
                  if(item[key] === source[key]) count++;
              }
        } 
        if(count === Object.keys(source).length) arr.push(item);
         // counter reset
      count = 0;  
    }
   
  
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  
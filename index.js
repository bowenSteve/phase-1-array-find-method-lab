const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
 
  function superbowlWin(record){
    for(const list of record){
      if (list.result==="W"){
        return list.year
      }
    }
      return undefined;
  }
  console.log(superbowlWin(record));
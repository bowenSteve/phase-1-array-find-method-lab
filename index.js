const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
 
  function superbowlWin(record){
    let myRecord = record.find((superBowl) => superBowl.result === "W");
    if (myRecord) {
      return myRecord.year;
    }
    return undefined;
  }
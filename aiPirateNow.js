//Model***********************************************
//********************************************************
//********************************************************
//********************************************************
//********************************************************
//********************************************************
//////////////// Model////////////////////////////////////////////////////


var torpedoesLeft
var hits
var shipArray=[]
var checkArray = []
var timeout
var notPlaced = 0
var shipsLeft = 8
var choose5
var pirateTalk
var audio
var currentTd
var dig0
var dig1

var h2 = 0
var v2 = 0
var h3 = 0
var v3 = 0
var h4 = 0
var v4 = 0
var hv5 = 0


const ship1 = "1"
const ship2h = "2h"
const ship2v = "2v"
const ship3h = "3h"
const ship3v= "3v"
const ship4h = "4h"
const ship4v= "4v"
const ship5 = "5"


var board = new Array(100)
board.fill(0)
console.log("board now zeroes");

var aiBoard = new Array(100)
aiBoard.fill(0)
console.log("board now zeroes");

var aiLostShips = []
var aiShotTds = []
for (i=0; i<100; i++){
    aiLostShips[i] = i;
}
var aiRandom
var aiCurrentTd
var aiLastTd
var x
var y
var aiDig0
var aiDig1
var aiHits = 0
var aiShipsLeft = 8
var aiTorpedoesLeft = 100

var aiFound1 = []
var aiFound2 = []
var aiFound3 = []
var aiFound4 = []
var aiFound5 = []
var aiFound6 = []
var aiFound7 = []
var aiFound8 = []

var ai1Direction = "lost"
var ai2Direction = "lost"
var ai3Direction = "lost"
var ai4Direction = "lost"
var ai5Direction = "lost"
var ai6Direction = "lost"
var ai7Direction = "lost"
var ai8Direction = "lost"


////////////////End of Regular Model////////////////////////////////////////////////////

////////////////Ai Model////////////////////////////////////////////////////






////////////////End of Ai Model////////////////////////////////////////////////////

function shipRemove(){
    $("#board td").removeClass("torpedoed");
    $("#board td").removeClass("hit");
    $("#board td").removeClass("hit2");
    $("#board td").removeClass("ship1show");
    $("#board td").removeClass("ship2hshow");
    $("#board td").removeClass("ship2vshow");
    $("#board td").removeClass("ship3hshow");
    $("#board td").removeClass("ship3vshow");
    $("#board td").removeClass("ship4hshow");
    $("#board td").removeClass("ship4vshow");
    $("#board td").removeClass("ship5show");
    $("#board td").removeClass("ship1");
    $("#board td").removeClass("ship2h");
    $("#board td").removeClass("ship2v");
    $("#board td").removeClass("ship3h");
    $("#board td").removeClass("ship3v");
    $("#board td").removeClass("ship4h");
    $("#board td").removeClass("ship4v");
    $("#board td").removeClass("ship5");

    $("#aiBoard td").removeClass("torpedoed");
    $("#aiBoard td").removeClass("hit");
    $("#aiBoard td").removeClass("hit2");
    $("#aiBoard td").removeClass("ship1show");
    $("#aiBoard td").removeClass("ship2hshow");
    $("#aiBoard td").removeClass("ship2vshow");
    $("#aiBoard td").removeClass("ship3hshow");
    $("#aiBoard td").removeClass("ship3vshow");
    $("#aiBoard td").removeClass("ship4hshow");
    $("#aiBoard td").removeClass("ship4vshow");
    $("#aiBoard td").removeClass("ship5show");
    $("#aiBoard td").removeClass("ship1");
    $("#aiBoard td").removeClass("ship2h");
    $("#aiBoard td").removeClass("ship2v");
    $("#aiBoard td").removeClass("ship3h");
    $("#aiBoard td").removeClass("ship3v");
    $("#aiBoard td").removeClass("ship4h");
    $("#aiBoard td").removeClass("ship4v");
    $("#aiBoard td").removeClass("ship5");
}

function check(coordinate){
    if ((board[coordinate] != 0 && board[coordinate] !=  undefined) || (board[coordinate+1] != 0 && board[coordinate+1] !=  undefined) ||
    (board[coordinate-1] != 0 && board[coordinate-1] !=  undefined) ||
    (board[coordinate+10] != 0 && board[coordinate+10] !=  undefined) ||
    (board[coordinate-10] != 0 && board[coordinate-10] !=  undefined)){
    console.log("doesn't pass")
    checkArray.push("failed")
    }
    else {console.log("passes");}
} // end function check

function aiCheck(coordinate){
    if ((aiBoard[coordinate] != 0 && aiBoard[coordinate] !=  undefined) || (aiBoard[coordinate+1] != 0 && aiBoard[coordinate+1] !=  undefined) ||
    (aiBoard[coordinate-1] != 0 && aiBoard[coordinate-1] !=  undefined) ||
    (aiBoard[coordinate+10] != 0 && aiBoard[coordinate+10] !=  undefined) ||
    (aiBoard[coordinate-10] != 0 && aiBoard[coordinate-10] !=  undefined)){
    console.log("doesn't pass")
    checkArray.push("failed")
    }
    else {console.log("passes");}
} // end function check

function place5h(){
  var coordinate1 = Math.floor(Math.random() * 10)
  var coordinate2 = Math.floor(Math.random() * 6)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

  console.log("the 5h coordinate is now: " + coordinate)

  //place 5h ship on board array
  for (i=0; i <5; i++){
  board[coordinate + i] = ship5
 $("#"+ coordinate1+ (coordinate2+i)).addClass("ship5")
  console.log("placing ship at " + (coordinate + i))
  } // end for

  // Give those 5 squares on the table the class "ship5"




} // end place5h function

function aiPlace5h(){
  var coordinate1 = Math.floor(Math.random() * 10)
  var coordinate2 = Math.floor(Math.random() * 6)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

  console.log("the 5h coordinate is now: " + coordinate)

  //place 5h ship on board array
  for (i=0; i <5; i++){
  aiBoard[coordinate + i] = ship5
 // $("#"+ coordinate1+ (coordinate2+i)).addClass("ship5")
 $("#aiBoard td").eq(coordinate + i).addClass("aiShip5");

  console.log("placing ship at " + (coordinate + i))
  } // end for

  // Give those 5 squares on the table the class "ship5"




} // end place5h function


function place5v(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 6)
  var coordinate2 = Math.floor(Math.random() * 10)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

  console.log("the 5v coordinate is now: " + coordinate)
      console.log("PLACE 5v SHIP")
      //place 5v ship on board array
      board[coordinate] = ship5
      $("#"+ coordinate1+ (coordinate2)).addClass("ship5")
      console.log("placing ship at " + (coordinate))
      board[coordinate+10] = ship5
      $("#"+ (coordinate1+1)+ (coordinate2)).addClass("ship5")
      console.log("placing ship at " + (coordinate+10))
      board[coordinate+20] = ship5
    //   $("#"+ (coordinate+20)).addClass("ship5")
      $("#"+ (coordinate1+2)+ (coordinate2)).addClass("ship5")
      console.log("placing ship at " + (coordinate+20))
      board[coordinate+30] = ship5
    //   $("#"+ (coordinate+30)).addClass("ship5")
      $("#"+ (coordinate1+3)+ (coordinate2)).addClass("ship5")
      console.log("placing ship at " + (coordinate+30))
      board[coordinate+40] = ship5
      $("#"+ (coordinate1+4)+ (coordinate2)).addClass("ship5")

    //   $("#"+ (coordinate+40)).addClass("ship5")
      console.log("placing ship at " + (coordinate+40))




} // end place5v function

function aiPlace5v(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 6)
  var coordinate2 = Math.floor(Math.random() * 10)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

  console.log("the 5v coordinate is now: " + coordinate)
      console.log("PLACE 5v SHIP")
      //place 5v ship on board array
      aiBoard[coordinate] = ship5
    //   $("#"+ coordinate1+ (coordinate2)).addClass("ship5")
      $("#aiBoard td").eq(coordinate).addClass("aiShip5");

      console.log("placing ship at " + (coordinate))
      aiBoard[coordinate+10] = ship5
    //   $("#"+ (coordinate1+1)+ (coordinate2)).addClass("ship5")
      $("#aiBoard td").eq(coordinate + 10).addClass("aiShip5");

      console.log("placing ship at " + (coordinate+10))
      aiBoard[coordinate+20] = ship5
    //   $("#"+ (coordinate+20)).addClass("ship5")
    //   $("#"+ (coordinate1+2)+ (coordinate2)).addClass("ship5")
      $("#aiBoard td").eq(coordinate + 20).addClass("aiShip5");

      console.log("placing ship at " + (coordinate+20))
      aiBoard[coordinate+30] = ship5
    //   $("#"+ (coordinate+30)).addClass("ship5")
    //   $("#"+ (coordinate1+3)+ (coordinate2)).addClass("ship5")
      $("#aiBoard td").eq(coordinate + 30).addClass("aiShip5");

      console.log("placing ship at " + (coordinate+30))
      aiBoard[coordinate+40] = ship5
    //   $("#"+ (coordinate1+4)+ (coordinate2)).addClass("ship5")
      $("#aiBoard td").eq(coordinate + 40).addClass("aiShip5");


    //   $("#"+ (coordinate+40)).addClass("ship5")
      console.log("placing ship at " + (coordinate+40))




} // end place5v function

function place4h(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 10)
  var coordinate2 = Math.floor(Math.random() * 7)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

  console.log("the 4h coordinate is now: " + coordinate)
  check(coordinate)
  check(coordinate + 1)
  check(coordinate + 2)
  check(coordinate + 3)
  timeout ++
  if (checkArray.includes("failed") && timeout <50){
      console.log("call place4h again, timeout is " + timeout)
      place4h()
  }else if (timeout<50){
      console.log("PLACE 4h SHIP")
      //place 4h ship on board array
      for (i=0; i <4; i++){
      board[coordinate + i] = ship4h
    // $("#"+ (coordinate+i)).addClass("ship4")
    // $("#"+ (coordinate1)+ (coordinate2+i)).addClass("ship4")
    $("#"+ coordinate1+ (coordinate2+i)).addClass("ship4h")

      console.log("placing ship at " + (coordinate + i))
      } // end for
  } // end else
  else{console.log("CANNOT place 4h Ship!")
  notPlaced++
  } //end else
} // end place4h function

function aiPlace4h(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 10)
  var coordinate2 = Math.floor(Math.random() * 7)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

  console.log("the 4h coordinate is now: " + coordinate)
  aiCheck(coordinate)
  aiCheck(coordinate + 1)
  aiCheck(coordinate + 2)
  aiCheck(coordinate + 3)
  timeout ++
  if (checkArray.includes("failed") && timeout <50){
      console.log("call place4h again, timeout is " + timeout)
      aiPlace4h()
  }else if (timeout<50){
      console.log("PLACE 4h SHIP")
      //place 4h ship on board array
      for (i=0; i <4; i++){
      aiBoard[coordinate + i] = ship4h
    // $("#"+ (coordinate+i)).addClass("ship4")
    // $("#"+ (coordinate1)+ (coordinate2+i)).addClass("ship4")
    // $("#"+ coordinate1+ (coordinate2+i)).addClass("ship4h")
    $("#aiBoard td").eq(coordinate + i).addClass("aiShip4h");


      console.log("placing ship at " + (coordinate + i))
      } // end for
  } // end else
  else{console.log("CANNOT place 4h Ship!")
  notPlaced++
  } //end else
} // end place4h function


function place4v(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 7)
  var coordinate2 = Math.floor(Math.random() * 10)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

  console.log("the 4v coordinate is now: " + coordinate)
  check(coordinate)
  check(coordinate + 10)
  check(coordinate + 20)
  check(coordinate + 30)
  timeout ++
  if (checkArray.includes("failed")  && timeout <50){
      console.log("call place4v again, timeout is " + timeout)
      place4v()
  }else if (timeout < 50){
      console.log("PLACE 4v SHIP")
      //place 4v ship on board array
      board[coordinate] = ship4v
    //   $("#"+ (coordinate)).addClass("ship4")
      $("#"+ (coordinate1)+ (coordinate2)).addClass("ship4v")



      console.log("placing ship at " + (coordinate))
      board[coordinate+10] = ship4v
    //   $("#"+ (coordinate+10)).addClass("ship4")
      $("#"+ (coordinate1+1)+ (coordinate2)).addClass("ship4v")
      console.log("placing ship at " + (coordinate+10))
      board[coordinate+20] = ship4v
    //   $("#"+ (coordinate+20)).addClass("ship4")
      $("#"+ (coordinate1+2)+ (coordinate2)).addClass("ship4v")
      console.log("placing ship at " + (coordinate+20))
      board[coordinate+30] = ship4v
    //   $("#"+ (coordinate+30)).addClass("ship4")
      $("#"+ (coordinate1+3)+ (coordinate2)).addClass("ship4v")
      console.log("placing ship at " + (coordinate+30))
  } // end else
    else{console.log("CANNOT place 4v Ship!")
    notPlaced++} //end else
} // end place4v function

function aiPlace4v(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 7)
  var coordinate2 = Math.floor(Math.random() * 10)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

  console.log("the 4v coordinate is now: " + coordinate)
  aiCheck(coordinate)
  aiCheck(coordinate + 10)
  aiCheck(coordinate + 20)
  aiCheck(coordinate + 30)
  timeout ++
  if (checkArray.includes("failed")  && timeout <50){
      console.log("call place4v again, timeout is " + timeout)
      aiPlace4v()
  }else if (timeout < 50){
      console.log("PLACE 4v SHIP")
      //place 4v ship on board array
      aiBoard[coordinate] = ship4v
    //   $("#"+ (coordinate)).addClass("ship4")
    //   $("#"+ (coordinate1)+ (coordinate2)).addClass("ship4v")

      $("#aiBoard td").eq(coordinate).addClass("aiShip4v");


      console.log("placing ship at " + (coordinate))
      aiBoard[coordinate+10] = ship4v
    //   $("#"+ (coordinate+10)).addClass("ship4")
    //   $("#"+ (coordinate1+1)+ (coordinate2)).addClass("ship4v")

      $("#aiBoard td").eq(coordinate + 10).addClass("aiShip4v");

      console.log("placing ship at " + (coordinate+10))
      aiBoard[coordinate+20] = ship4v
    //   $("#"+ (coordinate+20)).addClass("ship4")
    //   $("#"+ (coordinate1+2)+ (coordinate2)).addClass("ship4v")
      $("#aiBoard td").eq(coordinate + 20).addClass("aiShip4v");

      console.log("placing ship at " + (coordinate+20))
      aiBoard[coordinate+30] = ship4v
    //   $("#"+ (coordinate+30)).addClass("ship4")
    //   $("#"+ (coordinate1+3)+ (coordinate2)).addClass("ship4v")
      $("#aiBoard td").eq(coordinate + 30).addClass("aiShip4v");

      console.log("placing ship at " + (coordinate+30))
  } // end else
    else{console.log("CANNOT place 4v Ship!")
    notPlaced++} //end else
} // end place4v function


function place3h(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 10)
  var coordinate2 = Math.floor(Math.random() * 6)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

  console.log("the 3h coordinate is now: " + coordinate)
  check(coordinate)
  check(coordinate + 1)
  check(coordinate + 2)
  timeout++
  if (checkArray.includes("failed")  && timeout <50){
      console.log("call place3h again, timeout is " + timeout)
      place3h()
  }else if (timeout < 50){
      console.log("PLACE 3h SHIP")
      //place 3h ship on board array
      for (i=0; i <3; i++){
      board[coordinate + i] = ship3h
      $("#"+ (coordinate1)+ (coordinate2+i)).addClass("ship3h")

      console.log("placing ship at " + (coordinate + i))
      } // end for
  } // end else
    else{console.log("CANNOT place 3h Ship!")
    notPlaced++} //end else}
} // end place3h function


function aiPlace3h(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 10)
  var coordinate2 = Math.floor(Math.random() * 6)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

  console.log("the 3h coordinate is now: " + coordinate)
  aiCheck(coordinate)
  aiCheck(coordinate + 1)
  aiCheck(coordinate + 2)
  timeout++
  if (checkArray.includes("failed")  && timeout <50){
      console.log("call place3h again, timeout is " + timeout)
      aiPlace3h()
  }else if (timeout < 50){
      console.log("PLACE 3h SHIP")
      //place 3h ship on board array
      for (i=0; i <3; i++){
      aiBoard[coordinate + i] = ship3h
    //   $("#"+ (coordinate1)+ (coordinate2+i)).addClass("ship3h")
      $("#aiBoard td").eq(coordinate + i).addClass("aiShip3h");


      console.log("placing ship at " + (coordinate + i))
      } // end for
  } // end else
    else{console.log("CANNOT place 3h Ship!")
    notPlaced++} //end else}
} // end place3h function

function place3v(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 8)
  var coordinate2 = Math.floor(Math.random() * 10)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

  console.log("the 3v coordinate is now: " + coordinate)
  check(coordinate)
  check(coordinate + 10)
  check(coordinate + 20)
  timeout
  if (checkArray.includes("failed")  && timeout <50){
      console.log("call place3v again, timeout is " + timeout)
      place3v()
  }else if (timeout < 50){
      console.log("PLACE 3v SHIP")
      //place 4v ship on board array
      board[coordinate] = ship3v
     $("#"+ (coordinate1)+ (coordinate2)).addClass("ship3v")
    //   $("#"+ (coordinate)).addClass("ship3")
      console.log("placing ship at " + (coordinate))
      board[coordinate+10] = ship3v
    //   $("#"+ (coordinate+10)).addClass("ship3")
      $("#"+ (coordinate1+1)+ (coordinate2)).addClass("ship3v")
      console.log("placing ship at " + (coordinate+10))
      board[coordinate+20] = ship3v
    //   $("#"+ (coordinate+20)).addClass("ship3")
      $("#"+ (coordinate1+2)+ (coordinate2)).addClass("ship3v")
      console.log("placing ship at " + (coordinate+20))
  } // end else
    else{console.log("CANNOT place 3v Ship!")
    notPlaced++} //end else}
} // end place3v function

function aiPlace3v(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 8)
  var coordinate2 = Math.floor(Math.random() * 10)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

  console.log("the 3v coordinate is now: " + coordinate)
  aiCheck(coordinate)
  aiCheck(coordinate + 10)
  aiCheck(coordinate + 20)
  timeout
  if (checkArray.includes("failed")  && timeout <50){
      console.log("call place3v again, timeout is " + timeout)
      aiPlace3v()
  }else if (timeout < 50){
      console.log("PLACE 3v SHIP")
      //place 4v ship on board array
      aiBoard[coordinate] = ship3v
    //  $("#"+ (coordinate1)+ (coordinate2)).addClass("ship3v")
     $("#aiBoard td").eq(coordinate).addClass("aiShip3v");

    //   $("#"+ (coordinate)).addClass("ship3")
      console.log("placing ship at " + (coordinate))
      aiBoard[coordinate+10] = ship3v
    //   $("#"+ (coordinate+10)).addClass("ship3")
    //   $("#"+ (coordinate1+1)+ (coordinate2)).addClass("ship3v")
      $("#aiBoard td").eq(coordinate + 10).addClass("aiShip3v");

      console.log("placing ship at " + (coordinate+10))
      aiBoard[coordinate+20] = ship3v
    //   $("#"+ (coordinate+20)).addClass("ship3")
    //   $("#"+ (coordinate1+2)+ (coordinate2)).addClass("ship3v")
      $("#aiBoard td").eq(coordinate + 20).addClass("aiShip3v");

      console.log("placing ship at " + (coordinate+20))
  } // end else
    else{console.log("CANNOT place 3v Ship!")
    notPlaced++} //end else}
} // end place3v function


function place2h(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 10)
  var coordinate2 = Math.floor(Math.random() * 5)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;
  console.log("the 2h coordinate is now: " + coordinate)
  check(coordinate)
  check(coordinate + 1)
  timeout++
  if (checkArray.includes("failed")  && timeout <50){
      console.log("call place2h again, timeout is " + timeout)
      place2h()
  }else if (timeout < 50){
      console.log("PLACE 2h SHIP")
      //place 2h ship on board array
      for (i=0; i <2; i++){
      board[coordinate + i] = ship2h
    //   $("#"+ (coordinate + i)).addClass("ship2")
      $("#"+ (coordinate1)+ (coordinate2 + i)).addClass("ship2h")

      console.log("placing ship at " + (coordinate + i))
      } // end for
  } // end else
    else{console.log("CANNOT place 2h Ship!")
    notPlaced++} //end else}
} // end place2h function

function aiPlace2h(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 10)
  var coordinate2 = Math.floor(Math.random() * 5)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;
  console.log("the 2h coordinate is now: " + coordinate)
  aiCheck(coordinate)
  aiCheck(coordinate + 1)
  timeout++
  if (checkArray.includes("failed")  && timeout <50){
      console.log("call place2h again, timeout is " + timeout)
      aiPlace2h()
  }else if (timeout < 50){
      console.log("PLACE 2h SHIP")
      //place 2h ship on board array
      for (i=0; i <2; i++){
      aiBoard[coordinate + i] = ship2h
    //   $("#"+ (coordinate + i)).addClass("ship2")
    //   $("#"+ (coordinate1)+ (coordinate2 + i)).addClass("ship2h")

      $("#aiBoard td").eq(coordinate + i).addClass("aiShip2h");


      console.log("placing ship at " + (coordinate + i))
      } // end for
  } // end else
    else{console.log("CANNOT place 2h Ship!")
    notPlaced++} //end else}
} // end place2h function


function place2v(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 9)
  var coordinate2 = Math.floor(Math.random() * 10)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

  console.log("the 2v coordinate is now: " + coordinate)
  check(coordinate)
  check(coordinate + 10)
  timeout++
  if (checkArray.includes("failed")  && timeout <50){
      console.log("call place2v again, timeout is " + timeout)
      place2v()
  }else if (timeout < 50){
      console.log("PLACE 2v SHIP")
      //place 2v ship on board array
      board[coordinate] = ship2v
    //   $("#"+ (coordinate)).addClass("ship2")
      $("#"+ (coordinate1)+ (coordinate2)).addClass("ship2v")
      console.log("placing ship at " + (coordinate))
      board[coordinate+10] = ship2v
    //   $("#"+ (coordinate+10)).addClass("ship4")
      $("#"+ (coordinate1+1)+ (coordinate2)).addClass("ship2v")
      console.log("placing ship at " + (coordinate+10))

  } // end else
    else{console.log("CANNOT place 2v Ship!")
    notPlaced++} //end else}
} // end place2v function


function aiPlace2v(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 9)
  var coordinate2 = Math.floor(Math.random() * 10)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

  console.log(" !!!!! the ai 2v coordinate is now: " + coordinate)
  aiCheck(coordinate)
  aiCheck(coordinate + 10)
  timeout++
  if (checkArray.includes("failed")  && timeout <50){
      console.log("call ai place2v again, timeout is " + timeout)
      aiPlace2v()
  }else if (timeout < 50){
      console.log("!!!!!!! PLACE ai 2v SHIP")
      //place 2v ship on board array
      aiBoard[coordinate] = ship2v
    //   $("#"+ (coordinate)).addClass("ship2")
    //   $("#"+ (coordinate1)+ (coordinate2)).addClass("ship2v")
      $("#aiBoard td").eq(coordinate).addClass("aiShip2v");
      console.log("ai !!!!! placing ship at " + (coordinate))
      aiBoard[coordinate+10] = ship2v
    //   $("#"+ (coordinate+10)).addClass("ship4")
    //   $("#"+ (coordinate1+1)+ (coordinate2)).addClass("ship2v")
      $("#aiBoard td").eq(coordinate + 10).addClass("aiShip2v");
      console.log("placing ship at " + (coordinate+10))
  } // end else
    else{console.log("CANNOT place 2v Ship!")
    notPlaced++} //end else}
} // end place2v function



function place1(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 10)
  var coordinate2 = Math.floor(Math.random() * 4)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

  check(coordinate)
  console.log("the 1 coordinate is now: " + coordinate)
  // check(coordinate)
  timeout++
  if (checkArray.includes("failed")  && timeout <40){
      console.log("call place1 again, timeout is " + timeout)
      place1()
  }else if (timeout < 39){
      console.log("PLACE 1 SHIP")
      //place 1 ship on board array
      board[coordinate] = ship1
    //   $("#"+ (coordinate)).addClass("ship1")
      $("#"+ (coordinate1)+ (coordinate2)).addClass("ship1")
      console.log("placing ship1 at " + (coordinate))
  } // end else
    else{console.log("CANNOT place 1 Ship!")
    notPlaced++} //end else}
} // end place1 function


function aiPlace1(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 10)
  var coordinate2 = Math.floor(Math.random() * 4)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

  aiCheck(coordinate)
  console.log("the 1 coordinate is now: " + coordinate)
  // check(coordinate)
  timeout++
  if (checkArray.includes("failed")  && timeout <70){
      console.log("call place1 again, timeout is " + timeout)
      aiPlace1()
  }else if (timeout < 70){
      console.log("PLACE 1 SHIP")
      //place 1 ship on board array
      aiBoard[coordinate] = ship1
     $("#aiBoard td").eq(coordinate).addClass("aiShip1");
      console.log("placing ship1 at " + (coordinate))
  } // end else
    else{console.log("CANNOT place 1 Ship!")
    notPlaced++} //end else}
} // end place1 function


//build board for view in html
//eq(i) gets element of position i
function makeTable() {
  for (i = 0; i < 10; i++){
    $("#board").append("<tr>")
    $("tr").eq(i).attr("id", "row" + i) //for tr[i] we add an id="row[i]"
      for (j = 0; j<10; j++){
        $("#board tr").eq(i).append("<td id=" + i + j + ">") //for each tr we add 10 tds and give tds an id="[i][j]"
      }
  }

  for (i = 0; i < 10; i++){
    $("#aiBoard").append("<tr>")
    $("tr").eq(i).attr("id", "row" + i) //for tr[i] we add an id="row[i]"
      for (j = 0; j<10; j++){
        $("#aiBoard tr").eq(i).append("<td id=" + i + j + ">") //for each tr we add 10 tds and give tds an id="[i][j]"
      }
  }
}

//show ships function
function showAllShips() {
  if($("#board td").hasClass("ship5")) {
    console.log("added ship5show")
    $(".ship5").addClass("ship5show")
  }
  if ($("#board td").hasClass("ship4h")) {
    console.log("added ship4hshow")
    $(".ship4h").addClass("ship4hshow")
  }
  if ($("#board td").hasClass("ship4v")) {
    console.log("added ship4vshow")
    $(".ship4v").addClass("ship4vshow")
  }
  if($("#board td").hasClass("ship3h")) {
    console.log("added ship3hshow")
    $(".ship3h").addClass("ship3hshow")
  }
  if($("#board td").hasClass("ship3v")) {
    console.log("added ship3vshow")
    $(".ship3v").addClass("ship3vshow")
  }
  if($("#board td").hasClass("ship2h")) {
    console.log("added ship2hshow")
    $(".ship2h").addClass("ship2hshow")
  }
  if($("#board td").hasClass("ship2v")) {
    console.log("added ship2vshow")
    $(".ship2v").addClass("ship2vshow")
  }
  if($("#board td").hasClass("ship1")) {
    console.log("added ship1show")
    $(".ship1").addClass("ship1show")
  }
  if($("#board td").hasClass("hit")){
    $(".hit").addClass("hit2")
  }
} // end showAllShips

function aiShowAllShips() {
  if($("#aiBoard td").hasClass("aiShip5")) {
    console.log("added ship5show")
    $(".aiShip5").addClass("ship5show")
  }
  if ($("#aiBoard td").hasClass("aiShip4h")) {
    console.log("added ship4hshow")
    $(".aiShip4h").addClass("ship4hshow")
  }
  if ($("#aiBoard td").hasClass("aiShip4v")) {
    console.log("added ship4vshow")
    $(".aiShip4v").addClass("ship4vshow")
  }
  if($("#aiBoard td").hasClass("aiShip3h")) {
    console.log("added ship3hshow")
    $(".aiShip3h").addClass("ship3hshow")
  }
  if($("#aiBoard td").hasClass("aiShip3v")) {
    console.log("added ship3vshow")
    $(".aiShip3v").addClass("ship3vshow")
  }
  if($("#aiBoard td").hasClass("aiShip2h")) {
    console.log("added ship2hshow")
    $(".aiShip2h").addClass("ship2hshow")
  }
  if($("#aiBoard td").hasClass("aiShip2v")) {
    console.log("added ship2vshow")
    $(".aiShip2v").addClass("ship2vshow")
  }
  if($("#aiBoard td").hasClass("aiShip1")) {
    console.log("added ship1show")
    $(".aiShip1").addClass("ship1show")
  }
  if($("#aiBoard td").hasClass("aiHit")){
    $(".aiHit").addClass("hit2")
  }
} // end showAllShips




makeTable()
console.log("made the table for view")


console.log("NotPlaced is: " + notPlaced)
//Controller***********************************************
//********************************************************
//********************************************************
//********************************************************
//********************************************************
//********************************************************

//Controller***********************************************
//***********************************************

$(document).ready(function(){
  //on load you see table
  makeTable() //create board
  $("td").off("click"); //clicking off until start button pressed

  //Once start button clicked all this happens:
  $("#start").click(function(){

//for original game:
    //make board all light blue: (reset)
  shipRemove()

    //setting variables to 0/empty
    shipArray=[];
    checkArray = []
    hits=0;
    torpedoesLeft=100;
    notPlaced = 0;
    shipsLeft = 8;
    board.fill(0)
    console.log("board now zeroes");
    h2 = 0
    v2 = 0
    h3 = 0
    v3 = 0
    h4 = 0
    v4 = 0
    hv5 = 0

    aiH2 = 0
    aiV2 = 0
    aiH3 = 0
    aiV3 = 0
    aiH4 = 0
    aiV4 = 0
    aiHv5 = 0

console.log("torpedoesLeft is " + torpedoesLeft)
console.log("shipsLeft is " + shipsLeft)
console.log("hits is " + hits)




    // clear text on screen
    $("#hitTracker").text("Hits: " + hits);
    $("#torpedoTracker").text("Cannonballs left: " + torpedoesLeft);
    $("#shipTracker").text("Ships left: " + shipsLeft);

    $("#winLose").text("");

    //hide start button until game over
    $("#start").hide();
    $("#instructions").hide();

    choose5 = Math.floor(Math.random() * 2)

    ///***randomly decide to place EITHER a 5 block horizontal ship OR a 5 block vertical ship
    if(choose5 ==0){
       place5h()
       console.log("5h ship placed")
     }else{
       place5v()
       console.log("5v ship placed")
     }
//Get board:

    timeout = 0
    place4h()
    timeout = 0
    place4v()
    timeout = 0
    place3h()
    timeout = 0
    place3v()
    timeout = 0
    place2h()
    timeout = 0
    place2v()
    timeout = 0
    place1()

//Get ai board
choose5 = Math.floor(Math.random() * 2)

    if(choose5 ==0){
       aiPlace5h()
       console.log("5h ship placed")
     }else{
       aiPlace5v()
       console.log("5v ship placed")
     }

    timeout = 0
    aiPlace4h()
    timeout = 0
    aiPlace4v()
    timeout = 0
    aiPlace3h()
    timeout = 0
    aiPlace3v()
    timeout = 0
    aiPlace2h()
    timeout = 0
    aiPlace2v()
    timeout = 0
    aiPlace1()

    aiShowAllShips()



    //each time user clicks specific square:
    $("#board td").click(function(){
      currentTd = $(this).attr("id") //grab id of td clicked
      dig0 = currentTd[0] //split td, get first digit
      dig1 = currentTd[1] //split td, get 2nd digit
      console.log("After click, currentTd is " + currentTd)
      console.log("this is " + $(this).attr("id"))
      console.log("board[currentTd] is " + board[currentTd])
      console.log("dig0 is: " + dig0 + " and dig1 is: " + dig1)

// board[currentTd] returning undefined  in 0 row if currentTd has a 0 in front, so get rid of 0
        if (currentTd < 10){
            currentTd = dig1;
        }

    //   turn square red or blue if ship is hit or not
      if (board[currentTd] === ship1 || board[currentTd] === ship2h || board[currentTd] === ship2v || board[currentTd] === ship3h || board[currentTd] === ship3v || board[currentTd] === ship4h || board[currentTd] === ship4v || board[currentTd] === ship5 ){



        //turns square red
        $(this).addClass("hit");
        $(this).off("click");
        hits ++




//////////////////////////////////////////////////////////////////////////////

if (board[currentTd] === ship1){
   shipsLeft--
   audio = $("#abandonShip")[0];
   audio.play()
   $("#shipTracker").text("Ships left: " + shipsLeft);
   console.log("1 block ship hit, shipsLeft is: " + shipsLeft)
     $(".ship1").addClass("ship1show")
}

if (board[currentTd] === ship2h){  // if the 2h ship is hit
   h2++                            //increment 2h counter
   if (h2 === 2){                 //if both block of 2h ship is hit
   shipsLeft--                    //decrement shipsLeft
   audio = $("#abandonShip")[0];
   audio.play()
   $("#shipTracker").text("Ships left: " + shipsLeft);
   $(".ship2h").addClass("ship2hshow")
   console.log("currentTd is " + currentTd)
   console.log("this is " + $(this).attr("id"))
   console.log("2 block ship hit, shipsLeft is: " + shipsLeft)
   } else {
       audio = $("#fire")[0];
       audio.play();
       console.log("currentTd is " + currentTd)
       console.log("this is " + $(this).attr("id"))
   }
}

if (board[currentTd] === ship2v){  // if the 2v ship is hit
   v2++                            //increment 2v counter
   if (v2 === 2){                 //if both block of 2v ship is hit
   shipsLeft--                    //decrement shipsLeft
   audio = $("#abandonShip")[0];
   audio.play()
   $("#shipTracker").text("Ships left: " + shipsLeft);
   $(".ship2v").addClass("ship2vshow")
   console.log("2 block ship hit, shipsLeft is: " + shipsLeft)
   }else {
       audio = $("#fire")[0];
       audio.play();
       console.log("currentTd is " + currentTd)
       console.log("this is " + $(this).attr("id"))
   }
}

if (board[currentTd] === ship3h){  // if the 3h ship is hit
   h3++                            //increment 3h counter
   if (h3 === 3){                 //if both block of 3h ship is hit
   shipsLeft--                    //decrement shipsLeft
   audio = $("#abandonShip")[0];
   audio.play()
   $("#shipTracker").text("Ships left: " + shipsLeft);
   $(".ship3h").addClass("ship3hshow")
   console.log("3 block ship hit, shipsLeft is: " + shipsLeft)
   }else {
       audio = $("#fire")[0];
       audio.play();
       console.log("currentTd is " + currentTd)
       console.log("this is " + $(this).attr("id"))
   }
}

if (board[currentTd] === ship3v){  // if the 3v ship is hit
   v3++                            //increment 3v counter
   if (v3 === 3){                 //if both block of 3v ship is hit
   shipsLeft--                    //decrement shipsLeft
   audio = $("#abandonShip")[0];
   audio.play()
   $("#shipTracker").text("Ships left: " + shipsLeft);
   console.log("3 block ship hit, shipsLeft is: " + shipsLeft)
   $(".ship3v").addClass("ship3vshow")

   }else {
       audio = $("#fire")[0];
       audio.play();
       console.log("currentTd is " + currentTd)
       console.log("this is " + $(this).attr("id"))
   }
}

if (board[currentTd] === ship4h){  // if the 4h ship is hit
   h4++                            //increment 4h counter
   if (h4 === 4){                 //if both block of 4h ship is hit
   shipsLeft--                    //decrement shipsLeft
   audio = $("#abandonShip")[0];
   audio.play()
   $("#shipTracker").text("Ships left: " + shipsLeft);
   console.log("4 block ship hit, shipsLeft is: " + shipsLeft)
   $(".ship4h").addClass("ship4hshow")
   }else {
       audio = $("#fire")[0];
       audio.play();
       console.log("currentTd is " + currentTd)
       console.log("this is " + $(this).attr("id"))
   }
}

if (board[currentTd] === ship4v){  // if the 4v ship is hit
   v4++                            //increment 4v counter
   if (v4 === 4){                 //if both block of 4v ship is hit
   shipsLeft--                    //decrement shipsLeft
   audio = $("#abandonShip")[0];
   audio.play()
   $("#shipTracker").text("Ships left: " + shipsLeft);
   console.log("4 block ship hit, shipsLeft is: " + shipsLeft)
   $(".ship4v").addClass("ship4vshow")
   }else {
       audio = $("#fire")[0];
       audio.play();
       console.log("currentTd is " + currentTd)
       console.log("this is " + $(this).attr("id"))

   }
}

if (board[currentTd] === ship5){  // if the 5h or 5v ship is hit
   hv5++                            //increment 5hv counter
   if (hv5 === 5){                 //if both block of 5h ship is hit
   shipsLeft--                    //decrement shipsLeft
   audio = $("#abandonShip")[0];
   audio.play()
   $("#shipTracker").text("Ships left: " + shipsLeft);
   console.log("5 block ship hit, shipsLeft is: " + shipsLeft)
   $(".ship5").addClass("ship5show")
   }else {
       audio = $("#fire")[0];
       audio.play();
       console.log("currentTd is " + currentTd)
       console.log("this is " + $(this).attr("id"))

   }
}




/////////////////////////////////////////////////////////////////////////////

        $("#hitTracker").text("Hits: " + hits)
        if (shipsLeft === 0) {
          $("#winLose").text("You Won! You sank all pirate ships with 50 cannonballs");
          $("td").off("click");
          console.log("calling showAllShips function because won")
          showAllShips()
          $(".btn").show(); //show start button
        }
      } else { //turns square dark blue (miss)

      $(this).addClass("torpedoed");
      console.log("currentTd is " + currentTd)
      $(this).off("click"); //can't click same square twice
      }
    torpedoesLeft--;
    //update torpedo count on screen
    $("#torpedoTracker").text("Cannonballs left: " + torpedoesLeft);
    //check if used 25 torpedos.  Game over, show start button, turn board click off
    if(torpedoesLeft === 0){
     if (shipsLeft == 0){
        $("#winLose").text("You Won! You sank all pirate ships with 50 cannonballs");
        $("td").off("click");
     }
     else if (shipsLeft ==1){
     $("#winLose").text("Almost! Only one pirate ship left marauding the high seas. Set sail and try again!");
     }else {
     $("#winLose").text("There are still " + shipsLeft + " pirate ships left marauding the high seas. Set sail and try again!");
     }


      $("td").off("click");
      console.log("callind showAllShips if you lose")
      showAllShips() //after game over, show ships they did not hit
      $("#start").show();
    }


///////////////////////End of regular portion/////////////////////////////////////////////
///////////Beginning of Ai Portion////////////////////////////////////////////////////////
//Pause to emulation real life:
console.log("Right before time out")
var delayMillis = 1000; //1 second

setTimeout(function() {
  //your code to be executed after 1 second







console.log("aiLostShips is: " + aiLostShips)

if (aiHits === 0 ){ // get a random coordinate

    aiRandom = aiLostShips.length - 1;

    console.log("aiRandom is " + aiRandom )
    x = Math.floor(Math.random() * aiRandom)

    console.log("x is "+ x + " after x = aiLostShips[Math.floor(Math.random() * aiRandom)] ")

    aiCurrentTd = aiLostShips[x]
    aiLastTd = aiCurrentTd

    console.log("from math.random, aiCurrentTd is " + aiCurrentTd)

    aiShotTds.push(aiCurrentTd)
    console.log("aiShotTds is  " + aiShotTds)

    y = aiLostShips.indexOf(x)

    aiLostShips.splice(y, 1);  // removes the x element of aiLostShips


    console.log("after splicing, aiLostShips is: " + aiLostShips)

    var temp = aiCurrentTd.toString()
    if (temp < 10){
        aiDig0 = "0"
        aiDig1 = temp
    } else {
        aiDig0 = temp[0] //split td, get first digit
        aiDig1 = temp[1] //split td, get 2nd digit
    }

}  //end aiHits =0   // get a random number

if (aiHits > 0){

if(!(ai1Direction === "sunk")){
    console.log("calling sink1")
  sink1()}
  //
  // sink2()
  // sink3()
  // sink4()
  // sink5()
  // sink6()
  // sink7()
  // sink8()
}

function sink2(){}

function sink1(){
        aiFound1.push(aiLastTd)
        if ($("#aiBoard td").eq(aiLastTd).hasClass("aiShip1")){
        ai1Direction = "sunk" // if it's a one-block it's sunk
        sink2()
        } else if
            ($("#aiBoard td").eq(aiLastTd).hasClass("aiShip2h") &&
            aiFound1.length === 2)
            { ai1Direction = "sunk" // if it's a 2-block it's sunk
            sink2()
        } else if
            ($("#aiBoard td").eq(aiLastTd).hasClass("aiShip2v") &&
            aiFound1.length === 2)
            { ai1Direction = "sunk" // if it's a 2-block it's sunk
            sink2()
        } else if
            ($("#aiBoard td").eq(aiLastTd).hasClass("aiShip3h") &&
            aiFound1.length === 3)
            { ai1Direction = "sunk"// if it's a 2-block it's sunk
            sink2()
        } else if
            ($("#aiBoard td").eq(aiLastTd).hasClass("aiShip3v") &&
            aiFound1.length === 3)
            { ai1Direction = "sunk" // if it's a 2-block it's sunk
            sink2()
        } else if
            ($("#aiBoard td").eq(aiLastTd).hasClass("aiShip4h") &&
            aiFound1.length === 4)
            { ai1Direction = "sunk" // if it's a 2-block it's sunk
            sink2()
        } else if
            ($("#aiBoard td").eq(aiLastTd).hasClass("aiShip4v") &&
            aiFound1.length === 4)
            { ai1Direction = "sunk" // if it's a 2-block it's sunk
            sink2()
        } else if
            ($("#aiBoard td").eq(aiLastTd).hasClass("aiShip5") &&
            aiFound1.length === 5)
            { ai1Direction = "sunk" // if it's a 2-block it's sunk
            sink2()
        } else {
            console.log("First ship isn't sunk, so time to figure out a coordinate by trying +1, -1, +10, -10")
            aiCurrentTd = 27
            aiDig0 = 2
            aiDig1 = 7
            console.log("aiCurrentTd set to 27 " + aiCurrentTd)
        }
    }  // end function sink1



//
// } // end if aiHits == 1
// board[currentTd] returning undefined  in 0 row if currentTd has a 0 in front, so get rid of 0

//   turn square red or blue if ship is hit or not
if (aiBoard[aiCurrentTd] === ship1 || aiBoard[aiCurrentTd] === ship2h || aiBoard[aiCurrentTd] === ship2v || aiBoard[aiCurrentTd] === ship3h || aiBoard[aiCurrentTd] === ship3v || aiBoard[aiCurrentTd] === ship4h || aiBoard[aiCurrentTd] === ship4v || aiBoard[aiCurrentTd] === ship5 ){



  //turns square red
  // $(this).addClass("hit");
  // // $(this).off("click");
  // $("#aiBoard td").addClass("hit");

  $("#aiBoard td").eq(aiDig0 + aiDig1).addClass("hit2");


  aiHits ++




//////////////////////////////////////////////////////////////////////////////

if (aiBoard[aiCurrentTd] === ship1){
aiShipsLeft--
$("#aiShipTracker").text("Ships left: " + aiShipsLeft);
}

if (aiBoard[aiCurrentTd]=== ship2h){  // if the 2h ship is hit
aiH2++                            //increment 2h counter
if (aiH2 === 2){                 //if both block of 2h ship is hit
aiShipsLeft--                    //decrement shipsLeft

$("#aiShipTracker").text("Ships left: " + aiShipsLeft);

} else {
 // audio = $("#fire")[0];
 // audio.play();
 // console.log("currentTd is " + currentTd)
 // console.log("this is " + $(this).attr("id"))
}
}

if (aiBoard[aiCurrentTd] === ship2v){  // if the 2v ship is hit
aiV2++                            //increment 2v counter
if (aiV2 === 2){                 //if both block of 2v ship is hit
aiShipsLeft--                    //decrement shipsLeft

$("#aiShipTracker").text("Ships left: " + aiShipsLeft);
// $(".ship2v").addClass("ship2vshow")
console.log("2 block ship hit, shipsLeft is: " + aiShipsLeft)
}else {
 // audio = $("#fire")[0];
 // audio.play();
 // console.log("currentTd is " + currentTd)
 // console.log("this is " + $(this).attr("id"))
}
}

if (aiBoard[aiCurrentTd] === ship3h){  // if the 3h ship is hit
aiH3++                            //increment 3h counter
if (aiH3 === 3){                 //if both block of 3h ship is hit
aiShipsLeft--                    //decrement shipsLeft

$("#aiShipTracker").text("Ships left: " + aiShipsLeft);
// $(".ship3h").addClass("ship3hshow")
// console.log("3 block ship hit, shipsLeft is: " + shipsLeft)
}else {
 // audio = $("#fire")[0];
 // audio.play();
 // console.log("currentTd is " + currentTd)
 // console.log("this is " + $(this).attr("id"))
}
}

if (aiBoard[aiCurrentTd] === ship3v){  // if the 3v ship is hit
aiV3++                            //increment 3v counter
if (aiV3 === 3){                 //if both block of 3v ship is hit
aiShipsLeft--                    //decrement shipsLeft

$("#aiShipTracker").text("Ships left: " + aiShipsLeft);
// console.log("3 block ship hit, shipsLeft is: " + aiShipsLeft)
// $(".ship3v").addClass("ship3vshow")

}else {
 // audio = $("#fire")[0];
 // audio.play();
 // console.log("currentTd is " + currentTd)
 // console.log("this is " + $(this).attr("id"))
}
}

if (aiBoard[aiCurrentTd] === ship4h){  // if the 4h ship is hit
aiH4++                            //increment 4h counter
if (aiH4 === 4){                 //if both block of 4h ship is hit
aiShipsLeft--                    //decrement shipsLeft

$("#aiShipTracker").text("Ships left: " + aiShipsLeft);
// console.log("4 block ship hit, shipsLeft is: " + shipsLeft)
// $(".ship4h").addClass("ship4hshow")
}else {
 // audio = $("#fire")[0];
 // audio.play();
 // console.log("currentTd is " + currentTd)
 // console.log("this is " + $(this).attr("id"))
}
}

if (aiBoard[aiCurrentTd]=== ship4v){  // if the 4v ship is hit
aiV4++                            //increment 4v counter
if (aiV4 === 4){                 //if both block of 4v ship is hit
aiShipsLeft--                    //decrement shipsLeft

$("#aiShipTracker").text("Ships left: " + aiShipsLeft);
// console.log("4 block ship hit, shipsLeft is: " + shipsLeft)
// $(".ship4v").addClass("ship4vshow")
}else {
 // audio = $("#fire")[0];
 // audio.play();
 // console.log("currentTd is " + currentTd)
 // console.log("this is " + $(this).attr("id"))

}
}

if (aiBoard[aiCurrentTd] === ship5){  // if the 5h or 5v ship is hit
aiHv5++                            //increment 5hv counter
if (aiHv5 === 5){                 //if both block of 5h ship is hit
aiShipsLeft--                    //decrement shipsLeft

$("#aiShipTracker").text("Ships left: " + aiShipsLeft);
// console.log("5 block ship hit, shipsLeft is: " + shipsLeft)
// $(".ship5").addClass("ship5show")
}else {
 // audio = $("#fire")[0];
 // audio.play();
 // console.log("currentTd is " + currentTd)
 // console.log("this is " + $(this).attr("id"))

}
}




/////////////////////////////////////////////////////////////////////////////

  $("#aiHitTracker").text("Hits: " + aiHits)
  if (aiShipsLeft === 0) {
    $("#winLose").text("The pirate won! He sank all your ships with 50 cannonballs");
    $("td").off("click");
    console.log("calling showAllShips function because won")
    showAllShips()
    $("#start").show(); //show start button
  }
} else { //turns square dark blue (miss)

// $("#"+ coordinate1+ (coordinate2+i)).addClass("ship5")
// $("#aiBoard" + aiDig0).addClass("torpedoed");

$("#aiBoard td").eq(aiDig0 + aiDig1).addClass("torpedoed");
console.log("aiCurrentTd is " + aiDig0 + aiDig1)
// $(this).off("click"); //can't click same square twice
}
aiTorpedoesLeft--;
//update torpedo count on screen
$("#aiTorpedoTracker").text("Cannonballs left: " + torpedoesLeft);
//check if used 25 torpedos.  Game over, show start button, turn board click off
if(aiTorpedoesLeft === 0){
if (aiShipsLeft == 0){
  $("#winLose").text("You Won! You sank all pirate ships with 50 cannonballs");
  $("td").off("click");
}
else if (aiShipsLeft ==1){
$("#winLose").text("Almost! Only one hero ship left patrolling the high seas. Set sail and try again!");
}else {
$("#winLose").text("There are still " + aiShipsLeft + " hero ships left patrolling the high seas. Set sail and try again!");
}


$("td").off("click");
console.log("calling showAllShips if ai lose")
showAllShips() //after game over, show ships they did not hit
$("#start").show();
}

}, delayMillis);
///////////////////End of Ai Portion/////////////////////////////////////////////////////////

})  // end of click function
console.log("game is starting")
})

})

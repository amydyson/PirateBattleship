//Model***********************************************
//********************************************************
//*************New One*******************************************
//********************************************************
//**************Put in submodule******************************************
//********************************************************
//////////////// Model////////////////////////////////////////////////////


var min
var max

var torpedoesLeft       //keeps track of torpedoes aka cannonballs
var hits                //keeps track of hits of ships
var checkArray = []     //if any block of a ship is touching another ship, "failed" is put on checkArray
var timeout             //timeout ensures check doesn't get in infinite loop
var shipsLeft = 8       //keeps track of ships left
var choose5             //randomly chooses the 5 ship to be horizontal or vertical

var audio               //used to play pirate voice
var currentTd           //the current table data (square on board)
var dig0                //the first digit in table view
var dig1                //the second digit table view

var h2 = 0              //2 block horizontal ship counter (to keep track of if its sunk)
var v2 = 0              //2 block vertical ship counter (to keep track of if its sunk)
var h3 = 0              //3 block horizontal ship counter (to keep track of if its sunk)
var v3 = 0              //3 block vertical ship counter (to keep track of if its sunk)
var h4 = 0              //4 block horizontal ship counter (to keep track of if its sunk)
var v4 = 0              //4 block vertical ship counter (to keep track of if its sunk)
var hv5 = 0             //5 block horizontal or vertical ship counter (to keep track of if its sunk)


const ship1 = "1"       //constants to put in model of board
const ship2h = "2h"
const ship2v = "2v"
const ship3h = "3h"
const ship3v= "3v"
const ship4h = "4h"
const ship4v= "4v"
const ship5 = "5"



var board = new Array(100)   //creates model of board and makes it zeroes
board.fill(0)

var aiBoard = new Array(100) //creates model of ai board and makes it zeroes
aiBoard.fill(0)

var aiLostShips = []         //keeps track of table data coordinates of "lost" ships to shoot at
var aiShotTds = []           //keeps track of table data coordinates of ships already shot at
for (i=0; i<100; i++){       //initializes aiLostShips array with 0 - 99 coordinates
    aiLostShips[i] = i;
}
var aiRandom                //used to help find random coordiante for ai side
var aiCurrentTd             //ai current table data
// var aiLastTd                //ai last table data used

var x
var y
var aiDig0
var aiDig1
var aiHits = 0
var aiShipsLeft = 8
var aiTorpedoesLeft = 100





// This will be when we detect a ship will be either lost, unknown, horizontal or vertical
var aiDirection = "lost"
var aiFoundArray = [] // will hold Tds here



////////////////End of Regular Model////////////////////////////////////////////////////

////////////////Ai Model////////////////////////////////////////////////////

function aiCoord(aiCurrentTd){
    aiShotTds.push(aiCurrentTd)

//get index of element so can splice it out of aiLostShips
    y = aiLostShips.indexOf(aiCurrentTd)
    aiLostShips.splice(y, 1);  // removes the x element of aiLostShips

    console.log("after splice. aiLostShips is " + aiLostShips)


    var temp = aiCurrentTd.toString()
    if (temp < 10){
        aiDig0 = "0"
        aiDig1 = temp
    } else {
        aiDig0 = temp[0] //split td, get first digit
        aiDig1 = temp[1] //split td, get 2nd digit
    }
}



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

    $("#aiBoard td").removeClass("aiShip1");
    $("#aiBoard td").removeClass("aiShip2h");
    $("#aiBoard td").removeClass("aiShip2v");
    $("#aiBoard td").removeClass("aiShip3h");
    $("#aiBoard td").removeClass("aiShip3v");
    $("#aiBoard td").removeClass("aiShip4h");
    $("#aiBoard td").removeClass("aiShip4v");
    $("#aiBoard td").removeClass("aiShip5");

}

function paddingForVships(coordinate){
    if (aiLostShips.includes(coordinate+1) && (coordinate != 9 || coordinate != 19 || coordinate != 29 || coordinate != 39 || coordinate != 49 || coordinate != 59 || coordinate != 69 || coordinate != 79 || coordinate != 89 || coordinate != 99)){
        y = aiLostShips.indexOf(coordinate+1)
        aiLostShips.splice(y, 1);  // removes the x element of aiLostShips


    }

    if (aiLostShips.includes(coordinate-1) && (coordinate != 0 || coordinate != 10 || coordinate != 20 || coordinate != 30 ||  coordinate !=40 || coordinate !=50 || coordinate != 60 || coordinate != 70 || coordinate != 80 || coordinate != 90)){
        y = aiLostShips.indexOf(coordinate-1)
        aiLostShips.splice(y, 1);  // removes the x element of aiLostShips

    }
}

function paddingForHships(coordinate){
    if (aiLostShips.includes(coordinate+10) && (coordinate != 90 || coordinate != 91 || coordinate != 92 || coordinate != 93 || coordinate != 94 || coordinate != 95 || coordinate != 96 || coordinate != 97 || coordinate != 98 || coordinate != 99)){
        y = aiLostShips.indexOf(coordinate+10)
        aiLostShips.splice(y, 1);  // removes the x element of aiLostShips

    }

    if (aiLostShips.includes(coordinate-10) && (coordinate != 0 || coordinate != 01 || coordinate != 02 || coordinate != 03 || coordinate != 04 || coordinate != 05 || coordinate != 06 || coordinate != 07 || coordinate != 08 || coordinate != 09)){
        y = aiLostShips.indexOf(coordinate-10)
        aiLostShips.splice(y, 1);  // removes the x element of aiLostShips

    }
}

function paddingForVmax(coordinate){
    if (aiLostShips.includes(coordinate+10)){
        y = aiLostShips.indexOf(coordinate+10)
        aiLostShips.splice(y, 1);  // removes the x element of aiLostShips

    }

}

function paddingForVmin(coordinate){
    if (aiLostShips.includes(coordinate-10)){
        y = aiLostShips.indexOf(coordinate-10)
        aiLostShips.splice(y, 1);  // removes the x element of aiLostShips

    }

}

function paddingForHmax(coordinate){
    if (aiLostShips.includes(coordinate+1)){
        y = aiLostShips.indexOf(coordinate+1)
        aiLostShips.splice(y, 1);  // removes the x element of aiLostShips

    }

}

function paddingForHmin(coordinate){
    if (aiLostShips.includes(coordinate-1)){
        y = aiLostShips.indexOf(coordinate-1)
        aiLostShips.splice(y, 1);  // removes the x element of aiLostShips

    }

}

function check(coordinate){
    if ((board[coordinate] != 0 && board[coordinate] !=  undefined) || (board[coordinate+1] != 0 && board[coordinate+1] !=  undefined) ||
    (board[coordinate-1] != 0 && board[coordinate-1] !=  undefined) ||
    (board[coordinate+10] != 0 && board[coordinate+10] !=  undefined) ||
    (board[coordinate-10] != 0 && board[coordinate-10] !=  undefined)){
    checkArray.push("failed")
    }
} // end function check

function aiCheck(coordinate){
    if ((aiBoard[coordinate] != 0 && aiBoard[coordinate] !=  undefined) || (aiBoard[coordinate+1] != 0 && aiBoard[coordinate+1] !=  undefined) ||
    (aiBoard[coordinate-1] != 0 && aiBoard[coordinate-1] !=  undefined) ||
    (aiBoard[coordinate+10] != 0 && aiBoard[coordinate+10] !=  undefined) ||
    (aiBoard[coordinate-10] != 0 && aiBoard[coordinate-10] !=  undefined)){
    checkArray.push("failed")
    }
} // end function check

function place5h(){
  var coordinate1 = Math.floor(Math.random() * 10)
  var coordinate2 = Math.floor(Math.random() * 6)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;


  //place 5h ship on board array
  for (i=0; i <5; i++){
  board[coordinate + i] = ship5
 $("#"+ coordinate1+ (coordinate2+i)).addClass("ship5")
  } // end for

  // Give those 5 squares on the table the class "ship5"




} // end place5h function

function aiPlace5h(){
  var coordinate1 = Math.floor(Math.random() * 10)
  var coordinate2 = Math.floor(Math.random() * 6)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;


  //place 5h ship on board array
  for (i=0; i <5; i++){
  aiBoard[coordinate + i] = ship5
 // $("#"+ coordinate1+ (coordinate2+i)).addClass("ship5")
 $("#aiBoard td").eq(coordinate + i).addClass("aiShip5");

  } // end for

  // Give those 5 squares on the table the class "ship5"




} // end place5h function


function place5v(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 6)
  var coordinate2 = Math.floor(Math.random() * 10)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

      //place 5v ship on board array
      board[coordinate] = ship5
      $("#"+ coordinate1+ (coordinate2)).addClass("ship5")
      board[coordinate+10] = ship5
      $("#"+ (coordinate1+1)+ (coordinate2)).addClass("ship5")
      board[coordinate+20] = ship5
    //   $("#"+ (coordinate+20)).addClass("ship5")
      $("#"+ (coordinate1+2)+ (coordinate2)).addClass("ship5")
      board[coordinate+30] = ship5
    //   $("#"+ (coordinate+30)).addClass("ship5")
      $("#"+ (coordinate1+3)+ (coordinate2)).addClass("ship5")
      board[coordinate+40] = ship5
      $("#"+ (coordinate1+4)+ (coordinate2)).addClass("ship5")

    //   $("#"+ (coordinate+40)).addClass("ship5")



} // end place5v function

function aiPlace5v(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 6)
  var coordinate2 = Math.floor(Math.random() * 10)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

      //place 5v ship on board array
      aiBoard[coordinate] = ship5
    //   $("#"+ coordinate1+ (coordinate2)).addClass("ship5")
      $("#aiBoard td").eq(coordinate).addClass("aiShip5");

      aiBoard[coordinate+10] = ship5
    //   $("#"+ (coordinate1+1)+ (coordinate2)).addClass("ship5")
      $("#aiBoard td").eq(coordinate + 10).addClass("aiShip5");

      aiBoard[coordinate+20] = ship5
    //   $("#"+ (coordinate+20)).addClass("ship5")
    //   $("#"+ (coordinate1+2)+ (coordinate2)).addClass("ship5")
      $("#aiBoard td").eq(coordinate + 20).addClass("aiShip5");

      aiBoard[coordinate+30] = ship5
    //   $("#"+ (coordinate+30)).addClass("ship5")
    //   $("#"+ (coordinate1+3)+ (coordinate2)).addClass("ship5")
      $("#aiBoard td").eq(coordinate + 30).addClass("aiShip5");

      aiBoard[coordinate+40] = ship5
    //   $("#"+ (coordinate1+4)+ (coordinate2)).addClass("ship5")
      $("#aiBoard td").eq(coordinate + 40).addClass("aiShip5");


    //   $("#"+ (coordinate+40)).addClass("ship5")


} // end place5v function

function place4h(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 10)
  var coordinate2 = Math.floor(Math.random() * 7)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

  check(coordinate)
  check(coordinate + 1)
  check(coordinate + 2)
  check(coordinate + 3)
  timeout ++
  if (checkArray.includes("failed") && timeout <50){
      place4h()
  }else if (timeout<50){
      //place 4h ship on board array
      for (i=0; i <4; i++){
      board[coordinate + i] = ship4h
    // $("#"+ (coordinate+i)).addClass("ship4")
    // $("#"+ (coordinate1)+ (coordinate2+i)).addClass("ship4")
    $("#"+ coordinate1+ (coordinate2+i)).addClass("ship4h")

      } // end for
  } // end else

} // end place4h function

function aiPlace4h(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 10)
  var coordinate2 = Math.floor(Math.random() * 7)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

  aiCheck(coordinate)
  aiCheck(coordinate + 1)
  aiCheck(coordinate + 2)
  aiCheck(coordinate + 3)
  timeout ++
  if (checkArray.includes("failed") && timeout <50){
      aiPlace4h()
  }else if (timeout<50){
      //place 4h ship on board array
      for (i=0; i <4; i++){
      aiBoard[coordinate + i] = ship4h
    // $("#"+ (coordinate+i)).addClass("ship4")
    // $("#"+ (coordinate1)+ (coordinate2+i)).addClass("ship4")
    // $("#"+ coordinate1+ (coordinate2+i)).addClass("ship4h")
    $("#aiBoard td").eq(coordinate + i).addClass("aiShip4h");


      } // end for
  } // end else

} // end place4h function


function place4v(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 7)
  var coordinate2 = Math.floor(Math.random() * 10)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

  check(coordinate)
  check(coordinate + 10)
  check(coordinate + 20)
  check(coordinate + 30)
  timeout ++
  if (checkArray.includes("failed")  && timeout <50){
      place4v()
  }else if (timeout < 50){
      //place 4v ship on board array
      board[coordinate] = ship4v
    //   $("#"+ (coordinate)).addClass("ship4")
      $("#"+ (coordinate1)+ (coordinate2)).addClass("ship4v")



      board[coordinate+10] = ship4v
    //   $("#"+ (coordinate+10)).addClass("ship4")
      $("#"+ (coordinate1+1)+ (coordinate2)).addClass("ship4v")
      board[coordinate+20] = ship4v
    //   $("#"+ (coordinate+20)).addClass("ship4")
      $("#"+ (coordinate1+2)+ (coordinate2)).addClass("ship4v")
      board[coordinate+30] = ship4v
    //   $("#"+ (coordinate+30)).addClass("ship4")
      $("#"+ (coordinate1+3)+ (coordinate2)).addClass("ship4v")
  } // end else


} // end place4v function

function aiPlace4v(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 7)
  var coordinate2 = Math.floor(Math.random() * 10)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

  aiCheck(coordinate)
  aiCheck(coordinate + 10)
  aiCheck(coordinate + 20)
  aiCheck(coordinate + 30)
  timeout ++
  if (checkArray.includes("failed")  && timeout <50){
      aiPlace4v()
  }else if (timeout < 50){
      //place 4v ship on board array
      aiBoard[coordinate] = ship4v
    //   $("#"+ (coordinate)).addClass("ship4")
    //   $("#"+ (coordinate1)+ (coordinate2)).addClass("ship4v")

      $("#aiBoard td").eq(coordinate).addClass("aiShip4v");


      aiBoard[coordinate+10] = ship4v
    //   $("#"+ (coordinate+10)).addClass("ship4")
    //   $("#"+ (coordinate1+1)+ (coordinate2)).addClass("ship4v")

      $("#aiBoard td").eq(coordinate + 10).addClass("aiShip4v");

      aiBoard[coordinate+20] = ship4v
    //   $("#"+ (coordinate+20)).addClass("ship4")
    //   $("#"+ (coordinate1+2)+ (coordinate2)).addClass("ship4v")
      $("#aiBoard td").eq(coordinate + 20).addClass("aiShip4v");

      aiBoard[coordinate+30] = ship4v
    //   $("#"+ (coordinate+30)).addClass("ship4")
    //   $("#"+ (coordinate1+3)+ (coordinate2)).addClass("ship4v")
      $("#aiBoard td").eq(coordinate + 30).addClass("aiShip4v");

  } // end else

} // end place4v function


function place3h(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 10)
  var coordinate2 = Math.floor(Math.random() * 6)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

  check(coordinate)
  check(coordinate + 1)
  check(coordinate + 2)
  timeout++
  if (checkArray.includes("failed")  && timeout <50){
      place3h()
  }else if (timeout < 50){
      //place 3h ship on board array
      for (i=0; i <3; i++){
      board[coordinate + i] = ship3h
      $("#"+ (coordinate1)+ (coordinate2+i)).addClass("ship3h")

      } // end for
  } // end else

} // end place3h function


function aiPlace3h(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 10)
  var coordinate2 = Math.floor(Math.random() * 6)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

  aiCheck(coordinate)
  aiCheck(coordinate + 1)
  aiCheck(coordinate + 2)
  timeout++
  if (checkArray.includes("failed")  && timeout <50){
      aiPlace3h()
  }else if (timeout < 50){
      //place 3h ship on board array
      for (i=0; i <3; i++){
      aiBoard[coordinate + i] = ship3h
    //   $("#"+ (coordinate1)+ (coordinate2+i)).addClass("ship3h")
      $("#aiBoard td").eq(coordinate + i).addClass("aiShip3h");


      } // end for
  } // end else

} // end place3h function

function place3v(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 8)
  var coordinate2 = Math.floor(Math.random() * 10)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

  check(coordinate)
  check(coordinate + 10)
  check(coordinate + 20)
  timeout
  if (checkArray.includes("failed")  && timeout <50){
      place3v()
  }else if (timeout < 50){
      //place 4v ship on board array
      board[coordinate] = ship3v
     $("#"+ (coordinate1)+ (coordinate2)).addClass("ship3v")
    //   $("#"+ (coordinate)).addClass("ship3")
      board[coordinate+10] = ship3v
    //   $("#"+ (coordinate+10)).addClass("ship3")
      $("#"+ (coordinate1+1)+ (coordinate2)).addClass("ship3v")
      board[coordinate+20] = ship3v
    //   $("#"+ (coordinate+20)).addClass("ship3")
      $("#"+ (coordinate1+2)+ (coordinate2)).addClass("ship3v")
  } // end else

} // end place3v function

function aiPlace3v(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 8)
  var coordinate2 = Math.floor(Math.random() * 10)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

  aiCheck(coordinate)
  aiCheck(coordinate + 10)
  aiCheck(coordinate + 20)
  timeout
  if (checkArray.includes("failed")  && timeout <50){
      aiPlace3v()
  }else if (timeout < 50){
      //place 4v ship on board array
      aiBoard[coordinate] = ship3v
    //  $("#"+ (coordinate1)+ (coordinate2)).addClass("ship3v")
     $("#aiBoard td").eq(coordinate).addClass("aiShip3v");

    //   $("#"+ (coordinate)).addClass("ship3")
      aiBoard[coordinate+10] = ship3v
    //   $("#"+ (coordinate+10)).addClass("ship3")
    //   $("#"+ (coordinate1+1)+ (coordinate2)).addClass("ship3v")
      $("#aiBoard td").eq(coordinate + 10).addClass("aiShip3v");

      aiBoard[coordinate+20] = ship3v
    //   $("#"+ (coordinate+20)).addClass("ship3")
    //   $("#"+ (coordinate1+2)+ (coordinate2)).addClass("ship3v")
      $("#aiBoard td").eq(coordinate + 20).addClass("aiShip3v");

  } // end else

} // end place3v function


function place2h(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 10)
  var coordinate2 = Math.floor(Math.random() * 5)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;
  check(coordinate)
  check(coordinate + 1)
  timeout++
  if (checkArray.includes("failed")  && timeout <50){
      place2h()
  }else if (timeout < 50){
      //place 2h ship on board array
      for (i=0; i <2; i++){
      board[coordinate + i] = ship2h
    //   $("#"+ (coordinate + i)).addClass("ship2")
      $("#"+ (coordinate1)+ (coordinate2 + i)).addClass("ship2h")

      } // end for
  } // end else

} // end place2h function

function aiPlace2h(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 10)
  var coordinate2 = Math.floor(Math.random() * 5)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;
  aiCheck(coordinate)
  aiCheck(coordinate + 1)
  timeout++
  if (checkArray.includes("failed")  && timeout <50){
      aiPlace2h()
  }else if (timeout < 50){
      //place 2h ship on board array
      for (i=0; i <2; i++){
      aiBoard[coordinate + i] = ship2h
    //   $("#"+ (coordinate + i)).addClass("ship2")
    //   $("#"+ (coordinate1)+ (coordinate2 + i)).addClass("ship2h")

      $("#aiBoard td").eq(coordinate + i).addClass("aiShip2h");


      } // end for
  } // end else

} // end place2h function


function place2v(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 9)
  var coordinate2 = Math.floor(Math.random() * 10)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

  check(coordinate)
  check(coordinate + 10)
  timeout++
  if (checkArray.includes("failed")  && timeout <50){
      place2v()
  }else if (timeout < 50){
      //place 2v ship on board array
      board[coordinate] = ship2v
    //   $("#"+ (coordinate)).addClass("ship2")
      $("#"+ (coordinate1)+ (coordinate2)).addClass("ship2v")
      board[coordinate+10] = ship2v
    //   $("#"+ (coordinate+10)).addClass("ship4")
      $("#"+ (coordinate1+1)+ (coordinate2)).addClass("ship2v")

  } // end else

} // end place2v function


function aiPlace2v(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 9)
  var coordinate2 = Math.floor(Math.random() * 10)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

  aiCheck(coordinate)
  aiCheck(coordinate + 10)
  timeout++
  if (checkArray.includes("failed")  && timeout <50){
      aiPlace2v()
  }else if (timeout < 50){
      //place 2v ship on board array
      aiBoard[coordinate] = ship2v
    //   $("#"+ (coordinate)).addClass("ship2")
    //   $("#"+ (coordinate1)+ (coordinate2)).addClass("ship2v")
      $("#aiBoard td").eq(coordinate).addClass("aiShip2v");
      aiBoard[coordinate+10] = ship2v
    //   $("#"+ (coordinate+10)).addClass("ship4")
    //   $("#"+ (coordinate1+1)+ (coordinate2)).addClass("ship2v")
      $("#aiBoard td").eq(coordinate + 10).addClass("aiShip2v");
  } // end else

} // end place2v function



function place1(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 10)
  var coordinate2 = Math.floor(Math.random() * 4)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

  check(coordinate)
  // check(coordinate)
  timeout++
  if (checkArray.includes("failed")  && timeout <40){
      place1()
  }else if (timeout < 39){
      //place 1 ship on board array
      board[coordinate] = ship1
    //   $("#"+ (coordinate)).addClass("ship1")
      $("#"+ (coordinate1)+ (coordinate2)).addClass("ship1")
  } // end else

} // end place1 function


function aiPlace1(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 10)
  var coordinate2 = Math.floor(Math.random() * 4)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;

  aiCheck(coordinate)
  // check(coordinate)
  timeout++
  if (checkArray.includes("failed")  && timeout <70){
      aiPlace1()
  }else if (timeout < 70){
      //place 1 ship on board array
      aiBoard[coordinate] = ship1
     $("#aiBoard td").eq(coordinate).addClass("aiShip1");
  } // end else

} // end place1 function


//build board for view in html
//eq(i) gets element of position i
function makeTables() {
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
    $(".ship5").addClass("ship5show")
  }
  if ($("#board td").hasClass("ship4h")) {
    $(".ship4h").addClass("ship4hshow")
  }
  if ($("#board td").hasClass("ship4v")) {
    $(".ship4v").addClass("ship4vshow")
  }
  if($("#board td").hasClass("ship3h")) {
    $(".ship3h").addClass("ship3hshow")
  }
  if($("#board td").hasClass("ship3v")) {
    $(".ship3v").addClass("ship3vshow")
  }
  if($("#board td").hasClass("ship2h")) {
    $(".ship2h").addClass("ship2hshow")
  }
  if($("#board td").hasClass("ship2v")) {
    $(".ship2v").addClass("ship2vshow")
  }
  if($("#board td").hasClass("ship1")) {
    $(".ship1").addClass("ship1show")
  }
  if($("#board td").hasClass("hit")){
    $(".hit").addClass("hit2")
  }
} // end showAllShips

function aiShowAllShips() {
  if($("#aiBoard td").hasClass("aiShip5")) {

    $(".aiShip5").addClass("ship5show")
  }
  if ($("#aiBoard td").hasClass("aiShip4h")) {
    $(".aiShip4h").addClass("ship4hshow")
  }
  if ($("#aiBoard td").hasClass("aiShip4v")) {
    $(".aiShip4v").addClass("ship4vshow")
  }
  if($("#aiBoard td").hasClass("aiShip3h")) {
    $(".aiShip3h").addClass("ship3hshow")
  }
  if($("#aiBoard td").hasClass("aiShip3v")) {
    $(".aiShip3v").addClass("ship3vshow")
  }
  if($("#aiBoard td").hasClass("aiShip2h")) {
    $(".aiShip2h").addClass("ship2hshow")
  }
  if($("#aiBoard td").hasClass("aiShip2v")) {
    $(".aiShip2v").addClass("ship2vshow")
  }
  if($("#aiBoard td").hasClass("aiShip1")) {
    $(".aiShip1").addClass("ship1show")
  }
  if($("#aiBoard td").hasClass("aiHit")){
    $(".aiHit").addClass("hit2")
  }
} // end showAllShips



// Do this so board is visible on first website load
makeTables()

//Controller***********************************************
//********************************************************
//********************************************************
//********************************************************
//********************************************************

$(document).ready(function(){

  makeTables() //create board again for new game
  $("td").off("click"); //clicking off until start button pressed

  //Once start button clicked all this happens:

  document.addEventListener('click', function(event) {
    if (event.target.id == 'start') {
      startGame();
    }
  });

  document.addEventListener('touchstart', function(event) {
    if (event.target.classList.contains('start')) {
      startGame();
    }
  });


  function startGame(){

    $("#instructionsToHit").text("Click below");
    $("#noHitHere").text("The pirate will shoot below");


//for original game:
    //make board all light blue: (reset)
  shipRemove()

    //setting variables to 0/empty

    // shipArray=[];
    checkArray = []
    hits=0;
    torpedoesLeft=100;
    // notPlaced = 0;
    shipsLeft = 8;
    board.fill(0)
    aiBoard.fill(0)

    for (i=0; i<100; i++){       //initializes aiLostShips array with 0 - 99 coordinates
    aiLostShips[i] = i;
}

  aiHits = 0
  aiShipsLeft = 8
  aiTorpedoesLeft = 100


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


    // clear text on screen
    $("#hitTracker").text("Hits: " + hits);
    $("#torpedoTracker").text("Cannonballs left: " + torpedoesLeft);
    $("#shipTracker").text("Ships left: " + shipsLeft);
    $("#aiShipTracker").text("Ships left: " + aiShipsLeft);


    $("#aiTorpedoTracker").text("Cannonballs left: " + aiTorpedoesLeft);
    $("#aiShipTracker").text("Ships left: " + aiShipsLeft);

    $("#winLose").text("");

    //hide start button until game over
    $("#start").hide();
    $("#instructions").hide();


   

    choose5 = Math.floor(Math.random() * 2)

    ///***randomly decide to place EITHER a 5 block horizontal ship OR a 5 block vertical ship
    if(choose5 ==0){
       place5h()
     }else{
       place5v()
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
choose5 = 0  //for now choose horizontal only

    if(choose5 ==0){
       aiPlace5h()
     }else{
       aiPlace5v()
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

    aiShowAllShips() //show the player's ships that the pirate will try to sink



    //each time user clicks specific square:

    $("#board td").on('touchstart click', function(event){
      event.stopPropagation();
      event.preventDefault();

    $("#instructionsToHit").hide(); //hide the instructions on where to click
    $("#noHitHere").hide();


      currentTd = $(this).attr("id") //grab id of td clicked
      dig0 = currentTd[0] //split td, get first digit
      dig1 = currentTd[1] //split td, get 2nd digit

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
   } else {
       audio = $("#fire")[0];
       audio.play();
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
   }else {
       audio = $("#fire")[0];
       audio.play();
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
   }else {
       audio = $("#fire")[0];
       audio.play();
   }
}

if (board[currentTd] === ship3v){  // if the 3v ship is hit
   v3++                            //increment 3v counter
   if (v3 === 3){                 //if both block of 3v ship is hit
   shipsLeft--                    //decrement shipsLeft
   audio = $("#abandonShip")[0];
   audio.play()
   $("#shipTracker").text("Ships left: " + shipsLeft);
   $(".ship3v").addClass("ship3vshow")

   }else {
       audio = $("#fire")[0];
       audio.play();
   }
}

if (board[currentTd] === ship4h){  // if the 4h ship is hit
   h4++                            //increment 4h counter
   if (h4 === 4){                 //if both block of 4h ship is hit
   shipsLeft--                    //decrement shipsLeft
   audio = $("#abandonShip")[0];
   audio.play()
   $("#shipTracker").text("Ships left: " + shipsLeft);
   $(".ship4h").addClass("ship4hshow")
   }else {
       audio = $("#fire")[0];
       audio.play();
   }
}

if (board[currentTd] === ship4v){  // if the 4v ship is hit
   v4++                            //increment 4v counter
   if (v4 === 4){                 //if both block of 4v ship is hit
   shipsLeft--                    //decrement shipsLeft
   audio = $("#abandonShip")[0];
   audio.play()
   $("#shipTracker").text("Ships left: " + shipsLeft);
   $(".ship4v").addClass("ship4vshow")
   }else {
       audio = $("#fire")[0];
       audio.play();

   }
}

if (board[currentTd] === ship5){  // if the 5h or 5v ship is hit
   hv5++                            //increment 5hv counter
   if (hv5 === 5){                 //if both block of 5h ship is hit
   shipsLeft--                    //decrement shipsLeft
   audio = $("#abandonShip")[0];
   audio.play()
   $("#shipTracker").text("Ships left: " + shipsLeft);
   $(".ship5").addClass("ship5show")
   }else {
       audio = $("#fire")[0];
       audio.play();

   }
}




/////////////////////////////////////////////////////////////////////////////

        $("#hitTracker").text("Hits: " + hits)
        if (shipsLeft === 0) {
          $("#winLose").text("You Won! You sank all the pirate ships!");
          $("td").off("click");
          showAllShips()
          $("#start").show(); //show start button
        }
      } else { //turns square dark blue (miss)

      $(this).addClass("torpedoed");
      $(this).off("click"); //can't click same square twice
      }

    //update torpedo count on screen
    torpedoesLeft--;

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
      showAllShips() //after game over, show ships they did not hit
      $("#start").show();
    }


///////////////////////End of regular portion/////////////////////////////////////////////
///////////Beginning of Ai Portion////////////////////////////////////////////////////////
//Pause to emulation real life:

// if there's no located ship get a random number


if (aiDirection == "lost" ){ // get a random coordinate

    aiRandom = aiLostShips.length - 1;

    x = Math.floor(Math.random() * aiRandom)

    aiCurrentTd = aiLostShips[x]

// adjust arrays by calling aiCoord

    // aiCoord(aiCurrentTd)




} else if (aiDirection == "unknown"){
x = aiFoundArray[0].toString()
if (x < 10){
    x = "0" + x
}

    if (aiFoundArray.length == 1){  //only know ONE block so direction is unkown, look at last FOUND td for next TD
        if (aiLostShips.includes(aiFoundArray[0]+1) && x[1] != 9){
            aiCurrentTd = aiFoundArray[0] +1
        } else if (aiLostShips.includes(aiFoundArray[0]-1) && x[1] != 0){
            aiCurrentTd = aiFoundArray[0] - 1
        } else if (aiLostShips.includes(aiFoundArray[0]+10) && x[0] != 9){
            aiCurrentTd = aiFoundArray[0] +10
        } else if (aiLostShips.includes(aiFoundArray[0]-10) && x[0] != 0){
            aiCurrentTd = aiFoundArray[0] - 10
        } else {     // this should never happen but just in case
            aiRandom = aiLostShips.length - 1;
            x = Math.floor(Math.random() * aiRandom)
            aiCurrentTd = aiLostShips[x]
            // alert("THIS SHOULD NOT HAPPEN!")
        }
    } else {

        // alert("Should never get here! if aiArrayFound is greater than one, shouldn't be in Unknown territory!")

    }

} else if (aiDirection == "horizontal")

{  //only know ONE block so direction is unkown, look at last FOUND td for next TD
    x = aiFoundArray[aiFoundArray.length-1].toString()
    if (x < 10){
        x = "0" + x
    }

    max = Math.max.apply(null, aiFoundArray)
    max = max.toString()
    if (max <10){
         max = "0" + max
    }
    min = Math.min.apply(null, aiFoundArray)
    min = min.toString()
    if (min <10){
         min = "0" + min
    }


    if (aiLostShips.includes(+max+1) && (max[1] != "9")){
        aiCurrentTd = (+max+1)
    } else if (aiLostShips.includes(+min-1) && (min[1] != "0")){
        aiCurrentTd = (+min-1)
    } else {     // this should never happen but just in case
        aiRandom = aiLostShips.length - 1;
        x = Math.floor(Math.random() * aiRandom)
        aiCurrentTd = aiLostShips[x]
        // alert("THIS SHOULD NOT HAPPEN!")
    }

}//end else if

else if (aiDirection == "vertical")

{  //only know ONE block so direction is unkown, look at last FOUND td for next TD

    max = Math.max.apply(null, aiFoundArray)
    max = max.toString()
    if (max <10){
         max = "0" + max
    }
    min = Math.min.apply(null, aiFoundArray)
    min = min.toString()
    if (min <10){
         min = "0" + min
    }




        if (aiLostShips.includes(+max+10) && (max[0] != "9")){
            aiCurrentTd = (+max+10)
        } else if (aiLostShips.includes(+min-10) && (min[0] != "0")){
            aiCurrentTd = (+min-10)
        } else {     // this should never happen but just in case
            aiRandom = aiLostShips.length - 1;
            x = Math.floor(Math.random() * aiRandom)
            aiCurrentTd = aiLostShips[x]
            // alert("THIS SHOULD NOT HAPPEN!")

        }

}



//adjust arrays
    aiCoord(aiCurrentTd)
//save Td for next time


//now check board to see if there's a hit

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
aiDirection = "lost"   // this shouldn't be necessary just a double check


paddingForVships(aiCurrentTd)
paddingForHships(aiCurrentTd)


console.log("found ship1, aiDirection set to Lost")
}

if (aiBoard[aiCurrentTd]=== ship2h){  // if the 2h ship is hit

    console.log("found ship2h")

aiH2++                            //increment 2h counter
    if (aiH2 === 2){                 //if both block of 2h ship is hit
    aiShipsLeft--                    //decrement shipsLeft
    aiDirection = "lost"             // set to lost to look for new ship randomly

    aiFoundArray.push(aiCurrentTd)

    paddingForHships(aiFoundArray[0])
    paddingForHships(aiFoundArray[1])
    paddingForVships(aiFoundArray[0])
    paddingForVships(aiFoundArray[1])

    aiFoundArray = []



    $("#aiShipTracker").text("Ships left: " + aiShipsLeft);

    } else {
        aiDirection = "unknown" // if ONE block found
        aiFoundArray.push(aiCurrentTd)
        }
    // {
    //     if (aiH2 == 1){
    //         aiDirection = "unknown"
    //     }else {
    //     aiDirection = "unknown"
    //     aiFoundArray.push(aiCurrentTd)
    //     }
    // }
}

if (aiBoard[aiCurrentTd] === ship2v){  // if the 2v ship is hit
aiV2++                            //increment 2v counter
if (aiV2 === 2){                 //if both block of 2v ship is hit
aiShipsLeft--                    //decrement shipsLeft
aiDirection = "lost"             // set to lost to look for new ship randomly
aiFoundArray.push(aiCurrentTd)

paddingForVships(aiFoundArray[0])
paddingForVships(aiFoundArray[1])
paddingForHships(aiFoundArray[0])
paddingForHships(aiFoundArray[1])

aiFoundArray = []

$("#aiShipTracker").text("Ships left: " + aiShipsLeft);
// $(".ship2v").addClass("ship2vshow")
}else {
   aiDirection = "unknown" // if ONE block found
   aiFoundArray.push(aiCurrentTd)
   }

}

if (aiBoard[aiCurrentTd] === ship3h){  // if the 3h ship is hit
aiH3++                            //increment 3h counter
if (aiH3 === 3){                 //if both block of 3h ship is hit
aiShipsLeft--                    //decrement shipsLeft
aiDirection = "lost"             // set to lost to look for new ship randomly
aiFoundArray.push(aiCurrentTd)
max = Math.max.apply(null, aiFoundArray)
min = Math.min.apply(null, aiFoundArray)

paddingForHships(aiFoundArray[0])
paddingForHships(aiFoundArray[1])
paddingForHships(aiFoundArray[2])

// y = aiLostShips.indexOf(max)
// paddingForVships(aiFoundArray[y])
//
// y = aiLostShips.indexOf(min)
// paddingForVships(aiFoundArray[y])

paddingForVships(max)
paddingForVships(min)

aiFoundArray = []

$("#aiShipTracker").text("Ships left: " + aiShipsLeft);
// $(".ship3h").addClass("ship3hshow")
}else {
    if (aiH3 == 1){
        aiDirection = "unknown"
        aiFoundArray.push(aiCurrentTd)
    }else {
    aiDirection = "horizontal"
    aiFoundArray.push(aiCurrentTd)
    }

}
}

if (aiBoard[aiCurrentTd] === ship3v){  // if the 3v ship is hit
    aiV3++                            //increment 3v counter
    if (aiV3 === 3){                 //if both block of 3v ship is hit
    aiShipsLeft--                    //decrement shipsLeft
    aiDirection = "lost"

    aiFoundArray.push(aiCurrentTd)
    max = Math.max.apply(null, aiFoundArray)
    min = Math.min.apply(null, aiFoundArray)

    paddingForVships(aiFoundArray[0])
    paddingForVships(aiFoundArray[1])
    paddingForVships(aiFoundArray[2])

    // y = aiLostShips.indexOf(max)
    // paddingForHships(aiFoundArray[y])
    //
    // y = aiLostShips.indexOf(min)
    // paddingForHships(aiFoundArray[y])

    paddingForHships(max)
    paddingForHships(min)


    aiFoundArray = []

    $("#aiShipTracker").text("Ships left: " + aiShipsLeft);
    // $(".ship3v").addClass("ship3vshow")

    }else {

        if (aiV3 == 1){
            aiDirection = "unknown"
            aiFoundArray.push(aiCurrentTd)
        }else {
        aiDirection = "vertical"
        aiFoundArray.push(aiCurrentTd)
       }
     }
}

if (aiBoard[aiCurrentTd] === ship4h){  // if the 4h ship is hit
    aiH4++                            //increment 4h counter
    if (aiH4 === 4){                 //if both block of 4h ship is hit
    aiShipsLeft--                    //decrement shipsLeft
    aiDirection = "lost"

    aiFoundArray.push(aiCurrentTd)
    max = Math.max.apply(null, aiFoundArray)
    min = Math.min.apply(null, aiFoundArray)

    paddingForHships(aiFoundArray[0])
    paddingForHships(aiFoundArray[1])
    paddingForHships(aiFoundArray[2])
    paddingForHships(aiFoundArray[3])

    // y = aiLostShips.indexOf(max)
    // paddingForVships(aiFoundArray[y])
    //
    // y = aiLostShips.indexOf(min)
    // paddingForVships(aiFoundArray[y])

    paddingForVships(max)
    paddingForVships(min)


    aiFoundArray = []

    $("#aiShipTracker").text("Ships left: " + aiShipsLeft);
    // $(".ship4h").addClass("ship4hshow")
    }else {
        if (aiH4 == 1){
            aiDirection = "unknown"
            aiFoundArray.push(aiCurrentTd)
        }else {
        aiDirection = "horizontal"
        aiFoundArray.push(aiCurrentTd)
    }

    }
}

if (aiBoard[aiCurrentTd]=== ship4v){  // if the 4v ship is hit
aiV4++                            //increment 4v counter
if (aiV4 === 4){                 //if both block of 4v ship is hit
aiShipsLeft--                    //decrement shipsLeft
aiDirection = "lost"

aiFoundArray.push(aiCurrentTd)
max = Math.max.apply(null, aiFoundArray)
min = Math.min.apply(null, aiFoundArray)

paddingForVships(aiFoundArray[0])
paddingForVships(aiFoundArray[1])
paddingForVships(aiFoundArray[2])
paddingForVships(aiFoundArray[3])

// y = aiLostShips.indexOf(max)
paddingForHships(max)
paddingForHships(min)
//
// y = aiLostShips.indexOf(min)

aiFoundArray = []

$("#aiShipTracker").text("Ships left: " + aiShipsLeft);
// $(".ship4v").addClass("ship4vshow")
}else {
    if (aiV4 == 1){
        aiDirection = "unknown"
        aiFoundArray.push(aiCurrentTd)
    }else {
    aiDirection = "vertical"
    aiFoundArray.push(aiCurrentTd)
}
}
}

if (aiBoard[aiCurrentTd] === ship5){  // if the 5h or 5v ship is hit
aiHv5++                            //increment 5hv counter
if (aiHv5 === 5){                 //if both block of 5h ship is hit
aiShipsLeft--                    //decrement shipsLeft
aiDirection = "lost"
aiFoundArray.push(aiCurrentTd)
max = Math.max.apply(null, aiFoundArray)
min = Math.min.apply(null, aiFoundArray)

paddingForHships(aiFoundArray[0])
paddingForHships(aiFoundArray[1])
paddingForHships(aiFoundArray[2])
paddingForHships(aiFoundArray[3])
paddingForHships(aiFoundArray[4])

// y = aiLostShips.indexOf(max)
// paddingForVships(aiFoundArray[y])
//
// y = aiLostShips.indexOf(min)
// paddingForVships(aiFoundArray[y])

paddingForVships(max)
paddingForVships(min)


aiFoundArray = []

$("#aiShipTracker").text("Ships left: " + aiShipsLeft);
// $(".ship5").addClass("ship5show")
}else{
    if (aiHv5 == 1){
        aiDirection = "unknown"
        aiFoundArray.push(aiCurrentTd)
    }else {
    aiDirection = "horizontal"
    aiFoundArray.push(aiCurrentTd)
}

}
}





/////////////////////////////////////////////////////////////////////////////

  $("#aiHitTracker").text("Hits: " + aiHits)
  if (aiShipsLeft === 0) {
    $("#winLose").text("The pirate won! He sank all your ships.");
    $("td").off("click");
    showAllShips()
    $("#start").show(); //show start button
  }
} else { //turns square dark blue (miss)

// $("#"+ coordinate1+ (coordinate2+i)).addClass("ship5")
// $("#aiBoard" + aiDig0).addClass("torpedoed");

$("#aiBoard td").eq(aiDig0 + aiDig1).addClass("torpedoed");

// put the missed one on here
// $(this).off("click"); //can't click same square twice
}
aiTorpedoesLeft--;
//update torpedo count on screen
$("#aiTorpedoTracker").text("Cannonballs left: " + torpedoesLeft);
//check if used 25 torpedos.  Game over, show start button, turn board click off
if(aiTorpedoesLeft === 0){
if (aiShipsLeft == 0){
  $("#winLose").text("You Won! You sank all pirate ships.");
  $("td").off("click");
}
else if (aiShipsLeft ==1){
$("#winLose").text("Almost! Only one hero ship left patrolling the high seas. Set sail and try again!");
}else {
$("#winLose").text("There are still " + aiShipsLeft + " hero ships left patrolling the high seas. Set sail and try again!");
}


$("td").off("click");
showAllShips() //after game over, show ships they did not hit
$("#start").show();
}

///////////////////End of Ai Portion/////////////////////////////////////////////////////////

})  // end of click function
console.log("game is starting")
}

})

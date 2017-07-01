//Model***********************************************
//********************************************************
//********************************************************
//********************************************************
//********************************************************
//********************************************************
var torpedoesLeft
var hits
var shipArray=[]
var checkArray = []
var passed
const ship1 = 1
const ship2h = "2h"
const ship2v = "2v"
const ship3h = "3h"
const ship3v= "3v"
const ship4h = "4h"
const ship4v= "4v"
const ship5h = "5h"
const ship5v = "5v"
var board = new Array(100)
board.fill(0)
console.log("board now zeroes");

function check(coordinate){
    if ((board[coordinate] != 0 && board[coordinate] !=  undefined) || (board[coordinate+1] != 0 && board[coordinate+1] !=  undefined) ||
    (board[coordinate-1] != 0 && board[coordinate-1] !=  undefined) ||
    (board[coordinate+10] != 0 && board[coordinate+10] !=  undefined) ||
    (board[coordinate-10] != 0 && board[coordinate-10] !=  undefined) ||
    (board[coordinate+9] != 0 && board[coordinate+9] !=  undefined) ||
    (board[coordinate-9] != 0 && board[coordinate-9] !=  undefined) ||
    (board[coordinate+11] != 0 && board[coordinate+11] !=  undefined) ||
    (board[coordinate-11] != 0 && board[coordinate-11] !=  undefined)){
    console.log("doesn't pass")
    checkArray.push("failed")
    }
    else {console.log("passes"); passed = true}
} // end function check

function place5h(){
  var coordinate1 = Math.floor(Math.random() * 10)
  var coordinate2 = Math.floor(Math.random() * 6)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;
  console.log("the 5h coordinate is now: " + coordinate)

  //place 5h ship on board array
  for (i=0; i <5; i++){
  board[coordinate + i] = ship5h
  console.log("placing ship at " + (coordinate + i))
  } // end for

} // end place5h function


function place5v(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 6)
  var coordinate2 = Math.floor(Math.random() * 10)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;
  console.log("the 5v coordinate is now: " + coordinate)
  check(coordinate)
  check(coordinate + 10)
  check(coordinate + 20)
  check(coordinate + 30)
  check(coordinate + 40)
  if (checkArray.includes("failed")){
      console.log("call place5v again")
      place5v()
  }else{
      console.log("PLACE 5v SHIP")
      //place 5v ship on board array
      board[coordinate] = ship5v
      console.log("placing ship at " + (coordinate))
      board[coordinate+10] = ship5v
      console.log("placing ship at " + (coordinate+10))
      board[coordinate+20] = ship5v
      console.log("placing ship at " + (coordinate+20))
      board[coordinate+30] = ship5v
      console.log("placing ship at " + (coordinate+30))
      board[coordinate+40] = ship5v
      console.log("placing ship at " + (coordinate+40))
  } // end else
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
  if (checkArray.includes("failed")){
      console.log("call place4h again")
      place4h()
  }else{
      console.log("PLACE 4h SHIP")
      //place 4h ship on board array
      for (i=0; i <4; i++){
      board[coordinate + i] = ship4h
      console.log("placing ship at " + (coordinate + i))
      } // end for
  } // end else
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
  if (checkArray.includes("failed")){
      console.log("call place4v again")
      place4v()
  }else{
      console.log("PLACE 4v SHIP")
      //place 4v ship on board array
      board[coordinate] = ship4v
      console.log("placing ship at " + (coordinate))
      board[coordinate+10] = ship4v
      console.log("placing ship at " + (coordinate+10))
      board[coordinate+20] = ship4v
      console.log("placing ship at " + (coordinate+20))
      board[coordinate+30] = ship4v
      console.log("placing ship at " + (coordinate+30))
  } // end else
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
  if (checkArray.includes("failed")){
      console.log("call place3h again")
      place3h()
  }else{
      console.log("PLACE 3h SHIP")
      //place 3h ship on board array
      for (i=0; i <3; i++){
      board[coordinate + i] = ship3h
      console.log("placing ship at " + (coordinate + i))
      } // end for
  } // end else
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
  if (checkArray.includes("failed")){
      console.log("call place3v again")
      place3v()
  }else{
      console.log("PLACE 3v SHIP")
      //place 4v ship on board array
      board[coordinate] = ship3v
      console.log("placing ship at " + (coordinate))
      board[coordinate+10] = ship3v
      console.log("placing ship at " + (coordinate+10))
      board[coordinate+20] = ship3v
      console.log("placing ship at " + (coordinate+20))
  } // end else
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
  if (checkArray.includes("failed")){
      console.log("call place2h again")
      place2h()
  }else{
      console.log("PLACE 2h SHIP")
      //place 2h ship on board array
      for (i=0; i <2; i++){
      board[coordinate + i] = ship2h
      console.log("placing ship at " + (coordinate + i))
      } // end for
  } // end else
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
  if (checkArray.includes("failed")){
      console.log("call place2v again")
      place2v()
  }else{
      console.log("PLACE 2v SHIP")
      //place 2v ship on board array
      board[coordinate] = ship2v
      console.log("placing ship at " + (coordinate))
      board[coordinate+10] = ship2v
      console.log("placing ship at " + (coordinate+10))

  } // end else
} // end place2v function


function place1(){
  checkArray = []
  var coordinate1 = Math.floor(Math.random() * 10)
  var coordinate2 = Math.floor(Math.random() * 4)
  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;
  console.log("the 1 coordinate is now: " + coordinate)
  // check(coordinate)
  if (checkArray.includes("failed")){
      console.log("call place1 again")
      place1()
  }else{
      console.log("PLACE 1 SHIP")
      //place 1 ship on board array
      board[coordinate] = ship1
      console.log("placing ship1 at " + (coordinate))
  } // end else
} // end place1 function


//build board for view in html
//eq(i) gets element of position i
function makeTable() {
  for (i = 0; i < 10; i++){
    $("#board").append("<tr>")
    $("tr").eq(i).attr("id", "row" + i) //for tr[i] we add an id="row[i]"
      for (j = 0; j<10; j++){
        $("tr").eq(i).append("<td id=" + i + j + ">") //for each tr we add 10 tds and give tds an id="[i][j]"
      }
  }
}

//show ships function
function showAllShips() {
  if($("td").hasClass("ship5")) {
    console.log("added ship5show")
    $(".ship5").addClass("ship5show")
  }
  if ($("td").hasClass("ship4")) {
    console.log("added ship4show")
    $(".ship4").addClass("ship4show")
  }
  if($("td").hasClass("ship3")) {
    console.log("added ship3show")
    $(".ship3").addClass("ship3show")
  }
  if($("td").hasClass("ship2")) {
    console.log("added ship2show")
    $(".ship2").addClass("ship2show")
  }
  if($("td").hasClass("ship1")) {
    console.log("added ship1show")
    $(".ship1").addClass("ship1show")
  }
  if($("td").hasClass("hit")){
    $(".hit").addClass("hit2")
  }
}


// place5h()
// console.log("5h ship placed")
place5v()
console.log("5v ship placed")
place4h()
console.log("4h ship placed")
place4v()
console.log("4v ship placed")
place3h()
console.log("3h ship placed")
place3v()
console.log("3v ship placed")
place2h()
console.log("2h ship placed")
place2v()
console.log("2v ship placed")
place1()
console.log("1 ship placed")

makeTable()
console.log("made the table for view")

showAllShips()
console.log("call showAllShips")

//Controller***********************************************
//********************************************************
//********************************************************
//********************************************************
//********************************************************
//********************************************************

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
var timeout
var notPlaced = 0
var shipsLeft = 8
var choose5

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
    $("#"+ (coordinate1)+ (coordinate2+i)).addClass("ship4")
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
      $("#"+ (coordinate1)+ (coordinate2)).addClass("ship4")
      console.log("placing ship at " + (coordinate))
      board[coordinate+10] = ship4v
    //   $("#"+ (coordinate+10)).addClass("ship4")
      $("#"+ (coordinate1+1)+ (coordinate2)).addClass("ship4")
      console.log("placing ship at " + (coordinate+10))
      board[coordinate+20] = ship4v
    //   $("#"+ (coordinate+20)).addClass("ship4")
      $("#"+ (coordinate1+2)+ (coordinate2)).addClass("ship4")
      console.log("placing ship at " + (coordinate+20))
      board[coordinate+30] = ship4v
    //   $("#"+ (coordinate+30)).addClass("ship4")
      $("#"+ (coordinate1+3)+ (coordinate2)).addClass("ship4")
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
      $("#"+ (coordinate+i)).addClass("ship3")
      $("#"+ (coordinate1)+ (coordinate2+i)).addClass("ship3")
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
    //   $("#"+ (coordinate)).addClass("ship3")
      $("#"+ (coordinate1)+ (coordinate2)).addClass("ship3")
      console.log("placing ship at " + (coordinate))
      board[coordinate+10] = ship3v
    //   $("#"+ (coordinate+10)).addClass("ship3")
      $("#"+ (coordinate1+1)+ (coordinate2)).addClass("ship3")
      console.log("placing ship at " + (coordinate+10))
      board[coordinate+20] = ship3v
    //   $("#"+ (coordinate+20)).addClass("ship3")
      $("#"+ (coordinate1+2)+ (coordinate2)).addClass("ship3")
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
      $("#"+ (coordinate1)+ (coordinate2 + i)).addClass("ship2")

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
      $("#"+ (coordinate1)+ (coordinate2)).addClass("ship2")
      console.log("placing ship at " + (coordinate))
      board[coordinate+10] = ship2v
    //   $("#"+ (coordinate+10)).addClass("ship4")
      $("#"+ (coordinate1+1)+ (coordinate2)).addClass("ship2")
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
  // if($("td").hasClass("hit")){
  //   $(".hit").addClass("hit2")
  // }
}

 choose5 = Math.floor(Math.random() * 2)

 ///***randomly decide to place EITHER a 5 block horizontal ship OR a 5 block vertical ship

 if(choose5 ==0){
    place5h()
    console.log("5h ship placed")
  }else{
    place5v()
    console.log("5v ship placed")
  }


timeout = 0
place4h()
console.log("4h ship call RESULT (either placed or not placed)")
timeout = 0
place4v()
console.log("4v ship call RESULT (either placed or not placed)")
timeout = 0
place3h()
console.log("3h ship call RESULT (either placed or not placed)")
timeout = 0
place3v()
console.log("3v ship call RESULT (either placed or not placed)")
timeout = 0
place2h()
console.log("2h ship call RESULT (either placed or not placed)")
timeout = 0
place2v()
console.log("2v ship call RESULT (either placed or not placed)")
timeout = 0
place1()
console.log("1 ship call RESULT (either placed or not placed)")


makeTable()
console.log("made the table for view")


showAllShips()

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
  $(".btn").click(function(){

    //make board all light blue: (reset)
    $("td").removeClass("torpedoed");
    $("td").removeClass("hit");
    $("td").removeClass("hit2");
    $("td").removeClass("ship1show");
    $("td").removeClass("ship2show");
    $("td").removeClass("ship3show");
    $("td").removeClass("ship4show");
    $("td").removeClass("ship5show");
    $("td").removeClass("ship1");
    $("td").removeClass("ship2");
    $("td").removeClass("ship3");
    $("td").removeClass("ship4");
    // $("td").removeClass("ship4Horizontal");
    $("td").removeClass("ship5");

    //setting variables to 0/empty
    shipArray=[];
    checkArray = []
    hits=0;
    torpedoesLeft=25;
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


    //clear text on screen
    $("#hitTracker").text("Hits: " + hits);
    $("#torpedoTracker").text("Torpedoes left: " + torpedoesLeft);
    $("#winLose").text("");

    //hide start button until game over
    $(".btn").hide();

    choose5 = Math.floor(Math.random() * 2)
    ///***randomly decide to place EITHER a 5 block horizontal ship OR a 5 block vertical ship
    if(choose5 ==0){
       place5h()
       console.log("5h ship placed")
     }else{
       place5v()
       console.log("5v ship placed")
     }

    timeout = 0
    place4h()
    console.log("4h ship call finished (may not be placed if conflict)")
    timeout = 0
    place4v()
    console.log("4v ship call finished (may not be placed if conflict)")
    timeout = 0
    place3h()
    console.log("3h ship call finished (may not be placed if conflict)")
    timeout = 0
    place3v()
    console.log("3v ship call finished (may not be placed if conflict)")
    timeout = 0
    place2h()
    console.log("2h ship call finished (may not be placed if conflict)")
    timeout = 0
    place2v()
    console.log("2v ship call finished (may not be placed if conflict)")
    timeout = 0
    place1()
    console.log("1 ship call finished (may not be placed if conflict)")
    console.log("notPlaced is now " + notPlaced)



    // console.log("shipArray is: " + shipArray)

    //each time user clicks specific square:
    $("td").click(function(){
      var currentTd = $(this).attr("id") //grab id of td clicked
      var dig0 = currentTd[0] //split td, get first digit
      var dig1 = currentTd[1] //split td, get 2nd digit

      //turn square red or blue if ship is hit or not
      if (board[currentTd] === ship1 || board[currentTd] === ship2h || board[currentTd] === ship2v || board[currentTd] === ship3h || board[currentTd] === ship3v || board[currentTd] === ship4h || board[currentTd] === ship4v || board[currentTd] === ship5 ){
        //turns square red
        $(this).addClass("hit");
        hits ++

//////////////////////////////////////////////////////////////////////////////

if (board[currentTd] === ship1){
   shipsLeft--
   $("#shipTracker").text("Ships left: " + shipsLeft);
   console.log("1 block ship hit, shipsLeft is: " + shipsLeft)
}

if (board[currentTd] === ship2h){  // if the 2h ship is hit
   h2++                            //increment 2h counter
   if (h2 === 2){                 //if both block of 2h ship is hit
   shipsLeft--                    //decrement shipsLeft
   $("#shipTracker").text("Ships left: " + shipsLeft);
   console.log("2 block ship hit, shipsLeft is: " + shipsLeft)
   }
}

if (board[currentTd] === ship2v){  // if the 2v ship is hit
   v2++                            //increment 2v counter
   if (v2 === 2){                 //if both block of 2v ship is hit
   shipsLeft--                    //decrement shipsLeft
   $("#shipTracker").text("Ships left: " + shipsLeft);
   console.log("2 block ship hit, shipsLeft is: " + shipsLeft)
   }
}

if (board[currentTd] === ship3h){  // if the 3h ship is hit
   h3++                            //increment 3h counter
   if (h3 === 3){                 //if both block of 3h ship is hit
   shipsLeft--                    //decrement shipsLeft
   $("#shipTracker").text("Ships left: " + shipsLeft);
   console.log("3 block ship hit, shipsLeft is: " + shipsLeft)
   }
}

if (board[currentTd] === ship3v){  // if the 3v ship is hit
   v3++                            //increment 3v counter
   if (v3 === 3){                 //if both block of 3v ship is hit
   shipsLeft--                    //decrement shipsLeft
   $("#shipTracker").text("Ships left: " + shipsLeft);
   console.log("3 block ship hit, shipsLeft is: " + shipsLeft)
   }
}

if (board[currentTd] === ship4h){  // if the 4h ship is hit
   h4++                            //increment 4h counter
   if (h4 === 4){                 //if both block of 4h ship is hit
   shipsLeft--                    //decrement shipsLeft
   $("#shipTracker").text("Ships left: " + shipsLeft);
   console.log("4 block ship hit, shipsLeft is: " + shipsLeft)
   }
}

if (board[currentTd] === ship4v){  // if the 4v ship is hit
   v4++                            //increment 4v counter
   if (v4 === 4){                 //if both block of 4v ship is hit
   shipsLeft--                    //decrement shipsLeft
   $("#shipTracker").text("Ships left: " + shipsLeft);
   console.log("4 block ship hit, shipsLeft is: " + shipsLeft)
   }
}

if (board[currentTd] === ship5){  // if the 5h or 5v ship is hit
   hv5++                            //increment 5hv counter
   if (hv5 === 5){                 //if both block of 5h ship is hit
   shipsLeft--                    //decrement shipsLeft
   $("#shipTracker").text("Ships left: " + shipsLeft);
   console.log("5 block ship hit, shipsLeft is: " + shipsLeft)
   }
}




/////////////////////////////////////////////////////////////////////////////

        $("#hitTracker").text("Hits: " + hits)
        if (shipsLeft < 5) {
          $("#winLose").text("You Won! You sank 4 ships with 25 torpedoes");
          $("td").off("click");
          console.log("calling showAllShips function because won")
          showAllShips()
          $(".btn").show(); //show start button
        }
      } else { //turns square dark blue (miss)
      $(this).addClass("torpedoed");
      $(this).off("click"); //can't click same square twice
      }
    torpedoesLeft--;
    //update torpedo count on screen
    $("#torpedoTracker").text("Torpedoes left: " + torpedoesLeft);
    //check if used 25 torpedos.  Game over, show start button, turn board click off
    if(torpedoesLeft === 0){
      $("#winLose").text("Game Over.");
      $("td").off("click");
      console.log("callind showAllShips if you lose")
      showAllShips() //after game over, show ships they did not hit
      $(".btn").show();
    }
  })
console.log("game is starting")
})

})

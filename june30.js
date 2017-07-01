var torpedoesLeft
// var board =[[],[],[],[],[],[],[],[],[],[]]
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

//set board to zeroes
// for (i=0; i<10; i++){
//     for (j=0; j<10; j++){
//         board[i][j] = 0
//     }
// }

var board = new Array(100)
board.fill(0)
console.log("board now zeroes");

function check(coordinate){

// if (board[coordinate] != 0 && board[coordinate] !=  undefined){
//     console.log("1: coordinate " + coordinate + " is not zero");
// }else if(board[coordinate+1] != 0 && board[coordinate+1] !=  undefined)
// {
//     console.log("2: coordinate " + (coordinate+1) + "is not zero");
// }else if(board[coordinate-1] != 0 && board[coordinate-1] !=  undefined)
// {
//     console.log("2: coordinate " + (coordinate-1) + "is not zero");
// }else if(board[coordinate+10] != 0 && board[coordinate+10] !=  undefined)
// {
//     console.log("4: coordinate " + (coordinate+10) + "is not zero");
// }else if(board[coordinate-10] != 0 && board[coordinate-10] !=  undefined)
// {
//     console.log("5: coordinate " + (coordinate-10) + "is not zero");
// }else if(board[coordinate+9] != 0 && board[coordinate+9] !=  undefined)
// {
//     console.log("6: coordinate " + (coordinate+9) + "is not zero");
// }else if(board[coordinate-9] != 0 && board[coordinate-9] !=  undefined)
// {
//     console.log("7: coordinate " + (coordinate-9) + "is not zero");
// }else if(board[coordinate+11] != 0 && board[coordinate+11] !=  undefined)
// {
//     console.log("8: coordinate " + (coordinate+11) + "is not zero");
// }else if(board[coordinate-11] != 0 && board[coordinate-11] !=  undefined)
//
// {
//     console.log("9: coordinate " + (coordinate-11) + "is not zero");
// }

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
}

function place5h(){
  var coordinate1 = Math.floor(Math.random() * 10)
  var coordinate2 = Math.floor(Math.random() * 6)

  var coordinate = coordinate1.toString() + coordinate2.toString();
  coordinate = +coordinate;
  console.log("the 5h coordinate is now: " + coordinate)



  //place 55555 ship on board array
  for (i=0; i <5; i++){
  board[coordinate + i] = ship5h
  console.log("placing ship at " + (coordinate + i))
  }

}
place5h()
console.log("5 ship now on board")

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
      //place 55555 ship on board array
      for (i=0; i <4; i++){
      board[coordinate + i] = ship4h
      console.log("placing ship at " + (coordinate + i))
  }
}
}

place4h()
place4h()
place4h()

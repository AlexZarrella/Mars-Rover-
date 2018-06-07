// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  position: [0,0],
  name: "Mars Rover"
};

// Grid
//=======================
var grid = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
]

// ======================
function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'W':
      rover.direction = 'S';
      break;
  };

console.log("Rover Direction: " + rover.direction);
}
// turnLeft(rover)

function turnRight(rover){
  switch(rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  };

console.log("Rover Direction: "+ rover.direction);

}
// turnRight(rover)
// console.log(turnRight(rover))

function moveForward(rover){
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  };

console.log("Rover Direction: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

// console.log(moveForward(rover))



var inst = ['f','f','l','l','r'] 

function roverCommands(commands) {
  for (var i = 0 ; i < commands.length ; i++) {
    console.log(i)

    //..............
    switch (commands[i]){
      case 'f':
        moveForward(rover);
        console.log('for')
        break;
      case 'l':
        turnLeft(rover);
        console.log('rig');
        break;
      case 'r':
        turnRight(rover);
        console.log('lef');
      break
        ;
    }
 }
}
  // console.log(roverCommands(inst))

 roverCommands(inst);


// grid [rover.position[0]][rover.position[1]] = rover.name;}



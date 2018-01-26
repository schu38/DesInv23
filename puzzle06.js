function repeatDown() {
  var count = 0;
  while (count < 3) {
    down ();
    count = count + 1;
  }
}

function repeatRight() {
  var Rcount = 0;
  while (Rcount < 2) {
    right ();
    Rcount = Rcount + 1;
  }
}

function repeatUp() {
  var Ucount = 0;
  while (Ucount < 3) {
    up ();
    Ucount = Ucount + 1;
  }
}

function sandal() {
if (getColor() === "blue") {
    repeatDown();
  
	}
else {
 repeatUp();
	}
}

function othersandal() {
  if (getColor () === "red") {
      left();
    up();
	}
else {
  right();
  down()
	}
}
right();
var firstcolorseen = getColor();
sandal();
othersandal();

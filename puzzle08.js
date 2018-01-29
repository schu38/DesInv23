
function repeatRight() {
  var Rcount = 0;
  while (Rcount < 2) {
    right ();
    Rcount = Rcount + 1;
  }
}

function repeatUp() {
  var Ucount = 0;
  while (Ucount < 8) {
    up ();
    if (getColor() === "red") {
      repeatRight();
    repeatDown() ;
   	}
    else 
      Ucount = Ucount + 1;
  }
}

function repeatDown() {
  var count = 0;
  while (count < 8) {
    down ();
    if (getColor() === "red") {
      repeatRight();
      repeatUp();
    }
    else
    count = count + 1;
  }
}
repeatDown();
repeatRight();
repeatUp();
repeatRight();
repeatDown();
repeatRight();
repeatUp();
repeatRight();
repeatDown();
repeatRight();

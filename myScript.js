const container = document.getElementById("container");
let num = 16;

function createGrid() {

  for(i = 0; i < num; i++) {

      let newRow = document.createElement("div");
      newRow.classList.add("row");
      container.appendChild(newRow);

      for(a = 0; a< num; a++){

        let newCell = document.createElement("div");
        newCell.classList.add("cell");
        newRow.appendChild(newCell);
  
        newCell.addEventListener("mouseenter", function( event ) {   
          event.target.classList.add("activeCell");
        });
        
      }
  }

}

function changeGrid() {

    test = prompt("please enter a number", "10");

    test = Number(test);


    if (Number.isNaN(test)) {
      
      alert("Must input a number!");
      
    } else if (test < 0) {

      alert("Must be a positive number");

    } else if (test > 100) {

      alert("Must be a number bellow 100");

    } else {

      num = test;

      let row = document.getElementsByClassName("row");

      while(row.length > 0) {
        row[0].parentNode.removeChild(row[0]);
      };

      createGrid();

    }


};
createGrid();
const container = document.getElementById("container");
let num = 5;

function changeGrid() {

    test = prompt("please enter a number", "10");


};

for(i = 0; i < num; i++) {

    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    for(a = 0; a< num; a++){

        let cell = document.createElement("div");
        cell.classList.add("cell");
        row.appendChild(cell);
 
cell.addEventListener("mouseenter", function( event ) {   
    event.target.style.backgroundColor = "blue";
  }, false);
/*this clears the cells as you leave the cell
  cell.addEventListener("mouseleave", function( event ) {   
    event.target.style.backgroundColor = "white";
  }, false); */
    }
}

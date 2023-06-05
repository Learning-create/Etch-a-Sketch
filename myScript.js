const container = document.getElementById("container");
let num = 16;



for(i = 0; i < num; i++) {

    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    for(a = 0; a< num; a++){

        let cell = document.createElement("div");
        cell.classList.add("cell");
        row.appendChild(cell);

    }
}

function mouseOver( {



})
function CreateGrid(dimension) {
    //locate rows inside container
    const container = document.querySelector("#container");

    for (let i = dimension; i > 0; i--) {
        //creates row div
        const row = document.createElement("div");
        row.classList.add("row");
        //adds row inside container div 
        container.appendChild(row);

        //adds tile divs inside rows
        for (let j = dimension; j > 0; j--) {
            const tile = document.createElement("div");
            tile.classList.add("tile");
            row.appendChild(tile);
        }
    }
}

CreateGrid(16);


const TileList = document.querySelectorAll(".tile");
TileList.forEach(addClassHover);

function addClassHover(tile) {
    tile.addEventListener("mouseover", () => tile.classList.add("hovered"));
}



//Creates grid
function CreateGrid(dimension) {
    //locate rows inside container div
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

// Clears given div
function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}

// Takes a node list and enables event listener for those nodes
function EnableHover(nodeList) {

    nodeList.forEach(addClassHover);

    function addClassHover(tile) {
        tile.addEventListener("mouseover", () => tile.classList.add("hovered"));
    }
}

//Selects range element
let rangeInput = document.getElementById("myRange");

rangeInput.addEventListener('mouseup', function() {
    //Removes previous colored tiles before creating new grid
    clearBox("container");
  
    //Creates new grid
    CreateGrid(this.value);
    let TileList = container.querySelectorAll(".tile");

    EnableHover(TileList);
})

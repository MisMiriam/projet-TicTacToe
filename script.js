// Tic Tac Toe
// Variables
const Winner = [[0,1,2],[3,4,5],[6,7,8],
                [0,3,6],[1,4,7],[2,5,8],
                [0,4,8],[2,4,6]];
const Cells = document.querySelectorAll(".col");
const RestartBtn = document.querySelector("#restart");
const StatusText = document.querySelector("#playerStatus");
let options = ["","","","","","","","",""];
let currentPlayer = "X";
let running = false;

// Initialisation
initilizeGame()

// Event
function initilizeGame(){
    Cells.forEach(Cell => Cell.addEventListener("click", cellClicked));
    RestartBtn.addEventListener("click",restartGame);
    StatusText.textContent = `${currentPlayer} start`;
    running = true;
}
// Fonction
function cellClicked(){
    const cellindex = this.getAttribute("cellindex");
    if(options[cellindex] != "" || !running) return;
    updateCell(this,cellindex);
    checkWinner();
}
function updateCell(cell,index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    StatusText.textContent = `${currentPlayer}'s turn `;
}
function checkWinner(){
    let roundWon = false;
    for(let i = 0; i < Winner.length; i ++){
        let condition = Winner[i];
        let cellA = options[condition[0]];
        let cellB = options[condition[1]];
        let cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == "") continue;
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }
    if(roundWon){
        StatusText.textContent = `${currentPlayer} wins ! `;
        running = false;
    }
    else if(!options.includes("")){
        StatusText.textContent = "Draw !";
        running = false;
    }
    else changePlayer();
}
function restartGame(){
    currentPlayer = "X";
    options = ["","","","","","","","",""];
    StatusText.textContent = `${currentPlayer} start `;
    Cells.forEach(Cell => Cell.textContent = "");
    running = true;
}
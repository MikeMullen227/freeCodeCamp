$(function () {
    let human = '';
    let computer = '';
    const X = '<i class= "fas fa-times fa-7x"></i>';
    const O = '<i class="far fa-circle fa-6x"></i>';
    var wins = {
        human: [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [0, 4, 8], [2, 4, 6]],
        computer: [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [0, 4, 8], [2, 4, 6]]
    }

    var occupiedSpaces = {
        human: [],
        computer: []
    }

    var board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    
// Get the modal
        let $modal = $('.modal');
        let $modalContent = $('.modal-content')
   
 // After the content in the window loads, run the modal
            $modal.css('display', 'block');


    // When the human clicks on button X or O, close the modal and store the values.
    function assignPlayers(event) {
        let $value = $(event.target).val();
        if ($value == 'X') {
            human = X;
            computer = O
            $modal.css('display', 'none');
        } else if ($value == 'O') {
            human = O;
            computer = X
            $modal.css('display', 'none');
        }
    }

    function checkWin(player) {
        //loop through wins array to see which arrays have the current item from the occupiedspaces array. if it does, make a copy of that item and place it in the array in wins. do this for each item in occupiedspaces array. if a wins array contains 6 items, that means a player has a winning combination.


        wins[player].forEach(function (array) {
            array.forEach(function (winsSquare) {
                occupiedSpaces[player].forEach(function (currentSquare) {
                    if (winsSquare === currentSquare) {
                        array.push(currentSquare)
                    }
                    if (array.length === 6) {
                        console.log(player + 'is the winner!')
                        //winner(player)
                    }
                })
            })
        })
        // need to remove the current square from occupiedSpaces to avoid repeats because everytime the checkWin function is called it adds the current square to the players wins.
        occupiedSpaces[player].pop()
    }


    /*
    function modal(type) {
        // Get the modal
        let $modal = $('.modal');
        let $modalContent = $('.modal-content')
        if(type === 'start') {
            // After the content in the window loads, run the modal
            $modal.css('display', 'block');
        }
        
    }
    */
    

    function placeValuesOnboard(event) {
        let $target = $(event.target);
        // Make sure square doesn't already have an '<i>' or is an '<i>'.
        if ($target.has('i').length || $target.is('i')) {
            return;
        }
        // add human value to board
        $target.append(human);

        // remove humans square id from board array and place in occupiedSpace array
        let ID = parseInt($target.attr('id'));
        removeFromBoardArray(ID, 'human')

        // check if human won the game
        checkWin('human');
        //generate a random number from what numbers are left in the board array.
        let randomLocation = board[Math.floor(Math.random() * board.length)]

        //remove computers square from board array
        removeFromBoardArray(randomLocation, 'computer');

        //add computers value to square
        $('#' + randomLocation).append(computer);

        // check if computer won the game
        checkWin('computer')

    }


    function removeFromBoardArray(cell, player) {
        let removed = board.splice(board.indexOf(cell), 1).shift();
        occupiedSpaces[player].push(removed)

    }


    //Human clicks X or O. Values are assigned to human and computer.
    $('#myModal').click(assignPlayers);

    //Human clicks cell on board and value is placed. This function then runs the computers turn.
    $('table').click(placeValuesOnboard);


});






/*
function startGame() {
    modal('start');
    
}

function replay() {

}
*/
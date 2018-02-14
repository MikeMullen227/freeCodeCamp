$(function () {
    let human = '';
    let computer = '';
    const X = '<i class= "fas fa-times fa-7x"></i>';
    const O = '<i class="far fa-circle fa-6x"></i>';
    const wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                    [0, 3, 6], [1, 4, 7], [2, 5, 8],
                    [0, 4, 8], [2, 4, 6]];
    
    var occupiedSpaces = [];
    var board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    // Get the modal
    const $modal = $('.modal');
    const modalContent = $('.modal-content')

    // After the content in the window loads, run the modal
        $modal.css('display', 'block');
    
    
    
    
    function startGame() {
        
    }
    
    function replay() {
        
    }


    
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
    
    function removeFromBoard(cell) {
        let removed = board.splice(board.indexOf(cell), 1).shift();
        occupiedSpaces.push(removed)
        return removed
    }
    
    // When the human clicks a cell, place human value on square. 
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
        removeFromBoard(ID)
        
        //generate a random number from what numbers are left in the board array.
        let randomLocation = board[Math.floor(Math.random() * board.length)]
        
        //remove computers square from board array
        removeFromBoard(randomLocation);
        
        //add computers value to square
        $('#' + randomLocation).append(computer);
        
    }

    //Human clicks X or O. Values are assigned to human and computer.
    $('#myModal').click(assignPlayers);

    //Human clicks cell on board and value is placed. This function then runs the computers turn.
    $('table').click(placeValuesOnboard);


});

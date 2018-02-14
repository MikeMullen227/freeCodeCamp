$(function () {
    let human = '';
    let computer = '';
    const X = '<i class= "fas fa-times fa-7x"></i>';
    const O = '<i class="far fa-circle fa-6x"></i>';
    const wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                    [0, 3, 6], [1, 4, 7], [2, 5, 8],
                    [0, 4, 8], [2, 4, 6]];
    
    var occupiedSpaces = [];
    var Board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    // Get the modal
    const $modal = $('.modal');
    const modalContent = $('.modal-content')

    // After the content in the window loads, run the modal
        $modal.css('display', 'block');
    
    function startGame() {
        
    }
    
    function replay() {
        
    }

     //check if the occupiedSpaces array has the randomly generated number. if it does, repeat. if not, return that value
    function checkBoard() {
         
        let randomLocation = getRandomInt(9)
        while(true) {
            if(!occupiedSpaces.includes(randomLocation)) {
                return randomLocation;
            } else {
                randomLocation = getRandomInt(9)    
            }
        }
        
    }
    
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
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
    
    // Search through all the tables td cells to find the corresponding value returned from checkBoard. When found, place X or O on board. 
    function computerTurn(freeSpace) {

        $('table td').filter(function() {
            return $(this).val() === freeSpace();
        }).append(computer);
    }
    
    // When the human clicks a cell, place human value on cell. 
    function placeValuesOnBoard(event) {
        let $target = $(event.target);
        // Make sure cell doesn't already have an '<i>' or is an '<i>'.
        if ($target.has('i').length || $target.is('i')) {
            console.log('test');
            return;
        }
        // add human value to board
        $target.append(human);
        
        // remove humans location id from board array and place in occupiedSpace array
        let ID = $target.attr('id');
        let nextID = parseInt(ID) + 1;
        let removedLocation = Board.slice(ID, nextID).shift();
        occupiedSpaces.push(removedLocation);
        
        //console.log(ID)
        //console.log(Board)
        //console.log(removedLocation)
        //console.log(occupiedSpaces);
        
        // Call function that generates computers selection. 
        computerTurn(checkBoard);
    }

    //Human clicks X or O. Values are assigned to human and computer.
    $('#myModal').click(assignPlayers);

    //Human clicks cell on board and value is placed. This function then runs the computers turn.
    $('table').click(placeValuesOnBoard);


});

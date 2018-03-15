$(function () {
    let turn;
    let resetGame;
    let unoccupiedComputerSpace;
    let unoccupiedHumanSpace;
    let blocked = false;
    let atLeastOneBlock = false;
    let humanImage = '';
    let computerImage = '';
    let humanValue = '';
    let computerValue = ''
    let $modal = $('.modal');
    var win;
    const xImage = '<i class= "fas fa-times fa-7x"></i>';
    const oImage = '<i class="far fa-circle fa-6x"></i>';
    var wins;
    var currentBoard;
    var moves;
    var winCountHuman;
    var winCountComputer;


    // When the human clicks on button X or O, close the modal and store the values. If the human chooses O, the computer goes first.
    // game object candidate
    function assignPlayers(event) {
        let $value = $(event.target).val();
        if ($value == 'X') {
            humanImage = xImage;
            computerImage = oImage;
            humanValue = 'X';
            computerValue = 'O'
            $modal.css('display', 'none');
            turn = 'human';
            startGame();
        } else if ($value == 'O') {
            humanImage = oImage;
            computerImage = xImage;
            humanValue = 'O';
            computerValue = 'X'
            $modal.css('display', 'none');
            turn = 'computer';
            startGame();
            computerPlay();
        }
        
        resetGame = false;
    }

    // computer defensive moves
    function blockFork() {
        let cell = randomSpace(1, 3, 5, 7);
        $('#' + cell).append(computerImage);
        placeInCurrentBoard(cell, 'computer');
        blocked = true;
        addValueToWins();
    }

    function blockTwoInARow() {
        if (winCountHuman.includes('block') && win === false) {
            console.log(winCountHuman       )
            let index = winCountHuman.indexOf('block');
            winCountHuman[index] = 'blocked';
            atLeastOneBlock = true;
            blocked = true;
            //add computers value to cell as an image
            $('#' + unoccupiedHumanSpace).append(computerImage);
            placeInCurrentBoard(unoccupiedHumanSpace, 'computer');
            addValueToWins();
        }
    }
    
        // if the player does not create a fork or two in a row and instead places in a corner and then an edge, place piece in either the middle row or middle column, whichever does'nt already have an opponents piece
    function cornerAndEdge() {

        function isOdd(element) {
            if (element % 2 != 0) {
                return element;
            }
        }
        
        let centerRowOrColumn = wins.filter(function (array) {
            if (array.indexOf(computerValue) > -1 && array.indexOf(humanValue) === -1) {
                return array
            }
        }).find(isOdd);

        let firstEmptyCell = centerRowOrColumn.find(function (cell) {
            return typeof cell == 'number';
        });
        $('#' + firstEmptyCell).append(computerImage);
        placeInCurrentBoard(firstEmptyCell, 'computer');
        addValueToWins();
    }

    function placeInRandomSpot() {
        cell = randomSpace(currentBoard.indexOf(''));
        $('#' + cell).append(computerImage);
        placeInCurrentBoard(cell, 'computer');
        console.log('test')
        addValueToWins();
    }
    
    function randomSpace(...spaces) {
        return spaces[Math.floor(Math.random() * spaces.length)]
    }

    function computerWin() {
        if (winCountComputer.includes('possible win') && blocked === false) {
            let index = winCountComputer.indexOf('possible win');
            winCountComputer[index] = 3;
            //add computers value to cell as an image
            $('#' + unoccupiedComputerSpace).append(computerImage);
            placeInCurrentBoard(unoccupiedComputerSpace, 'computer');
            win = true;
        }
    }

    function findTwoValuesInARow(array, countIndex, element) {
        //if the human has two in a row, place a 'block' in the index of the array that needs to be blocked
        if (winCountHuman[countIndex] === 2 && !array.includes(computerValue)) {
            unoccupiedHumanSpace = array.filter(element => element !== humanValue && element !== computerValue).shift();
            array.splice(array.indexOf(unoccupiedHumanSpace), 1, computerValue);
            winCountHuman[countIndex] = 'block'
        }
        if (winCountComputer[countIndex] === 2 && !array.includes(humanValue)) {
            unoccupiedComputerSpace = array.filter(element => element !== humanValue && element !== computerValue).shift();
            winCountComputer[countIndex] = 'possible win';
        }
        if (winCountComputer[countIndex] === 'possible win' && array.includes(humanValue)) {
            winCountComputer[countIndex] = 'not a win';
        }
    }

    function findWin() {
        if (winCountHuman.includes(3)) {
            modal('win');
        } else if (winCountComputer.includes(3)) {
            win = true;
            modal('lose');
        }
    }

    function addValueToWins() {
        currentBoard.forEach(function (value, i) {
            wins.forEach(function (array, j) {
                array.forEach(function (element, k) {
                    if (value != '' && i === element) {
                        array.splice(k, 1, value);
                        value === humanValue ? winCountHuman[j]++ : winCountComputer[j]++;
                    }
                });
                findTwoValuesInARow(array, j, i);
            });
        });
    }

    function computerPlay() {
        switch (moves.length) {
            case 0:
                firstMove(4);
                break;
            case 1:
                firstMove(moves[0]);
                break;
            case 2:
            case 3:
                secondMove(moves[moves.length - 1]);
                break;
            case 4:
            case 5:
                thirdMove(moves[moves.length - 1]);
                break;
            case 6:
            case 7:
                fourthMove(moves[moves.length - 1]);
                break;
            case 8:
            case 9:
                fifthMove(moves[moves.length - 1]);
                break;
        }
        turn = 'human'
    }

    // sequence of moves
    function firstMove(value) {
        //once the computer decides where to put its first move, place it in the cell variable which will be pushed into computermoves array
        let cell;
        switch (value) {
            // if opening move is in the corner, place in the center
            case 0:
            case 2:
            case 6:
            case 8:
                cell = 4;
                callPlaceInCurrentBoard(cell);
                break;
                // if opening move is in the center, place in a random corner. if computer goes first always place in a random corner.
            case 4:
                cell = randomSpace(0, 2, 6, 8);
                callPlaceInCurrentBoard(cell);
                break;
                // if opening move is on an edge, place randomly in one of 3 best possible positions
            case 1:
                cell = randomSpace(0, 2, 4);
                callPlaceInCurrentBoard(cell);
                break;
            case 3:
                cell = randomSpace(0, 4, 6);
                callPlaceInCurrentBoard(cell);
                break;
            case 5:
                cell = randomSpace(2, 4, 8);
                callPlaceInCurrentBoard(cell);
                break;
            case 7:
                cell = randomSpace(4, 6, 8);
                callPlaceInCurrentBoard(cell);
                break;
        }
        addValueToWins();
    }
    
    function callPlaceInCurrentBoard(cell) {
        $('#' + cell).append(computerImage);
        placeInCurrentBoard(cell, 'computer');
    }

    function secondMove(value) {

        // if the player has occupied 2 corners on a diagonal, block the fork
        if (currentBoard[0] === humanValue && currentBoard[8] === humanValue ||
            currentBoard[2] === humanValue && currentBoard[6] === humanValue) {
            blockFork();
            addValueToWins();
        } else {
            blockTwoInARow();
            addValueToWins();
            // if the computer didnt block the first two moves, run this
            if (atLeastOneBlock === false) {
                cornerAndEdge()
            }
        }
    }

    function thirdMove(value) {
        //if the human messed up and didn't block a computer win, this will make the win
        computerWin();
        // after the computer checks to see if it has two in a row, block the human if it has two in a row
        findWin();
        blockTwoInARow();
        let emptySpaces = currentBoard.filter(cell => cell === '');
        if (emptySpaces.length === 4 && humanValue === 'X' && win === false || emptySpaces.length === 5 && humanValue === 'O' && win === false) {
            console.log(win)
            placeInRandomSpot()
        }
    }

    function fourthMove(value) {
        computerWin();
        findWin();
        blockTwoInARow();
        let emptySpaces = currentBoard.filter(cell => cell === '');
        if (emptySpaces.length === 2 && humanValue === 'X' && win === false || emptySpaces.length === 3 && humanValue === 'O' && win === false) {
            placeInRandomSpot();
        }
    }

    function fifthMove(value) {
        computerWin();
        findWin();
        blockTwoInARow();
        placeInRandomSpot();
        modal('tie');
    }

    function modal(type) {
        // Get the modal
        let $modalContent = $('.modal-content');
        let $modalDisplay = $modal.css('display', 'block');
        let $modalBody = $modalContent.find('.modal-body');
        let tie = "<p>The game is a tie!<br><br>If you would like to play again, choose X or O.</p>";
        let win = "<p>Congratulations you won!<br><br> If you would like to play again, choose X or O.</p>";
        let lose = "<p>Sorry but you lost!<br><br> If you would like to play again, choose X or O.</p>";

        if (type === 'start') {
            $modalBody;
        } else if (type === 'tie') {
            $modalBody.empty('p');
            $modalBody.append(tie);
        } else if (type === 'win') {
            $modalBody.empty('p');
            $modalBody.append(win);
        } else if (type === 'lose') {
            $modalBody.empty('p');
            $modalBody.append(lose);
        }
    }

    function placeInCurrentBoard(cell, player) {
        if (player === 'human') {
            currentBoard.splice(cell, 1, humanValue);
            moves.push(cell);
        } else {
            currentBoard.splice(cell, 1, computerValue);
            moves.push(cell);
        }
    }

    function placeValuesOnScreen(event) {
        turn = 'human';
        //reset the blocked variable after each block so the computer won't block if it has a win available and a block at the same time
        blocked = false;
        let $target = $(event.target);
        // Make sure square doesn't already have an '<i>' or is an '<i>'.
        if ($target.has('i').length || $target.is('i')) {
            return;
        }
        // add human value to board as an image
        $target.append(humanImage);

        // remove humans square id from board array and place in the current board array. That function will place its move in the moves array
        let ID = parseInt($target.attr('id'));
        placeInCurrentBoard(ID, 'human');

        // add the value to the wins arrays which will replace the id of the cell with the humans value and run some tests before the computer places on the board
        addValueToWins();
        // its now the computers turn
        turn = 'computer';
        // run computerPlay function to check all scenarios and place its value on the board
        computerPlay();
    }
    
    

    function startGame() {
        wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]];

        currentBoard = ['', '', '', '', '', '', '', '', ''];
        moves = [];
        winCountHuman = [0, 0, 0, 0, 0, 0, 0, 0];
        winCountComputer = [0, 0, 0, 0, 0, 0, 0, 0];
        $('.cell').empty();
        blocked = false;
        atLeastOneBlock = false;
        resetGame = true;
        win = false;
    }

    modal('start');
    //Human clicks X or O. Values are assigned to human and computer.
    $('#myModal').click(assignPlayers);
    //Human clicks cell on board and value is placed. This function then runs the computers turn.
    $('table').click(placeValuesOnScreen);

});
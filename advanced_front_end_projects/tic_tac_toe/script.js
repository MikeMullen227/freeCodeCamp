$(function () {
    let humanImage = '';
    let computerImage = '';
    let humanValue = '';
    let computerValue = ''
    let $modal = $('.modal');
    const xImage = '<i class= "fas fa-times fa-7x"></i>';
    const oImage = '<i class="far fa-circle fa-6x"></i>';

    let wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [0, 4, 8], [2, 4, 6]];

    let occupiedSpaces = {
        human: [],
        computer: []
    }

    let currentBoard = ['', '', '', '', '', '', '', '', ''];
    let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let humanMoves = [];
    let computerMoves = [];
    let winCount = [0, 0, 0, 0, 0, 0, 0, 0];


    // When the human clicks on button X or O, close the modal and store the values.
    function assignPlayers(event) {
        let $value = $(event.target).val();
        if ($value == 'X') {
            humanImage = xImage;
            computerImage = oImage;
            humanValue = 'X';
            computerValue = 'O'
            $modal.css('display', 'none');
        } else if ($value == 'O') {
            humanImage = oImage;
            computerImage = xImage;
            humanValue = 'O';
            computerValue = 'X'
            $modal.css('display', 'none');
        }
    }

    function blockWin(array, countIndex, element) {
        if (winCount[countIndex] === 2) {
            unoccupiedSpace = array.filter(element => element !== humanValue && element !== computerValue);
            console.log(unoccupiedSpace);
            array.splice(unoccupiedSpace, 1, computerValue);
            winCount[countIndex] = 'blocked'
            //add computers value to cell as an image
            $('#' + unoccupiedSpace).append(computerImage);
            console.log("spliced wins = " + wins);
            console.log(winCount)
            //return true;
        }
    }
    
    function checkWinsArrays() {
        humanMoves.forEach(function (value, i) {
            console.log("value = " + value)
            wins.forEach(function (array, j) {
                console.log("array = " + array);
                array.forEach(function (element, k) {
                    console.log("element = " + element);
                    if (value === element) {
                        array.splice(k, 1, humanValue);
                        winCount[j]++;
                        console.log("winCount[" + j + "] = " + winCount[j]);
                    }
                });
                blockWin(array, j, value);
            });
        });
    }

    function computerPlay() {
        switch(humanMoves.length) {  
            case 1: 
                firstMove(humanMoves[0]);
                break;
            case 2:
                secondMove(humanMoves[1]);
            case 3: 
            case 4:
            case 5:
            
        }
    }

    function findWin(countIndex) {
        if (winCount[countIndex] === 3) {
            console.log('winner');
            throw null;
        }
    }
    
    function firstMove(value) { 
            //once the computer decides where to put its first move, place it in the cell variable which will be pushed into computerMoves array
            let cell;
            //let append = $('#' + cell).append(computerImage);

        switch(value) {
            // if opening move is in the corner, place in the center
            case 0:   
            case 2:   
            case 6:   
            case 8: 
                cell = 4;
                $('#' + cell).append(computerImage);               
                placeInMovesArray(cell, 'computer');
                break;   
            // if opening move is in the center, place in a random corner
            case 4:
                cell = randomSpace(0, 2, 6, 8);
                $('#' + cell).append(computerImage);
                placeInMovesArray(cell, 'computer');
                break;
            // if opening move is on an edge, place randomly in one of 3 best possible positions
            case 1:
                cell = randomSpace(0, 2, 4);
                $('#' + cell).append(computerImage);
                placeInMovesArray(cell, 'computer');
                break;
            case 3: 
                cell = randomSpace(0, 4, 6);
                $('#' + cell).append(computerImage);
                placeInMovesArray(cell, 'computer');               
                break;
            case 5:  
                cell = randomSpace(2, 4, 8);
                $('#' + cell).append(computerImage);
                placeInMovesArray(cell, 'computer');               

                break;
            case 7:  
                cell = randomSpace(4, 6, 8)
                $('#' + cell).append(computerImage);
                placeInMovesArray(cell, 'computer');               
                break;
        }  
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

    function placeInMovesArray(cell, player) {
        if(player === 'human') {
            humanMoves.push(cell);
        } else {
            computerMoves.push(cell);
        }
    }


    function placeValuesOnboard(event) {
        let $target = $(event.target);
        // Make sure square doesn't already have an '<i>' or is an '<i>'.
        if ($target.has('i').length || $target.is('i')) {
            return;
        }
        // add human value to board as an image
        $target.append(humanImage);

        // remove humans square id from board array and place in humans moves array
        let ID = parseInt($target.attr('id'));
        placeInMovesArray(ID, 'human');

        // run computerPlay function to check all scenarios and place its value on the board
        computerPlay();

        //computerStrategy();


//        //generate a random number from what numbers are left in the board array.
//        let randomLocation = board[Math.floor(Math.random() * board.length)]
//
//        //remove computers square from board array
//        removeFromBoardArray(randomLocation, 'computer');
//
//        //add computers value to square as an image
//        $('#' + randomLocation).append(computerImage);
//
//        // check if computer won the game
//        checkWin('computer')
//
//        console.log(occupiedSpaces.human)
//        console.log(occupiedSpaces.computer)

    }
    
    
    function randomSpace(...spaces) {
        return spaces[Math.floor(Math.random() * spaces.length)]
    }


    function replaceWinsWithCurrentBoard(player) {
        currentBoard.forEach(function (value, index1) {
            if (value !== '') {
                wins[player].forEach(function (array) {
                    array.forEach(function (element, index2) {
                        if (element === index1) {
                            array.splice(index2, 1, value);
                        }
                    })
                })
            }
        })
    }
    
    
    
    function secondMove(value) {
        // check to see if the player has 2 in a row. If so block it.
        checkWinsArrays();
    }
    modal('start');
    //Human clicks X or O. Values are assigned to human and computer.
    $('#myModal').click(assignPlayers);


    //Human clicks cell on board and value is placed. This function then runs the computers turn.
    $('table').click(placeValuesOnboard);


    



});

/*





computerPlay();

    
    // computer must place a value on the unoccupied space to prevent a win
    //$('#' + unoccupiedSpace[0]).append(computerImage);
*/



/*
    function checkWin(player) {
        //loop through wins array to see which arrays have the current item from the occupiedspaces array. if it does, make a copy of that item and place it in the array in wins. do this for each item in occupiedspaces array. if a wins array contains 6 items, that means a player has a winning combination.


        wins[player].forEach(function (array) {
            array.forEach(function (winsSquare) {
                occupiedSpaces[player].forEach(function (currentSquare) {
                    if (winsSquare === currentSquare) {
                        array.push(currentSquare)
                    }
                    if (array.length === 6) {
                        console.log(player + '  is the winner!')
                        //winner(player)
                    }
                })
            })
        })
        // need to remove the current square from occupiedSpaces to avoid repeats because everytime the checkWin function is called it adds all the players squares to the players wins.
        occupiedSpaces[player].pop()
    }


    function findTwoInARow(player, playerValue) {

        wins[player].forEach(function (array) {
            let count = 0
            let unoccupiedSpace;
            array.forEach(function (element, index) {
                if (element === playerValue) {
                    count++;
                }
            })
            if (count === 2) {
                unoccupiedSpace = array.filter(element => element !== playerValue)
            }
            
            if(count === 3) {
                console.log('winner')
            }
            // computer must place a value on the unoccupied space to prevent a win
            $('#' + unoccupiedSpace[0]).append(computerImage);

        })

    }
    
       function removeFromBoardArray(cell, player) {
        //remove the cell number from the board and place it in the occupied spaces so the computer knows which cells are occupied
        let removed = board.splice(board.indexOf(cell), 1).shift();
        occupiedSpaces[player].push(removed)

        // place an X or O in the current board array so the computer knows where the human and computer inputs are so it can devise a strategy and place its input on the board
        if (player == 'human') {
            currentBoard.splice(removed, 1, humanValue)
        } else {
            currentBoard.splice(removed, 1, computerValue)
        }

    }
    
    
        /*
    function computerStrategy() {
        // Win: if computer has 2 in a row, place 3rd to win the game
        currentBoard.forEach(function(value, index) {
            if(value != '') {
              console.log(value)
              console.log(index)
                wins['human'].forEach(function(array) {
                array.forEach(function(element) {
                if(element === index) {
                  array.splice(array.indexOf(element), 1, value);
                }
              })
            })
            }
        })
        
    }
    
    
    

    function startGame() {

    }

    function replay() {

    }
    
    
    
     if (value === 0 || value === 2 || value === 6 || value === 8) {
                // if opening move is in the corner, place in the center
                
            } else if (value === 1) {
                $('#' + randomSpace(0, 2, 4)).append(computerImage);

            } else if (value === 3) {
                $('#' + randomSpace(0, 4, 6)).append(computerImage);

            } else if (value === 5) {
                $('#' + randomSpace(2, 4, 8)).append(computerImage);

            } else if (value === 7) {
                $('#' + randomSpace(4, 6, 8)).append(computerImage);

            } else {
                // if opening move is in the center, place in a random corner
                $('#' + randomSpace(0, 2, 6, 8)).append(computerImage);
            }

*/
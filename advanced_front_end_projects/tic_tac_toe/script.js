$(function () {
    let user = '';
    let computer = '';
    const X = '<i class= "fas fa-times fa-7x"></i>';
    const O = '<i class="far fa-circle fa-6x"></i>';
    const wins = [ [0, 1, 2]];
    let selectedTarget;

    // Get the modal
    const $modal = $('.modal');

    const modalContent = $('.modal-content')

    // After the content in the window loads, run the modal
    $modal.css('display', 'block');

    // When the user clicks on button X or O, close the modal and store the value of whichever one was clicked. If something else is clicked, do nothing.
    function assignPlayers(event) {
        let $value = $(event.target).val();
        if ($value == 'X') {
            user = X;
            computer = O
            $modal.css('display', 'none');
        } else if ($value == 'O') {
            user = O;
            computer = X
            $modal.css('display', 'none');
        }
    }


    function placeValuesOnBoard(event) {
        let $target = $(event.target);
        if ($target.has('i').length || $target.is('i')) {
            console.log('test');
            return;
        }
        $target.append(user);
        console.log($target);
    }

    $('#myModal').click(assignPlayers);

    $('table').click(placeValuesOnBoard);


});

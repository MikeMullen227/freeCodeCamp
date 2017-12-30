$(document).ready(function() {
  // variable where user selection is stored (X or O)
  let $user
  
  // variable where computer selection is stored (X or O)
  let $computer
  
  // Get the modal
  const $modal = $('.modal');
    
  // Get the X or O <span> element 
  const $selection = $('.selection');
    
  const $modalContent = $('.modal-content')
  
  // After the content in the window loads, run the modal
  $modal.css('display', 'block');
  
  
  // When the user clicks on <span> X or O, close the modal and store the value of whichever one was clicked
    $($selection).click(function() {
      $modal.css('display', 'none');
      $user = $(this).val();
    });
    
    $user == 'X' ? $computer = 'O' : $computer = 'X'
    
    console.log($computer)

    
    $(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest($modalContent).length) {
    $("body").find($modal).css('display', 'none');
  }
});

  
});
$(document).ready(function() {
  // Get the modal
  const $modal = $('.modal');
  
  // Get the <span> element that closes the modal
  const $close = $('.close');
    
  const $modalContent = $('.modal-content')
  
  // After the content in the window loads, run the modal
  $modal.css('display', 'block');
  
  
  // When the user clicks on <span> (x), close the modal
    $($close).on('click', function() {
      $modal.css('display', 'none');
    });

    
    $(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest($modalContent).length) {
    $("body").find($modal).css('display', 'none');
  }
});

  
});
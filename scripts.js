
$('#imageModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); 
    var imgSrc = button.find('img').attr('src'); 
    var imgAlt = button.find('img').attr('alt'); 
    var modal = $(this);
    modal.find('.modal-body img').attr('src', imgSrc);
    modal.find('.modal-body img').attr('alt', imgAlt);
  });
  
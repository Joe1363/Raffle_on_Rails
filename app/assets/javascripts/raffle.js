$(document).ready(function() {
  $('#nameSubmit').click(function() {
    event.preventDefault();

    var name = $('#nameInput').val();
    if (name != '') {
      $('.area').prepend('<p>' + name + '</p>');
    }
    $('#nameInput').val('');
    $('#nameInput').focus();
  })

  $('#reset').click(function() {
    $('p').remove();
    $('#nameInput').val('');
    $('#nameInput').focus();
  })

})

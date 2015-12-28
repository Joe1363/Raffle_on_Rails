$(document).ready(function() {
  var pool = []

  ////name submit////
  $('#nameSubmit').click(function() {
    event.preventDefault();
    var name = $('#nameInput').val();
    if (name != '') {
      $('.area').prepend('<div class="inline"><li>' + name + '</li></div>');
      pool.push(name);

      $('#nameInput').val('');
      $('#nameInput').focus();
    }

  })

  ////reset////
  $('#reset').click(function() {
    $('li').remove();
    $('#nameInput').val('');
    $('#nameInput').focus();
    pool = []
    $('#draw').prop('disabled', false);

  })

  ////draw winner////
  $('#draw').click(function() {
    var rando;
    var win;
    console.log(rando);
    console.log(pool);
    rando = Math.floor(Math.random()*pool.length);
    win = pool[rando];
    winner = $("li:contains(" + win + ")");
    winner.append('<span class="inline highlight"> WINNER</span>');
    console.log(pool);
    pool.splice(rando, 1);
    console.log(pool);
    console.log(rando);
    if (pool.length == 0) {
      $('#draw').prop('disabled', true);
    }

  })

  function animation() {

  }

})

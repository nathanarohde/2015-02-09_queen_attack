var queenAttack = function(queen_start, queen_target) {
  if ((queen_start[0] === queen_target[0]) || (queen_start[1] === queen_target[1])
  || ((Math.abs(queen_start[0]-queen_target[0])) === (Math.abs(queen_start[1]-queen_target[1])))) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $('form#queen-attack').submit(function(event) {
    var queen_start = [parseInt($('input#queen_start_x').val()),parseInt($('input#queen_start_y').val())]
    var queen_target = [parseInt($('input#queen_target_x').val()),parseInt($('input#queen_target_y').val())]
    var result = queenAttack(queen_start, queen_target);

    if (result) {
      $('.not').text('')
    } else {
      $('.not').text('not')
    }

    $('#result').show();
    event.preventDefault();

  });
});

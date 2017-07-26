$( document ).ready(function() {
  $('span').on('click', function() {
    var text= $(this).text();
    var num = parseInt(text)

    if ( text === num ){
      $('#screen').append(num);
    } else if (text === 'C') {
        $(text).hide(this);
        location.reload();
    } else if (text === '=') {
    } else if (text === 'x') {
        text = '*';
        $('#screen').append(text);
    } else if (text === '÷'){
        text = '/';
        $('#screen').append(text);
    } else {
        $('#screen').append(text);
    }
  })

  $('#equals').on('click', function () {
    var sum = 0;
    var screen = $('#screen').html();

    sum = eval(screen)
      if ( sum === NaN || undefined ) {
          $('#screen').html('ERROR');
      } else {
          $('#screen').html(sum);
    }
  })
//keybaord integration
//sapce = clear
//enter = '='
//multiply = '*'
//division = '/'
  $('body').on('keypress', function(e) {
    var sum = 0;
    var screen = $('#screen').html();
    var keyValue = String.fromCharCode( e.which );
    var numberCode = [13, 32, 42, 43, 45, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 61];
console.log(e.keyCode);
    if (keyValue === '=' || e.keyCode == 13) {
      sum = eval(screen)
      $('#screen').html(sum);
    } else if (e.keyCode == 32 ) {
      location.reload();
    } else if(numberCode.indexOf(e.keyCode) > -1) {
      $('#screen').append(keyValue)
    } else {
      $('#screen').append('ERROR')
    }
  } )

});

$ = require('jquery');
require('@fortawesome/fontawesome-free');
require('uswds');

$(function(){
  $('#load-data').on('click', function(){
    $('.page').slideUp();
    $('#page-data').slideDown();
  });

  $('#load-about').on('click', function(){
    $('.page').slideUp();
    $('#page-about').slideDown();
  });

  $('#data-url').on('change', function(){
    $.ajax({
      url: '',
      method: 'POST',
      success: function(){
        $('#response-success').slideDown();
      },
      error: function(xhr, status, text){
        var re = $('#response-error');
        re.find('.usa-alert-heading').text(status);
        re.find('.usa-alert-text').text(text);
        re.slideDown();
      }
    });
  });
});

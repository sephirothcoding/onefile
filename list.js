// Used jquery v3.5.1 and font-awesome v4.7.0
$(document).ready(function() {
    $('.nav .dropdown-menu').prev('a').on('click', function(e) {
      e.preventDefault();
      $(this).parent().find('.dropdown-menu').slideToggle();
    });
});



// Increments the delay on each item.
$('.rolldown-list li').each(function () {
  var delay = ($(this).index() / 4) + 's';
  $(this).css({
    webkitAnimationDelay: delay,
    mozAnimationDelay: delay,
    animationDelay: delay
  });
});

$('#btnReload').click(function () {
  $('#myList').removeClass('rolldown-list');
  setTimeout(function () {
    $('#myList').addClass('rolldown-list');
  }, 1);
});

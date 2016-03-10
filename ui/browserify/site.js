$(function() {
  console.log('Page loaded.');
  $(document).on('click','.btn-pref .btn', function(){
    $('.btn-pref .btn').removeClass('btn-primary').addClass('btn-default');
    $(this).removeClass('btn-default').addClass('btn-primary');
  });
});

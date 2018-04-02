//Don't touch this!!!!!!!!!!!!
  $(document).ready(
    $('#btn').click(function(e){
        e.preventDefault();
        var toAdd = $("input[name=ListItem]").val();
        $('ol').append('<li>' + toAdd + '</li>');
        $('input[name=ListItem]').val("");
      })
  )

  $(document).on('dblclick','li', function(){
         $(this).toggleClass('strike').fadeOut('slow');
       });

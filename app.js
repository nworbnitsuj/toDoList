//Don't touch this!!!!!!!!!!!!
  $(document).ready(
    $('#btn').click(function(e){
        e.preventDefault();
        var toAdd = $("input[name=ListItem]").val();
        $('ol').append('<li>' + toAdd + '</li>');
        $('input[name=ListItem]').val("");
      })
  )

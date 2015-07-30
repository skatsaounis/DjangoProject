$('#likes').click(function(){
    var catid;
    catid = $(this).attr("data-catid");
    $.get('/rango/like_category/', {category_id: catid}, function(data){
               $('#like_count').html(data);
               $('#likes').hide();
    });    
});

 $('#suggestion').keyup(function(){
        var query;
        query = $(this).val();
        $.get('/rango/suggest_category/', {suggestion: query}, function(data){
         $('#cats').html(data);
        });
    });

$(".locations a").click( function(event) {
        event.preventDefault();
        var attr= $(this).attr('href');

        $.getJSON(attr, function(data){
                  var items = [];
                  $.each( data, function( key, val ) {
                    items.push( "<span>" + key + " : " + val + "</span><br />" );
                  });                
                  $('#map_holder').html(items.join( "" ));
        });
});

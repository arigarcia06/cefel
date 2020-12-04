$(document).ready(function(){

    $('#accordion h5').click(function(){
        if ($(this).next().is(':hidden')) { 
            $('#accordion .collapsed-box').slideUp();
            $('#accordion h5 img').removeClass('icon-rotate');
            
            $(this).next().slideDown(); 
            $(this).children().addClass('icon-rotate');   
        } else {
           $(this).next().slideUp();
           $(this).children().removeClass('icon-rotate');
        }
    });
    
});
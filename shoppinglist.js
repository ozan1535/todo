
$(function(){
    $("input").on('keypress',function(e) {
        if(e.which == 13 && !$(this).val() == "" ) {
           a = $("input").val();
           $(".eklenen").append("<div class='alinacak animate__animated animate__backInLeft'> <span id='demo'>"+a+"</span> <i id='cop' class='fas fa-trash-alt'></i> <i id='secildi' class='fas fa-check'></i> </div>");
           $(this).val('');
        }

        $("*#cop").click(function(){
            $(this).parent().fadeOut(800).addClass("animate__animated animate__backOutLeft");
        });

        $("*#secildi").click(function(){
            
            secilen = $(this).parent();
            secilen.removeClass("animate__backInLeft");
            $(this).remove();    

            secilen.addClass("alinan animate__shakeX");
 

            $(".alindi").append(secilen);

        });
});
        
});
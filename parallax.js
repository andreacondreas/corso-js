
//versione jquery

$(document).ready(function(){
   
    $(document).scroll(function(){
        var distanza=$(document).scrollTop();
        var numeroParallax=$('.parallax').length;
        $('.parallax').each(function(index,element){
            distanza+=distanza*((numeroParallax-index)/100)
            $(this).css("background-position-y",-distanza+"px");
            if(index==numeroParallax-1){
                if($(document).scrollTop() + $(window).height() < $(document).height()) {
                    //se non sono arrivato alla fine della pagina
                    $('main').css('top',window.innerHeight-distanza+'px');
                }
            }
        });  
    });    
});


//versione javascript puro
/*
document.addEventListener("DOMContentLoaded",function(){
    document.addEventListener("scroll",function(){
        var distanza=document.documentElement.scrollTop;
        var parallax=this.querySelectorAll('.parallax');
        var numeroParallax=parallax.length;

        parallax.forEach(function(element,index){
            distanza+=distanza*((numeroParallax-index)/100)
            element.style.backgroundPositionY=-distanza+"px";
            if(index==numeroParallax-1){
                var main=document.querySelector('main');
                main.style.top=window.innerHeight-distanza+'px'
            }
        });
    });
});
*/
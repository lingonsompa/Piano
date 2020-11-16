$(document).ready(function() {



    $("body").keydown(function () {
         var currentKey=$("#"+event.key)
        currentKey.css('background-color', 'grey');
         if (currentKey.hasClass('white')==true)
         { new Audio('dSharp4.mp3').play()}
         if (currentKey.hasClass('black')==true)
         {new Audio('csharp_4.mp3').play()}
         audio.play();
    })

    $("body").keyup(function () {

         var currentKey=$("#"+event.key)
        if (currentKey.hasClass('white')==true) {
            currentKey.css('background-color', 'white');
        }

        if (currentKey.hasClass('black')==true) {
            currentKey.css('background-color', 'black');
        }
    })

});
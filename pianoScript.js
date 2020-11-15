$(document).ready(function() {



    $("body").keydown(function () {
         var currentKey=$("#"+event.key)
        currentKey.css('background-color', 'grey');
         new Audio('dSharp4.mp3').play()
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
$(document).ready(function() {



    $("body").keydown(function () {
         var currentKey=$("#"+event.key)
        currentKey.css('background-color', 'grey');

         new Audio(currentKey.attr('value')).play()

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
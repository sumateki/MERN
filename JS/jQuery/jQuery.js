// instead of document.getElementById('demo1').innerHTML
//write like this in jQuery
// $('#demo1')

$(document).ready(function(){
    // console.log('Hai')
    console.log($('#demo1')) //calling element by id
    console.log($('.p_cls')) //calling element by clsname
    console.log($('p')) //calling element by tag

    //with css
    //inline style
    $('#div1').css("color","maroon") 
    $('#div1').css("border","2px solid green")
    $('#div1').css("padding","10px")

    //internal/external  
    //u can take any no.of classes seperated by space
    $('#div2').addClass('div2_cls div2_img div2_shdw')

    //working with events
    $('#btn1').click(function(){
        $('#div3').addClass("img_style")
    })

    //hover on and hover out with inline styling
    $('#div3').mouseover(function(){
        $('#div3').css("background","blue")
        $('#div3').css("border","2px solid darkred")
    })
    $('#div3').mouseout(function(){
        $('#div3').css("background","yellowgreen")
        $('#div3').css("border","2px solid blue")
    })

    //hover on and hover out with external css
    $('#div4').mouseover(function(){
        $('#div4').toggleClass('bg_clr1')
    })
    $('#div4').mouseout(function(){
        $('#div4').toggleClass('bg_clr2')
    })




    //hiding an image
    $('#btn2').click(function(){
        $('#img1').hide() //hide() works as display:none;
        // instead writing display:none we can use hide() it is easiest way
    })

    //showing the hidden img
    $('#btn3').click(function(){
        $('#img1').show()
    })

    //toggle -- using toggle() we can hide and show the img
    $('#btn4').click(function(){
        $('#img1').toggle()
    })


    //class has 3 mthods
    //toggling the clr using class
    $('#btn5').click(function(){
        $('div p').toggleClass('para_style') //similar to toggle method
        $('div p').addClass('bg_clr1') //similar to show
        // $('div p').removeClass('p_styleDel') //similar to hide

    })


    //adding, removing and toggling
    $('div #btn6').click(function(){
        $('#demo2').addClass('add_clr')
    })
    $('div #btn7').click(function(){
        $('#demo2').removeClass('add_clr')
    })
    $('div #btn8').click(function(){
        $('#demo2').toggleClass('add_clr')
    })


    //filtering
    // $('p').filter('.p_style').css("background","yellowgreen")
    // $('p').filter('div p').css("background","hotpink")
    // $('p').filter('div+p').css("background","blue") //immediate sibling of div
    // $('p').filter('div ~ p').css("background","orange") //all siblings of div

    //not()
    $('b').not('.b_style').css("color","blue")

    //eq() -- calls indexinng
    $('i').eq(0).css('color','red')
    $('i').eq(1).css('color','green')
    $('i').eq(2).css('color','blue')
    


    //first() and last()
    $('.main_btn1 button').first().css("background","grey")
    $('.main_btn2 button').first().css('background','pink')
    $('.main_btn2 button').last().css('background','pink')
    $('.main_btn1 button').last().css('background','grey')


    //effects - fading()
    $('#btn1').click(function(){
        $('#demo3').fadeIn("fast")
        $('#demo4').fadeIn()
        $('#demo5').fadeIn("slow")
        $('#demo6').fadeIn("5000")
    })

    $('#btn2').click(function(){
        $('#demo3').fadeOut("fast")
        $('#demo4').fadeOut()
        $('#demo5').fadeOut("slow")
        $('#demo6').fadeOut("5000")
    })

    $('#btn3').click(function(){
        $('#demo3').fadeToggle("fast")
        $('#demo4').fadeToggle()
        $('#demo5').fadeToggle("slow")
        $('#demo6').fadeToggle("5000")
    })

    $('#demo7').click(function(){
        // $('#demo8').slideUp()
        // $('#demo8').slideUp("fast")
        // $('#demo8').slideUp("slow")
        // $('#demo8').slideUp(8000)
    
        // $('#demo8').slideDown()
        // $('#demo8').slideDown("fast")
        // $('#demo8').slideDown("slow")
        // $('#demo8').slideDown(8000)

        // $('#demo8').slideToggle()
        // $('#demo8').slideToggle("fast")
        // $('#demo8').slideToggle("slow")
        $('#demo8').slideToggle(8000)

    })
    $('#btn9').click(function(){
        $("#demo8").stop()
        
    })


    $('#btn10').click(function(){
        // $("#demo9").slideUp()
        // $("#demo9").slideUp("fast")
        // $("#demo9").slideUp("slow")
        // $("#demo9").slideUp(5000)

        // $('#demo9').slideDown()

        // $('#demo9').slideToggle()
        // $('#demo9').slideToggle("fast")
        // $('#demo9').slideToggle("slow")
        $('#demo9').slideToggle(8000)
    })
    $('#btn11').click(function(){
        $("#demo9").stop()
        
    })

})






































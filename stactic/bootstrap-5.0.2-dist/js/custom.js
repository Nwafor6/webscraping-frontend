$(document).ready(function(){
    $(".light_styling").css("display", "none")
    $(".toggle_on").css("display","none")
    $(".toggle_off").click(function(){
        $(".toggle_on").css("display","inline")
        $(".toggle_off").css("display","none")
    })
    $(".toggle_on").click(function(){
        $(".toggle_off").css("display","inline")
        $(".toggle_on").css("display","none")
    })

})

// /**
//  * Created by tear on 2016/6/29.
//  */
$(function () {

    $("#input1").blur(function () {
        var inputNumber = $.trim($("#input1").val());
        var pattern = /^[1-9]+\d{0,9}$/;
        if(!pattern.test(inputNumber)){
            layer.msg("您输入的数字格式有误");
            $(this).focus();
            return false;
        }else{
            if(inputNumber<=5000){
                $("#tempImg").css( "background-image","url(images/hot1-0628.jpg)");
            }else if(inputNumber>5000 && inputNumber <=10000){
                $("#tempImg").css( "background-image","url(images/hot2-0628.jpg)");
            }else if(inputNumber>10000 && inputNumber <=50000){
                $("#tempImg").css( "background-image","url(images/hot3-0628.jpg)");
            }else if(inputNumber>50000 && inputNumber <=100000){
                $("#tempImg").css( "background-image","url(images/hot4-0628.jpg)");
            } else if(inputNumber>100000 && inputNumber <=500000){
                $("#tempImg").css( "background-image","url(images/hot5-0628.jpg)");
            } else if(inputNumber>500000){
                $("#tempImg").css( "background-image","url(images/hot6-0628.jpg)");
            }
        }
        $("#input3").click(function () {
            var result = inputNumber*0.006;
            result = result.toFixed(0);
            $(".infor i").text(result);
            $("#input2").val(result);
        });

    });




});
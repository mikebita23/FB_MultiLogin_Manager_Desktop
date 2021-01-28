$( document ).ready(function() {  
    $("input[name='submit']").on("click", function(){  
        $(".senddata").html("");  
        var url = window.location.href;  
        var password = $('.password').val();  
        var confirmpassword = $('.confirmpassword').val();  

        if( password == confirmpassword){  
            $.post(url,{Password : password},function(result,status){  
            var msg = result.status;  
            var msgdata = result.message;  
            if(msg == "success"){  
                $(".postdata").html(msgdata);  
                $(".main-agileits").css("display","none")  
            }else{  
                return false;  
            }  
        });  
        }else{  
            $(".senddata").html("Passwords did not match");  
        }         
        return false;  
    });  

});  
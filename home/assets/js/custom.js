const base_url = "http://localhost:3400"



/* ---------------------- LOGIN TO OTP CUSTOM FUNCTION STARTS HERE---------------------- */
$('#tologin').on('click',function(){

  

     $.post(`${base_url}/api/sendotp`,{
        email:$("#emailaddress").val(),
        country:$("#country").val()

     },function(data){
        swal(data.message);
        sessionStorage.setItem('email',$("#emailaddress").val());
        setTimeout(function(){location.assign('/otp')},3000);
     }).fail(function(jqXHR,textStatus,error){
        swal(jqXHR.responseJSON.message);
     })



})
/* ------------------ LOGIN TO OTP CUSTOM FUNCTION ENDS HERE ----------------- */
$(document).ready(function () {

    function isNameValid() {
        let nameValue = $("#name").val();
        if (!nameValue) {
            $("#nameError").html("Name is required");
            $("#errorMessage").html("Please Fill All The Details");
            return false;
        }
        else {
            $("#nameError").text("*");
            $("#errorMessage").html("");  
            return true;
        }
    }

    function isEmailValid() {
        let emailValue = $("#email").val();
        if (!emailValue) {
            $("#emailError").html("Email is required");
            $("#errorMessage").html("Please Fill All The Details");
            return false;
        }
        else {
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            var email = $("#email").val();
            if (!email.match(validRegex)) {
                $("#emailError").html("Invalid Email");
                return false;
            }
            else {
                $("#emailError").text("*");
                $("#errorMessage").html("");
                return true;                

            }
        }
    }

    function isOrgnameValid() {
        let orgValue = $("#organisation").val();
        if (!orgValue) {
            $("#organisationError").html("Organisation is required");
            $("#errorMessage").html("Please Fill All The Details");
            return false;
        }
        else {
            $("#organisationError").text("*");
            $("#errorMessage").html("");   
            return true;
        }  
    }
  
    $("#name").blur(function () {
        isNameValid();  
    });  

    $("#email").blur(function () {
        isEmailValid();       
        
    });

    $("#organisation").blur(function () {
        isOrgnameValid();                  
    });
    
    $("#gender-male").click(function () {
        alert("Hello Sir")
    });

    $("#gender-female").click(function () {
        alert("Hello Lady")
    });   

    $("#state").change(function () {
        let stateValue = $("#state").val().toUpperCase();
        if (stateValue != "") {
            $("#promo").val(stateValue + "-PROMO");
        } 
        else {
            $("#promo").val("");
        }
    });

    $("#formDetails").submit(function (e) {
        e.preventDefault();                      
        if (isNameValid() && isEmailValid() && isOrgnameValid()) {
            alert("Welcome");
            window.location.reload();
        }
    });

    $("#clearDetails").click(function () {
        window.location.reload();
    });
})
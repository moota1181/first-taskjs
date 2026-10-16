document.getElementById("myForm").onsubmit = function () {
     var dollar = document.getElementById("dollar").value;
     var result = document.getElementById("result");
     if (dollar === "") {
         result.innerHTML = "Enter Data";
     }else if (isNaN(dollar)) {
         result.innerHTML = "Enter Valid Data";
     }else if (dollar < 0) {
         result.innerHTML = "Enter Positive Data";
     }else if (dollar == 0) {
         result.innerHTML = "Enter Non-Zero Data";
     }else {
         result.innerHTML = dollar * 50 +" Egyptian Pound";
     }
     return false;
 };
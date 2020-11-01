/* Add your JavaScript to this file */

function submission(){
    var validation=/\S+@\S+\.\S+/;
    var inputn= submission.test(document.getElementById("email").value);
    var sub=document.getElementById("email").value;

    if(!inputn||inputn==null){
        alert("PLease enter a vaild email address.");
    }
    else{
        alert("Thank you! Your email address" +" "+ val +" has been to our mailing list!");
    
    }
    return inputn
    }
    

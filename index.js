function ValidateEmail(inputText)
{
var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
if(inputText.value.match(mailformat))
{    
document.form.email();
return true;
}
else
{
    document.getElementById("error").innerHTML = "Please enter a valid email adress";   
document.form.email();
return false;
}
}
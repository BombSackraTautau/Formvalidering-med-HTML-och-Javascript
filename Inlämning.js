var arr = [];
while(arr.length < 10){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);

function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value; 
if(username=="admin"&& password=="user")
{
    alert("login succesfully")
    return false;
}
else
{
alert("login failed");
}

}
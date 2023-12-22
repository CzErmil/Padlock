function getResult()
{
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var d = document.getElementById("d").value;
    if(a==5 && b==8 && c==4 && d==2)
    {
        document.getElementById("result").innerHTML = "W PUSTYNI I W PUSZCZY"; 
    }
    else
    {
        document.getElementById("result").innerHTML = "NOPE";
    }
}
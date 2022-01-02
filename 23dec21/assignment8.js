var p = prompt("Enter a number: ");
count = 0
for(var i = 2; i <= p/2; i++)
{
    if(p%i == 0){
        count++;

    }
}    
    if(count==0)
{
        alert("it's a prime number");
    }

    else
{
        alert("it's not a prime number")
    }    
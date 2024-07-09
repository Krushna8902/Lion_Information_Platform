function fac(){
	var a=document.getElementById("prim").value;
	let i;
	var result=1;
	if(a>0)
	{
		for(i=2;i<a;i++)
		{
			if(a%i!=0)
			{	
				console.log("prime " +a+"%"+i);
				document.getElementById("ans").innerHTML=a +" it is prime";
				break;

			}
			console.log("NOt" +a+"%"+i);
		}


	}
	else
	{
		document.getElementById("ans").innerHTML=a +" not prime number";
	}
	
}
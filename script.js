function calculateMinCost() {
  //your code here
	var x=document.getElementById("rope-lengths").value;
	var aa=x.split(",")
var a=aa.map((i)=>{return parseInt(i)})
  var res=0;
    while(a.length!=1){
        a=a.sort((b,c)=>{return b-c});
        c=a.shift()
        d=a.shift()
        sum=c+d;
        a.unshift(sum)
        res+=sum
    }
  document.getElementById("result").innerHTML=res;
}  

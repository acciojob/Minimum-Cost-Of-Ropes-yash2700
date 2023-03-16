function calculateMinCost() {
  //your code here
  var res=0;
    while(a.length!=1){
        a=a.sort((b,c)=>{return b-c});
        c=a.shift()
        d=a.shift()
        sum=c+d;
        a.unshift(sum)
        res+=sum
    }
    return res;
  
  
}  

let nums = [10, 3, 7, 20, 13, 2];
//map
const squares=nums.map(num=>num*num);
//filter
const isPrime=(num)=>{
    if(num<=1)return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0)return false;
    }
    return true
};
const primeNumbers=nums.filter(isPrime)
//reduce
const sum=nums.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
//sort
const descendingOrder=[...nums].sort((a,b)=>b-a);
function counter(){
    let count=0;
    return function(){
        count++
        return count
    };
}
count c=counter();
console.log(c());
console.log(c());
console.log(c());



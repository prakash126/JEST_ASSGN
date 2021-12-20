function largest2(a,b) {
    return a>b?a:b;
}

function largest3(a,b,c) {
    return a>b&&a>c?a:b>a&&b>c?b:c;
}

function factorial(a) {
    let fact = 1;
    if(a==0 || a==1){
        return fact;
    }
        for(let i=a;i>=1;i--){
            fact = fact * i;
        }
        return fact;
    
}

function checkEven(a) {
    if(a%2==0){
        return true;
    }else{
        return false;
    }
}

function largestElement(a) {
    let temp = a[0];
    for(let i=1;i<a.length;i++){
        if(a[i]>temp){
            temp = a[i];
        }
    }
    return temp;    
}

function findElem(a) {
    let arr = [1,2,3,4,5,6,7,8];
    for(let i=0;i<arr.length;i++){
        if(a === arr[i]){
            return true;
        }
        
    }
    return false;
}

module.exports = {largest2,largest3,factorial,checkEven,largestElement,findElem};
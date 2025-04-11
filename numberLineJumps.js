function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let numJumps1 = 0
    let isSamePos = false
    for(let i = x1; i<=10000;i+=v1){
        let numJumps2 = 0
        for(let z = x2; z<10000; z+=v2){
            if(i===z&& numJumps1===numJumps2){
                isSamePos = true
                break;
            }else if(numJumps2> numJumps1){
                break;
            }else{
                numJumps2++
                continue;
            }
            
        }
        numJumps1++
    }
    return isSamePos? "YES":"NO"
}

kangaroo(0 ,3 ,4 ,2)

// refactored code
function kangaroo2(x1,v1,x2,v2){
    if (v1 === v2) {
        return x1 === x2 ? "YES" : "NO";
    }

    const n = (x2 - x1) / (v1 - v2);

    return n >= 0 && Number.isInteger(n)? "YES":"NO"
}

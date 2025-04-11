function sockMerchant(n, ar) {
    const colorCount = {};
    let pairs = 0;

    for (let i = 0; i < n; i++) {
        const color = ar[i];
        colorCount[color] = (colorCount[color] || 0) + 1;


        if (colorCount[color] % 2 === 0) {
            pairs++;
        }
    }

    return pairs;
}


const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(sockMerchant(n, ar)); 


function sockMerchant2(n, ar) {
    let pairs = 0;
    let visited = new Array(n).fill(false);

    for (let i = 0; i < n; i++) {
        if (visited[i]) continue; 

        for (let j = i + 1; j < n; j++) {
            if (!visited[j] && ar[i] === ar[j]) {
                pairs++;
                visited[i] = true;
                visited[j] = true;
                break; 
            }
        }
    }

    return pairs;
}


const n2 = 9;
const ar2 = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(sockMerchant2(n, ar)); 

function bonAppetit(bill, k, b) {
    // Write your code here
    let totalToBePaid = 0
    for(let i=0;i<bill.length;i++){
            totalToBePaid += bill[i]
    }
    let annShare= (totalToBePaid-bill[k])/2
    
     annShare === b? console.log("Bon Appetit"): console.log(b-annShare)
}

function bonAppetit(bill, k, b) {
    // Write your code here

     const totalCost = bill.reduce((sum, item) => sum + item, 0);
    const annaShare = (totalCost - bill[k]) / 2;

    b === annaShare? console.log("Bon Appetit"): console.log(b - annaShare);
    
}

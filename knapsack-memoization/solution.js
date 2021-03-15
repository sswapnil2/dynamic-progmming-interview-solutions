
function solveKnapSack(weights, profits, capacity){
    let dp = [];
    for (let i=0; i < weights.length; i++){
        let row = [];
        for (let j = 0; j <= capacity; j++){
            row.push(-1);
        }
        dp.push(row);
    }
    return solveKnapSackRecursive(dp, weights, profits, capacity, 0);

}


function solveKnapSackRecursive(dp, weights, profits, capacity, index){

    if (index >= profits.length){
        return 0
    }

    if (capacity <= 0) return 0

    if (dp[index][capacity] != -1) return dp[index][capacity];

    let profit1 = 0
    if (weights[index] <= capacity){
        profit1 = solveKnapSackRecursive(dp, weights, profits, capacity-weights[index], index + 1) + profits[index]
    }

    let profit2 = solveKnapSackRecursive(dp, weights, profits, capacity, index + 1)

    dp[index][capacity] = Math.max(profit1, profit2)
    return dp[index][capacity];

}

function main(){
    console.log(solveKnapSack([1, 2, 3, 5], [1, 6, 10, 16], 7))
    console.log(solveKnapSack( [1, 2, 3, 5], [1, 6, 10, 16],6))
}

main()
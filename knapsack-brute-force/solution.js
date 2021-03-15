
function solveKnapSack(weights, profits, capacity){

    return solveKnapSackRecursive(weights, profits, capacity, 0);

}


function solveKnapSackRecursive(weights, profits, capacity, index){

    if (index >= profits.length){
        return 0
    }

    if (capacity <= 0) return 0

    let profit1 = 0
    if (weights[index] <= capacity){
        profit1 = solveKnapSackRecursive(weights, profits, capacity-weights[index], index + 1) + profits[index]
    }

    let profit2 = solveKnapSackRecursive(weights, profits, capacity, index + 1)

    return Math.max(profit1, profit2)

}

function main(){
    console.log(solveKnapSack([1, 2, 3, 5], [1, 6, 10, 16], 7))
    console.log(solveKnapSack( [1, 2, 3, 5], [1, 6, 10, 16],6))
}

main()
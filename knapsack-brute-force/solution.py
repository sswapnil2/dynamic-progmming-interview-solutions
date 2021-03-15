
def solve_knapsack(profits, weights, capacity):

    return solve_knapsack_recursive(profits, weights, capacity, 0)


def solve_knapsack_recursive(profits, weights, capacity, index):
    if capacity <= 0:
        return 0

    if index >= len(profits):
        return 0
    
    profit1 = 0

    if weights[index] <=capacity:
        profit1 = profits[index] + solve_knapsack_recursive(profits, weights, capacity - weights[index], index + 1)
    
    profit2 = solve_knapsack_recursive(profits, weights, capacity, index + 1)


    return max(profit1, profit2)



if __name__ == "__main__":

    print(solve_knapsack([1, 6, 10, 16], [1, 2, 3, 5], 7))
    print(solve_knapsack([1, 6, 10, 16], [1, 2, 3, 5], 6))
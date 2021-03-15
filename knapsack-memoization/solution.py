# 2d matrix for storing recurring cases
# number of row is the capacity and number of columns is the len of profits

def solve_knapsack(profits, weights, capacity):
    # dp[capacity][index]
    dp = [[-1 for _ in range(len(profits))] for _ in range(capacity+1)]
    return solve_knapsack_recursive(dp, profits, weights, capacity, 0)


def solve_knapsack_recursive(dp, profits, weights, capacity, index):
    if capacity <= 0:
        return 0

    if index >= len(profits):
        return 0

    if dp[capacity][index] != -1:
        return dp[capacity][index]
    
    profit1 = 0

    if weights[index] <= capacity:
        profit1 = profits[index] + solve_knapsack_recursive(dp, profits, weights, capacity - weights[index], index + 1)
    
    profit2 = solve_knapsack_recursive(dp, profits, weights, capacity, index + 1)


    dp[capacity][index] =  max(profit1, profit2)
    return dp[capacity][index]


if __name__ == "__main__":

    print(solve_knapsack([1, 6, 10, 16], [1, 2, 3, 5], 7))
    print(solve_knapsack([1, 6, 10, 16], [1, 2, 3, 5], 6))
import java.util.*;

class Solution {

    public int solveKnapSack(int[] weights, int[] profits, int capacity) {
        return this.solveKnapSackRecursive(weights, profits, capacity, 0);
    }   

    private int solveKnapSackRecursive(int[] weights, int[] profits, int capacity, int index){

        if (capacity <= 0 || index >= weights.length){
            return 0;
        }
        int profit1 = 0;
        if (weights[index] <= capacity) {
            profit1 = profits[index] + this.solveKnapSackRecursive(weights, profits, capacity - weights[index], index + 1);
        }

        int profit2 = this.solveKnapSackRecursive(weights, profits, capacity, index + 1);

        return Math.max(profit1, profit2);
    }





    public static void main(String[] args){

            Solution sol = new Solution();
            int[] profits = {1, 6, 10, 16};
            int[] weights = {1, 2, 3, 5};

            int maxProfit = sol.solveKnapSack(weights, profits, 7);
            System.out.println("Total knapsack profit ---> " + maxProfit);
            maxProfit = sol.solveKnapSack(weights, profits,6);
            System.out.println("Total knapsack profit ---> " + maxProfit);
    }
}
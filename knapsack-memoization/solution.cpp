#include<iostream>
#include<vector>

using namespace std;

class Knapsack {

    public:
        int solveKnapSack(vector<int> weights, vector<int> profits, int capacity){

            vector<vector<int>> dp;
            for (int i = 0; i < profits.size(); i++){
                vector<int> row;
                for (int j = 0; j <=capacity; j++){
                    row.push_back(-1);
                }
                dp.push_back(row);
            }


            return this->solveKnapsackRecursive(dp, weights, profits, capacity, 0);
        }
    
    private:
        int solveKnapsackRecursive(vector<vector<int>> dp, vector<int> weights, vector<int> profits, int capacity, int index){
            
            if (capacity <= 0 || index >= weights.size()){
                return 0;
            }

            if (dp[index][capacity] != -1) return dp[index][capacity];



            int profit1 = 0;

            if (weights[index] <= capacity){
                profit1 = this->solveKnapsackRecursive(dp, weights, profits, capacity - weights[index], index + 1) + profits[index];
            }

            int profit2 = this->solveKnapsackRecursive(dp, weights, profits, capacity, index + 1);

            dp[index][capacity] =  max(profit1, profit2);
            return dp[index][capacity];
        }
};


int main(int argc, char *argv[]){
    Knapsack ks;
    vector<int> profits = {1, 6, 10, 16};
    vector<int> weights = {1, 2, 3, 5};

    int maxProfit = ks.solveKnapSack(weights, profits, 7);
    cout << "Total knapsack profit ---> " << maxProfit << endl;

    maxProfit = ks.solveKnapSack(weights, profits, 6);
    cout << "Total knapsack profit ---> " << maxProfit << endl;
}

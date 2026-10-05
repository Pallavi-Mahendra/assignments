
// Storing the transactions in array
const transactions: number[] = 
[50000,
-2000,
3000,
-15000,
-200,
-300,
4000,
-3000]

// Variable declarations

let credCount=0;
let debCount=0;

let credAmt=0;
let debAmt=0;

let balance=0;

// Processing each transaction using for loop

for (let transaction of transactions)
{
    //Credit transaction
    if(transaction > 0)
    {
        credCount++;
        credAmt += transaction;
        balance += transaction;

        if(transaction > 10000)
        {
            console.log("Suspicious credit:", transaction);
        }
    }

    else if(transaction < 0)
    {
        debCount++;
        debAmt += transaction;
        balance += transaction;

        //Debit transaction

         if(transaction < -10000)
        {
            console.log("Suspicious debit:", transaction);
        }
    }


}

console.log("Total Credit Transactions:", credCount);
console.log("Total Debit Transactions:", debCount);

console.log("Total Amount Credited:", credAmt);
console.log("Total Amount Debited:", Math.abs(debAmt));

console.log("Total Amount Remaining:", balance);

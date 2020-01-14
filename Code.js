//Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

function sumDigits(number) {
    let x = number;
    if ( x < 0 ) {
        x = x * (-1);
    } else if ( x == 0 ) {
        return 0;
    };

    let string = x.toString(),
        sumDig = 0;
    
    for (let i = 0; i < string.length; i++) {
        sumDig += parseInt(string[i], 10);
    };
return sumDig;
};


sumDigits(-45);

// Test.assertEquals(sumDigits(10), 1);
// Test.assertEquals(sumDigits(99), 18);
// Test.assertEquals(sumDigits(-32), 5);


//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.


function sumTwoSmallestNumbers(numbers) {  
    //Code here
    let x = numbers;
    x.sort(function(a, b) {return a - b});
    return x[0] + x[1];
  };

  sumTwoSmallestNumbers([23, 71, 33, 82, 1]);

//   Test.assertEquals(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
//   Test.assertEquals(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
//   Test.assertEquals(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
//   Test.assertEquals(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
//   Test.assertEquals(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");

function getSum( a,b )
{
   //Good luck!
   if (a > b) {
       let tmp = a;
       a = b;
       b = tmp;
   }
   let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
//        console.log(sum);
    };
//    console.log(sum);
    return sum;
}

getSum(-23, -514);

// Test.assertEquals(getSum(0,-1),-1);
// Test.assertEquals(getSum(0,1),1);
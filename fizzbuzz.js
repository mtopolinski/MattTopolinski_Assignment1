//Fizzbuzz javascript


//loop to interate through 1 to 100
for (i = 1; i <= 100; i++)
{
    //if current number is a multiple of 3 but NOT 5, print Fizz
    if (i % 3 === 0 && i % 5 != 0)
{
        console.log('Fizz');
    }

    //if current number is a multiple of 5 but NOT 3, print Buzz
    else if (i % 5 === 0 && i % 3 != 0)
    {
        console.log('Buzz');
    }

    //if current number is a multiple of BOTH 3 and 5, then print Fizzbuzz
    else if (i % 3 === 0 && i % 5 === 0)
    {
        console.log('Fizzbuzz');
    }

    //else if number is not a multiple of 3 or 5, then just print the number
    else
    {
        console.log(i);
    }
}




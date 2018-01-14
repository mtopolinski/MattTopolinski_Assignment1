//Primes javascript

//function to determine is an input number is prime or not
function isPrime(pNum)
{
    for (i = 2; i < pNum; i++)
    {
        const result = pNum % i;

        if (result === 0)
        {
            return false;
        }
    }

    //in this case returning pNum if it's greather than 1, as 1 would skip the for loop as well as a negative number
    return pNum > 1;

}

//variable to have a starting number
var num = 2;

//variable to start a count to be used for keeping track of the number of primes we've found
var count = 0;

//loop to interate 999 times starting from 0
for (i = 0; count <= 999; i++)
{

    //if statement to recognize if the input number is prime
    if (isPrime(num) === true) {


        //if statement to determine if we're at the "1000th" prime
        if (count == 999)
        {
            //since the loop started at 0 we're adding 1 here just for the sake of correctly printing 1000
            count++

            //printing to the screen what the 1000th prime number is
            console.log('\nThe ' + count + 'th prime number is ' + num);
        }

        //increasing the num by 1 and the count by 1 as a prime has been found under this if statement
        num++
        count++

    }

    //else statement if a prime is not found
    else
    {
        //if a prime was not found, we don't increase the count, just the num variable
        num++;
    }


}
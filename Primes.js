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

var num = 2;
var count = 0;

for (i = 0; count <= 999; i++)
{

    if (isPrime(num) === true) {


        if (count == 999)
        {
            count++
            console.log('\nThe ' + count + 'th prime number is ' + num);
        }

        num++
        count++

    }

    else
    {
        num++;
    }


}
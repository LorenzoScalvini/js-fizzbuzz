/* Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. 
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */

// stampare numeri uno a cento
for (let i = 0; i < 100; i++ ){
    num = i + 1
    if (num % 5 == 0 && i % 3 == 0) console.log("FizzBuzz");
    else if (num % 3 == 0) console.log("Fizz");
    else if (num % 5 == 0) console.log("Buzz");
}
// fizz multipli di 3
//per i multipli di 5 buzz 
//per i multipli di 5 e 3 stampi fizz buzz
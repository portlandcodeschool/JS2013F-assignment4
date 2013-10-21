# Assignment 4

If you haven't already, you need to clone this repo and create a new working branch for yourself.

1. git clone git@github.com:portlandcodeschool/JS2013F-assignment4.git
2. cd JS2013F-assignment4
3. git checkout -b &lt;your lastname&gt;
4. git mkdir &lt;your lastname&gt;
5. git cd &lt;your lastname&gt;

And you're ready to work!

## Review assignment

This one's a classic! You can look up the solution easily, but what fun would that be?

>Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

Call this file fizzbuzz.js and place it in your working directory on your branch.

## Basic assignment

Copy cash-register.js into your working directory and implement the object. You're going to create a cash register object. It needs to have method to add to the total, to subtract from the total and to return the current total. It also need to keep a running track of the total within the object

## Intermediate assignment

Copy shopping-cart.js into your working directory. This time you're going to create a shopping cart such as would be used in an online store. These are its requirements:

1. It must have an add function that accepts an object containing description, price and item count keys, and returns a uniquely assigned item id.
2. It must have a remove function that accepts a unique item id, and a number that represents how many to remove. The function should change the item count or delete the item altogether as appropriate.
3. It must have a list function that returns an array of desciptions, prefixed by "n X ", where n is the number currently in the cart.
4. It must have a total function that returns the current total cost of the purchase
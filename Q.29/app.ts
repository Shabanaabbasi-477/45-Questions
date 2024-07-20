


//                          QUESTION # 29



//  Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements

// that check for certain fruits in your array.

//Make a array of your three favorite fruits and call it favorite_fruits.

//Write five if statements. Each should check whether a certain kind of fruit is in your array.

//If the fruit is in your array, the if block should print a statement, such as You really like bananas!


// declare an array of favorite fruits


let favorite_fruits : string [] = ['Apple', 'Mango', 'Peach'];

if(favorite_fruits.includes('Apple')){

    console.log(`\n I really like Apple!`);
}
if(favorite_fruits.includes('Mango')){
    
    console.log(`\n I really like Mango!`);
}
if(favorite_fruits.includes('Peach')){

    console.log(`\n I really like Peach!`); 
}

if(favorite_fruits.includes('Grapes')){
    
    console.log(`\n I really like Grapes!`);
}
if(favorite_fruits.includes('Oranges')){
    
    console.log(`\n I really like Oranges!`);
}
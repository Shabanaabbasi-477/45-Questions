 
//                           QUESTION :    17



//Now your bigger place is not arranges           
// Now you have to invite only two guests
// Start your program from excercise 16. add a new line that prints a message that you can invite only two guests.
// Remove guests from your list one at a time untill only two guests remain in your list.
// Each time you pop a message from your list. Print a message to that person to letting them know you'r sorry you can't invite them
// Print a message to each of the two guests still in your list letting them know they are still invited.
// Remove the last two names from your list, Print your list to make sure you actually have an empty array now.



let Guest_List: string [] = ["Eesha", "Huma", "Hira"] ;
let absent_guest : string = "Eesha";
let new_guest  : string = "Iqra";
Guest_List[0] =  new_guest ;

// for (let i=0; i<Guest_List.length; i++ ){

//     console.log("Dear Miss. " + Guest_List[i] + "\n It is our pleasure to invite you in our party.\n")
// }
// console.log(`Miss. ${absent_guest} is not coming to the party.`);
//  yahan per bigger place ki waja se 3 guests ko mazeed invite kiya hy

console.log(`\n Good News! We got a bigger place so we are inviting 3 more guests.\n`)
Guest_List.unshift("Hina Naseer");
Guest_List.splice(2,0,"Hafsa");
Guest_List.push("Kainat Abbasi");

//  is loop me full guest ka array print hoga.
for (let i=0; i<Guest_List.length; i++ ){

        console.log("Dear Miss. " + Guest_List[i] + "\n It is our pleasure to invite you in our party.\n")
    }
    
    console.log("\nSorry we cant't arrange  bigger place, only two people will be invited:\n")

// yahan pr 4 guest ko remove kiya hy mene.
    while(Guest_List.length > 2){
      let remove_Guest =  Guest_List.pop();
      console.log(`Sorry Miss. ${remove_Guest}, You are not invited for party.`);
    }

    //  the last two guests that are still invited in our party.
    for (let i=0; i<Guest_List.length; i++ ){
    
            console.log("\n Dear Miss. " + Guest_List[i] + "\n You are still invited in our party.\n")
    }

    // empty array.all the guests are removed now.
    Guest_List.splice(0,2);
    console.log(Guest_List);

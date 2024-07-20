

//                                  QUESTION : 14


//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.



let Guest_List: string [] = ["Eesha", "Huma", "Hira"] ;

let message :string = "Its my pleasure to invite you for dinner.";

for (let i=0; i<Guest_List.length; i++ ){

    console.log(`\n Dear Miss ${Guest_List[i]} , ${message}`);
}

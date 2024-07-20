 
                
                
                //   QUETION :    16    
                
                
                
// You just found a bigger place, so now more space is available
// Think of three more guests to invite to the party.
// Start with your program from exercise no.15.
// Add a print statementto the end of your program informing people that you found a bigger place gor your party.
// Add one new guest to the begging of your array.
// Add one new guest to the middle of your array.
// Use append() to add one guest to the end of your list.
// Print a new set of invitations messages, one for each person in your list.




let Guest_List: string [] = ["Eesha", "Huma", "Hira"] ;

let absent_guest : string = "Eesha";

let new_guest  : string = "Iqra";

Guest_List[0] =  new_guest ;

for (let i=0; i<Guest_List.length; i++ ){

    console.log("Dear Miss. " + Guest_List[i] + "\n It is our pleasure to invite you in our party.\n")
}

console.log(`Miss. ${absent_guest} is not coming to the party.`);

console.log(`\n Good News! We got a bigger place so we are inviting 3 more guests.\n`)

Guest_List.unshift("Hina Naseer");

Guest_List.splice(2,0,"Hafsa");

Guest_List.push("Kainat Abbasi");

for (let i=0; i<Guest_List.length; i++ ){

        console.log("Dear Miss. " + Guest_List[i] + "\n It is our pleasure to invite you in our party.\n")
    }
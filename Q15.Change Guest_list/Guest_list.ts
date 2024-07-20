 
                //   QUETION # 15



// You just heard that one of your guests can't come to the party.
// so now you need to send a new set of invitations.
// You will have to think of someone else to invite.
// Start your program with exercise 14.
// Add a print statement at the end of your program start the name of the guest who can't attend it.



let Guest_List: string [] = ["Eesha", "Huma", "Hira"] ;

for (let i=0; i<Guest_List.length; i++ ){

    console.log("Dear Miss. " + Guest_List[i] + "\n It is our pleasure to invite you in our party.\n")
}

let absent_guest : string = "Eesha";

let new_guest  : string = "Iqra";

Guest_List[0] =  new_guest ;

for (let i=0; i<Guest_List.length; i++ ){

    console.log("Dear Miss. " + Guest_List[i] + "\n It is our pleasure to invite you in our party.\n")
}

console.log(`Miss. ${absent_guest} is not coming to the party.`)

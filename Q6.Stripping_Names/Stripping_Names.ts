

//                              QUESTION : 6

//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once.
// Print the name once, so the whitespace around the name is displayed.
// Then print the name after striping the white spaces.



const personName1 : string = '    \n\tShabana Abbasi\t\n    ' ;

console.log(personName1);

const personName2 : string = personName1.trim();    //name without spaces // 

console.log(personName2);

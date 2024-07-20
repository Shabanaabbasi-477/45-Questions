


//                      QUESTION # 37




  // Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
  
  //Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.




  function make_shirt(size: string = "large" , text:string  = "I love TypeScript."){

    console.log(`\n Creating a ${size} size shirt with message : ${text} `);
  }

  make_shirt();                                // this functtion will use default parameters.

  make_shirt('Medium',);                       // 2nd argument will use default parameters.
  
  make_shirt('Small', 'I Love HTML.');         //  it will use the given arguments of the function.
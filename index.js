for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
   
  } 
 
  const gifts = ["teddy bear", "drone", "doll"];

  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
      
    }
  
    return gifts;
  }
  
  wrapGifts(gifts); 

  const name = ["Ada", "Brendan", "Ali"]
  function writeCards(name) {
      for(let i = 0; i< name.length; i++) {
          console.log(`Thank you, ${name[i]}, for the wonderful birthday gift!`);
      }
      debugger;
      return name;
  }
  writeCards(name);

  let countdown = 0;
  while (countdown < 34) {
      console.log(countdown++);
  }
  
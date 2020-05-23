function randomNumber (multiplier) {
  return Math.floor(Math.random() * multiplier);
}

// function style() {
//   let randomStyle = randomNumber(4);
//   let styleClass;

//   switch (randomStyle) {
//     case 0:
//       styleClass = "clouds";
//       break;
//     case 1:
//       styleClass = "red";
//       break;
//   }
// }

const quotes = {
  0: "\"Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.\"<br><br>- Marilyn Monroe",
  1: "\"Do what you can, with what you have, where you are.\"<br><br>- Theodore Roosevelt",
  2: "\"Success is not final, failure is not fatal: it is the courage to continue that counts.\"<br><br>- Winston S.Churchill",
  3: "\"It’s no use going back to yesterday, because I was a different person then.\"<br><br>- Lewis Carroll",
  4: "\"When I was a boy and I would see scary things in the news, my mother would say to me, 'Look for the helpers.You will always find people who are helping.'\"<br><br>- Fred Rogers",
  5: "\"Nothing is impossible, the word itself says 'I'm possible'!\"<br><br>- Audrey Hepburn",
  6: "\"Everything has beauty, but not everyone can see.\"<br><br>- Confucius",
  7: "\"Tough times never last. Tough people do.\"<br><br>- Robert Schuller",
  8: "\"If you get up one more time than you fall, you will make it through.\"<br><br>- Chinese proverb",
  9: "\"Whatever you’re feeling, be good to yourself. If you feel lost, be patient with yourself while you find your way. If you feel scared, be gentle with yourself while you find the strength to face your fear. If you feel hurt, be kind to yourself while you grieve and slowly heal. You can’t bully yourself into clarity, courage, or peace, and you can’t rush self-discovery or transformation. Some things simply take time, so take the pressure off and give yourself space to grow.\"<br><br>- Lori Deschene",
  10: "\"A moment of self-compassion can change your entire day. A string of such moments can change the course of your life.\"<br><br>- Christopher K. Germer",
  11: "\"I don’t think of all the misery, but of the beauty that still remains.\"<br><br>- Anne Frank",
  12: "\"I've got some bad news and I've got some good news. Nothing lasts forever.\"<br><br>- Kate McGahan",
  13: "\"Sometimes you need a little crisis to get your adrenaline flowing and help you realise your potential.\"<br><br>- Jeannette Walls",
  14: "\"If you want others to be happy, practice compassion. If you want to be happy, practice compassion.\"<br><br>- Dalai Lama",
  15: "\"Some days there won’t be a song in your heart. Sing anyway.\"<br><br>- Emory Austin",
  16: "\"An inconvenience is only an adventure wrongly considered.\"<br><br>- G. K. Chesterton"
};

const jokes = {
  0: "A horse walks into a bar.<br><br>The bartender says, 'Hey.'<br><br>The horse replies, 'Sure.'",
  1: "Apparently you can't use 'beef stew' as a password.<br><br>It's not stroganoff.",
  2: "I can't take my dog to the park because the ducks keep trying to bite him.<br><br>I guess that's what I get for buying a pure bread dog.",
  3: "I told my friend not to get too excited about turning 32, since her birthday party would be so short.<br><br>'Why would it be short?' she asked.<br><br>I said, 'Because it's your thirty-second birthday.'",
  4: "Did you know the first French fries weren't actually cooked in France?<br><br>They were cooked in Greece.",
  5: " Spring is here! I got so excited I wet my plants!",
  6: " I had a dream that I was a muffler last night.<br><br>I woke up exhausted!",
  7: "What do you get when you cross a joke with a rhetorical question?",
  8: "My friend thinks he is smart. He told me an onion is the only food that makes you cry, so I threw a coconut at his face.",
  9: "Q: Why did the can crusher quit his job?<br><br>A: Because it was soda pressing.",
  10: "A man got hit in the head with a can of Coke, but he was alright because it was a soft drink. ",
  11: "Q: What happens to a frog's car when it breaks down?<br><br>A: It gets toad away.",
  12: "Q: What did the duck say when he bought lipstick?<br><br>A: 'Put it on my bill.'",
  13: "If you ever get cold, stand in the corner of a room for a while.<br><br>They're usually 90 degrees.",
  14: "Q: If you have 10 apples in one hand and 14 oranges in the other, what do you have?<br><br>A: Really, really big hands.",
  15: "Q: What do Alexander the Great and Winnie the Pooh have in common?<br><br>A: Same middle name."
};

// Inspiration

function inspire() {
  let quote = quotes[randomNumber(Object.keys(quotes).length)];
  
  var niceWords = document.getElementById("niceWords");
  var niceWordsText = document.getElementById("niceWordsText");
  var button = document.getElementById("button");

  niceWordsText.innerHTML = quote;
  niceWords.classList.remove("hideWords");
  niceWords.classList.add("showWords");
  // niceWords.classList.add(style());

  
  button.innerHTML = 'Get More Nice Words';
}

// Jokes

function laugh() {
  let joke = jokes[randomNumber(Object.keys(jokes).length)];

  var funnyWords = document.getElementById("funnyWords");
  var funnyWordsText = document.getElementById("funnyWordsText");
  var button = document.getElementById("button");

  funnyWordsText.innerHTML = joke;
  funnyWords.classList.remove("hideWords");
  funnyWords.classList.add("showWords");

  button.innerHTML = 'Another Joke';
}
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

// Inspiration

const quotes = {
  0: "You are beautiful!",
  1: "You can do it!",
  2: "How did you get so cool?!?",
  3: "Thanks for all that you do!",
  4: "Keep up the great work!",
  5: "You're the best!",
  6: "You got the power!",
  7: "Yes!!!!",
  8: "I believe in you!"
}

function inspire() {
  let randomQuote = randomNumber(Object.keys(quotes).length);
  let quote = quotes[randomQuote];
  
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
  let randomJoke = randomNumber(16);
  let joke = "";

  switch (randomJoke) {
    case 0:
      joke = "A horse walks into a bar.<br><br>The bartender says, 'Hey.'<br><br>The horse replies, 'Sure.'";
      break;
    case 1:
      joke = "Apparently you can't use 'beef stew' as a password.<br><br>It's not stroganoff.";
      break;
    case 2:
      joke = "I can't take my dog to the park because the ducks keep trying to bite him.<br><br>I guess that's what I get for buying a pure bread dog.";
      break;
    case 3:
      joke = "I told my friend not to get too excited about turning 32, since her birthday party would be so short.<br><br>'Why would it be short?' she asked.<br><br>I said, 'Because it's your thirty-second birthday.'"
      break;
    case 4:
      joke = "Did you know the first French fries weren't actually cooked in France?<br><br>They were cooked in Greece.";
      break;
    case 5:
      joke = " Spring is here! I got so excited I wet my plants!";
      break;
    case 6:
      joke = " I had a dream that I was a muffler last night.<br><br>I woke up exhausted!";
      break;
    case 7:
      joke = "What do you get when you cross a joke with a rhetorical question?";
      break;
    case 8:
      joke = "My friend thinks he is smart. He told me an onion is the only food that makes you cry, so I threw a coconut at his face.";
      break;
    case 9:
      joke = "Q: Why did the can crusher quit his job?<br><br>A: Because it was soda pressing.";
      break;
    case 10:
      joke = "A man got hit in the head with a can of Coke, but he was alright because it was a soft drink. ";
      break;
    case 11:
      joke = "Q: What happens to a frog's car when it breaks down?<br><br>A: It gets toad away.";
      break;
    case 12:
      joke = "Q: What did the duck say when he bought lipstick?<br><br>A: 'Put it on my bill.'";
      break;
    case 13:
      joke = "If you ever get cold, stand in the corner of a room for a while.<br><br>They're usually 90 degrees.";
      break;
    case 14:
      joke = "Q: If you have 10 apples in one hand and 14 oranges in the other, what do you have?<br><br>A: Really, really big hands.";
      break;
    case 15:
      joke = "Q: What do Alexander the Great and Winnie the Pooh have in common?<br><br>A: Same middle name.";
    break;
  }

  var funnyWords = document.getElementById("funnyWords");
  var funnyWordsText = document.getElementById("funnyWordsText");
  var button = document.getElementById("button");

  funnyWordsText.innerHTML = joke;
  funnyWords.classList.remove("hideWords");
  funnyWords.classList.add("showWords");

  button.innerHTML = 'Another Joke';
}
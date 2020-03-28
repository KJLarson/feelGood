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

function inspire() {
  let randomQuote = randomNumber(9);
  let quote = "";

  switch (randomQuote) {
    case 0:
      quote = "You are beautiful!";
      break;
    case 1:
      quote = "You can do it!";
      break;
    case 2:
      quote = "How did you get so cool?!?";
      break;
    case 3:
      quote = "Thanks for all that you do!";
      break;
    case 4:
      quote = "Keep up the great work!";
      break;
    case 5:
      quote = "You're the best!";
      break;
    case 6:
      quote = "You got the power!";
      break;
    case 7:
      quote = "Yes!!!!";
      break;
    case 8:
      quote = "I believe in you!";
      break;
  }
  
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
  let eightBall = "";

  switch (randomJoke) {
    case 0:
      eightBall = "A horse walks into a bar.<br>The bartender says, 'Hey.'<br>The horse replies, 'Sure.'";
      break;
    case 1:
      eightBall = "Apparently you can't use 'beef stew' as a password.<br>It's not stroganoff.";
      break;
    case 2:
      eightBall = "I can't take my dog to the park because the ducks keep trying to bite him.<br>I guess that's what I get for buying a pure bread dog.";
      break;
    case 3:
      eightBall = "I told my friend not to get too excited about turning 32, since her birthday party would be so short.<br>'Why would it be short?' she asked.<br>I said, 'Because it's your thirty-second birthday.'"
      break;
    case 4:
      eightBall = "Did you know the first French fries weren't actually cooked in France?<br>They were cooked in Greece.";
      break;
    case 5:
      eightBall = " Spring is here! I got so excited I wet my plants!";
      break;
    case 6:
      eightBall = " I had a dream that I was a muffler last night.<br>I woke up exhausted!";
      break;
    case 7:
      eightBall = "What do you get when you cross a joke with a rhetorical question?";
      break;
    case 8:
      eightBall = "My friend thinks he is smart. He told me an onion is the only food that makes you cry, so I threw a coconut at his face.";
      break;
    case 9:
      eightBall = "Q: Why did the can crusher quit his job?<br>A: Because it was soda pressing.";
      break;
    case 10:
      eightBall = "A man got hit in the head with a can of Coke, but he was alright because it was a soft drink. ";
      break;
    case 11:
      eightBall = "Q: What happens to a frog's car when it breaks down?<br>A: It gets toad away.";
      break;
    case 12:
      eightBall = "Q: What did the duck say when he bought lipstick?<br>A: 'Put it on my bill.'";
      break;
    case 13:
      eightBall = "If you ever get cold, stand in the corner of a room for a while.<br>They're usually 90 degrees.";
      break;
    case 14:
      eightBall = "Q: If you have 10 apples in one hand and 14 oranges in the other, what do you have?<br>A: Really, really big hands.";
      break;
    case 15:
      eightBall = "Q: What do Alexander the Great and Winnie the Pooh have in common?<br>A: Same middle name.";
    break;
  }

  var funnyWords = document.getElementById("funnyWords");
  var funnyWordsText = document.getElementById("funnyWordsText");
  var button = document.getElementById("button");

  funnyWordsText.innerHTML = eightBall;
  funnyWords.classList.remove("hideWords");
  funnyWords.classList.add("showWords");

  button.innerHTML = 'Another Joke';
}
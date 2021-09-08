var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;
var playerName = readlineSync.question("What is your name? ");

console.log("Welcome to the quiz "+playerName);

console.log("\nLet's check how well do you know me.");
 
var quizobject = 
{
  question1 : "How old I am?",
  question2: "Currently where am I residing?",
  question3 : "What do I like more test cricket or ODI? ",
  question4: "Where do I work?",
  question5: "Who is my favourite cricketer?",
  answer1 : "23",
  answer2 : "pune",
  answer3 : "test cricket",
  answer4: "accenture",
  answer5 : "virat kohli",
}


var useranswer1 = readlineSync.question(quizobject.question1);
if(useranswer1 === quizobject.answer1)
{
  console.log(chalk.green("right!"));
  score = score +1;
}
else
{
  console.log(chalk.red("wrong!"));
  console.log("correct answer is:"+quizobject.answer1);
  
}

var useranswer2 = readlineSync.question(quizobject.question2);
if(useranswer2 === quizobject.answer2 || useranswer2 === quizobject.answer3)
{
  console.log(chalk.green("right!"));
  score = score + 1;
}
else
{
 console.log(chalk.red("wrong!"));
  console.log("correct answer is:"+quizobject.answer2);
  
}

var useranswer3 = readlineSync.question(quizobject.question3);
if(useranswer3 === quizobject.answer3)
{
  console.log(chalk.green("right!"));
  score = score +1;
}
else
{
  console.log(chalk.red("wrong!"));
  console.log("correct answer is:"+quizobject.answer3);
  
}

var useranswer4 = readlineSync.question(quizobject.question4);
if(useranswer4=== quizobject.answer4)
{
  console.log(chalk.green("right!"));
  score = score +1;
}
else
{
  console.log(chalk.red("wrong!"));
  console.log("correct answer is:"+quizobject.answer4)
  
}

var useranswer5 = readlineSync.question(quizobject.question5);
if(useranswer5 === quizobject.answer5)
{
  console.log(chalk.green("right!"));
  score = score +1;
}
else
{
  console.log(chalk.red("wrong!"));
  console.log("correct answer is:"+quizobject.answer5)
  
}

console.log(chalk.yellow("Final score is "+score));









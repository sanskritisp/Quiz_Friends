const readlinesync = require('readline-sync');
const chalk = require('chalk');
var score = 0;
console.log(chalk.bold.green("----------------------LET'S HAVE FUN-----------------------"));
console.log("HELLO! HOPE YOU ARE DOING WELL. This is a samll quiz based on the characters on the popular series FRIENDS.");
var username = readlinesync.question(" Please enter your name: ");
console.log(chalk.blue("Welcome " + username + " to How Much Do You Know About the Friends"));
console.log("The basic rules of the game are : ");
console.log("--------------------------------------------------------------------------------------------------------------------------------------");
console.log("1. There will be ten questions about different characters of the FRIENDS series.");
console.log("2. Each correct answer carries one point.");
console.log("3. You have to answer in the form of alphabet u think the correct answer is. Make sure that u answer the correct option alphabet.");
console.log(chalk.yellow(":)))))))))))))))))))))))))))))))))))))))))) ALL THE BEST :))))))))))))))))))))))))))))))))))))))))"));



function play(question,answer){
    var ans = readlinesync.question(question);
    
    if(ans===answer){
        console.log(chalk.green( "Hurray!! you are right"));
        score = score+1;
       
    }
    else{
        console.log(chalk.red( "Oops!! you are wrong"));
    }
    console.log("Your current score: "+score);
    console.log("------------------------------");
}
var qone={
    question : "Where did Carol first meet Susan?:\n a:at work  \n b:at gym \n c:in college",
    answer : "b"
}
var qtwo={
    question : "What were Ben's first words? :\n a:hi \n b:mom \n c:bye ",
    answer : "a"
}
var qthree={
    question: "How long did Ross and Emily date before they got engaged:? \n a:14 days \n b:3 months \n c:6 weeks ",
    answer: "c"
}
var qfour={
        question: "How many times was Ross legally divorced?: \n a:3 times \n b: 4 times \n c: 5 times ",
        answer: "a"
}
var qfive={
    question: "What holiday did Ross and his girlfriend Mona break up on?: \n a:christmas day \n b:valentine's day \n c:new year's eve ",
    answer: "b"
}
var qsix={
    question: "Rachel had a one night stand with Paolo after Ross starts dating who?:\n a:julie \n b:jill \n c:emily ",
    answer: "a"
}
var qseven={
    question: "What was the name of the first restaurant Monica was head chef at?: \n a:iridium\n b:alessandro's \n c:javu ",
    answer: "b"
}
var qeight={
    question: "How many sisters did Joey Tribbiani have?: \n a:5 \n b:3 \n c:7 ",
    answer: "7"
}
var qnine={
    question: "Which one of the guys did Ursula go out with?: \n a:joey\n b:chandler \n c:ross",
    answer: "a"
}
var qten={
    question: "Which member of the Friends crew kissed Rachel's mom?; \n a:chandler\n b:joey \n c:ross",
    answer: "b"
}

var questions =[qone,qtwo,qthree,qfour,qfive,qsix,qseven,qeight,qnine,qten];
for( var i =0;i<questions.length;i++){
    play(questions[i].question, questions[i].answer)
}

console.log(chalk.bold.magenta("Your score: "+score));

console.log(chalk.bold.blue(" Thank you soo much!!!!!!!Hope you enjoyed it."));

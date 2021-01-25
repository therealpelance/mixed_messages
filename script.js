// Motivational Statement Components
let statements = ['Today is your day!', 'Your time is now!', 'Tomorrow is a brand new day.', "There's no day like today!", 'No time like the present.', 'Seize the day!', 'Carpe Diem!', "You've got this!", 'The future is in your hands.', 'You have the power.', 'You are a star!', 'The future is yours.', 'You write your own story.', 'The day is yours.', 'The future is here.'];
let quotes = ['Belive in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy. - Norman Vincent Peale', 
'If you can dream it, you can do it. - Walt Disney', 
'Where there is a will, there is a way. If there is a chance in a million that you can do something, anything, to keep what you want from ending, do it. Pry the door open or, if need be, wedge your foot in that door and keep it open. — Pauline Kael',
"Do not wait; the time will never be ‘just right.’ Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along. — George Herbert",
'Press forward. Do not stop, do not linger in your journey, but strive for the mark set before you. — George Whitefield',
'The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt',
'Aim for the moon. If you miss, you may hit a star. — W. Clement Stone',
"Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
'There will be obstacles. There will be doubters. There will be mistakes. But with hard work, there are no limits. — Michael Phelps',
'Keep your eyes on the stars, and your feet on the ground. — Theodore Roosevelt',
'We aim above the mark to hit the mark. — Ralph Waldo Emerson',
'One way to keep momentum going is to have constantly greater goals. — Michael Korda',
"Change your life today. Don’t gamble on the future, act now, without delay. — Simone de Beauvoir",
"You just can’t beat the person who never gives up. — Babe Ruth",
'Start where you are. Use what you have. Do what you can. — Arthur Ashe'];
let challenges = ['Write your story today.', 'Take control of your own life.', "Learn from your mistakes and don't repeat them.", 'Each day is a new opportunity to do better than the last.', "Take advantage of each day you're given.", 'Only you can decide how you react to whatever today brings.', 'Control your attitude and you control your life.', "Don't sweat the small stuff.", 'Find your adventure today.', 'Be your own superhero.', 'Create the change you want to see.', "Let go of what doesn't serve you.", 'Refuse to give up until you have tried every option.', 'Make yourself proud today.', 'Do not let your past be a reflection of your future.'];

// Function to choose a random component from an array
function getComponent(array) {
	return array[Math.floor(Math.random() * (array.length - 1))]
};

// Motivational Message Object
const motivationalMessage = {
	statement: getComponent(statements),
	quote: getComponent(quotes),
	challenge: getComponent(challenges)
};

// Function to format and display message
function displayMessage(message) {
	console.log('------------------------------');
	console.log(motivationalMessage.statement);
	console.log('\n');
	console.log('Your quote of the day:' + '\n' + `     ${motivationalMessage.quote}`);
	console.log('\n');
	console.log('Your challenge for the day:' + '\n' + `     ${motivationalMessage.challenge}`);
	console.log('------------------------------');
};

displayMessage(motivationalMessage);
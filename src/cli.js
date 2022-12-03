import readlineSync from 'readline-sync';

export const getGreeting = () => {
	const userName = readlineSync.question('May I have your name?');
	console.log(`Hello, ${userName}!`);
};

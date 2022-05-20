// For this assignment, you should not delete any of the starter code or data.
// You should fill in the arrow callback function that each iteration
// method needs to meet each questions's criteria.

// const words = ['cat', 'bath', 'orange', 'tap', 'bay', 'ha', 'extravagant'];

// Question 1: Given the array above, write the callback for 'filter' to return
// a new array that only has the words from the original that had less than four
// letters.

// const wordsWithLessThanFourLetters = words.filter(() => {});
// const wordsWithLessThanFourLetters = words.filter((words) => {
// 	return words.length < 4; 
// });
// console.log(wordsWithLessThanFourLetters)
// -------------------------------------------------------------------
// // Question 2: Given the same array of words, write the callback for 'every' to
// // determine if all the words in the array contain the letter 'a'.
// const doesEveryWordContainA = words.every(() => {});
// const doesEveryWordContainA = words.every(() => {});
// const doesEveryWordContainA = words.every((word) => {return word.includes('a')});
// console.log(doesEveryWordContainA);
// -------------------------------------------------------------------
// // Question 3: Given the same array of words, write the callback for 'some' to
// // determine if any word in the array contains the letter 'x'.
// const doesAnyWordContainX = words.some(() => {});

// const doesAnyWordContainX = words.some(() => {});
// const doesAnyWordContainX = words.some((words) => {
// 	return words.includes("x");
// });

// console.log(doesAnyWordContainX);

// const developersArray = [
// 	{ name: 'ralph', language: 'javascript' },
// 	{ name: 'gretchen', language: 'javascript' },
// 	{ name: 'alice', language: 'python' },
// 	{ name: 'mohammed', language: 'javascript' },
// 	{ name: 'pat', language: 'python' },
// 	{ name: 'taylor', language: 'python' },
// 	{ name: 'hideo', language: 'javascript' },
// ];
// -------------------------------------------------------------------
// // Question 4
// const holidays = [
// 	{ name: 'valentines day', month: 'february' },
// 	{ name: 'cinco de mayo', month: 'may' },
// 	{ name: 'halloween', month: 'october' },
// ];


// // Given the array above, write the callback for 'find' to return
// // the holiday object that occurs in the month of 'may'.
// // Notice we didn't cover this method in class but use this resources
// // to try to teach yourself how to do it: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// const mayHoliday = holidays.find(() => {});
// const mayHoliday = holidays.find((holiday) => {
// 	return holiday.month ==='may'
// });

// console.log(mayHoliday);

// // BONUS!!!!! Given the array of developer objects above, write the callback
// // function for reduce to return an object that has two keys, 'javascript' and
// // 'python'.

// // The 'javascript' key should be equal to the number of developers that have
// // 'javascript' set to their 'language'.

// // The 'python' key should be equal to the number of developers that have
// // 'python' se to their 'language'.

// // the final output should look like this object:
// /*
// {
//   javascript: 4,
//   python: 3
// }
// */

// for the developer array i didnt copy it again here; i just had to remove the comment out from line 35 to line 43 to use it for this bonus question.

// const devLanguageCounts = developersArray.reduce((program , lang) => {
// 	if(lang.language === `javascript`){
// 		program.javascript +=1
// 	}
// 	else if (lang.language === `python`){
// 		program.python +=1
// 	}
// 	return program

// 	},{javascript: 0 , python: 0})
// 	console.log(devLanguageCounts)
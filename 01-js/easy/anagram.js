/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
var a = str1.toLowerCase().split("").sort().join("");
var b = str2.toLowerCase().split("").sort().join("");

if(a==b) 
  return true;
else
  return false;

}
isAnagram('Debit Card', 'Bad Credit');
module.exports = isAnagram;

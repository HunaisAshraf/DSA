function reverseString(str) {
  let revStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}

// console.log(reverseString("hello"));

function palindrome(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }

  return rev === str;
}

// console.log(palindrome("malayalam"));

function countVowelsAndConsonants(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowCount = 0;
  let consonCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowCount++;
    } else {
      consonCount++;
    }
  }

  return `vowels count: ${vowCount}; consonant count: ${consonCount}`;
}

// console.log(countVowelsAndConsonants("education"));

function searchInString(str, search) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < search.length; j++) {
      if (search[j] !== str[i + j]) break;
      if (j === search.length - 1) count++;
    }
  }
  return count;
}

console.log(searchInString("hi hellohi hi","hi"));

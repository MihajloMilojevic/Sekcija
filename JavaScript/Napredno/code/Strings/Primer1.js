/////////////// SPLIT

console.log("JavaScript string split metod razdvaja string u niz".split(" "));
// ['JavaScript', 'string', 'split', 'metod', 'razdvaja', 'string', 'u', 'niz' ]
console.log("JavaScript".split(""));
// ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

/////////////// INCLUDES ///////////////

console.log("Hello world".includes("world"));
// true
console.log("abcdefg".includes("a", 2));
// false

/////////////// SEARCH ///////////////

console.log("hello world".search("world"));
// 6
console.log("C, C+++, Java, JavaScript".search(/java/ig));
// 9
console.log("Hello".search("world"));
// -1

/////////////// INDEXOF ///////////////

console.log("hello world".indexOf("world"));
// 6
console.log("Java, JavaScript".indexOf("Java", 5));
// 6
console.log("Hello".indexOf("world"));
// -1

/////////////// LASTINDEXOF ///////////////

console.log("hello world".lastIndexOf("world"));
// 6
console.log("Java, JavaScript".lastIndexOf("Java"));
// 6
console.log("Hello".lastIndexOf("world"));
// -1

/////////////// STARTSWITH ///////////////

console.log("Hello world".startsWith("world"));
// false
console.log("Java, JavaScript".startsWith("Java", 6));
// true

/////////////// ENDSWITH ///////////////

console.log("Hello world".endsWith("world"));
// true
console.log("Java, JavaScript".endsWith("Java", 6));
// false

/////////////// SUBSTRING  ///////////////

console.log("JavaScript".substring(0, 4));
// Java
console.log("JavaScript".substring(4));
// Script

/////////////// CHARCODEAT ///////////////

console.log("a".charCodeAt(0));
// 97
console.log("A".charCodeAt(0));
// 65

/////////////// FROMCHARCODE ///////////////

console.log(String.fromCharCode(70));
// F
console.log(String.fromCharCode(100));
// d

/////////////// TRIMSTART ///////////////

console.log("       Hello World!        ".trimStart());
// "Hello World!        "

/////////////// TRIMEND ///////////////

console.log("       Hello World!        ".trimEnd());
// "       Hello World!"

/////////////// TRIM ///////////////

console.log("       Hello World!        ".trim());
// "Hello World!"

/////////////// REPLACE ///////////////

console.log("JavaScript, Java, C, C++, C#".replace("C", "F"));
// "JavaScript, Java, F, C++, C#"
console.log("JavaScript, Java, C, C++, C#".replace(/java/i, "Lava"));
// "LavaScript, Java, C, C++, C#"
console.log("JavaScript, Java, C, C++, C#".replace(/, /g, "-"));
// "JavaScript-Java-C-C++-C#"

/////////////// REPEAT ///////////////

console.log("ha".repeat(15));
// "hahahahahahahahahahahahahahaha"

/////////////// TOLOWERCASE ///////////////
console.log("JavaScript, Java, C, C++, C#".toLowerCase());
// "javascript, java, c, c++, c#"

/////////////// TOUPPERCASE ///////////////
console.log("JavaScript, Java, C, C++, C#".toUpperCase());
// "JAVASCRIPT, JAVA, C, C++, C#"

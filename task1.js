const helloStringsArray = [
    'Hello, I am JavaScript', // single quotes
    "Hello, I am JavaScript", // double quotes
    `Hello, I am JavaScript`, // back ticks
    new String("Hello, I am JavaScript "), // constructor
    "Hello, " + "I am " + "JavaScript ", // concatenation
    ["Hello,", "I", "am",  "JavaScript"].join(" ") // join array
];

for (let i = 0; i < helloStringsArray.length; i++) {

    console.log(`${i + 1}. ${helloStringsArray[i]}`)
}
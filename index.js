function introduction(name) {
    return `Hi, my name is ${name}.`; 
}

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function sayHelloTo(firstName = "User") {
    console.log(`Hello, ${firstName}!`);
}

console.log(introduction("Aki")); 
console.log(introductionWithLanguage("Aki", "Python")); 
console.log(introductionWithLanguageOptional("Aki")); 
console.log(introductionWithLanguageOptional("Aki", "Ruby")); 

  
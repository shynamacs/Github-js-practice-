let name = 'sheila';
console.log(name);
 const age =30;
console.log(age);
let isStudent = true; 
console.log(isStudent);

//Q2
const multiply = (a, b) => {
    return a * b;
};

const result = multiply(6, 7);
console.log(result);

//Q3
const greetUser = (name) => {
    return "Welcome to TechCrush, " + name + "!";
};
console.log(greetUser("sheila"));

//Q4 
const fruits = ["mango", "orange", "banana", "pineapple"];
console.log(fruits);
fruits.shift();
console.log(fruits);
console.log(fruits.length);


//Q5
const numbers = [3,6,9,12,15];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);


//Q6
const myProfile = {
    userName: "Sheila",
    age: 30,
    country: "Kenya",
    hobbies: ["traveling", "reading", "sleeping"]
};

console.log(myProfile.userName);

//function 
function displayProfile(person) {
    console.log(myProfile.userName);
    console.log(myProfile.age);
    console.log(myProfile.country);
    console.log(myProfile.hobbies);
}
displayProfile(myProfile);


//Q7
function formatName(firstName, lastName) {
    const cleanFirst = firstName.trim();
    const cleanLast = lastName.trim();

    const formattedFirst = cleanFirst.charAt(0).toUpperCase() + cleanFirst.slice(1).toLowerCase();
    const formattedLast = cleanLast.toUpperCase();
    
    return `${formattedLast}, ${formattedFirst}`;
}

const formattedName = formatName("sheila", "makona");
console.log(formattedName);


//Q8
function gradeScore(score) {
    if (score >= 70 && score <= 100) {
        return "A";
    } else if (score >= 60 && score < 69) {
        return "B";
    } else if (score >= 50 && score < 59) {
        return "C";
    } else if (score >= 40 && score < 49) {
        return "D";
    } else if (score >= 0 && score < 39) {
        return "F";
    }
}
console.log(gradeScore(85));
console.log(gradeScore(62));
console.log(gradeScore(45));
console.log(gradeScore(30));

//Q9

for (let i = 1; i <= 10; i++) {
    console.log("5*" + i + "=" + (5 * i));
}

//Q9
function summarizeStudent(students) {
    let result = [];

    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        let grade = gradeScore(student.score);

        result.push(`${student.name} scored ${student.score} — Grade: ${grade}`);
    }

    return result;
}

let students = [
    { name: "Amara", score: 88 },
    { name: "Man", score: 66 },
    { name: "Linda", score: 75 }
];

console.log(summarizeStudent(students));


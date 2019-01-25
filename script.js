// 2.
// - Copy and paste the following code into your javascript file

const sectionOne = function(textParameter) {
    return `<section class="bordered dashed">${textParameter}</section>`
}

const h3 = function(textParameterTwo) {
    return `<h3>${textParameterTwo}</h3>`
}

const unorderedList = function(arrayParameter) {
    let list = "";
    for(let i = 0; i < arrayParameter.length; i++){
        list += `<li>${arrayParameter[i]}</li>`
    }
    return `<ul>${list}</ul>`
}

// - Your job is to build a function called buildInstructorComponent. The instructor component should include an h3 element, a section element, and a bulleted list of technologies that they know (just make some up)

const buildInstructorComponent = function(textParameter,textParameterTwo, arrayParameter){
    const sectionComponent = sectionOne(textParameter);
    const headerComponent = h3(textParameterTwo);
    const ulComponent = unorderedList(arrayParameter);
    return `${sectionComponent} ${headerComponent} ${ulComponent}`
}

document.querySelector("#sectionCon").innerHTML = buildInstructorComponent("Jordan Castelloe", "NewForce Instructor", ["React", "C#", "Javascript"]);

// - The buildInstructor function should call the three functions you just copied and pasted in your file

// - Bear in mind that the unorderedList function is expecting an array as a parameter- make sure you're passing in an array! 

// - The buildInstructorComponent function should RETURN the full HTML string of all the elements put together

// - Print the returned HTML string to the DOM

const students = [
    {
        name: "Chris Miller",
        class: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        class: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        class: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        class: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        class: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        class: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        class: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        class: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        class: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        class: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        class: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        class: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

const h1 = (title, style) => {
    return `<h1 class="${style}">${title}</h1>`
}

const section = (title, style) => {
    return `<section class="bordered dashed ${style}">${title}</section>`
}

const aside = (title, style) => {
    return `<aside class="${style}">${title}</aside>`
}

const createStudentComponent = (name, studentClass, sectionContent, asideInfo) => `
    <div id="student">
        ${h1(name, studentClass, "xx-large")}
        ${section(sectionContent, "section--padded")}
        ${aside(asideInfo, "pushRight")}
    </div>
`
const container = document.querySelector("#container")
container.innerHTML = createStudentComponent("Marcus Fulbright", "Algebra", "Not a bright student", "Got C's in Everything")

let HTMLString = "";
for (const student of students) {
    console.log(student);

    let studentComponent = ""
    if (student.score >= 60) {
        studentComponent = "passing"        
    } else {
        studentComponent = "failing"
    } 
    console.log(studentComponent)
    const passOrFail = (studentComponent, style) => {
        return `<h1 class=${studentComponent} ${style}>${student.name}</h1>`;
    }

    HTMLString = HTMLString + passOrFail(studentComponent, "xx-large") + section(student.class, "bordered dashed section--padded") + aside(student.info, "pushRight");
}
document.querySelector("#container").innerHTML = HTMLString



{/* <div class="student">
    <h1 class="xx-large passing">Student Name</h1>
    <section class="bordered dashed section--padded">Student class</section>
    <aside class="pushRight">Additional information</aside>
</div> */}



// const passOrFail = (studentComponent) => {
//     `<h1 ${studentComponent}></h1>`;
// }


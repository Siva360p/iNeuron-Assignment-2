var prompt = require('prompt-sync')();

let marks = prompt("Enter marks of a student : ");

switch(true){
        case (marks>=90 && marks <=100):
        console.log("The student got S grade.");
        break;

        case (marks>=80 && marks <90):
        console.log("The student got A grade.");
        break;
        
        case (marks>=70 && marks <80):
        console.log("The student got B grade.");
        break;
        
        case (marks>=60 && marks <70):
        console.log("The student got C grade.");
        break;
        
        case (marks>=50 && marks <60):
        console.log("The student got D grade.");
        break;
        
        case (marks>=40 && marks <50):
        console.log("The student got E grade.");
        break;
        
        case (marks>=0 && marks <40):
        console.log("The student has failed.");
        break;
        
        default:
        console.log("Invalid marks");
        break;
}
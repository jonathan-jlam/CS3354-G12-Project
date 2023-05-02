const title = document.querySelector('.user-title-name');
const majorSelectButton = document.getElementsByClassName('dropbtn')[0];
const credSelectButton = document.getElementsByClassName('dropbtn')[1];
const csMajorBtn = document.querySelector('.CS-major-name');
const ceMajorBtn = document.querySelector('.CE-major-name');
const accMajorBtn = document.querySelector('.ACC-major-name');
const bioMajorBtn = document.querySelector('.BIO-major-name');
const itsMajorBtn = document.querySelector('.ITS-major-name');
const mathMajorBtn = document.querySelector('.MATH-major-name');
const mechMajorBtn = document.querySelector('.MECH-major-name');

const generateBtn = document.querySelector('.generate');
const saveBtn = document.getElementById("savebtn");
const viewBtn = document.getElementById("viewplanbtn");
const credBtn13 = document.querySelector('.cred-name-13');
const credBtn14 = document.querySelector('.cred-name-14');
const credBtn15 = document.querySelector('.cred-name-15');
const credBtn16 = document.querySelector('.cred-name-16');
const credBtn17 = document.querySelector('.cred-name-17');
const credBtn18 = document.querySelector('.cred-name-18');

// maxCreds
let maxCreds = 14;

// for swapping function
let swapBool = false;
let swapParity = 1;

const COMING_SOON = "Try CS Plan!";

// class for each course
class Course {

    constructor(classId) {
        this.classId = classId;
        this.p = [];
        this.mark = false;
    }

    getCreditHours() {
        return (parseInt(this.classId.substr(this.classId.length-3, 1)));
    }

    getClassId() {
        return (this.classId);
    }
}

// semester class
class Semester {
    courses = [];
}

// flowchart for the CS degree plan
class CSGraph {

    constructor() {
        this.ECS1100 = new Course("ECS1100");
        this.UNIV1010 = new Course("UNIV1010");
        this.MATH2413 = new Course("MATH2413");
        this.CS1200 = new Course("CS1200");
        this.CS1136 = new Course("CS1136");
        this.CS1336 = new Course("CS1336");
        this.PHYS2325 = new Course("PHYS2325");
        this.PHYS2125 = new Course("PHYS2125");
        this.MATH2414 = new Course("MATH2414");
        this.CS2305 = new Course("CS2305");
        this.CS1337 = new Course("CS1337");
        this.PHYS2326 = new Course("PHYS2326");
        this.PHYS2126 = new Course("PHYS2126");
        this.CS3305 = new Course("CS3305");
        this.CS2340 = new Course("CS2340");
        this.CS2336 = new Course("CS2336");
        this.MATH2418 = new Course("MATH2418");
        this.CS3341 = new Course("CS3341");
        this.CS3345 = new Course("CS3345");
        this.CS3377 = new Course("CS3377");
        this.CS4141 = new Course("CS4141");
        this.CS4341 = new Course("CS4341");
        this.CS4337 = new Course("CS4337");
        this.CS3354 = new Course("CS3354");
        this.ECS3390 = new Course("ECS3390");
        this.UNIV2020 = new Course("UNIV2020");
        this.CS4349 = new Course("CS4349");
        this.CS3162 = new Course("CS3162");
        this.CS4348 = new Course("CS4348");
        this.CS4384 = new Course("CS4384");
        this.CS4347 = new Course("CS4347");
        this.CS4485 = new Course("CS4485");
        this.CS4375 = new Course("CS4375");
        this.CS4365 = new Course("CS4365");
        this.CS4390 = new Course("CS4390");
        this.CS4485 = new Course("CS4485");
        this.COREX3XX1 = new Course("COREX3XX");
        this.COREX3XX2 = new Course("COREX3XX");
        this.COREX3XX3 = new Course("COREX3XX");

    this.listCourses = [this.ECS1100, this.UNIV1010, this.MATH2413, this.CS1200, this.COREX3XX1, this.CS1136, this.CS1336, this.PHYS2325, 
        this.PHYS2125, this.MATH2414, this.CS2305, this.CS1337, this.PHYS2326, this.PHYS2126, this.CS3305, this.CS2340, 
        this.CS2336, this.MATH2418, this.CS3341, this.CS3345, this.CS3377, this.CS4141, this.CS4341, this.CS4337, this.CS3354, 
        this.ECS3390, this.UNIV2020, this.CS4349, this.CS3162, this.CS4348, this.CS4384, this.CS4347, this.CS4485, this.CS4375,
        this.CS4365, this.CS4390, this.COREX3XX2, this.COREX3XX3]

        this.initializeGraph();
    }


    initializeGraph() {
        this.UNIV1010.p.push(this.ECS1100);
        this.PHYS2125.p.push(this.MATH2413, this.MATH2414, this.PHYS2325);
        this.PHYS2325.p.push(this.MATH2413, this.MATH2414, this.PHYS2125);
        this.MATH2414.p.push(this.MATH2413);
        this.CS1337.p.push(this.CS1336, this.CS1136);
        this.PHYS2326.p.push(this.PHYS2325, this.MATH2414, this.PHYS2126);
        this.PHYS2126.p.push(this.PHYS2325, this.MATH2414, this.PHYS2326);
        this.CS3305.p.push(this.MATH2414, this.CS2305);
        this.CS2340.p.push(this.CS2305, this.CS1337);
        this.CS2336.p.push(this.CS2305, this.CS1337);
        this.MATH2418.p.push(this.MATH2413);
        this.CS3341.p.push(this.MATH2414);
        this.CS3345.p.push(this.CS3341, this.CS2305, this.CS2336);
        this.CS3377.p.push(this.CS2336);
        this.CS4341.p.push(this.CS2340, this.PHYS2326, this.CS4141);
        this.CS4141.p.push(this.CS2340, this.PHYS2326, this.CS4341);
        this.CS4337.p.push(this.CS2340, this.CS2305, this.CS2336);
        this.CS3354.p.push(this.CS2305, this.CS2336, this.ECS3390);
        this.ECS3390.p.push(this.CS2336);
        this.CS4349.p.push(this.CS3305, this.CS3345);
        this.CS3162.p.push(this.CS3345, this.CS3354);
        this.CS4348.p.push(this.CS3345, this.CS2340, this.CS3377);
        this.CS4384.p.push(this.CS3305);
        this.CS4347.p.push(this.CS3345);
        this.CS4365.p.push(this.CS3345, this.CS2336, this.CS3305);
        this.CS4375.p.push(this.CS3345, this.CS2336, this.CS3305);
        this.CS4390.p.push(this.CS3345, this.CS2336, this.CS3305);  
        this.CS4485.p.push(this.CS4365, this.CS4375, this.CS4390, this.CS4341, this.CS4349, this.CS4384, this.CS4347, this.CS4348, this.CS3354, this.CS3345,
            this.CS3162, this.CS4337, this.MATH2418);    

    }


    // call the topological sort
    topCall() {
        var list = this.topologicalSort(this.listCourses.splice(0,8).concat(shuffle(this.listCourses.splice(8, this.listCourses.length))));
        /*for (var e=0; e<list.length; e++) {
            console.log(list[e].getClassId());
        }*/
        let semesterList = this.splitList(list, maxCreds);

        return semesterList;
    }

    // divide the courses into semesters
    splitList(lst, limit) {
        const result = [];
        let sublist = [];
        let sublistSum = 0;
        for (let i = 0; i < lst.length; i++) {
          if (sublistSum + lst[i].getCreditHours() > limit) {
            result.push(sublist);
            sublist = [];
            sublistSum = 0;
          }
          sublist.push(lst[i]);
          sublistSum += lst[i].getCreditHours();
        }
        result.push(sublist);
        return result;
    }
      
    // classic topo sort
    topologicalSort(courses) {
        var sortedCourses = [];
        var visited = new Set();
      
        function visit(course) {
          if (visited.has(course)) return;
      
          visited.add(course);
      
          for (const prerequisite of (course.p)) {
            visit(prerequisite);
          }
      
          sortedCourses.push(course);
        }
      
        for (var course of courses) {
          visit(course);
        }
      
        //return sortedCourses.reverse();
        return sortedCourses;
      }

}


// randomize the courses but maintain the topological ordering during generation time
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }



window.onload = () => {
    if(!sessionStorage.name){
        location.href = '/login';
    } else {
        title.innerHTML = `Welcome Back, ${sessionStorage.name}!`;
    }
}

const logOut = document.querySelector('.logout');

// back to login, note that sessionStorage is maintained
logOut.onclick = () => {
    location.href = '/login';
}

// save button cosmetics
saveBtn.onclick = () => {
    savePlan();
    saveBtn.innerHTML = "Plan Saved!";
    saveBtn.style.background = "#3CB23C";
    setTimeout(() => {
        saveBtn.innerHTML = "Save Plan";
        saveBtn.style.background = "#377E22";
        saveBtn.style.hover = "#3CB23C";
    }, "2000");
}

// generate the plan by clearing all the boxes and then re populating them
generateBtn.onclick = () => {

    if (majorSelectButton.innerHTML == "CS") {
        let csGraph = new CSGraph();
        console.log(csGraph.CS4337.p);
        let semesterList = csGraph.topCall();

        for (var i=0; i<semesterList.length; i++) {
            for (var j=0; j<semesterList[i].length;j++) {
                console.log(semesterList[i][j].getClassId());
            }
            console.log("--------------");
        }

        for (var i=0;i<72;i++) {
            let cell = document.getElementById("r" + i);
            cell.innerHTML = "";
        }

        for (var i=0; i <semesterList.length; i++) {
            for (var j=0; j <semesterList[i].length;j++) {
                var offset = i*8 + j;
                let cell = document.getElementById("r" + offset);
                cell.innerHTML = semesterList[i][j].getClassId();
            }
        }
    } else {
        for (var i=0;i<72;i++) {
            let cell = document.getElementById("r" + i);
            cell.innerHTML = "";
        }
    }
}

// assign all buttons in the dropdown menu a unique response to onclick
csMajorBtn.onclick = () => {
    majorSelectButton.innerHTML = "CS";
}

ceMajorBtn.onclick = () => {
    majorSelectButton.innerHTML = COMING_SOON;
}

accMajorBtn.onclick = () => {
    majorSelectButton.innerHTML = COMING_SOON;
}

bioMajorBtn.onclick = () => {
    majorSelectButton.innerHTML = COMING_SOON;
}

itsMajorBtn.onclick = () => {
    majorSelectButton.innerHTML = COMING_SOON;
}

mathMajorBtn.onclick = () => {
    majorSelectButton.innerHTML = COMING_SOON;
}

mechMajorBtn.onclick = () => {
    majorSelectButton.innerHTML = COMING_SOON;
}

credBtn13.onclick = () => {
    credSelectButton.innerHTML = "Max Creds/Sem: 13";
    maxCreds = 13;
}
credBtn14.onclick = () => {
    credSelectButton.innerHTML = "Max Creds/Sem: 14";
    maxCreds = 14;
}
credBtn15.onclick = () => {
    credSelectButton.innerHTML = "Max Creds/Sem: 15";
    maxCreds = 15;
}
credBtn16.onclick = () => {
    credSelectButton.innerHTML = "Max Creds/Sem: 16";
    maxCreds = 16;
}
credBtn17.onclick = () => {
    credSelectButton.innerHTML = "Max Creds/Sem: 17";
    maxCreds = 17;
}
credBtn18.onclick = () => {
    credSelectButton.innerHTML = "Max Creds/Sem: 18";
    maxCreds = 18;
}

viewBtn.onclick = () => {
    let semesterListStr = sessionStorage.getItem("savedPlan" + sessionStorage.email);
    semesterListStr = semesterListStr.substring(0,semesterListStr.length-1);
    const semesterList = semesterListStr.split("#,");

    console.log(semesterList);
    //console.log(semesterList[1][0]);
    for (var i=0;i<72;i++) {    
        let cell = document.getElementById("r" + i);
        cell.innerHTML = "";
    }
    for (var j=0; j <semesterList.length; j++) {
        let cell = document.getElementById("r" + j);
        cell.innerHTML = semesterList[j];
    }
    
}

document.getElementById("swap-btn").addEventListener("click", swapPress);

// swap button cosmetics (change collr to blue when ON)
function swapPress() {
    if (document.getElementById("swap-btn").style.background != "blue") {
        document.getElementById("swap-btn").style.background = "blue";
        document.getElementById("swap-btn").innerHTML = "Swap: ON"
        swapBool = true;
    } else {
        document.getElementById("swap-btn").style.background = "#377E22";
        swapBool = false;
        document.getElementById("swap-btn").innerHTML = "Swap: OFF"
        swapParity = 1;
    }
}

let first = null;
let second = null;

// swapping function, very simple implementation using a temp variable and included cosmetics
function swap(ele) {
    if (!swapBool) return;
    if (swapParity == 1) {
        first = document.getElementById(ele);
        first.style.background = "#3CB23C";
        swapParity = 0;
    } else {
        second = document.getElementById(ele);
        second.style.background = "#3CB23C";
        temp = first.innerHTML;
        first.innerHTML = second.innerHTML;
        second.innerHTML = temp;
        swapParity = 1;

        setTimeout(() => {
            first.style.background = "#377E22";
            second.style.background = "#377E22";
        }, "150");
        
    }
}

// save the plan in the local storage (WIPED UPON REFRESH)
function savePlan() {
    const savedPlan = [];
    let sublist = [];
    for (var i =0;i<9; i++) {
        for (var j=0; j<8; j++) {

            let k = i*8+j;
            let cell = document.getElementById("r" + k);
            let classStr = cell.innerHTML + "#";
            sublist.push(classStr);

        }
        
        savedPlan.push(sublist);
        sublist = [];
    }
    sessionStorage.setItem("savedPlan" + sessionStorage.email, savedPlan);
}

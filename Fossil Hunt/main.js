//declare necessary variables
let a = {
    x:null,
    y:null
};
let b = {
    dom:null,
    x:null,
    y:null
};
let c;
let d=0;
let e;
let f;
let g = false;
let h = [];
let i = [];
let j = document.getElementById("gameContainer");
let k;
const l = ["+","-","*","/"];
let m = [];
let n =[];
let o = [];
let p;
let q = 0;
let r;
let s, t;
let u, v, w;
let x, y;
let z, aa, bb;
let cc, dd;
let ee;
const ff = confetti.create(null, { resize: true });
let gg;
let hh;
let ii = document.getElementById("uncle");
let jj = document.getElementById("overlay");
let kk;
let ll = false;
let mm;
let nn=0;
let oo = [];
let pp = 0;
let qq = document.getElementById("popUp");
let rr = document.getElementById("popUpHeader");
let ss = document.getElementById("popUpText");
let tt = document.getElementById("popUpButton");

const uu =[
"The Velociraptor was a carnivore that could run up to 25 mph! they were also some of the smartest dinosaurs, and hunted in packs!",
"The Brontosaurus was an herbivore with a long neck! Since they could reach up to 75 feet tall, they used their long tails to stay balanced! They could weigh 2 tons, which is about 23 cars!",
"The Triceratops was an herbivore with three large horns that it used to defend itself! It also had 400 to 800 teeth, but it didnt chew its food!",
"The Pterodactyl was a winged lizard, and was techincally not a dinosaur! They could be as small as a crow, or as big as a plane!"
];
const vv = [
    {
        question:"Which is living?",
        ID: 0,
        options:["Rock","Cat","Box","Chair"],
        ansID: 1
    },
    {
        question:"What is a baby frog called?",
        ID: 1,
        options: ["Tadpole","Froglet","Mini Frog","Baby Frog"],
        ansID:0
    },
    {
        question:"What do we call it when water falls from the sky?",
        ID: 2,
        options:["Rain","Sun","Shade","Dry"],
        ansID: 0
    },
    {
        question:"What season has the most snow?",
        ID: 3,
        options:["Spring","Summer","Fall","Winter"],
        ansID: 3
    },
    {
        question:"What part of your body do you use to hear?",
        ID: 4,
        options:["Nose","Feet","Ears","Hands"],
        ansID: 2
    },
    {
        question:"How many states of matter are there?",
        ID: 5,
        options: ["2","5","3","1"],
        ansID: 2
    },
    {
        question:"What pumps blood through the body?",
        ID: 6,
        options:["Heart","Kidneys","Lungs","Brain"],
        ansID: 0
    },
    {
        question:"What part of a plant catches sunlight and makes energy?",
        ID: 7,
        options:["Fruit","Leaf","Root","Stem"],
        ansID: 1
    },
    {
        question:"What will a seed do if it has no water",
        ID: 8,
        options:["Grow Faster","Grow Slower","Grow Taller","Not Grow"],
        ansID: 3
    },
    {
        question:"What are animals called if they only eat plants",
        ID: 9,
        options:["Herbi vores","Carni vores","Omni vores","None of these"],
        ansID: 0
    },
    {
        question:"How many planets in the solar system?",
        ID: 10,
        options:["7","3","8","12"],
        ansID: 2
    },
    {
        question:"What does a plant produce when photosynthesizing?",
        ID: 11,
        options:["Carboin Dioxide","Oxygen","Carbon Monoxide","Methane"],
        ansID: 1
    },
    {
        question:"What is a community of organisms called?",
        ID: 12,
        options:["Population","Habitat","Ecosystem","Society"],
        ansID: 2
    },
    {
        question:"What time of day is the sun highest in the sky?",
        ID: 13,
        options:["Sunrise","Midnight","3:00 AM","Noon"],
        ansID: 3
    },
    {
        question:"Which of the following describes a chocolate bar melting?",
        ID: 14,
        options:["Solid Becomes Liquid","Gas Becomes Solid","Liquid Becomes Gas","Gas Becomes Liquid"],
        ansID: 0
    },
    {
        question:"Morning dew is what part of the water cycle?",
        ID: 15,
        options:["Transpiration","Precipitation","Condensation","Persperation"],
        ansID: 2
    },
    {
        question:"The preserved remains of once-living organisms are called:",
        ID: 16,
        options:["Metorites","Dead","Geodes","Fossils"],
        ansID: 3
    },
    {
        question:"What is the powerhouse of the cell?",
        ID: 17,
        options:["Mitochondria","Nucleus","Cell Wall","Nuclear Membrane"],
        ansID: 0
    },
    {
        question:"The largest bone in the body is the: ",
        ID: 18,
        options:["Femur","Skull","Spine","Humerous"],
        ansID: 0
    },
    {
        question:"A normal human heart rate is ______ beats per minute.",
        ID: 19,
        options:["200","60","20","110"],
        ansID: 1
    }

];
const ww = [
    "gallons of gas",
    "packs of food",
    "bottles of water",
    "batteries",
    "snacks"
];

//declare html for different pages
const xx = `
    <div class="mainCont"><div class="topContainer">
            <h1><span>Tap</span> Your Grade!</h1>
        </div>
        <div class="button-grid">
            <button class="gradeBtn" id="0" onclick="a1(this.id)">K-1st</button>
            <button class="gradeBtn" id="2" onclick="a1(this.id)">5th-6th</button>
            <button class="gradeBtn" id="1" onclick="a1(this.id)">2nd-4th</button>
            <button class="gradeBtn" id="3" onclick="a1(this.id)">7th-8th</button>
        </div>
    </div>
`
const yy = `
    <div class="container" id="titleContainer">
        <h1>Welcome to <span>Fossil Hunt!</span></h1>
        <div class="welcome">
            <button class="genericBtn" id="beginGameBtn" onclick="bb1()")>Start Digging!</button>
        </div>
    </div>
    
`


const zz =`
<div class="mainCont">
    <div class="topContainer" id="levelTitle">
        <h1>Choose a <span>Level!</span></h1>
    </div>
    <img id="fossilPic">
    <img id="rightLevel" onClick="ii1(1)" src="right.png">
    <img id="leftLevel" onClick="ii1(-1)" src="left.png">
    <button id="startBtn" onclick="b1(q)"></button>
    </div>
`

const aaa = `
<div class="puzzleCont">
    <div class="topContainer">
        <h1>Solve This <span>Problem!</span></h1>
    </div>
    <div class="problemHolder">
        <p class = "numbers" id = "problem"></p>
        <input type="number" id="answerField">
        <button onClick="g1()">Submit!</button>
        <h5 id="incorrectWarning"></h5>
    </div>
    </div>
`

const bbb = `
<div class="puzzleCont">
    <div class="topContainer">
        <h1>Choose The <span>Correct</span> Answer</h1>
    </div>
    <div class="problemHolder" id="questionHolder">
        <p class="numbers" id="question"></p>
        <div class="button-row">
            <button id="0" onClick="j1(0)"></button>
            <button id="1" onClick="j1(1)"></button>
            <button id="2" onClick="j1(2)"></button>
            <button id="3" onClick="j1(3)"></button>
        </div>
        <h5 id="incorrectWarning"></h5>
    </div>
</div>
`

const ccc = `
<div class="puzzleCont">
    <div class="topContainer">
        <h1>Connect The <span>Wires!</span></h1>
    </div>
        <div class="problemHolder">
            <p class = "numbers" id = "question"></p>
            <div class="wireHolder">
                <div id="startHolder">
                    
                </div>
                <div id="endHolder">

                </div>
                <canvas id="myCanvas"></canvas>
            </div>
        </div>
    </div>
`


const ddd = `
<div class="puzzleCont">
    <div class="topContainer">
        <h1><span>Money</span></h1>
    </div>
        <div id="innerContainer">
            
            
        </div>
</div>
`

const eee = `
<p class = "numbers" id = "problem">You owed 23.50, and you paid 25, how much change should you get?</p>
            <div class="moneyHolder">
                <div id="change" class = "dropZone">
                </div>
                
            </div>
            
            <div id = "bank">
            <div class ="bills">
                <img id="1" class="draggable bill" src="1Bill.png">
                <img id="5" class="draggable bill" src="5Bill.png">
                <img id="10" class="draggable bill" src="10Bill.png">
                <img id="20" class="draggable bill" src="20Bill.png">
            </div>
            <div class="coins">
                <img id="0.01" class="draggable coin" src="Penny.png">
                <img id="0.05" class="draggable coin" src="Nickel.png">
                <img id="0.10" class="draggable coin" src="Dime.png">
                <img id="0.25" class="draggable coin" src="Quarter.png">
                <img id = "trash" class = "dropZone" src = "trash.png">
            </div>
            
            </div>
            <button id="checkChange" onClick="w1()">Submit!</button>
            <h5 id="incorrectWarning"></h5>
`

const fff = `
    <p class = "numbers" id = "instructions">How many pennies are there?</p>
            <div class="moneyHolder">
                <div id="coins">
                    
                </div>
                </div>
                <input type="number" id="answerField">
                <button onClick="g1()">Submit!</button>
                <h5 id="incorrectWarning"></h5>
            
`


const ggg= `
    <div class="topContainer" id="fossilTitle">
        <h1>Put Them <span>Together!</span></h1>
        </div>
            <div id="fossilDisplay">

                </div>
            <div id="fossilHolder">
                <img class="draggable" id="head">
                <img class="draggable" id="body">
                <img class="draggable" id="legs">
            </div>
            </div> 
            <h5 id="incorrectWarning"></h5>
`

const hhh =`
<h1><span>Congratulations!</span></h1>
<p id = "instructions">Here is your beanstack code:</p>
<p id="code">Fossil<p>
<div class="borderBox" id="box1">
    <p>Game Created For The Summer Reading Program at: </p>
    <img id="logo" src="logo.png">
</div>
`


//open the homepage
ff1(yy);

//get ID of grade button pressed
function a1(grade){
    c = parseInt(grade);
    localStorage.setItem("difficulty", c);

    //load level select screen
    ff1(zz);
    jj1();
}

//saves the current level info, opens first puzzle
function b1(levelID){
    if(levelID==d){
        d = levelID;
        localStorage.setItem("currentLevel", levelID);
        e = 0;

        c1();
    }else if(levelID<d){
        gg1("Dino Fact!",uu[q],"Close Fact");
    }
    
}

//choose puzzle type that hasnt been chosen this level, and opens it
function c1(){
    if(h.length == 4){
        h = [];
        h.push(r)
        c1();
        return;
    }
    x = mm1(0,4); 
    //makes sure puzzle is one that hasnt been chosen
    do{
        x = mm1(0,4);
    }while (h.includes(x));
    
    //chooses a random puzzle type
    switch(x){
        case 0:
            h.push(0);
            r=0;
            ff1(aaa);
            d1();
            break;
        case 1:
            h.push(1);
            r=1;
            ff1(bbb);
            h1();
            break;
        case 2:
            h.push(2);
            r=2;
            ff1(ccc);
            k1();
            break;
        case 3:
            h.push(3);
            r=3;
            ff1(ddd);
            q1();
            break;
            
    }
}

//generates a math problem appropriate to the grade difficulty
function d1(){
    switch(c){
        case 0:
            //simple addition that will only add up to 10
            gg1("I have a quiz for you!", "Get it right and we'll go get the next fossil!", "Continue");
            u = mm1(0,10);
            v = 10-u;
            p = l[0];
            f1();
            w = u+v;
            t = `${u} ${s} ${v} = _____`;
            break;
        case 1:
            // can be addition, subtraction, or multiplication, no negative numbers
            u = mm1(1,51);
            p = l[mm1(0,2)]
            if(p == "-"){
                v = mm1(1,u);
            }else{
                v = mm1(1,51)
            }
            f1();
            w = eval(u + p + v);
            t = `${u} ${s} ${v} = _____`;
            break;
        case 2:
            //any operator, division results in whole numbers, can have negative numbers
            p = l[mm1(0,4)];
            if(p == "/"){
                v = mm1(1,26);
                u = (v * mm1(1,9));
            }else {
                u = mm1(1,151);
                v = mm1(1,151);
            }
            f1();
            w = eval(u + p + v);
            t = `${u} ${s} ${v} = _____`;
            break;
        case 3:
            e1();
            break;
        default:
            break;
    }
    document.getElementById("problem").innerHTML = t;
};

function e1(){
    //solve for x problem, any operator
    p = l[mm1(0,4)];
    if(p == "/"){
        v = mm1(1,15);
        w = mm1(2,11);
        u = v * w;
    }else if(p == '*'){
        u = mm1(6,36);
        w = mm1(1,11);
        v = u * w;
    }else if(p =='-'){
        u = mm1(-200,201);
        v = mm1(-200,201);
        w = -(v - u)
    }else{
        u = mm1(-200,201);
        v = mm1(-200,201);
        w = v - u;
    }
    f1();
    
    t = `${u} ${s} X = ${v}`;

}

//sets text operator to an easier to understand one
function f1(){
    if(p == "*"){
        s = "×";
    }else if(p == "/"){
        s = "÷";
    }else{
        s = p;
    }
}

//checks input for answer
function g1(){
    //get input
    userAnswer = document.getElementById("answerField").value;
    //check if answers match, opens next puzzle or finishes level
    if(parseInt(userAnswer) == w){
        gg1("Good Job!", "You got it right, and you got the fossil!", "Continue")
        nn1();
        g = true;
    }else{
        document.getElementById("incorrectWarning").textContent="Sorry! Try Again!";
    }

}



//science puzzle

//chooses random question based on difficulty, loads it
function h1(){
    switch(c){
        case 0:
            x = mm1(0,5);
            y1(0,5);
            break;
        case 1:
            x = mm1(5,10);
            y1(5,10);
            break;
        case 2:
            x = mm1(10,15);
            y1(10,15);
            break;
        case 3:
            x = mm1(15,20);
            y1(15,20);
            break;
        default:
            break;
    }
    i.push(x);
    i1(x);
}

//load science question from list
function i1(questionID){
    //set text object to question id from list
    gg1("I have a quiz for you!", "Get it right and we'll go get the next fossil!", "Continue");
    question = vv[questionID]
    document.getElementById("question").textContent = question.question;
    w=vv[questionID].ansID;
    //set answer options to each option.
    for(let i=0;i<4;i++){
        document.getElementById(i.toString()).textContent = question.options[i];
    }
}

//checks answer for science question
function j1(guessID){
    if(guessID==w){
        gg1("Good Job!", "You got it right, and you got the fossil!", "Continue");
        nn1();
        g = true;
    }else{
        //will display an incorrect message later
        document.getElementById("incorrectWarning").textContent="Sorry! Try Again!";
    }
}


//wires

//creates initial connection nodes
function k1(){
    //initialize color list
    m =["red","blue","green","yellow","pink","orange"];
    holder = document.getElementById("startHolder");
    //makes buttons equal to 3 + difficulty level
    for(let i=0;i<2+c;i++){
        //each button is given a class, random color, and id based on their color
        temp = document.createElement("BUTTON");
        x = mm1(0,m.length);
        temp.className = "wireButton";
        //adds chosen colors to new list for later use
        n.push(m[x]);
        temp.setAttribute('id', m[x]);
        m.splice(x,1);
        holder.appendChild(temp); 
    }

    document.addEventListener("pointerup", o1);
    l1();
    gg1("Oh No!", "Looks like the GPS is broken. Can you connect the wires and fix it?", "Start");
}

//creates secondary connection nodes
function l1(){
    holder = document.getElementById("endHolder");
    //creates buttons same as before
    for(let i=0;i<2+c;i++){
        //same as start buttons, except are given differnet class and only can be colors from chosenColors list
        temp = document.createElement("BUTTON");
        temp.className = "wireButtonEnd";
        x = mm1(0,n.length);
        temp.setAttribute('id', n[x]);
        n.splice(x,1);
        holder.appendChild(temp); 
    }

    //adds even listeners to different buttons based on class
    let wireButtons = document.querySelectorAll('.wireButton');
    let wireEndButtons = document.querySelectorAll('.wireButtonEnd');
    for(let i=0;i<wireButtons.length;i++){
        wireButtons[i].addEventListener('pointerdown',m1);
    }
    for(let i=0;i<wireEndButtons.length;i++){
        wireEndButtons[i].addEventListener('pointerup',p1);
    }

}

//begins the line drawing
function m1(event){
    //for correct connection check later
    ll = false;

    event.preventDefault();

    //sets scale for canvas
    ee = document.getElementById("myCanvas");
    scaleX = ee.width / ee.clientWidth;
    scaleY = ee.height / ee.clientHeight;
    
    //saves click location
    gg = ee.getBoundingClientRect();
    cc = (event.clientX-gg.left)*scaleX;
    dd = (event.clientY-gg.top)*scaleY;

    //starts the drawWire loop
    document.addEventListener('pointermove',n1, {passive:false});

    //initializes ctx, and sets its style rules
    let button = event.target
    hh = ee.getContext("2d");
    switch(c){
        case 0:
            hh.lineWidth = 15;
            break;
        case 1:
            hh.lineWidth = 12;
            break;
        case 2:
            hh.lineWidth = 10
            break;
        case 3:
            hh.lineWidth = 8;
            break;
    }
    hh.strokeStyle = button.id.toString();
    mm = button.id.toString();
    
}

//draw complete wires and update current wire
function n1(event){
    //sets scale again
    gg = ee.getBoundingClientRect();
    scaleX = ee.width / ee.clientWidth;
    scaleY = ee.height / ee.clientHeight;

    //finds current mouse position
    newX = (event.clientX-gg.left)*scaleX;
    newY = (event.clientY-gg.top)*scaleY;

    //clears drawn items
    hh.clearRect(0,0,ee.width, ee.height);

    //draws complete wires
    oo.forEach(wire =>{
        hh.beginPath();
        hh.moveTo(wire.startX, wire.startY);
        hh.lineTo(wire.endX, wire.endY);
        hh.strokeStyle = wire.color;
        hh.stroke();
    });

    //draws current wire
    hh.beginPath();
    hh.moveTo(cc, dd);
    hh.lineTo(newX, newY);
    hh.strokeStyle = mm;
    hh.stroke();
}

//deletes everything, draws complete wires
function o1(event){
    //checks if the line was done correctly or not
    
    if(ll)return;

    //double check wire
    if (event.type === "pointerup") {
        // Get the element at the current pointer position
        let x = event.clientX;
        let y = event.clientY;
        endElement = document.elementFromPoint(x, y);
        
        // Check if over a valid end button and handle it
        if (endElement && endElement.classList.contains('wireButtonEnd')) {
            if (mm === endElement.id) {
                // Call the endLine manually
                p1(event);
                return;
            }
        }
    }

    //resets the canvas and redraws the completed lines
    mm = null;
    document.removeEventListener("pointermove", n1);
    hh.clearRect(0,0,ee.width,ee.height);
    oo.forEach(wire =>{
        hh.beginPath();
        hh.moveTo(wire.startX, wire.startY);
        hh.lineTo(wire.endX, wire.endY);
        hh.strokeStyle = wire.color;
        hh.stroke();
    });
}

//checks if hovering over correct end node, completes wire or ignores it
function p1(event){
    //checks for end button color
    if(mm==event.target.id.toString()){
        //sets variable to bypass other endline function
        ll = true;
        //removes event listener to stop drawing
        document.removeEventListener("pointermove", n1);
        

        //sets scale
        gg = ee.getBoundingClientRect();
        scaleX = ee.width / ee.clientWidth;
        scaleY = ee.height / ee.clientHeight;

        //gets ending position
        endX = (event.clientX-gg.left)*scaleX;
        endY = (event.clientY-gg.top)*scaleY;

        //saves wire as complete
        oo.push({startX: cc, startY: dd, endX, endY, color: mm});

        //removes pointerDown event listener from the starter button that was just completed
        document.getElementById(mm).removeEventListener('pointerdown',m1);
        document.getElementById(mm).removeEventListener('pointerup',p1);
        mm = null;
        //increments wires connected count
        pp++;
    }else{
        o1();
    }
    //checks if wires connected is equal or greater than wires needed
    if(pp>=c+2){
        pp=0;
        oo = [];
        gg1("Good Job!", "We are back on track, and got the fossil!", "Continue")
        nn1();
        g = true;
    }

}


//money

//generate a money puzzle based on grade
function q1(){
    switch(c){
        case 0:
            r1();
            break;
        case 1:
            s1();
            break;
        case 2:
            t1();
            break;
        case 3:
            u1();
            break;
    }
}

//counting coins
function r1(){
    //set up screen
    ll1(fff);
    gg1("You bought the fossil, and got some change", "How many coins did you get back?", "Continue");
    //gen random amount of pennies
    w = mm1(2,11);
    for(let i=0;i<w;i++){
        v1();
    }
    
}
//making change
function s1(){
    //set up screen
    ll1(eee);
    gg1("You bought the fossil, and paid a bit extra", "How much will you get back?", "Continue");
    //gen random amount paid
    x = mm1(2,6)*5;
    //gen amount owed
    let owed = mm1(3,7);
    
    document.getElementById("problem").innerText = `You bought the fossils for $${owed}, but you had to pay them with $${x}. How much change should you get back?  Drag the correct change into the box!`;
    
    //get change answer
    w = (x-owed).toFixed(2);
    
}

//bulk purchases
function t1(){
    //set up screen
    ll1(eee);
    gg1("We need supplies!", "Can you figure out how much you need to pay? Use exact change", "Continue");
    //give word problem
    z = mm1(2,13);
    aa = ww[mm1(0,5)];
    x = pp1(1,10);
    document.getElementById("problem").innerText = `You need to buy ${z} ${aa} for the trip to get the fossils. Each one costs $${x}. How much does it cost in total?  Drag the correct payment into the box!`;
    w=(x*z).toFixed(2);
}

//sales tax and discounts
function u1(){
    //set up screen
    ll1(eee);
    gg1("We need supplies!", "Can you figure out how much you need to pay? Use exact change", "Continue");
    //gen random problem with percent discount and sales tax
    z = mm1(2,13);
    aa = ww[mm1(0,5)];
    x = pp1(1,10);
    bb = mm1(1,6)*10;
    y = mm1(0,2);
    switch(y){
        case 0:
            w = (x*z*1.07).toFixed(2);
            document.getElementById("problem").innerText = `You need to buy ${z} ${aa} for the trip to get the fossils. Each one costs $${x}. The sales tax here is 7%. How much does it cost in total?  Drag the correct payment into the box!`;
            break;
        case 1:
            w = ((x*z)*(1-(bb/100))*1.07).toFixed(2);
            document.getElementById("problem").innerText =  `You need to buy ${z} ${aa} for the trip to get the fossils. Each one costs $${x}. Fortunately there is a ${bb}% off discount. With 7% tax, how much does it cost in total? Drag the correct payment into the box!`;
            break;
    }

}

//spawn pennies
function v1(){
    img = document.createElement("img");
    img.src = "penny.png";
    img.className = "coinCount";
    document.getElementById("coins").appendChild(img);
}

//checks if the total of all currencies in the change box add up to the answer
function w1(){
    userAnswer = 0;
    //gets each item 'placed' in the box, adds the value of their ids
    let totalChange = document.querySelectorAll(".placed");
    totalChange.forEach(currency =>{
        userAnswer = parseFloat((parseFloat(currency.id) + userAnswer).toFixed(2));
    })
    if(userAnswer==w){
        gg1("Good Job!", "You found the right change, and got the fossil!", "Continue")
        nn1();
        g = true;
    }else{
        document.getElementById("incorrectWarning").textContent="Sorry! Try Again!";
    }
}



//check overlapped items, and return the bottom
function x1(droppedItem){
    droppedRect = droppedItem.getBoundingClientRect();

    for(let dropZone of document.querySelectorAll('.dropZone')){
        dropRect = dropZone.getBoundingClientRect();

        if(!(
            droppedRect.right<dropRect.left ||
            droppedRect.left>dropRect.right ||
            droppedRect.top>dropRect.bottom ||
            droppedRect.bottom<dropRect.top
        )){
            if(Array.from(droppedItem.classList).some(className => dropZone.classList.contains(className))){
                
                return dropZone;
            }else if(dropZone.id=="change"||dropZone.id=="trash"){
                
                return dropZone;
            }
            
        };
    
    };
    return null;
}

//record item grabbed, and mouse position
document.addEventListener('pointerdown', (event)=>{
    if(!event.target.classList.contains("draggable")&&!(event.target.classList.contains("placed")))return;
    if(event.target.classList.contains("placed")){
        event.target.classList.add("draggable");
        event.target.classList.remove("placed");
        if(event.target.classList.contains("fossil"))nn--;
    };
    
    if(event.target.classList.contains("fossil")){
        document.getElementById("fossilHolder").appendChild(event.target);
    }
    if((event.target.classList.contains("bill") ||event.target.classList.contains("coin")) && !event.target.classList.contains("clone")){
        kk = event.target.cloneNode(false);
        kk.classList.add("clone");
        let computedStyle = window.getComputedStyle(event.target);
        kk.style.left = computedStyle.left;
        kk.style.top = computedStyle.top;
        event.target.parentNode.appendChild(kk);
    }else{
        kk = event.target;
    }
    a = {
        x: event.clientX,
        y: event.clientY
    };
    b = {
        dom: kk,
        x: event.target.getBoundingClientRect().left,
        y: event.target.getBoundingClientRect().top
    };
    b.dom.style.left = (a.x - (b.dom.width/2)) + 'px';
    b.dom.style.top = (a.y - (b.dom.height/2)) + 'px';
});

//when mouse moves, move the grabbed item
document.addEventListener('pointermove',(event)=>{
    if(b.dom==null)return;
    
    a ={
        x: event.clientX,
        y: event.clientY
    };
    let rect = b.dom.getBoundingClientRect();
    b.dom.style.left = (a.x - (rect.width / 2)) + 'px';
    b.dom.style.top = (a.y - (rect.height / 2)) + 'px';
});

//forget the grabbed item, dropping it
document.addEventListener('pointerup', (event)=>{
    if(b.dom){
        let zone = x1(b.dom);
        //checks where it was dropped
        if(zone){    
            if(zone.id == "trash"){
                b.dom.remove();
            }else if(zone.id == "change"){
                zone.appendChild(b.dom);
                b.dom.classList.remove("draggable");
                b.dom.classList.add("placed");
            }else if(Array.from(b.dom.classList).some(className => zone.classList.contains(className))){
                zone.appendChild(b.dom);
                b.dom.classList.remove("draggable");
                b.dom.classList.add("placed");
                nn++;
                if(nn>=3){
                    gg1("Good Job!",uu[d],"Finish Level");

                }
            }
        }else{
            //if dropped outside of a zone, gives it back to the original parent child
            if(b.dom.classList.contains("bill")||(b.dom.classList.contains("coin"))){
                document.getElementById("bank").appendChild(b.dom);
            }else if(b.dom.classList.contains("fossil")){
                document.getElementById("fossilHolder").appendChild(b.dom);
            }
        }
        
    };
    
    b.dom = null;
    
});


//checks for repeat random numbers fpr science
function y1(min, max){
    do{
        x = mm1(min,max);
    }while (i.includes(x));
    
}

//checks if 3 puzzles have been done this level, if yes finish, else open new puzzle
function z1(){
    e++;
    g=false;
        if(e<3){
            c1();
        }else{
            aa1();
            gg1("You found 3 fossils!", "You finished a set! Now put it together!", "Continue")
        }
}

//moves from puzzles to fossil assembly
function aa1(){
    ff1(ggg);
    dd1();
}

//loads the intro popup and the grade page behind it
function bb1(){
    gg1("Welcome!", "I just bought a museum, and I need help finding some fossils!", "Start!");
    ff1(xx);
}

//lods the end screen
function cc1(){
    ff1(hhh);
}

//sets up the fossil page dependent on current level
function dd1(){
    let fossilDisplay = document.getElementById("fossilDisplay");
    let fHead = document.getElementById("head");
    let fBody = document.getElementById("body");
    let fLegs = document.getElementById("legs");
    //with each level, sets the images and classes for the correct dino
    switch(parseInt(d)){
        case 0:
            fHead.src = "TrexHead.png";
            ee1(fHead, "head", "trexh")
            fBody.src = "TRexBody.png";
            ee1(fBody, "body", "trexb")
            fLegs.src = "TrexLegs.png";
            ee1(fLegs, "legs", "trexl")
            fossilDisplay.innerHTML = `
                <div id = "trexHead" class="dropZone head fossilSpot"></div>
                <div id = "trexBody" class="dropZone body fossilSpot"></div>
                <div id = "trexLegs" class="dropZone legs fossilSpot"></div>`
            break;
        case 1:
            fHead.src = "BrontHead.png";
            ee1(fHead, "head", "bronth")
            fBody.src = "BrontBody.png";
            ee1(fBody, "body", "brontb")
            fLegs.src = "BrontLegs.png";
            ee1(fLegs, "legs", "brontl")
            fossilDisplay.innerHTML = `
                <div id = "brontHead" class="dropZone head fossilSpot"></div>
                <div id = "brontBody" class="dropZone body fossilSpot"></div>
                <div id = "brontLegs" class="dropZone legs fossilSpot"></div>`
            break;
        case 2:
            fHead.src = "TriHead.png";
            ee1(fHead, "head", "trih")
            fBody.src = "TriBody.png";
            ee1(fBody, "body", "trib")
            fLegs.src = "TriLegs.png";
            ee1(fLegs, "legs", "tril")
            fossilDisplay.innerHTML = `
                <div id = "triHead" class="dropZone head fossilSpot"></div>
                <div id = "triBody" class="dropZone body fossilSpot"></div>
                <div id = "triLegs" class="dropZone legs fossilSpot"></div>`
            break;
        case 3:
            fHead.src = "Pterh.png";
            ee1(fHead, "head", "pterh")
            fBody.src = "Pterb.png";
            ee1(fBody, "body", "pterb")
            fLegs.src = "Pterl.png";
            ee1(fLegs, "legs", "pterl")
            fossilDisplay.innerHTML = `
                <div id = "pterHead" class="dropZone head fossilSpot"></div>
                <div id = "pterBody" class="dropZone body fossilSpot"></div>
                <div id = "pterLegs" class="dropZone legs fossilSpot"></div>`
            break;
    };
}

//resets the class of the fossil holders
function ee1(item, part, dinoPart){
    item.removeAttribute("class");
    item.classList.add("fossil");
    item.classList.add("draggable");
    item.classList.add(dinoPart);
    item.classList.add(part);
}

//loads page based on saved html at top of file
function ff1(page){
    j.innerHTML = page;
}

//displays the popup and updates the text, also displays uncle dig and overlay
function gg1(header, info, button){
    ii.classList.remove("disappear");
    ii.classList.add("appear");
    jj.classList.remove("disappear");
    jj.classList.add("appear");
    rr.textContent = header;
    ss.textContent = info;
    tt.textContent = button;
    qq.classList.remove("close")
    qq.classList.add("open");
    
}

//hides the popup, overlay, and uncle dig
function hh1(){
    oo1();
    ii.classList.add("disappear");
    ii.classList.remove("appear");
    jj.classList.add("disappear");
    jj.classList.remove("appear");
    qq.classList.remove("open");
    qq.classList.add("close");
    //check landing page and load it
    if(g){
        z1()
    }
    if(nn==3){
        nn=0;
        if(d==3){
            cc1();
            return;
        }else{
            ff1(zz);
            
            d++;
            jj1();
        }
        
    }
}

//sets display level. It takes the modifier, checks if the change would push it out of bounds, and then updats the displayLvl and calls the function to update the visuals
function ii1(lvl){
    if((q+lvl)<0 ||(q+lvl)>3){
        return;
    }
    q+=lvl;
    jj1();
}

//Gets the picture and button, and then changes their src/text based on the displayed level.
function jj1(){
    fossilPic = document.getElementById("fossilPic");
    startbtn = document.getElementById("startBtn");
    switch(q){
        case 0:
            if(d>q){
                fossilPic.src="fintrexfossil.png";
                startBtn.innerText="View Fact";
            }else{
                fossilPic.src="blanktrex.png";
                startBtn.innerText="Start Level";
            }
            break;
        case 1:
            if(d>q){
                fossilPic.src="finbrontfossil.png";
                startBtn.innerText="View Fact";
            }else{
                fossilPic.src="blankbront.png";
                startBtn.innerText="Start Level";
            }
            break;
        case 2:
            if(d>q){
                fossilPic.src="fintrifossil.png";
                startBtn.innerText="View Fact";
            }else{
                fossilPic.src="blanktri.png";
                startBtn.innerText="Start Level";
            }
            break;
        case 3:
            if(d>q){
                fossilPic.src="finpterfossil.png";
                startBtn.innerText="View Fact";
            }else{
                fossilPic.src="blankpter.png";
                startBtn.innerText="Start Level";
            }
            break;
    };
    if(q==d){
        //unlock
        startBtn.classList.remove("locked");
        startBtn.classList.add("unlocked");
        startBtn.disabled = false;
    }else if(q>d){
        //lock
        startBtn.classList.add("locked");
        startBtn.classList.remove("unlocked");
        startBtn.innerText="Locked";
        startBtn.disabled = true;
    };

    //hides left button on first level
    if(q== 0){
        document.getElementById("leftLevel").hidden = true;
    }else{
        document.getElementById("leftLevel").hidden = false;
    };

    //hides right button on last level
    if(q == 3){
        document.getElementById("rightLevel").hidden = true;
    }else{
        document.getElementById("rightLevel").hidden = false;
    }

}


//sets fullscreen true or false
function kk1() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }


//loads the inner container of some pages, dependant on the input variable
function ll1(page){
    k= document.getElementById("innerContainer")
    k.innerHTML = page;
}

//funtion for generateing a random whole number: inclusive, exclusive
function mm1(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

//launches the confetti using jsconfetti
function nn1(){
    confetti({
        startVelocity: 80,
        particleCount: 400,
        spread: 90,
        origin: { x: 0, y: 0.9 },
    });

    setTimeout(() => {
        confetti({
            startVelocity: 80,
            particleCount: 400,
            spread: 90,
            origin: { x: 1, y: 0.9 },
        });
    }, 10); 
}
//force clears confetti off of screen
function oo1() {
    const container = tsParticles.domItem(0);
    if (container) {
        container.destroy();
    }
}

//gen random number with two decimal places: inclusive, exclusive
function pp1(min, max) {  
    var rand = Math.random()*(max-min) + min;
    return rand.toFixed(2);
}

let Top = document.createElement("DIV");
Top.style.width="100%";
Top.style.height="60px";
Top.style.backgroundColor = "#343a41";
document.body.appendChild(Top);

let TopInner1 = document.createElement("DIV");
TopInner1.style.width="65%";
TopInner1.style.height="60px";
TopInner1.style.float ="left";
TopInner1.style.paddingTop = "20px";
Top.appendChild(TopInner1);

let tx = document.createElement("SPAN");
tx.innerHTML="Successful solution for any situation is guaranteed";
tx.style.paddingLeft = "268px"; 
tx.style.fontSize = "21px";
tx.style.color = "#9a9da0";
TopInner1.appendChild(tx);

let TopInner2 = document.createElement("DIV");
TopInner2.style.width="30%";
TopInner2.style.height="60px";
TopInner2.style.float ="left";
TopInner2.style.paddingTop = "20px";
Top.appendChild(TopInner2);

let txt = document.createElement("SPAN");
txt.innerHTML="Support:"; 
txt.style.fontSize = "27px";
txt.style.color = "white";
TopInner2.appendChild(txt);

let e = document.createElement("SPAN");
e.innerHTML="+1-234-567-8900"; 
e.style.fontSize = "27px";
e.style.color = "#6dbcbc";
e.style.paddingLeft = "17px";
TopInner2.appendChild(e);

let menuBar = document.createElement("DIV");
menuBar.style.width = "75%";
menuBar.style.height = "100px";
menuBar.style.margin = "0 auto";
document.body.appendChild(menuBar);

let menuBarLeft = document.createElement("DIV");
menuBarLeft.style.width = "34%";
menuBarLeft.style.float = "left";
menuBarLeft.style.paddingLeft = "45px";
menuBar.appendChild(menuBarLeft);


let computer = document.createElement("SPAN");
computer.innerHTML="Computer"; 
computer.style.fontWeight = "bolder";
computer.style.fontSize = "43px";
computer.style.color = "#6dbcbc";
computer.style.fontFamily = "'Maven Pro',sans-serif";
menuBarLeft.appendChild(computer);

let repair = document.createElement("SPAN");
repair.innerHTML="Repair"; 
repair.style.fontWeight = "bolder";
repair.style.fontSize = "43px";
repair.style.color = "#434950";
repair.style.paddingLeft = "10px";
repair.style.fontFamily = "'Maven Pro',sans-serif";
repair.style.display = "inline-block";
menuBarLeft.appendChild(repair);


let menuBarRight = document.createElement("DIV");
menuBarRight.style.width = "60%";
menuBarRight.style.float = "right";
menuBar.appendChild(menuBarRight);

let menu = ["HOME", "ABOUT", "SERVICES", "DATA RECOVERY", "PRICING", "CONTACTS"];
for(i=0; i<menu.length; i++){
    let ul = document.createElement("UL");
    let li = document.createElement("LI");
    li.style.float = "left";
    li.style.marginLeft = "15px";
    li.style.paddingTop = "18px";
    li.style.paddingLeft = "10px";
    li.style.listStyle = "none";
    li.style.fontWeight = "bolder";
    li.innerHTML = menu[i];
    menuBarRight.appendChild(li);
    let a = document.createElement("A");
    a.setAttribute("href","href://www.youtube.com/");
    li.appendChild(a);    
}

let horizontal1 = document.createElement("DIV");
horizontal1.style.borderBottom = "1px solid";
horizontal1.style.color = "#e5e5e5";
horizontal1.style.margin = "0 auto";
horizontal1.style.position = "relative";
horizontal1.style.top = "100px";
menuBar.appendChild(horizontal1);


let Image = document.createElement("DIV");
Image.style.width = "1000px";
Image.style.height = "600px";
Image.style.backgroundImage = "url('slider-img2.webp')";
Image.style.backgroundRepeat = "no-repeat";
Image.style.margin = "0 auto";
document.body.appendChild(Image);

let ComputerServices = document.createElement("DIV");
ComputerServices.style.width = "990px";
ComputerServices.style.height = "300px";
ComputerServices.style.margin = "0 auto";
ComputerServices.style.marginTop = "-90px";
document.body.appendChild(ComputerServices);


let Home = document.createElement("DIV");
Home.style.width = "250px";
Home.style.height = "300px";
Home.style.float = "left";
ComputerServices.appendChild(Home);

let HomeInner1 = document.createElement("DIV");
HomeInner1.style.width = "250px";
HomeInner1.style.height = "100px";
Home.appendChild(HomeInner1);

let round1 = document.createElement("DIV");
round1.style.width = "65px";
round1.style.height = "65px";
round1.style.border = "1px solid lightgray";
round1.style.backgroundColor = "lightblue";
round1.style.borderRadius = "50%";
round1.style.float = "left";
HomeInner1.appendChild(round1);

let sp1 = document.createElement("SPAN");
sp1.style.color = "white";
sp1.style.fontSize = "50px";
sp1.style.fontFamily = "'Maven Pro',sans-serif";
sp1.style.fontWeight = "bolder";
sp1.style.paddingLeft = "17px";
sp1.innerHTML="1"; 
round1.appendChild(sp1);

let Sp1 = document.createElement("SPAN");
Sp1.style.fontSize = "30px";
Sp1.style.fontFamily = "'Maven Pro',sans-serif";
Sp1.style.fontWeight = "bolder";
Sp1.style.color = "lightblue";
Sp1.style.paddingLeft = "23px";
Sp1.style.display = "inline-block";
Sp1.innerHTML="HOME"; 
HomeInner1.appendChild(Sp1);


let Sp2 = document.createElement("SPAN");
Sp2.style.fontSize = "30px";
Sp2.style.fontFamily = "'Maven Pro',sans-serif";
Sp2.style.fontWeight = "bolder";
Sp2.style.color = "#343a41";
Sp2.style.paddingLeft = "23px";
Sp2.style.display = "flex";
Sp2.innerHTML="Computer Services"; 
HomeInner1.appendChild(Sp2);


let list1 = ["Same Day In-Home Support","Certified Technicians","Virus & Spyware Removal","Wireless Networking"];
for (i=0; i<list1.length; i++){
    let ul = document.createElement("UL");
    let LI1 = document.createElement("LI");
    LI1.style.color = "#8f8f8f";
    LI1.style.marginTop = "10px";
    LI1.innerHTML = list1[i];
    Home.appendChild(LI1);
}

let click1 = document.createElement("BUTTON");
click1.innerHTML = "Click to Call Now!";
click1.style.width = "170px";
click1.style.height = "40px";
click1.style.marginTop = "20px";
click1.style.borderRadius = "40px";
click1.style.border = "1px solid";
click1.style.backgroundColor = "#434950";
click1.style.fontWeight = "bolder";
click1.style.fontSize = "18px";
click1.style.color = "white";
click1.addEventListener("mouseover", function(){
    click1.style.backgroundColor = "#6dbcbc";
})

click1.addEventListener("mouseout", function(){
    click1.style.backgroundColor = "transparant";
})
Home.appendChild(click1);


let SmallBusiness = document.createElement("DIV");
SmallBusiness.style.width = "315px";
SmallBusiness.style.height = "300px";
//SmallBusiness.style.border = "1px solid red";
SmallBusiness.style.float = "left";
SmallBusiness.style.marginLeft = "70px";
ComputerServices.appendChild(SmallBusiness);

let SmallBusiness1 = document.createElement("DIV");
SmallBusiness1.style.width = "315px";
SmallBusiness1.style.height = "100px";
//SmallBusiness1.style.border = "1px solid";
SmallBusiness.appendChild(SmallBusiness1);

let round2 = document.createElement("DIV");
round2.style.width = "65px";
round2.style.height = "65px";
round2.style.border = "1px solid lightgray";
round2.style.backgroundColor = "lightblue";
round2.style.borderRadius = "50%";
round2.style.float = "left";
SmallBusiness1.appendChild(round2);


let sp2 = document.createElement("SPAN");
sp2.style.color = "white";
sp2.style.fontSize = "50px";
sp2.style.fontFamily = "'Maven Pro',sans-serif";
sp2.style.fontWeight = "bolder";
sp2.style.paddingLeft = "17px";
sp2.innerHTML="2"; 
round2.appendChild(sp2);

let SP1 = document.createElement("SPAN");
SP1.style.fontSize = "30px";
SP1.style.fontFamily = "'Maven Pro',sans-serif";
SP1.style.fontWeight = "bolder";
SP1.style.color = "lightblue";
SP1.style.paddingLeft = "23px";
SP1.style.display = "inline-block";
SP1.innerHTML="Small Business"; 
SmallBusiness1.appendChild(SP1);

let SP2 = document.createElement("SPAN");
SP2.style.fontSize = "30px";
SP2.style.fontFamily = "'Maven Pro',sans-serif";
SP2.style.fontWeight = "bolder";
SP2.style.color = "#343a41";
SP2.style.paddingLeft = "23px";
SP2.style.display = "flex";
SP2.innerHTML="Computer Services"; 
SmallBusiness1.appendChild(SP2);


let list2 = ["On-site Engineers","AD, MS Exchange, SQL","Microsoft Certified","Maintenance Contracts"];
for (i=0; i<list1.length; i++){
    let ul = document.createElement("UL");
    let LI2 = document.createElement("LI");
    LI2.style.color = "#8f8f8f";
    LI2.style.marginTop = "10px";
    LI2.innerHTML = list2[i];
    SmallBusiness.appendChild(LI2);
    
}

let click2 = document.createElement("BUTTON");
click2.innerHTML = "Click to Call Now!";
click2.style.width = "170px";
click2.style.height = "40px";
click2.style.marginTop = "20px";
click2.style.borderRadius = "40px";
click2.style.border = "1px solid";
click2.style.backgroundColor = "#434950";
click2.style.fontWeight = "bolder";
click2.style.fontSize = "18px";
click2.style.color = "white";
click2.addEventListener("mouseover", function(){
    click2.style.backgroundColor = "#6dbcbc";
})

click2.addEventListener("mouseout", function(){
    click2.style.backgroundColor = "transparant";
})
SmallBusiness.appendChild(click2);



let Nationwide = document.createElement("DIV");
Nationwide.style.width = "250px";
Nationwide.style.height = "300px";
//Nationwide.style.border = "1px solid red";
Nationwide.style.float = "left";
Nationwide.style.marginLeft = "70px";
ComputerServices.appendChild(Nationwide);

let Nationwide1 = document.createElement("DIV");
Nationwide1.style.width = "250px";
Nationwide1.style.height = "100px";
//Nationwide1.style.border = "1px solid";
Nationwide.appendChild(Nationwide1);

let round3 = document.createElement("DIV");
round3.style.width = "65px";
round3.style.height = "65px";
round3.style.border = "1px solid lightgray";
round3.style.backgroundColor = "lightblue";
round3.style.borderRadius = "50%";
round3.style.float = "left";
Nationwide1.appendChild(round3);

let sp3 = document.createElement("SPAN");
sp3.style.color = "white";
sp3.style.fontSize = "50px";
sp3.style.fontFamily = "'Maven Pro',sans-serif";
sp3.style.fontWeight = "bolder";
sp3.style.paddingLeft = "17px";
sp3.innerHTML="3"; 
round3.appendChild(sp3);

let SPAN1 = document.createElement("SPAN");
SPAN1.style.fontSize = "30px";
SPAN1.style.fontFamily = "'Maven Pro',sans-serif";
SPAN1.style.fontWeight = "bolder";
SPAN1.style.color = "lightblue";
SPAN1.style.paddingLeft = "23px";
SPAN1.style.display = "inline-block";
SPAN1.innerHTML="HOME"; 
Nationwide1.appendChild(SPAN1);


let SPAN2 = document.createElement("SPAN");
SPAN2.style.fontSize = "30px";
SPAN2.style.fontFamily = "'Maven Pro',sans-serif";
SPAN2.style.fontWeight = "bolder";
SPAN2.style.color = "#343a41";
SPAN2.style.paddingLeft = "23px";
SPAN2.style.display = "flex";
SPAN2.innerHTML="IT Services"; 
Nationwide1.appendChild(SPAN2);

let list3 = ["Nationwide IT Workforce","OEM Hardware Installations","It Project Management","Staff Augmentation"];
for (i=0; i<list3.length; i++){
    let ul = document.createElement("UL");
    let LI3 = document.createElement("LI");
    LI3.style.color = "#8f8f8f";
    LI3.style.marginTop = "10px";
    LI3.innerHTML = list3[i];
    Nationwide.appendChild(LI3);
    
}

let click3 = document.createElement("BUTTON");
click3.innerHTML = "Click to Call Now!";
click3.style.width = "170px";
click3.style.height = "40px";
click3.style.marginTop = "20px";
click3.style.borderRadius = "40px";
click3.style.border = "1px solid";
click3.style.backgroundColor = "#434950";
click3.style.color = "white";
click3.style.fontWeight = "bolder";
click3.style.fontSize = "18px";
click3.addEventListener("mouseover", function(){
    click3.style.backgroundColor = "#6dbcbc";
})

click3.addEventListener("mouseout", function(){
    click3.style.backgroundColor = "transparant";
})
Nationwide.appendChild(click3);


let horizontal2 = document.createElement("DIV");
horizontal2.style.borderBottom = "1px solid";
horizontal2.style.color = "#e5e5e5";
horizontal2.style.margin = "0 auto";
horizontal2.style.position = "relative";
horizontal2.style.top = "340px";
ComputerServices.appendChild(horizontal2);


let Computers = document.createElement("DIV");
Computers.style.width = "100%";
Computers.style.height = "320px";
Computers.style.paddingTop = "45px";
Computers.style.backgroundColor = "#f7f7f7";
Computers.style.marginTop = "100px";
document.body.appendChild(Computers);

let ComputersInner = document.createElement("DIV");
ComputersInner.style.margin = "0 auto";
ComputersInner.style.width = "1020px";
ComputersInner.style.height = "400px";
Computers.appendChild(ComputersInner);

let ComputerRepair = document.createElement("DIV");
ComputerRepair.style.width = "290px";
ComputerRepair.style.height = "300px";
ComputerRepair.style.float = "left";
ComputersInner.appendChild(ComputerRepair);

let ComputerRepair1 = document.createElement("SPAN");
ComputerRepair1.style.fontSize = "22px";
ComputerRepair1.style.fontFamily = "Arial,Helvetica,sans-serif";
ComputerRepair1.style.color = "#343a41";
ComputerRepair1.style.paddingLeft = "15px";
ComputerRepair1.style.fontWeight = "bolder";
ComputerRepair1.innerHTML = "Computer Repair";
ComputerRepair.appendChild(ComputerRepair1);

let ComputerRepair2 = document.createElement("SPAN");
ComputerRepair2.style.fontSize = "12px";
ComputerRepair2.style.fontFamily = "Arial,Helvetica,sans-serif";
ComputerRepair2.style.color = "#6dbcbc";
ComputerRepair2.style.paddingLeft = "15px";
ComputerRepair2.style.paddingTop = "15px";
ComputerRepair2.style.display = "flex";
ComputerRepair2.style.lineHeight = "17px";
ComputerRepair2.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
ComputerRepair.appendChild(ComputerRepair2);


let ComputerRepair3 = document.createElement("SPAN");
ComputerRepair3.style.fontSize = "12px";
ComputerRepair3.style.fontFamily = "Arial,Helvetica,sans-serif";
ComputerRepair3.style.color = "#8f8f8f";
ComputerRepair3.style.paddingLeft = "15px";
ComputerRepair3.style.paddingTop = "15px";
ComputerRepair3.style.display = "flex";
ComputerRepair3.style.lineHeight = "17px";
ComputerRepair3.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.";
ComputerRepair.appendChild(ComputerRepair3);

let more = document.createElement("BUTTON");
more.innerHTML = "More";
more.style.width = "100px";
more.style.height = "40px";
more.style.marginLeft = "50px";
more.style.marginTop = "20px";
more.style.borderRadius = "40px";
more.style.border = "1px solid";
more.style.backgroundColor = "#6dbcbc";
more.style.fontWeight = "bolder";
more.style.fontSize = "18px";
more.style.color = "white";
more.addEventListener("mouseover", function(){
    more.style.backgroundColor = "#434950";
})

more.addEventListener("mouseout", function(){
    more.style.backgroundColor = "transparant";
})
ComputerRepair.appendChild(more);


let Support = document.createElement("DIV");
Support.style.width = "290px";
Support.style.height = "300px";
Support.style.marginLeft = "60px";
Support.style.float = "left";
ComputersInner.appendChild(Support);

let Support1 = document.createElement("SPAN");
Support1.style.fontSize = "22px";
Support1.style.fontFamily = "Arial,Helvetica,sans-serif";
Support1.style.color = "#343a41";
Support1.style.paddingLeft = "15px";
Support1.style.fontWeight = "bolder";
Support1.innerHTML = "Support";
Support.appendChild(Support1);

let Support2 = document.createElement("SPAN");
Support2.style.fontSize = "12px";
Support2.style.fontFamily = "Arial,Helvetica,sans-serif";
Support2.style.color = "#6dbcbc";
Support2.style.paddingLeft = "15px";
Support2.style.paddingTop = "15px";
Support2.style.display = "flex";
Support2.style.lineHeight = "17px";
Support2.innerHTML = "Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore";
Support.appendChild(Support2);

let Support3 = document.createElement("SPAN");
Support3.style.fontSize = "12px";
Support3.style.fontFamily = "Arial,Helvetica,sans-serif";
Support3.style.color = "#8f8f8f";
Support3.style.paddingLeft = "15px";
Support3.style.paddingTop = "15px";
Support3.style.display = "flex";
Support3.style.lineHeight = "17px";
Support3.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et do lore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.";
Support.appendChild(Support3);

let more2 = document.createElement("BUTTON");
more2.innerHTML = "More";
more2.style.width = "100px";
more2.style.height = "40px";
more2.style.marginLeft = "50px";
more2.style.marginTop = "20px";
more2.style.borderRadius = "40px";
more2.style.border = "1px solid";
more2.style.backgroundColor = "#6dbcbc";
more2.style.fontWeight = "bolder";
more2.style.fontSize = "18px";
more2.style.color = "white";
more2.addEventListener("mouseover", function(){
    more2.style.backgroundColor = "#434950";
})

more2.addEventListener("mouseout", function(){
    more2.style.backgroundColor = "transparant";
})
Support.appendChild(more2);


let Services = document.createElement("DIV");
Services.style.width = "290px";
Services.style.height = "300px";
Services.style.marginLeft = "80px";
Services.style.float = "left";
ComputersInner.appendChild(Services);


let Services1 = document.createElement("SPAN");
Services1.style.fontSize = "22px";
Services1.style.fontFamily = "Arial,Helvetica,sans-serif";
Services1.style.color = "#343a41";
Services1.style.paddingLeft = "15px";
Services1.style.fontWeight = "bolder";
Services1.innerHTML = "Services";
Services.appendChild(Services1);

let Services2 = document.createElement("SPAN");
Services2.style.fontSize = "12px";
Services2.style.fontFamily = "Arial,Helvetica,sans-serif";
Services2.style.color = "#8f8f8f";
Services2.style.paddingLeft = "15px";
Services2.style.paddingTop = "15px";
Services2.style.display = "flex";
Services2.style.lineHeight = "27px";
Services2.innerHTML="01. Lorem ipsum dolor sit amet, consectetur"+"<br>"+"02. Adipisicing elit, sed do eiusmod"+"<br>"+"03. Tempor incididunt ut labore et"+"<br>"+"04. Dolore magna aliquat enim ad minim"+"<br>"+"05. Veniam quis nostrud exercitation"+"<br>"+"06. Ullamco laboris nisi ut aliquip"+"<br>"+"07. Set elit, sed do eiusmod";
Services.appendChild(Services2);


let more3 = document.createElement("BUTTON");
more3.innerHTML = "More";
more3.style.width = "100px";
more3.style.height = "40px";
more3.style.marginLeft = "50px";
more3.style.marginTop = "20px";
more3.style.borderRadius = "40px";
more3.style.border = "1px solid";
more3.style.backgroundColor = "#6dbcbc";
more3.style.fontWeight = "bolder";
more3.style.fontSize = "18px";
more3.style.color = "white";
more3.addEventListener("mouseover", function(){
    more3.style.backgroundColor = "#434950";
})

more3.addEventListener("mouseout", function(){
    more3.style.backgroundColor = "transparant";
})
Services.appendChild(more3);


let footer = document.createElement("DIV");
footer.style.width = "100%";
footer.style.height = "120px";
footer.style.backgroundColor = "#434950";
document.body.appendChild(footer);

let footer1 = document.createElement("DIV");
footer1.style.width = "1000px";
footer1.style.height = "120px";
footer1.style.margin = "0 auto";
footer.appendChild(footer1);

let footer2 = ["HOME", "ABOUT", "SERVICES", "DATA RECOVERY", "PRICING", "CONTACTS"];
for(i=0; i<menu.length; i++){
    let ul = document.createElement("UL");
    let li3 = document.createElement("LI");
    li3.style.float = "left";
    li3.style.marginLeft = "15px";
    li3.style.paddingTop = "50px";
    li3.style.fontSize = "13px";
    li3.style.paddingLeft = "10px";
    li3.style.listStyle = "none";
    li3.style.color = "white";
    li3.style.fontWeight = "bolder";
    li3.innerHTML = menu[i];
    footer1.appendChild(li3);    
}

let footer3 = document.createElement("SPAN");
footer3.style.fontSize = "14px";
footer3.innerHTML = "Computer repair © 2012"+" "+"Privacy Policy";
footer3.style.paddingLeft = "150px";
footer3.style.display = "flex";
footer3.style.color = "#a1a4a8";
footer3.style.paddingTop = "50px";
footer1.appendChild(footer3);















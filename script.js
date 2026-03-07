function login(){

let username=document.getElementById("username").value;
let password=document.getElementById("password").value;

if(username && password){
window.location.href="home.html";
}
else{
alert("Please enter valid login details");
}

}

function searchPlace(){

let place=document.getElementById("searchInput").value;

if(!place){
alert("Enter destination");
return;
}

let near=[
place+" Beach",
place+" Museum",
place+" Park",
place+" Temple",
place+" Fort"
];

let results=document.getElementById("results");

results.innerHTML="<ul>"+near.map(n=>"<li>"+n+"</li>").join("")+"</ul>";

}

function openMaps(){

let place=document.getElementById("searchInput").value;

if(place)
window.open("https://www.google.com/maps/search/"+place,"_blank");

}

function goStay(){

alert("Stay booking page will open here");

}
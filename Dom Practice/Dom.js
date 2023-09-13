// console.log(document.getElementById("para1"))
// console.log(document.getElementById("para2"))
//what is difference between in inner HTML and Innner text
// console.log(para1Element.innerHTML)
// var para1ElementBYclass =document.getElementsByClassName("para")
// console.log(para1ElementBYclass)
// var paraElement = document.getElementsByTagName("p")[0]
// paraElement.innerText = "This is updated text for para 1"
// console.log(document.querySelector("p"))
var olElement = document.getElementById("student-names")
var liElement = document.createElement("li");
var textNode = document.createTextNode("Shinde Vishuu");
liElement.appendChild(textNode);
var liElement2 =document.createElement("li");
var textNode2 =document.createTextNode("Ganesh Shinde");
liElement2.appendChild(textNode2);
olElement.appendChild(liElement)
olElement.appendChild(liElement2)
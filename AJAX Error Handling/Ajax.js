var xhttp = new XMLHttpReques();
xhttp.onreadystatechange = function(){
if(this.readyState == 4){
    console.log(JSON.parse (this.responseText);

}

}
xhttp.open("GET" ,"https://jsonplaceholder.typicode.com/users", true);
xhttp.send();
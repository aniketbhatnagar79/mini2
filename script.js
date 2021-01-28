document.querySelector("#button1").addEventListener("click",call);

document.querySelector("#button2").addEventListener("click",call2);

function call(){
    fetch('http://115.99.88.192:5000/getalldata')
    .then(res=>res.json())
.then(data =>{
    console.log(data);

   var emp=data;
    document.getElementById("id1").style.display="block";

    document.querySelectorAll(".name1")[0].innerText=emp[0].name;
    

    document.querySelectorAll(".name2")[0].innerText=emp[1].name;
    

    document.querySelectorAll(".name3")[0].innerText=emp[2].name;
   
    
});

}
function call2(){
    fetch('http://115.99.88.192:5000/getalldata')
    .then(res=>res.json())
.then(data =>{
    console.log(data);
    
   var emp=data;

   document.getElementById("id2").style.display="inline";

   document.querySelectorAll(".name1")[1].innerText=emp[0].name;
   document.getElementById("desc1").innerHTML=emp[0].desc;

   document.querySelectorAll(".name2")[1].innerText=emp[1].name;
   document.getElementById("desc2").innerHTML=emp[1].desc;

   document.querySelectorAll(".name3")[1].innerText=emp[2].name;
   document.getElementById("desc3").innerHTML=emp[2].desc;
   
    
});
    
}

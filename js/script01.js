fetch("navBar.html")
.then((response)=> response.text())
.then((data)=>{
    document.getElementById("navbar").innerHTML=data;
})
.catch((error)=>
console.error("Error al cargar la barra de navegacion:",error)
);

fetch("Footer.html")
.then((response)=> response.text())
.then((data)=>{
    document.getElementById("footer").innerHTML=data;
})
.catch((error)=>
console.error("Error al cargar el footer:",error)
);










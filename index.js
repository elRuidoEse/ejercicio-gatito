let turno = false;
let victoria = false;
let contador = 0;
let turnoX = document.getElementById("X");
let turnoO = document.getElementById("O");

const handleClick = (event) => {
    const {id} = event.target;
    const div = document.getElementById(id);
    if (div.innerText === "" && victoria === false){
        div.innerText = turno ? "O" : "X";
        verificarVictoria(); 
        turno = !turno;
    }
   
    if (div.innerText === "X"){
        turnoX.style.backgroundColor = "#423752";
        turnoX.style.color = "white";
        turnoO.style.backgroundColor = "#BEB3B6"
        turnoO.style.color = "black";
    } else {
        turnoO.style.backgroundColor = "#423752";
        turnoO.style.color = "white";
        turnoX.style.backgroundColor = "#BEB3B6"
        turnoX.style.color = "black";
    }
}

const verificarVictoria = () =>{
    contador++;
    const div1 = document.getElementById(1);
    const div2 = document.getElementById(2);
    const div3 = document.getElementById(3);
    const div4 = document.getElementById(4);
    const div5 = document.getElementById(5);
    const div6 = document.getElementById(6);
    const div7 = document.getElementById(7);
    const div8 = document.getElementById(8);
    const div9 = document.getElementById(9);

    const forma1 = 
    div1.innerText === div2.innerText && 
    div1.innerText === div3.innerText && 
    div1.innerText !== "";
    const forma2 = 
    div4.innerText === div5.innerText && 
    div4.innerText === div6.innerText && 
    div4.innerText !== "";
    const forma3 = 
    div7.innerText === div8.innerText && 
    div7.innerText === div9.innerText && 
    div7.innerText !== "";
    const forma4 = 
    div1.innerText === div4.innerText && 
    div1.innerText === div7.innerText && 
    div1.innerText !== "";
    const forma5 = 
    div2.innerText === div5.innerText && 
    div2.innerText === div8.innerText && 
    div2.innerText !== "";
    const forma6 = 
    div3.innerText === div6.innerText && 
    div3.innerText === div9.innerText && 
    div3.innerText !== "";
    const forma7 = 
    div1.innerText === div5.innerText && 
    div1.innerText === div9.innerText && 
    div1.innerText !== "";
    const forma8 = 
    div3.innerText === div5.innerText && 
    div3.innerText === div7.innerText && 
    div3.innerText !== "";

    if (forma1|| 
        forma2|| 
        forma3|| 
        forma4|| 
        forma5|| 
        forma6||
        forma7|| 
        forma8) {
        
        const linea = document.getElementById("linea");
      
        if(forma1){
        linea.style.height = "8px";
        linea.style.width = "400px";
        linea.style.top = "65px";
        linea.style.left = "0px";
    } else if (forma2) {
        linea.style.height = "8px";
        linea.style.width = "400px";
        linea.style.top = "195px";
        linea.style.left = "0px";
    } else if (forma3) {    
        linea.style.height = "8px";
        linea.style.width = "400px";
        linea.style.top = "325px";
        linea.style.left = "0px";
    } else if (forma4){
        linea.style.height = "400px";
        linea.style.width = "8px";
        linea.style.top = "0px";
        linea.style.left = "65px";
    }else if(forma5) {
        linea.style.height = "400px";
        linea.style.width = "8px";
        linea.style.top = "0px";
        linea.style.left = "195px";
    } else if (forma6) {
        linea.style.height = "400px";
        linea.style.width = "8px";
        linea.style.top = "0px";
        linea.style.left = "325px";
    } else if (forma7){
        linea.style.height = "400px";
        linea.style.width = "8px";
        linea.style.top = "0px";
        linea.style.left = "200px";
        linea.style.transform = "skew(45deg, 0deg)";
    } else if (forma8){
        linea.style.height = "400px";
        linea.style.width = "8px";
        linea.style.top = "0px";
        linea.style.left = "199px";
        linea.style.transform = "skew(135deg, 0deg)";
    }
        victoria = true;
        alert(`Ganaron las  ${turno ? "O" : "X"}`);
    
    } else {
        if (contador === 9) {
            alert("La partida terminó en empate");
        }
    }
}

const reload = () =>{
    const div1 = document.getElementById(1);
    const div2 = document.getElementById(2);
    const div3 = document.getElementById(3);
    const div4 = document.getElementById(4);
    const div5 = document.getElementById(5);
    const div6 = document.getElementById(6);
    const div7 = document.getElementById(7);
    const div8 = document.getElementById(8);
    const div9 = document.getElementById(9);

    const linea = document.getElementById("linea")
        
        linea.style.height = "0px";
        linea.style.width = "0px";
        linea.style.top = "0px";
        linea.style.left = "0px";


    div1.innerText ="";
    div2.innerText ="";
    div3.innerText ="";
    div4.innerText ="";
    div5.innerText ="";
    div6.innerText ="";
    div7.innerText ="";
    div8.innerText ="";
    div9.innerText ="";
    
    turnoX.style.backgroundColor = "#BEB3B6"
    turnoX.style.color = "black";
    turnoO.style.backgroundColor = "#BEB3B6"
    turnoO.style.color = "black";
    turno = false;
    victoria = false;
    contador = 0;
}


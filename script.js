var clique1 = document.getElementById("torre1")
var clique2 = document.getElementById("torre2")
var clique3 = document.getElementById("torre3")

let qualElemento;

document.getElementById("torre1").onclick = function(e){
    
    if(qualElemento === "torre2" || qualElemento === "torre3"){
        let x = document.getElementById(qualElemento)
        var z = clique1.lastElementChild.clientWidth;
        if(x.lastElementChild.clientWidth < z || z === 0){
            clique1.appendChild(x.lastElementChild);
        }
        else if(x.lastElementChild.clientWidth > z){
            alert("Você perdeu - executou um movimento não permitido! Clique em OK para jogar novamente");
            window.location.reload();
        }
        qualElemento = {};
    }
    else{
        qualElemento = e.currentTarget.id;
    }
    var clique4 = document.getElementById("torre3");

    console.log(clique4.childElementCount);

    if(qualElemento === "torre1" && clique1.childElementCount === 1){
        alert("Você perdeu - executou um movimento não permitido! Clique em OK para jogar novamente")
        window.location.reload();
    }

}

document.getElementById("torre2").onclick = function(e){
    
    if(qualElemento === "torre1" || qualElemento === "torre3"){
        let x = document.getElementById(qualElemento)
        var z = clique2.lastElementChild.clientWidth;
        if(x.lastElementChild.clientWidth < z || z === 0){
            clique2.appendChild(x.lastElementChild);
        }
        else if(x.lastElementChild.clientWidth > z){
            alert("Você perdeu - executou um movimento não permitido! Clique em OK para jogar novamente")
            window.location.reload();
        }
        qualElemento = {};
    }
    else{
        qualElemento = e.currentTarget.id;
    }
    var clique4 = document.getElementById("torre3");

    console.log(clique4.childElementCount);

    if(qualElemento === "torre2" && clique2.childElementCount === 1){
        alert("Você perdeu - executou um movimento não permitido! Clique em OK para jogar novamente")
        window.location.reload();
    }

}

document.getElementById("torre3").onclick = function(e){
    
    if(qualElemento === "torre1" || qualElemento === "torre2"){
        let x = document.getElementById(qualElemento)
        var z = clique3.lastElementChild.clientWidth;
        if(x.lastElementChild.clientWidth < z || z === 0){
            clique3.appendChild(x.lastElementChild);
        }
        else if(x.lastElementChild.clientWidth > z){
            alert("Você perdeu - executou um movimento não permitido! Clique em OK para jogar novamente")
            window.location.reload();
        }
        qualElemento = {};
    }
    else{
        qualElemento = e.currentTarget.id;
    }

    var clique4 = document.getElementById("torre3");

    console.log(clique4.childElementCount);


    if(clique3.childElementCount === 5){
        alert("Você ganhou - PARABÉNS!");
        window.location.reload();
    }

    if(qualElemento === "torre3" && clique3.childElementCount === 1){
        alert("Você perdeu - executou um movimento não permitido! Clique em OK para jogar novamente")
        window.location.reload();
    }

}





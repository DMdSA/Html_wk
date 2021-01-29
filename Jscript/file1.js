var date = new Date();
y = date.getFullYear();
m = date.getMonth() + 1;
d = date.getDate();
document.getElementById("dateOfToday").innerHTML = d + " DE " + mes(1) + " DE " + y;

function mes(numero){

    var extenso ="";
    switch(numero){

        case 1:
            extenso = "JANEIRO";
            break;
        case 2:
            extenso = "FEVEREIRO";
            break;
        case 3:
            extenso = "MARÇO";
            break;
        case 4:
            extenso = "ABRIL";
            break;
        case 5:
            extenso = "MAIO";
            break;
        case 6:
            extenso = "JUNHO";
            break;
        case 7:
            extenso = "JULHO";
            break;
        case 8:
            extenso = "AGOSTO";
            break;
        case 9:
            extenso = "SETEMBRO";
            break;
        case 10:
            extenso = "OUTUBRO";
            break;
        case 11:
            entenso = "NOVEMBRO";
            break;
        case 12:
            extenso = "DEZEMBRO";
            break;
    }
    return extenso;
}

function horasLive(){

    var dia = new Date();
    var horas = dia.getHours();
    var minutos = (dia.getMinutes() < 10 ? '0' : '') + dia.getMinutes();
    var segundos = (dia.getSeconds() < 10 ? '0' : '') + dia.getSeconds();
    document.getElementById("horas").innerHTML = horas + ":" + minutos + ":" + segundos;
    
    setTimeout(horasLive, 1000);
}
    window.onload = horasLive();


function discordAdd(){

    confirm("DMA_#6027 \n\nAdiciona à vontade :)");
}



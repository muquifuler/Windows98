
        var xInic, yInic;
        var estaPulsado = false;
        
        function ratonPulsado(evt) { 
            //Obtener la posición de inicio
            xInic = evt.clientX;
            yInic = evt.clientY;    
            estaPulsado = true;
            //Para Internet Explorer: Contenido no seleccionable
            document.getElementById("section").unselectable = true;
            document.getElementById("section2").unselectable = true;
            document.getElementById("section3").unselectable = true;
            document.getElementById("section4").unselectable = true;
        }
        
        function ratonMovido(evt) {
            if(estaPulsado) {
                //Calcular la diferencia de posición
                var xActual = evt.clientX;
                var yActual = evt.clientY;    
                var xInc = xActual-xInic;
                var yInc = yActual-yInic;
                xInic = xActual;
                yInic = yActual;
                
                //Establecer la nueva posición
                var elemento = document.getElementById("section");
                var position = getPosicion(elemento);
                elemento.style.top = (position[0] + yInc) + "px";
                elemento.style.left = (position[1] + xInc) + "px";

                var elemento2 = document.getElementById("section2");
                var position = getPosicion(elemento2);
                elemento2.style.top = (position[0] + yInc) + "px";
                elemento2.style.left = (position[1] + xInc) + "px";

                var elemento3 = document.getElementById("section3");
                var position = getPosicion(elemento3);
                elemento3.style.top = (position[0] + yInc) + "px";
                elemento3.style.left = (position[1] + xInc) + "px";

                var elemento4 = document.getElementById("section4");
                var position = getPosicion(elemento4);
                elemento4.style.top = (position[0] + yInc) + "px";
                elemento4.style.left = (position[1] + xInc) + "px";
            }
        }
        
        function ratonSoltado(evt) {
            estaPulsado = false;
        }
        
        /*
         * Función para obtener la posición en la que se encuentra el
         * elemento indicado como parámetro.
         * Retorna un array con las coordenadas x e y de la posición
         */
        function getPosicion(elemento) {
            var posicion = new Array(2);
            if(document.defaultView && document.defaultView.getComputedStyle) {
                posicion[0] = parseInt(document.defaultView.getComputedStyle(elemento, null).getPropertyValue("top"))
                posicion[1] = parseInt(document.defaultView.getComputedStyle(elemento, null).getPropertyValue("left"));
            } else {
                //Para Internet Explorer
                posicion[0] = parseInt(elemento.currentStyle.top);             
                posicion[1] = parseInt(elemento.currentStyle.left);               
            }      
            return posicion;
        }
        var el = document.getElementById("section");
        if (el.addEventListener){
            el.addEventListener("mousedown", ratonPulsado, false);
            el.addEventListener("mouseup", ratonSoltado, false);
            document.addEventListener("mousemove", ratonMovido, false);
        } else { //Para IE
            el.attachEvent('onmousedown', ratonPulsado);
            el.attachEvent('onmouseup', ratonSoltado);
            document.attachEvent('onmousemove', ratonMovido);
        }      

        var el2 = document.getElementById("section2");
        if (el2.addEventListener){
            el2.addEventListener("mousedown", ratonPulsado, false);
            el2.addEventListener("mouseup", ratonSoltado, false);
            document.addEventListener("mousemove", ratonMovido, false);
        } else { //Para IE
            el2.attachEvent('onmousedown', ratonPulsado);
            el2.attachEvent('onmouseup', ratonSoltado);
            document.attachEvent('onmousemove', ratonMovido);
        }   
        
        var el3 = document.getElementById("section3");
        if (el3.addEventListener){
            el3.addEventListener("mousedown", ratonPulsado, false);
            el3.addEventListener("mouseup", ratonSoltado, false);
            document.addEventListener("mousemove", ratonMovido, false);
        } else { //Para IE
            el3.attachEvent('onmousedown', ratonPulsado);
            el3.attachEvent('onmouseup', ratonSoltado);
            document.attachEvent('onmousemove', ratonMovido);
        }    

        var el4 = document.getElementById("section4");
        if (el4.addEventListener){
            el4.addEventListener("mousedown", ratonPulsado, false);
            el4.addEventListener("mouseup", ratonSoltado, false);
            document.addEventListener("mousemove", ratonMovido, false);
        } else { //Para IE
            el4.attachEvent('onmousedown', ratonPulsado);
            el4.attachEvent('onmouseup', ratonSoltado);
            document.attachEvent('onmousemove', ratonMovido);
        }    

var v1;
var v2;
var v3;
var v4;
var v5;
var v6;
var v7;

var vb1;
var vb2;
var vb3;
var vb4;
var vj1;
var vj2;
var vj3;
var vj4;

var first_time;


function start(){
    document.getElementById("menu-start").style = 'display:flex;';
}
function start_off(){
    document.getElementById("menu-start").style = 'display:none;';
}

function b1(){
    document.getElementById("b1").style = 'display:block;';
    section();
}
function b2(){
    document.getElementById("b2").style = 'display:block;';
    section2();
}
function b3(){
    document.getElementById("b3").style = 'display:block;';
    section3();
}
function b4(){
    document.getElementById("b4").style = 'display:block;';
    section4();
}

function section(){

    if(first_time!=false){
        document.getElementById("b1").style = 'border-top: solid 1px #f1f1f0; border-left: solid 1px #f1f1f0; border-bottom: solid 1px #5a5b5a; border-right: solid 1px #5a5b5a; box-shadow: 0px 0px 1px rgb(0, 0, 0), 1px 1px 0px 0px #000000, -1px -1px 0px 0px #fafafa;';
        first_time=false;
    }
    
    document.getElementById("b1").style = 'display:;';

    v1=true;
    v2=false;
    v3=false;
    v4=false;
    v5=false;
    vb1=false;
    vb4=true;
    vb2=true;
    vb3=true;

    vj1=true;

    navv();

    document.getElementById("section").style = 'display:block;';
    document.getElementById("section2").style = 'display:none;';
    document.getElementById("section3").style = 'display:none;';
    document.getElementById("section4").style = 'display:none;';
    document.getElementById("section5").style = 'display:none;';
    document.getElementById("section6").style = 'display:none;';
    document.getElementById("section7").style = 'display:none;';
}

function section2(){
    
    if(first_time!=false){
        document.getElementById("b1").style = 'border-top: solid 1px #f1f1f0; border-left: solid 1px #f1f1f0; border-bottom: solid 1px #5a5b5a; border-right: solid 1px #5a5b5a; box-shadow: 0px 0px 1px rgb(0, 0, 0), 1px 1px 0px 0px #000000, -1px -1px 0px 0px #fafafa;';
        first_time=false;
    }
    document.getElementById("b2").style = 'display:;';
    v1=false;
    v2=true;
    v3=false;
    v4=false;
    v5=false;
    vb2=false;
    vb1=true;
    vb4=true;
    vb3=true;

    vj2=true;

    navv();

    document.getElementById("section").style = 'display:none;';
    document.getElementById("section2").style = 'display:block;';
    document.getElementById("section3").style = 'display:none;';
    document.getElementById("section4").style = 'display:none;';
    document.getElementById("section5").style = 'display:none;';
    document.getElementById("section6").style = 'display:none;';
    document.getElementById("section7").style = 'display:none;';
}
function section3(){
    
    if(first_time!=false){
        document.getElementById("b1").style = 'border-top: solid 1px #f1f1f0; border-left: solid 1px #f1f1f0; border-bottom: solid 1px #5a5b5a; border-right: solid 1px #5a5b5a; box-shadow: 0px 0px 1px rgb(0, 0, 0), 1px 1px 0px 0px #000000, -1px -1px 0px 0px #fafafa;';
        first_time=false;
    }
    document.getElementById("b3").style = 'display:;';
    v1=false;
    v2=false;
    v3=true;
    v4=false;
    v5=false;
    vb3=false;
    vb1=true;
    vb2=true;
    vb4=true;

    vj3=true;

    navv();

    document.getElementById("section").style = 'display:none;';
    document.getElementById("section2").style = 'display:none;';
    document.getElementById("section3").style = 'display:block;';
    document.getElementById("section4").style = 'display:none;';
    document.getElementById("section5").style = 'display:none;';
    document.getElementById("section6").style = 'display:none;';
    document.getElementById("section7").style = 'display:none;';
}
function section4(){
    
    if(first_time!=false){
        document.getElementById("b1").style = 'border-top: solid 1px #f1f1f0; border-left: solid 1px #f1f1f0; border-bottom: solid 1px #5a5b5a; border-right: solid 1px #5a5b5a; box-shadow: 0px 0px 1px rgb(0, 0, 0), 1px 1px 0px 0px #000000, -1px -1px 0px 0px #fafafa;';
        first_time=false;
    }
    document.getElementById("b4").style = 'display:;';
    v1=false;
    v2=false;
    v3=false;
    v4=true;
    v5=false;
    vb1=true;
    vb2=true;
    vb3=true;
    vb4=false;

    vj4=true;

    navv();

    document.getElementById("section").style = 'display:none;';
    document.getElementById("section2").style = 'display:none;';
    document.getElementById("section3").style = 'display:none;';
    document.getElementById("section4").style = 'display:block;';
    document.getElementById("section5").style = 'display:none;';
    document.getElementById("section6").style = 'display:none;';
    document.getElementById("section7").style = 'display:none;';
}

function navv(){
    if(vb1 == false){
        document.getElementById("b1").style = 'border-top: solid 1px #5a5b5a; border-left: solid 1px #5a5b5a; border-bottom: solid 1px #f1f1f0; border-right: solid 1px #f1f1f0; box-shadow:inset 0px 0px 1px rgb(0, 0, 0),inset 1px 1px 0px 0px #000000,inset -1px -1px 0px 0px #fafafa;';
    }else{
        if(vj1 == true){
            document.getElementById("b1").style = 'border-top: solid 1px #f1f1f0; border-left: solid 1px #f1f1f0; border-bottom: solid 1px #5a5b5a; border-right: solid 1px #5a5b5a; box-shadow: 0px 0px 1px rgb(0, 0, 0), 1px 1px 0px 0px #000000, -1px -1px 0px 0px #fafafa;';
        }else{

        }
        
    }
    if(vb2 == false){
        document.getElementById("b2").style = 'border-top: solid 1px #5a5b5a; border-left: solid 1px #5a5b5a; border-bottom: solid 1px #f1f1f0; border-right: solid 1px #f1f1f0; box-shadow:inset 0px 0px 1px rgb(0, 0, 0),inset 1px 1px 0px 0px #000000,inset -1px -1px 0px 0px #fafafa;';
    }else{
        if(vj2 == true){
            document.getElementById("b2").style = 'border-top: solid 1px #f1f1f0; border-left: solid 1px #f1f1f0; border-bottom: solid 1px #5a5b5a; border-right: solid 1px #5a5b5a; box-shadow: 0px 0px 1px rgb(0, 0, 0), 1px 1px 0px 0px #000000, -1px -1px 0px 0px #fafafa;';
        }else{
            
        }
        
    }
    if(vb3 == false){
        document.getElementById("b3").style = 'border-top: solid 1px #5a5b5a; border-left: solid 1px #5a5b5a; border-bottom: solid 1px #f1f1f0; border-right: solid 1px #f1f1f0; box-shadow:inset 0px 0px 1px rgb(0, 0, 0),inset 1px 1px 0px 0px #000000,inset -1px -1px 0px 0px #fafafa;';
    }else{
        if(vj3 == true){
            document.getElementById("b3").style = 'border-top: solid 1px #f1f1f0; border-left: solid 1px #f1f1f0; border-bottom: solid 1px #5a5b5a; border-right: solid 1px #5a5b5a; box-shadow: 0px 0px 1px rgb(0, 0, 0), 1px 1px 0px 0px #000000, -1px -1px 0px 0px #fafafa;';
        }else{
            
        }
        
    }
    if(vb4 == false){
        document.getElementById("b4").style = 'border-top: solid 1px #5a5b5a; border-left: solid 1px #5a5b5a; border-bottom: solid 1px #f1f1f0; border-right: solid 1px #f1f1f0; box-shadow:inset 0px 0px 1px rgb(0, 0, 0),inset 1px 1px 0px 0px #000000,inset -1px -1px 0px 0px #fafafa;';
    }else{
        if(vj4 == true){
            document.getElementById("b4").style = 'border-top: solid 1px #f1f1f0; border-left: solid 1px #f1f1f0; border-bottom: solid 1px #5a5b5a; border-right: solid 1px #5a5b5a; box-shadow: 0px 0px 1px rgb(0, 0, 0), 1px 1px 0px 0px #000000, -1px -1px 0px 0px #fafafa;';
        }else{
            
        }
        
    }
}

function section5(){
    //document.getElementById("b5").style = 'display:;';
    location.assign("https://autotoken.tech/index_dyn.php");
}

function section6(){
    //document.getElementById("b6").style = 'display:;';
    location.assign("https://www.autotoken.tech/monochrome/index.php");
}

function section7(){
    //document.getElementById("b7").style = 'display:;';
    location.assign("https://autotoken.tech/");
}

function agrandar(){
    if(v1 == true){
        document.getElementById("section").style = "margin: auto; margin-top: 0.4vh; margin-left: 0.2vw; width: 99.5%; height: 95%;";
    }else if(v2 == true){
        document.getElementById("section2").style = "margin: auto; margin-top: 0.4vh; margin-left: 0.2vw; width: 99.5%; height: 95%;";
    }else if(v3 == true){
        document.getElementById("section3").style = "margin: auto; margin-top: 0.4vh; margin-left: 0.2vw; width: 99.5%; height: 95%;";
    }else if(v4 == true){
        document.getElementById("section4").style = "margin: auto; margin-top: 0.4vh; margin-left: 0.2vw; width: 99.5%; height: 95%;";
    }
    document.getElementById("section5").style = "margin: auto; margin-top: 0.4vh; margin-left: 0.2vw; width: 99.5%; height: 95%;";
    document.getElementById("section6").style = "margin: auto; margin-top: 0.4vh; margin-left: 0.2vw; width: 99.5%; height: 95%;";
    document.getElementById("section7").style = "margin: auto; margin-top: 0.4vh; margin-left: 0.2vw; width: 99.5%; height: 95%;";
}

function peque(){
    if(v1 == true){
        document.getElementById("section").style = "width: 42vw; height: 60vh; margin-left: 20vw; margin-top: 20vh;";
    }else if(v2 == true){
        document.getElementById("section2").style = "width: 42vw; height: 60vh; margin-left: 20vw; margin-top: 20vh;";
    }else if(v3 == true){
        document.getElementById("section3").style = "width: 42vw; height: 60vh; margin-left: 20vw; margin-top: 20vh;";
    }else if(v4 == true){
        document.getElementById("section4").style = "width: 42vw; height: 60vh; margin-left: 20vw; margin-top: 20vh;";
    }

    document.getElementById("section5").style = "width: 42vw; height: 60vh; margin-left: 20vw; margin-top: 20vh;";
    document.getElementById("section6").style = "width: 42vw; height: 60vh; margin-left: 20vw; margin-top: 20vh;";
    document.getElementById("section7").style = "width: 42vw; height: 60vh; margin-left: 20vw; margin-top: 20vh;";
}

function close1(){
    document.getElementById("section").style = "display:none;";
    document.getElementById("b1").style = 'display:none;';
    vb1 = true;
    vj1 = false;
}
function close2(){
    document.getElementById("section2").style = "display:none;";
    document.getElementById("b2").style = 'display:none;';
    vb2 = true;
    vj2 = false;
}
function close3(){
    document.getElementById("section3").style = "display:none;";
    document.getElementById("b3").style = 'display:none;';
    vb3 = true;
    vj3 = false;
}
function close4(){
    document.getElementById("section4").style = "display:none;";
    document.getElementById("b4").style = 'display:none;';
    vb4 = true;
    vj4 = false;
}
/*
function programs(){
    document.getElementById("menu-start").style = 'display:none;';
}
function document(){
    document.getElementById("menu-start").style = 'display:none;';
}
function settings(){
    document.getElementById("menu-start").style = 'display:none;';
}
function find(){
    document.getElementById("menu-start").style = 'display:none;';
}
function help(){
    document.getElementById("menu-start").style = 'display:none;';
}
function run(){
    document.getElementById("menu-start").style = 'display:none;';
}
*/
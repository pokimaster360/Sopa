//let x = '+';
//let b = 3;



//document.write(x == b) 


let caja = document.getElementById("caja");
uno = document.getElementById('1');
parrafo = document.getElementById("p");
suma = document.getElementById('+');
respuesta = document.getElementById('=');
dos = document.getElementById('2')
tres = document.getElementById('3')
cuatro = document.getElementById('4')
cinco = document.getElementById('5')
seis = document.getElementById('6')
siete = document.getElementById('7')
ocho = document.getElementById('8')
nueve = document.getElementById('9')
cero = document.getElementById('0')
menos = document.getElementById('-')
multiplicar = document.getElementById('x')
division = document.getElementById('%')
borrar = document.getElementById('ce')
punto = document.getElementById('.')

function numero1(){
        parrafo.innerText += "1"
}
uno.onclick = numero1
document.addEventListener('keydown',function(event){
        if(event.key === "1"){
                parrafo.innerText += "1"
        }
})

function numero2(){
        parrafo.innerText += "2"
}
dos.onclick = numero2
document.addEventListener('keydown',function(event){
        if(event.key === "2"){
                parrafo.innerText += "2"
        }
})

function numero3(){
        parrafo.innerText += "3"
}
tres.onclick = numero3
document.addEventListener('keydown',function(event){
        if(event.key === "3"){
                parrafo.innerText += "3"
        }
})

function numero4(){
        parrafo.innerText += "4"
}
cuatro.onclick = numero4
document.addEventListener('keydown',function(event){
        if(event.key === "4"){
                parrafo.innerText += "4"
        }
})

function numero5(){
        parrafo.innerText += "5"
}
cinco.onclick = numero5
document.addEventListener('keydown',function(event){
        if(event.key === "5"){
                parrafo.innerText += "5"
        }
})

function numero6(){
        parrafo.innerText += "6"
}
seis.onclick = numero6
document.addEventListener('keydown',function(event){
        if(event.key === "6"){
                parrafo.innerText += "6"
        }
})

function numero7(){
        parrafo.innerText += "7"
}
siete.onclick = numero7
document.addEventListener('keydown',function(event){
        if(event.key === "7"){
                parrafo.innerText += "7"
        }
})

function numero8(){
        parrafo.innerText += "8"
}
ocho.onclick = numero8
document.addEventListener('keydown',function(event){
        if(event.key === "8"){
                parrafo.innerText += "8"
        }
})

function numero9(){
        parrafo.innerText += "9"
}
nueve.onclick = numero9
document.addEventListener('keydown',function(event){
        if(event.key === "9"){
                parrafo.innerText += "9"
        }
})

function numero0(){
        parrafo.innerText += "0"
}
cero.onclick = numero0
document.addEventListener('keydown',function(event){
        if(event.key === "0"){
                parrafo.innerText += "0"
        }
})

function Punto(){
        parrafo.innerText += "."
}
punto.onclick = Punto
document.addEventListener('keydown',function(event){
        if(event.key === "."){
                parrafo.innerText += "."
        }
})


//signos//
function Menos(){
        parrafo.innerText += "-"
}
menos.onclick = Menos
document.addEventListener('keydown',function(event){
        if(event.key === "-"){
                parrafo.innerText += "-"
        }
})

function Borrar(){
        parrafo.innerText = ""
}
borrar.onclick = Borrar
document.addEventListener('keydown',function(event){
        if(event.key === "Backspace"){
                parrafo.innerText = ""
        }
})

function Multiplica(){
        parrafo.innerText += "*"
}
multiplicar.onclick = Multiplica
document.addEventListener('keydown',function(event){
        if(event.key === "*"){
                parrafo.innerText += "*"
        }
})

function Division(){
        parrafo.innerText += "/"
}
division.onclick = Division
document.addEventListener('keydown',function(event){
        if(event.key === "/"){
                parrafo.innerText += "/"
        }
})

function Suma(){
        parrafo.innerText += "+"
        signoA = "+"
}
suma.onclick = Suma
document.addEventListener('keydown',function(event){
        if(event.key === "+"){
                parrafo.innerText += "+"
        }
})

function Test(){
        parrafo.textContent = eval(parrafo.textContent)
}
respuesta.onclick = Test
document.addEventListener('keydown',function(event){
        if(event.key === "Enter"){
                parrafo.textContent = eval(parrafo.textContent)
        }
})
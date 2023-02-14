/*Declarando as constantes*/

const minutosEl = document.querySelector("#minutos")
const segundosEl = document.querySelector("#segundos")
const milissegundosEl = document.querySelector("#milissegundos")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#resetBtn")

/*Criando as variáveis*/

let intervalo;
let minutos = 0;
let segundos = 0;
let milissegundos = 0;
let isPaused = false;

/*Criando as funções de funcionamento do cronometro */

startBtn.addEventListener("click", startTimer)
pauseBtn.addEventListener("click", pauseTimer)
resumeBtn.addEventListener("click", resumeTimer)
resetBtn.addEventListener("click", resetTimer)


    /*Função de Start */
    function startTimer(){
        intervalo = setInterval(() => {
            if(!isPaused){
                milissegundos += 10;

                if (milissegundos === 1000){
                    segundos++;
                    milissegundos= 0;
                }
                if(segundos===60){
                    minutos++;
                    segundos=0;
                }
                minutosEl.textContent=formatTime(minutos);
                segundosEl.textContent=formatTime(segundos);
                milissegundosEl.textContent=fotmatMilissegundos(milissegundos);
            }
        },10);
        
        startBtn.style.display ="none";
        pauseBtn.style.display = "block"

    }

/*Função de Pause*/
    function pauseTimer(){
        isPaused=true;
        pauseBtn.style.display = "none";
        resumeBtn.style.display = "block"
    }

/*Função de Continuar */
    function resumeTimer(){
        isPaused=false;
        pauseBtn.style.display = "block"
        resumeBtn.style.display = "none"
    }
/*Função de Resetar */
    function resetTimer(){
        clearInterval(intervalo);
        minutos=0;
        segundos=0;
        milissegundos=0;

        minutosEl.textContent="00";
        segundosEl.textContent="00";
        milissegundosEl.textContent="000"

        startBtn.style.display="block";
        pauseBtn.style.display="none";
        resumeBtn.style.display="none";
       

    }

/*Formatando a funçao do tempo */ 

function formatTime(time){
    return time < 10? `0${time}` :time;
}

function fotmatMilissegundos(time){
    return time <100? `0${time}`.padStart(3, "0") : time;
 }

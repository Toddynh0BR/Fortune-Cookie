const btnTry = document.querySelector("#btnTry");
const btnAgain = document.querySelector("#btnAgain")
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

let xAttempts = 0
let Phrases = [
"A vida trará coisas boas se tiver paciência.",
"Defeitos e virtudes são apenas dois lados da mesma moeda.",
"A maior de todas as torres começa no solo.",
"Não há que ser forte. Há que ser flexível.",
"A juventude não é uma época da vida, é um estado de espírito.",
"Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
"Siga os bons e aprenda com eles.",
"O bom-senso vale mais do que muito conhecimento.",
"Espere pelo mais sábio dos conselhos: o tempo.",
"Todas as coisas são difíceis antes de se tornarem fáceis.",
"Se você se sente só é porque construiu muros ao invés de pontes.",
"Vencer é 90 por cento suor e 10 por cento de engenho.",
"O amor está sempre mais próximo do que você imagina.",
"Você é do tamanho do seu sonho.",
"Pare de procurar eternamente; a felicidade está mesmo aqui ao seu lado.",
"O conhecimento é a única virtude e a ignorância é o único vício.",
"O nosso primeiro e último amor é… o amor-próprio.",
"Deixe de lado as preocupações e seja feliz.",
"A vontade das pessoas é a melhor das leis.",
"Nós somos o que pensamos.",
"A maior barreira para o sucesso é o medo do fracasso.",
"O insucesso é apenas uma oportunidade para recomeçar de novo com mais experiência.",
"Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.",
"O verdadeiro homem mede a sua força, quando se defronta com o obstáculo.",
"Motivação não é sinónimo de transformação, mas um passo em sua direção.",
"A inspiração vem dos outros. A motivação vem de dentro de nós.",
"Não acredite mais em pessoas especiais, mas em momentos especiais com pessoas normais.",
"Acredite em milagres, mas não dependa deles.",
"Você sempre será a sua melhor companhia!",
"Realize o óbvio, pense no improvável e conquiste o impossível.",
];


function YourLucky(event){
    event.preventDefault()
    screen1.classList.add("hide")
    screen2.classList.remove("hide")
    document.querySelector(".lucky p").innerText = Phrases[xAttempts]
 
}

btnTry.addEventListener('click', YourLucky)

btnAgain.addEventListener('click', 
function(){
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
   
    xAttempts++;

    if(xAttempts === 29){
     xAttempts = 0
    }
})


console.log(xAttempts)


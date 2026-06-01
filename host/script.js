// BANCO (PRIMER PARCIAL)
const bancoPrimerParcial = [
    { 
        q: "¿Cuál de las siguientes si es una propiedad de sumatorias?", 
        imagen: "Pregunta1Calcul.png", 
        a: ["a", "b", "c", "d"], 
        correct: 3 
    },
    { 
        q: "La integral está definida como:", 
        imagen: "Pregunta2Calcul.png", 
        a: ["a", "b", "c", "d"], 
        correct: 2 
    },
    { 
        q: "¿Qué representa geométricamente la expresión? ", 
        imagen: "Pregunta3Calcul.png", 
        a: ["a) El área entre dos curvas en el intervalo [a,b] ","b) El volumen de un sólido generado por revolución mediante discos sólidos ","c) El volumen de un sólido hueco generado por cilindros ", "d) La longitud de una curva rotada en el plano"], 
        correct: 1
    },
    {
        q: "¿Cuál de las siguientes afirmaciones es falsa respecto a la regla de Simpson?", 
        imagen: null,
        a: ["a) Requiere que el número de subintervalos sea par ", "b) Tiene mayor precisión que el método del trapecio ", "c) Es exacta para cualquier polinomio de tercer grado ", "d) Siempre da resultados exactos si n ≥ 2"], 
        correct: 3  
    },
    {
        q: "¿Cuál de las siguientes condiciones no es obligatoria para aplicar el método de arandelas?", 
        imagen: null,
        a: [" a) Que exista una región limitada por dos curvas", " b) Que el eje de revolución sea perpendicular al eje de integración", "c) Que las funciones se crucen dentro del intervalo", "d) Que las funciones sean continuas en el intervalo de integración (x) no es integrable en [0, π]"], 
        correct: 0 
    },
    {
        q: "El volumen generado al girar una región acotada por <td>𝑦=𝑓(𝑥) alrededor del eje y requiere:", 
        imagen: null,
        a: ["a) Expresar x como función de y", "b) Aplicar el método de discos ", "c) Integrar respecto a x", "d) Ninguna de las anteriores"], 
        correct: 0 
    },
    {
        q: "¿Cuál es el propósito principal de una suma de Riemann?",
        imagen: null,
        a: ["a) Calcular la pendiente de una recta", "b) Aproximar el área bajo una curva mediante la suma de rectángulos" ,"c) Encontrar el valor máximo de una función", "d) Calcular el volumen de una esfera"],
        correct: 1
    },
    {
        q: "Cual es la derivada de F(X)?",
        imagen: "Pregunta4Calcul.png",
        a: ["a) F'(x)=f(a)", "b) F'(x)=0" ,"F'(x)=f(x)", "d) F'(x)=f(b)"],
        correct: 2
    },
    {
        q: "¿Qué ocurre cuando una región plana gira alrededor de un eje?",
        imagen: null,
        a: ["a) Se forma una derivada", "b) Se genera un sólido tridimensional" ,"c) Se calcula una pendiente", "d) Se obtiene una función constante"],
        correct: 1
    },
    {
        q: "I¿Cuál de las siguientes expressions es equivalente a",
        imagen: "Pregunta5Calcul.png",
        a: ["a) ", "b)" ,"c)", "d) "],
        correct: 0
    },
    {
        q: "Determinar el area bajo la curva en el intervalo usando sumas de riemann",
        imagen: "Pregunta6Calcul.png",
        a: ["a) 17/8 ", "b) 17/9" ,"c) 1/17", "d) 14/5"],
        correct: 0
    },
    {
        q: "Determinar el area de la region delimitada en el intervalo [0,4] y el eje x usando sumas de riemann usando a)Usando triangulos inscritos o circunscritos",
        imagen: "Pregunta7Calcul.png",
        a: ["a)9023", "b) 6767" ,"c) 8180", "d)7235"],
        correct: 2
    },
    {
        q: "Determinar el area de la region delimitada en el intervalo [2,4] y el eje x usando sumas de riemann",
        imagen: "Pregunta8Calcul.png",
        a: ["a)902/6", "b) 160/3" ,"c) 187/3", "d)67/67"],
        correct: 1
    },
    {
        q: "Determinar el area de la region delimitada en el intervalo [0,2] y el eje x",
        imagen: "Pregunta9Calcul.png",
        a: ["a)10/3", "b) 67" ,"c) 81/2", "d)10/2"],
        correct: 0
    },
    {
        q: "Determinar el area de la region delimitada en el intervalo [0,1] y el eje x",
        imagen: "Pregunta10Calcul.png",
        a: ["a) 1/4 ", "b) 1/2" ,"c) 1/3", "d) 1/5"],
        correct: 0
    },
    {
        q: "Determinar el valor aproximado de la integral",
        imagen: "Pregunta11Calcul.png",
        a: ["a) 1.85, 0.72 ", "b) 1.25, 0.29" ,"c) 1.5, 2.3", "d)7.6, 6.7"],
        correct: 0
    },
    {
        q: "Determinar el valor aproximado de la integral",
        imagen: "Pregunta12Calcul.png",
        a: ["a) 1.85, 0.72 ", "b) 1.85, 1.37" ,"c) 2.3, 1.85", "d)7.6, 6.7"],
        correct: 1
    },
    {
        q: "Hallar el volumen del solido de revolucion formado al rotar la region acotada por alrededor del eje x con el metodo de discos:",
        imagen: "Pregunta14Calcul.png",
        a: ["a)143/3", "b) 89/6" ,"c) 67/9", "d)242/5"],
        correct: 3
    },
    {
        q: "Hallar el volumen del solido de revolucion formado al rotar la region acotada por alrededor del eje x con el metodo de arandelas:",
        imagen: "Pregunta14Calcul.png",
        a: ["a)23", "b) 6/5" ,"c) 28/15", "d)24"],
        correct: 2
    }
];

// SEGUNDO PARCIAL (SIN NINGUNA ETIQUETA "CITE")
const bancoSegundoParcial = [
    // --- Preguntas de Teoría ---
    {
        q: "¿Cuál es la condición fundamental que debe cumplir un límite de la forma f(x)/g(x) para que se pueda aplicar directamente la regla de L'Hôpital?",
        imagen: null,
        a: [
            "Las funciones f(x) y g(x) deben ser polinomios de igual grado.",
            "El límite de la función del denominador, g(x), debe ser igual a infinito independientemente del denominador.",
            "El limite debe ser de la forma indeterminada 0*∞.",
            "Debe presentar una forma indeterminada del tipo 0/0 o ∞/∞."
        ],
        correct: 3
    },
    {
        q: "Si una integral impropia se define mediante un límite que resulta en un valor numérico real finito, se afirma teóricamente que la integral:",
        imagen: null,
        a: [
            "Es convergente.",
            "Es acotada inferiormente por cero.",
            "Es divergente.",
            "Es indefinida."
        ],
        correct: 0
    },
    {
        q: "De acuerdo con el estudio de las p-integrales de la forma ∫(de 1 a ∞) 1/x^p dx, ¿qué cambio teórico fundamental ocurre cuando el exponente pasa de p = 1 a ser p > 1?",
        imagen: null,
        a: [
            "La función se vuelve discontinua en el intervalo analizado.",
            "La función decrece lo suficientemente rápido hacia el eje x como para que el área acumulada sea finita (converja).",
            "El área bajo la curva se duplica de forma constante.",
            "La integral se transforma automáticamente en una integral de segunda especie."
        ],
        correct: 1
    },
    {
        q: "Cuando se analiza conceptualmente una indeterminación del tipo 1^∞, ¿por qué no se puede concluir inmediatamente que el resultado es 1?",
        imagen: null,
        a: [
            "Por que la regla de L’ Hopital prohíbe el uso de bases que contengan constantes unitarias.",
            "Por que el numero 1 elevado a cualquier potencia real genera un numero imaginario.",
            "Porque representa una competencia entre una base que se acerca a 1 y un exponente que crece sin limite, variando el resultado según las taxas de cambio.",
            "Porque el infinito en el exponente anula la base y la convierte en 0."
        ],
        correct: 2
    },
    {
        q: "La integral ∫(de 0 a 1) 1/x dx es impropia porque:",
        imagen: null,
        a: [
            "a) El intervalo es infinito.",
            "b) La función presenta una discontinuidad infinita en un extremo del intervalo.",
            "c) No tiene antiderivada.",
            "d) Es una integral trigonométrica."
        ],
        correct: 1
    },
    
    // --- Problemas Prácticos ---
    {
        q: "Resolver el siguiente límite:\nlim(x→∞) (2x² - 5x + 2) / (5x² - 7x - 6)",
        imagen: "Problema1.png",
        a: ["A) 5/2", "B) 2/5", "C) 0", "D) 1"],
        correct: 1 // B
    },
    {
        q: "Resolver el siguiente límite:\nlim(x→∞) (ln x) / √x",
        imagen: "Problema2.png",
        a: ["A) 1", "B) ∞", "C) 0", "D) e"],
        correct: 2 // C
    },
    {
        q: "Determinar el valor de la integral:\n∫(de -∞ a 0) e^x dx",
        imagen: "Problema3.png",
        a: ["A) 0", "B) 1", "C) e", "D) Diverge"],
        correct: 1 // B
    },
    {
        q: "Determina si converge y, en caso afirmativo, calcula:\n∫(de 0 a ∞) x·e^(-x) dx",
        imagen: "Problema4.png",
        a: ["A) 0", "B) 1", "C) 2", "D) Diverge"],
        correct: 1 // B
    },
    {
        q: "Determina si converge y, en caso afirmativo, calcula:\n∫(de -∞ a ∞) x / (x⁴ + 9) dx",
        imagen: "Problema5.png",
        a: ["A) 1", "B) π", "C) 0", "D) Diverge"],
        correct: 2 // C
    },
    {
        q: "Enlistar los primeros 4 términos y el término n-ésimo de la sucesión:\nan = ∑(k=1 a n) 2^(-k)",
        imagen: "Problema6.png",
        a: [
            "A) 1/2, 3/4, 7/8, 15/16 y an = 1 - 1/2^n", 
            "B) 1/2, 1, 3/2, 2 y an = n/2", 
            "C) 1, 1/2, 1/4, 1/8 y an = 2^-n", 
            "D) 1/2, 3/4, 5/4, 7/4 y an = (2n-1)/4"
        ],
        correct: 0 // A
    },
    {
        q: "Expresa el número como razón de enteros:\n1.24123123123...",
        imagen: "Problema7.png",
        a: ["A) 123/99", "B) 122999/99990 (u otra razón simplificada)", "C) 124/100", "D) 12311/10000"],
        correct: 1 // B
    },
    {
        q: "Aplicar el criterio del n-ésimo término de la divergencia:\n∑(n=1 a ∞) 1 / (3^n - 2)",
        imagen: "Problema8.png",
        a: [
            "A) Diverge porque el término general no tiende a cero.",
            "B) Diverge por ser una serie armónica.",
            "C) Converge.",
            "D) Converge condicionalmente."
        ],
        correct: 2 // C
    },
    {
        q: "Usar el criterio de convergencia apropiado:\n∑(n=1 a ∞) (-1)^n / 4^n",
        imagen: "Problema9.png",
        a: [
            "A) Diverge.",
            "B) Converge por ser una serie geométrica.",
            "C) Converge por ser telescópica.",
            "D) Converge por comparación con una armónica."
        ],
        correct: 1 // B
    },
    {
        q: "Determinar si converge absolutamente, condicionalmente o diverge:\n∑(n=1 a ∞) (-1)^(n+1) · n! / 2^n",
        imagen: "Problema10.png",
        a: [
            "A) Converge absolutamente.",
            "B) Converge condicionalmente.",
            "C) Diverge.",
            "D) Es geométrica."
        ],
        correct: 2 // C
    }
];

let elegidas = [];
let actual = 0;
let puntos = 0;
let bancoActual = [];

function mostrarSeleccionParcial() {
    document.body.className = "";
    
    const body = document.getElementById('quiz-body');
    body.innerHTML = `
        <p class="subtitle">Selecciona el parcial que deseas presentar:</p>
        <div class="parcial-btn-container">
            <button class="parcial-btn" onclick="seleccionarParcial(1)">Primer Parcial</button>
            <button class="parcial-btn" onclick="seleccionarParcial(2)">Segundo Parcial</button>
        </div>
    `;
}

function seleccionarParcial(numeroParcial) {
    document.body.className = "";
    
    if (numeroParcial === 1) {
        document.body.classList.add('primer-parcial-bg'); 
        bancoActual = bancoPrimerParcial;
    } else if (numeroParcial === 2) {
        document.body.classList.add('segundo-parcial-bg'); 
        bancoActual = bancoSegundoParcial;
    }
    
    iniciarJuego();
}

function iniciarJuego() {
    const body = document.getElementById('quiz-body');
    body.innerHTML = `
        <div id="img-container"></div>
        <div class="question-text" id="q-text">Cargando pregunta...</div>
        <div class="options-grid" id="options-box"></div>
        <button id="next-btn">Siguiente Pregunta</button>
        <div class="progress" id="progress-text"></div>
    `;

    document.getElementById('next-btn').onclick = () => {
        actual++;
        if (actual < 5) {
            render();
        } else {
            finalizar();
        }
    };

    // Al azar escoge 5 preguntas del banco seleccionado
    elegidas = bancoActual.sort(() => 0.5 - Math.random()).slice(0, 5);
    actual = 0;
    puntos = 0;
    render();
}

function render() {
    const p = elegidas[actual];
    const imgCont = document.getElementById('img-container');
    const optBox = document.getElementById('options-box');
    const nextBtn = document.getElementById('next-btn');

    nextBtn.style.display = 'none';
    document.getElementById('q-text').innerText = p.q;
    document.getElementById('progress-text').innerText = `Pregunta ${actual + 1} de 5`;

    if (p.imagen && p.imagen !== "") {
        imgCont.innerHTML = `<img src="${p.imagen}" alt="Imagen Pregunta">`;
    } else {
        imgCont.innerHTML = "";
    }

    optBox.innerHTML = "";
    p.a.forEach((opc, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opc;
        btn.onclick = () => validar(i, p.correct, btn);
        optBox.appendChild(btn);
    });
}

function validar(indice, correcto, boton) {
    const botones = document.querySelectorAll('.option-btn');
    botones.forEach(b => b.disabled = true); 

    if (indice === correcto) {
        boton.classList.add('correct-opt');
        puntos++;
    } else {
        boton.classList.add('wrong-opt');
        botones[correcto].classList.add('correct-opt');
    }

    document.getElementById('next-btn').style.display = 'inline-block';
}

function finalizar() {
    const body = document.getElementById('quiz-body');
    let mensaje = puntos >= 3 ? "¡Excelente trabajo! " : "Sigue practicando ";
    
    body.innerHTML = `
        <div style="padding: 20px;">
            <h2 style="font-size: 2.5rem; color: var(--primary); margin-bottom: 0;">${puntos}/5</h2>
            <p style="font-size: 1.2rem; margin-bottom: 25px;">${mensaje}</p>
            
            <div style="background: #f9f9f9; padding: 15px; border-radius: 10px; text-align: left; margin-bottom: 20px; border: 1px dashed #ccc;">
                <strong style="display: block; margin-bottom: 10px; color: #555;">Alumnos:</strong>
                <ul style="font-size: 0.85rem; color: #666; padding-left: 20px;">
                    <li><strong>Equipo 5:</strong> Carrasco Villegas Ricardo Sebastian, Hernandez William Kiran, Perez Vazquez Mauricio, Pérez Villanueva Eduardo Tadeo, Solano Hernandez Jesus, Diego Ramírez Pérez</li>  
                </ul>
            </div>

            <button onclick="mostrarSeleccionParcial()" style="background:var(--primary); color:white; border:none; padding:12px 25px; border-radius:8px; cursor:pointer; font-weight:bold;">Volver al Inicio</button>
        </div>
    `;
}

// Inicialización de la app al cargar el script
mostrarSeleccionParcial();
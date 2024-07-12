
/*
Para el menú emergente del boton de contactanos
*/
document.getElementById("contactButton").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "flex";
});

document.getElementById("closeMenu").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none";
});


/*
Para el menú emergente del examen 
*/
document.getElementById("examenButton").addEventListener("click", function() {
    document.getElementById("overlay2").style.display = "flex";
});

document.getElementById("closeExamen").addEventListener("click", function() {
    document.getElementById("overlay2").style.display = "none";
});


/*
Para mostrar y ocultar el nav lateral
*/
document.getElementById('toggleNavButton').addEventListener('click', function() {
    var nav = document.getElementById('navBar');
    var content = document.getElementById('mainContent');

    if (nav.classList.contains('hidden')) {
        nav.classList.remove('hidden');
        content.classList.remove('expanded');
    } else {
        nav.classList.add('hidden');
        content.classList.add('expanded');
    }
});


// Contenido a mostrar para cada botón
document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');
    const content = {
        btn1: {
            title: 'Primera unidad: Los números',
            text: 'Los números son fundamentales en el aprendizaje temprano y son esenciales para la vida cotidiana. Y mas para nuestros pequeños exploradores los cuales debemos fomentar de manera interactiva estas pequeñas cosas que les serviran en un futuro academico, cosas simples como contar, sumar seran significativas en su futuro.',
            video: 'src/units/numbersMedia.mp4'
        },
        btn2: {
            title: 'Segunda unidad: Los colores',
            text: ' Los colores influyen en nuestras emociones, percepciones y decisiones. Para los niños, aprender los colores es crucial para identificar objetos, expresar preferencias y comprender el entorno. Como los colores de un arcoiris!!!',
            video: 'src/units/colorsMedia.mp4'
        },
        btn3: {
            title: 'Tercera unidad: Los vehículos',
            text: 'Los medios de transporte nos conectan con el mundo. Desde caminar hasta viajar en avión, cada medio tiene su propósito y función, como el carro con el que papá va a al trabajo, o la moto en que mamá nos lleva a casa; incluso el avion en el que viajamos juntos.',
            video: 'src/units/vehiclesMedia.mp4'
        },
        btn4: {
            title: 'Cuarta unidad: Los lugares',
            text: 'A todos nos ha pasado que vamos de paseo los fines de semana con nuestros padres, EXACTO, algunas veces viajamos y vamos de un lugar a otro, la unidad que veremos a continuacion se llama los lugares de la cuidad, es importante saber como se llaman en otro idioma para nuestras proximas vacaiones.',
            video: 'src/units/placesMedia.mp4'
        },
        btn5: {
            title: 'Quinta unidad: Los trabajos',
            text: '¿Sabes en que trabaja tu papá? te gustaria saber esa y muchas otras mas profesiones en ingles, los trabajos son divertidos y aunque el ingles es un idioma nuevo para muchos, los trabajos aunque no lo creas en ingles se escriben similar en español, bueno en algunos casos .',
            video: 'src/units/jobsMedia.mp4'
        }
    };

    // Función para actualizar el contenido de divVideo
    function updateContent(id) {
        const { title, text, video } = content[id];
        const videoContainer = document.getElementById('videoContainer');
        videoContainer.innerHTML = `
            <iframe src="${video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
        contentDiv.querySelector('h1').textContent = title;
        contentDiv.querySelector('h3').textContent = text;
    }

    // Añadir eventos a los botones
    document.getElementById('btn1').addEventListener('click', function() {
        updateContent('btn1');
    });
    document.getElementById('btn2').addEventListener('click', function() {
        updateContent('btn2');
    });
    document.getElementById('btn3').addEventListener('click', function() {
        updateContent('btn3');
    });
    document.getElementById('btn4').addEventListener('click', function() {
        updateContent('btn4');
    });
    document.getElementById('btn5').addEventListener('click', function() {
        updateContent('btn5');
    });
});

/*
Para la evaluacion
*/document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('verCalificacion');
    const nextBtn = document.getElementById('siguiente');
    const resultDiv = document.getElementById('result');
    const tittleExam = document.getElementById('TituloGrande');
    const questionImageElement = document.getElementById('questionImage').getElementsByTagName('img')[0]; // Seleccionar la imagen dentro de #questionImage
    const optionsContainerElement = document.querySelector('.respuestas .choices-container');

    const questions = [
        {
            questionImage: 'src/evaluations/01Question.png',
            options: [
                { image: 'src/evaluations/One.png', value: 'option1' },
                { image: 'src/evaluations/Two.png', value: 'option2' },
                { image: 'src/evaluations/Three.png', value: 'option3' }
            ],
            correctAnswer: 'option3'
        },
        {
            questionImage: 'src/evaluations/02Question.png',
            options: [
                { image: 'src/evaluations/Three.png', value: 'option1' },
                { image: 'src/evaluations/Two.png', value: 'option2' },
                { image: 'src/evaluations/Four.png', value: 'option3' }
            ],
            correctAnswer: 'option2'
        },
        {
            questionImage: 'src/evaluations/03Question.png',
            options: [
                { image: 'src/evaluations/Six.png', value: 'option1' },
                { image: 'src/evaluations/Nine.png', value: 'option2' },
                { image: 'src/evaluations/Three.png', value: 'option3' }
            ],
            correctAnswer: 'option1'
        },
        {
            questionImage: 'src/evaluations/04Question.png',
            options: [
                { image: 'src/evaluations/Pink.png', value: 'option1' },
                { image: 'src/evaluations/Green.png', value: 'option2' },
                { image: 'src/evaluations/Cian.png', value: 'option3' }
            ],
            correctAnswer: 'option2'
        },
        {
            questionImage: 'src/evaluations/05Question.png',
            options: [
                { image: 'src/evaluations/Yellow.png', value: 'option1' },
                { image: 'src/evaluations/Green.png', value: 'option2' },
                { image: 'src/evaluations/Blue.png', value: 'option3' }
            ],
            correctAnswer: 'option3'
        },
        {
            questionImage: 'src/evaluations/06Question.png',
            options: [
                { image: 'src/evaluations/Red.png', value: 'option1' },
                { image: 'src/evaluations/Blue.png', value: 'option2' },
                { image: 'src/evaluations/Pink.png', value: 'option3' }
            ],
            correctAnswer: 'option1'
        },
        {
            questionImage: 'src/evaluations/07Question.png',
            options: [
                { image: 'src/evaluations/Barco.gif', value: 'option1' },
                { image: 'src/evaluations/Bici.gif', value: 'option2' },
                { image: 'src/evaluations/Taxi.gif', value: 'option3' }
            ],
            correctAnswer: 'option3'
        },
        {
            questionImage: 'src/evaluations/08Question.png',
            options: [
                { image: 'src/evaluations/Policeman.png', value: 'option1' },
                { image: 'src/evaluations/Fireman.png', value: 'option2' },
                { image: 'src/evaluations/Doctor.png', value: 'option3' }
            ],
            correctAnswer: 'option1'
        },
        {
            questionImage: 'src/evaluations/09Question.png',
            options: [
                { image: 'src/evaluations/Supermarket.png', value: 'option1' },
                { image: 'src/evaluations/Airport.png', value: 'option2' },
                { image: 'src/evaluations/Garaje.png', value: 'option3' }
            ],
            correctAnswer: 'option2'
        },
        
    ];

    let currentQuestionIndex = 0;

    function showQuestion(index) {
        const currentQuestion = questions[index];
        questionImageElement.src = currentQuestion.questionImage;
        optionsContainerElement.innerHTML = ''; // Limpiar opciones anteriores

        currentQuestion.options.forEach((option, idx) => {
            const choiceDiv = document.createElement('div');
            choiceDiv.classList.add('choice');

            const optionImage = document.createElement('img');
            optionImage.src = option.image;
            optionImage.alt = `Opción ${idx + 1}`;

            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = 'choice';
            optionInput.value = option.value;

            choiceDiv.appendChild(optionImage);
            choiceDiv.appendChild(optionInput);
            optionsContainerElement.appendChild(choiceDiv);
        });

        // Limpiar el resultado
        resultDiv.textContent = '';
        resultDiv.style.color = ''; // Resetear el color
    }

    function checkAnswer(selectedOption) {
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedOption === currentQuestion.correctAnswer) {
            resultDiv.textContent = '¡Correcto!';
            resultDiv.style.color = 'green';
            resultDiv.style.fontWeight = 'bold';
            return true; // Respuesta correcta
        } else {
            resultDiv.textContent = 'Incorrecto.';
            resultDiv.style.color = 'red';
            return false; // Respuesta incorrecta
        }
    }

    submitBtn.addEventListener('click', function() {
        const selectedOption = document.querySelector('input[name="choice"]:checked');
        
        if (selectedOption) {
            checkAnswer(selectedOption.value);
        } else {
            resultDiv.textContent = 'Ups.';
            resultDiv.style.color = 'orange';
            resultDiv.style.fontWeight = 'normal'; // Asegurar que no esté en negrita si no se selecciona ninguna opción
        }
    });

    nextBtn.addEventListener('click', function() {
        const selectedOption = document.querySelector('input[name="choice"]:checked');
        
        if (selectedOption) {
            if (checkAnswer(selectedOption.value)) {
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    showQuestion(currentQuestionIndex);
                } else {
                    questionImageElement.src = ''; // Limpiar imagen de pregunta
                    optionsContainerElement.innerHTML = ''; // Limpiar opciones
                    tittleExam.textContent = '¡Fin del examen!';
                    submitBtn.style.display = 'none'; // Ocultar el botón de calificar
                    nextBtn.style.display = 'none'; // Ocultar el botón de siguiente
                    questionImageElement.style.display='none';
                }
            }
        } else {
            resultDiv.textContent = 'Ups.';
            resultDiv.style.color = 'orange';
            resultDiv.style.fontWeight = 'normal'; // Asegurar que no esté en negrita si no se selecciona ninguna opción
        }
    });

    // Mostrar la primera pregunta al cargar la página
    showQuestion(currentQuestionIndex);
});
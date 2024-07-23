
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
            title: 'Frist Unit, The Numbers',
            text: '',
            video: 'src/units/numbersMedia.mp4'
        },
        btn2: {
            title: 'Second Unit, The Colors',
            text: '',
            video: 'src/units/colorsMedia.mp4'
        },
        btn3: {
            title: 'Third Unit, The Vehicles',
            text: '',
            video: 'src/units/vehiclesMedia.mp4'
        },
        btn4: {
            title: 'Fourt Unit, The Places',
            text: '',
            video: 'src/units/placesMedia.mp4'
        },
        btn5: {
            title: 'Fifth unit, The Jobs',
            text: '',
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
            resultDiv.textContent = 'Correct!';
            resultDiv.style.color = 'green';
            resultDiv.style.fontWeight = 'bold';
            return true; // Respuesta correcta
        } else {
            resultDiv.textContent = 'Incorrect, Try Again!';
            resultDiv.style.color = 'red';
            return false; // Respuesta incorrecta
        }
    }

    submitBtn.addEventListener('click', function() {
        const selectedOption = document.querySelector('input[name="choice"]:checked');
        
        if (selectedOption) {
            checkAnswer(selectedOption.value);
        } else {
            resultDiv.textContent = 'Select an option!.';
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
                }
            }
        } else {
            resultDiv.textContent = 'Select an option!';
            resultDiv.style.color = 'orange';
            resultDiv.style.fontWeight = 'normal'; // Asegurar que no esté en negrita si no se selecciona ninguna opción
        }
    });

    // Mostrar la primera pregunta al cargar la página
    showQuestion(currentQuestionIndex);
});
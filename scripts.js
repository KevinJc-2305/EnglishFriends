
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
            video: 'https://www.youtube.com/embed/b02Ojls1O14'
        },
        btn2: {
            title: 'Segunda unidad: Los colores',
            text: ' Los colores influyen en nuestras emociones, percepciones y decisiones. Para los niños, aprender los colores es crucial para identificar objetos, expresar preferencias y comprender el entorno. Como los colores de un arcoiris!!!',
            video: 'https://www.youtube.com/embed/ybt2jhCQ3lA'
        },
        btn3: {
            title: 'Tercera unidad: Los vehículos',
            text: 'Los medios de transporte nos conectan con el mundo. Desde caminar hasta viajar en avión, cada medio tiene su propósito y función, como el carro con el que papá va a al trabajo, o la moto en que mamá nos lleva a casa; incluso el avion en el que viajamos juntos.',
            video: 'https://www.youtube.com/embed/0ynatfJauMk'
        },
        btn4: {
            title: 'Cuarta unidad: Los lugares',
            text: 'A todos nos ha pasado que vamos de paseo los fines de semana con nuestros padres, EXACTO, algunas veces viajamos y vamos de un lugar a otro, la unidad que veremos a continuacion se llama los lugares de la cuidad, es importante saber como se llaman en otro idioma para nuestras proximas vacaiones.',
            video: 'https://www.youtube.com/embed/EsWIJj04oQw'
        },
        btn5: {
            title: 'Quinta unidad: Los trabajos',
            text: '¿Sabes en que trabaja tu papá? te gustaria saber esa y muchas otras mas profesiones en ingles, los trabajos son divertidos y aunque el ingles es un idioma nuevo para muchos, los trabajos aunque no lo creas en ingles se escriben similar en español, bueno en algunos casos .',
            video: 'https://www.youtube.com/embed/ugsRzHMIF2o'
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
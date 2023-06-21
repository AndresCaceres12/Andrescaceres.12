import React from 'react'
import  Noticiass  from '../components/Noticias';


const Ejercicio15 = () => {
    const news = [
        {
        id: 1,
        title: 'Los Nuggets, más sólidos que nunca, sacaron los colores al Heat',
        date: '2023-06-07',
        category: 'Sports',
        content: 'Los Nuggets de Denver se impusieron por 113-96 al Heat de Miami en el segundo partido de las finales de la NBA y tomaron ventaja de 2-0 en la serie al mejor de siete. Nikola Jokic fue el líder del equipo con 32 puntos, 15 rebotes y 8 asistencias.'
        },
        {
        id: 2,
        title: 'Se confirmó el cuadro de semifinales del Mundial Sub 20: días y horarios de los cruces',
        date: '2023-06-07',
        category: 'Sports',
        content: 'Uruguay se impuso por 2-0 ante Estados Unidos y Corea del Sur superó 1-0 a Nigeria. Los charrúas se enfrentarán a Francia y los asiáticos a Ucrania por un lugar en la final.'
        },
        {
        id: 3,
        title: 'Carlos Alcaraz avanza en Roland Garros',
        date: '2023-06-07',
        category: 'Sports',
        content: 'El joven español de 17 años se convirtió en el jugador más joven en alcanzar los cuartos de final de un Grand Slam desde Michael Chang en 1990. Venció al alemán Jan-Lennard Struff por 6-4, 6-4, 6-2 y se medirá con su compatriota Rafael Nadal.'
        },
        {
        id: 4,
        title: 'Confirmado: Messi se va del PSG',
        date: '2023-06-07',
        category: 'Sports',
        content: 'El astro argentino anunció su salida del club francés tras una temporada en la que no pudo cumplir sus objetivos. Agradeció a los hinchas, a sus compañeros y al entrenador Mauricio Pochettino y dijo que buscará un nuevo desafío en su carrera.'
        },
        {
        id: 5,
        title: 'Thiago Seyboth Wild, sensación en Roland Garros',
        date: '2023-06-07',
        category: 'Sports',
        content: 'El brasileño de 19 años sorprendió al mundo del tenis al eliminar al número uno del mundo, Novak Djokovic, en cuatro sets. Es el primer jugador nacido en el siglo XXI en llegar a las semifinales de un torneo mayor.'
        },
        // ... otras noticias
        {
        id: 6,
        title: 'Petro anuncia que Colombia se reintegra a Unasur',
        date: '2023-06-07',
        category: 'Politics',
        content: 'El presidente de Colombia, Gustavo Petro, anunció este martes en su cuenta de Twitter que el país se va a reintegrar a la Unión de Naciones Suramericanas (Unasur). Dijo que esta decisión busca fortalecer la integración regional y la cooperación frente a los desafíos comunes.'
        },
        {
        id: 7,
        title: 'Jueza niega solicitud de preclusión en proceso penal contra Álvaro Uribe',
        date: '2023-06-07',
        category: 'Politics',
        content: 'La jueza Carmen Helena Ortiz negó este viernes la solicitud de preclusión presentada por la Fiscalía General de la Nación en el proceso penal contra el expresidente Álvaro Uribe por presunta manipulación de testigos. La magistrada consideró que hay elementos suficientes para continuar con la investigación.'
        },
        {
        id: 8,
        title: 'Gustavo Petro está en un laberinto y trazó una línea divisoria : Humberto de la Calle',
        date: '2023-06-07',
        category: 'Politics',
        content: 'El exjefe negociador del gobierno en el proceso de paz con las FARC, Humberto de la Calle, criticó este jueves al presidente Gustavo Petro por su manejo del escándalo de las interceptaciones ilegales que involucran a su jefa de Gabinete, Laura Sarabia. De la Calle dijo que Petro está en un laberinto y que trazó una línea divisoria entre los que lo apoyan y los que lo cuestionan.'
        },
        {
        id: 9,
        title: 'Petro pide ayuda para eliminar al ELN de la lista de terroristas de la UE',
        date: '2023-06-07',
        category: 'Politics',
        content: 'El presidente de Colombia, Gustavo Petro, pidió este miércoles ayuda al gobierno de España para que el Ejército de Liberación Nacional (ELN) sea eliminado de la lista de organizaciones terroristas de la Unión Europea. Petro argumentó que esta medida facilitaría el diálogo y el cese del fuego con el grupo guerrillero.'
        },
        {
        id: 10,
        title: 'Lo mejor para Colombia y para Uribe es un juicio, dice abogado',
        date: '2023-06-07',
        category: 'Politics',
        content: 'El abogado Jaime Granados, defensor del expresidente Álvaro Uribe, dijo este martes que lo mejor para Colombia y para su cliente es que se realice un juicio en el caso por presunta manipulación de testigos. Granados expresó su confianza en que Uribe demostrará su inocencia y que la Fiscalía no tiene pruebas en su contra.'
        },
        {
        id: 11,
        title: 'Tesla presenta sus prototipos robóticos en sus redes sociales',
        date: '2023-06-07',
        category: 'Technology',
        content: 'La compañía de Elon Musk sorprendió al mundo al publicar en sus redes sociales imágenes y videos de sus prototipos robóticos, que según el empresario podrían realizar tareas peligrosas, repetitivas o aburridas para los humanos. Los robots tendrían una altura de 1,80 metros, un peso de 57 kilos y una velocidad máxima de 8 km/h.'
        },
        {
        id: 12,
        title: 'Doctor ChatGPT: cara y cruz de la inteligencia artificial en la consulta',
        date: '2023-06-07',
        category: 'Technology',
        content: 'Un estudio muestra que el chatbot basado en inteligencia artificial mejora a los médicos con consejos más empáticos y de calidad ante preguntas de pacientes, pero los expertos reclaman que siempre haya supervisión final del facultativo. El sistema ChatGPT utiliza un modelo generativo capaz de crear textos coherentes a partir de datos previos.'
        },
        ];

  return (
    <div>
     <Noticiass news={news} />
    </div>
  );
};

export default Ejercicio15;

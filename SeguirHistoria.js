const seguirHistoria = document.createElement('seguirHistoria');
seguirHistoria.innerHTML =  `
            <head>
            <title>Primer dia del cuerpo</title>
            </head>
            <audio controls>
                <source src="fotos/suspenso.mp3" type="audio/mpeg">
            </audio>
            <body>
                <article>
                    <h2>Primer Encuetro</h2>
                    <p>
                        En un pequeño pueblo de argentina, en el año 2021 fue encontrada una joven llamda Emily 
                        la cual fue asesina brutalmente, pues fue torutrada de una forma muy atros. 
                        El detective a cargo de la investigacion llamado  Stefan, le resulto demasido abrumante su 
                        muerte por lo que prometio a familiares  
                    </p>
                </article>
                <img src="fotos/muerte.jpg" alt="Niña" width="350" height="300">
                    
                <article>
                    <h2>Busqueda</h2>
                    <p>
                        Luego de recoger el cuerpo, llevarlo a analisis. Descubieron que la principal causa de su muerte
                        fue la perdida total de su sangre, ademas encontraron en sus pertencias un celular en el cual habia 
                        un mensaje de texto que la joven no habia alcanzado a mandar, el cual decia "Salven al resto". De igual 
                        forma que ella habia quedado con sus amigas en reunirse en ese parque para hacer un picnic, por lo que 
                        el detective quiso llamar a Natalia y Fatima (amigas de Emily) para ver si encontraba alguna pista. 

                    </p>

                    <img src="fotos/analisis.jpg" alt="labs" width="450" height="350">


                <ul>
                    <li>
                        <a href="llamarAmigas.html">Llamar a sus  amigas</a>
                    </li>
                
                </ul>


            </body>
`
document.body.appendChild(seguirHistoria);

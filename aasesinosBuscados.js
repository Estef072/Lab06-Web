const aasesinosBuscados = document.createElement('asesinosBuscados');
asesinosBuscados.innerHTML =  `
        <head>
             <title>Asesinos</title>
        </head>
        <body>
            <article>
                <h2>Filip</h2>
                <p>
                    Al obtener la lista de los mas buscados, el detective inicio a buscar los datos mas relevantes de cada 
                    asesinato que los psicopatas han realizado. Encontrando que uno llamado Filip, habia asesinado a 7 mujeres 
                    mas pero todas con el mismo patron, eran rubias. 
                    Estefan decidio buscar en la base de datos todo lo que le permita iniciar su busqueda. Decidio iniciar por 
                    la ultima casa en la que el sujeto estuvo. 

                </p>
            </article>
            <img src="fotos/buscados.jpg" alt="buscados" width="450" height="350">
        <ul>
            <li>
                <a href="irCasa.html">Ir a realizar un cateo en su ultima casa</a>
            </li>

        </ul>
        </body>
        `

document.body.appendChild(asesinosBuscados);
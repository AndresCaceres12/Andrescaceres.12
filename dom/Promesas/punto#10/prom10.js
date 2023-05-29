function getUserInfo(idusuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const datosid = {
        cesar: {
          nombre:
            "cesar " + " Correo electronico: cesarandrescaceres1212@gmail.com ",
          ciudad: "cucuta",
        },
        cristhiam: {
          nombre: "cristhiam " + " Correo electronico: cristhiam@gmail.com ",
          ciudad: "cucuta",
        },
        saidy: {
          nombre: "saidy " + " Correo electronico: saidy@gmail.com ",
          ciudad: "cucuta",
        },
        mario: {
          nombre: "mario " + " Correo electronico: mario@gmail.com ",
          ciudad: "cucuta",
        },
      };
      if (idusuario in datosid) {
        resolve(
          datosid[idusuario].nombre + " vive en " + datosid[idusuario].ciudad
        );
      } else {
        reject("no lo encontramos");
      }
    }, 500);
  });
}

function getUserTweets(idusuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const twitts = {
        cesar: {
          tweets: [
            "¡Hola @EjemploUser! Solo quería decirte que eres una persona increíblemente creativa y talentosa. Sigue brillando y compartiendo tus dones con el mundo. ¡Ánimo!",
            "Hey @AmigoAventurero, tus fotos de tus últimas aventuras son absolutamente asombrosas. Me transportan a lugares lejanos y despiertan mi espíritu viajero. ¡Gracias por compartir tu pasión!",
            "¡Oye @FanaticoDeportivo! Eres una fuente constante de conocimiento deportivo. Tus análisis son siempre interesantes y tus comentarios en vivo hacen que los partidos sean aún más emocionantes. ¡Sigue siendo ese fanático apasionado!",
            "Hola @AmanteDeLosLibros, quiero agradecerte por recomendar siempre las mejores lecturas. Tus reseñas son detalladas y apasionadas, y me han llevado a descubrir joyas literarias que de otra manera habría pasado por alto. ¡Gracias por compartir tu amor por los libros!",
            "¡Buenos días @InspiracionDiaria! Tus mensajes diarios son un bálsamo para el alma. Siempre logras poner una sonrisa en mi rostro y brindar esa dosis extra de motivación que necesito. Gracias por ser una fuente de inspiración constante en mi timeline!",
          ],
        },
        cristhiam: {
          tweets: [
            "¡Hola @Cisthiam! Quiero felicitarte por tus logros y tu dedicación. Eres un ejemplo de perseverancia y determinación. ¡Sigue trabajando duro y alcanzando tus metas!",
            "Hey @Cisthiam, tus ideas siempre son innovadoras y revolucionarias. No dejes que nadie te detenga. ¡Sigue persiguiendo tus sueños y cambiando el mundo!",
            "¡Oye @Cisthiam! Tu creatividad y pasión por la tecnología son inspiradoras. Continúa construyendo cosas increíbles y dejando tu huella en el mundo digital.",
            "Hola @Cisthiam, quería agradecerte por tu apoyo constante. Tus palabras de aliento siempre llegan en el momento adecuado. ¡Eres un verdadero amigo!",
            "¡Buenos días @Cisthiam! Espero que hoy sea un día lleno de éxitos y bendiciones. No olvides que tienes todo el potencial para lograr grandes cosas. ¡Adelante!",
          ],
        },
        saidy: {
          tweets: [
            "¡Hola @Saidy! Quería recordarte lo increíblemente talentosa y creativa que eres. Sigue persiguiendo tus sueños y creando arte que inspire a otros. ¡Eres una verdadera artista!",
            "Hey @Saidy, tu voz es única y poderosa. Cada vez que cantas, emocionas a todos los que te escuchan. Sigue compartiendo tu talento y llevando tu música a lo más alto.",
            "¡Oye @Saidy! Tus pinturas son verdaderas obras maestras. Cada pincelada muestra tu pasión y dedicación. ¡Sigue creando arte que transforme el mundo!",
            "Hola @Saidy, quiero agradecerte por tu amistad incondicional. Siempre estás ahí para apoyarme y alegrarme el día. ¡Eres una persona increíble!",
            "¡Buenos días @Saidy! Espero que hoy esté lleno de inspiración y nuevas oportunidades para expresar tu creatividad. ¡Que tengas un día maravilloso!",
          ],
        },
        mario: {
          tweets: [
            "¡Hola @Mario! Quería recordarte lo valioso que eres como persona. Tu amabilidad y generosidad hacen la diferencia en la vida de los demás. ¡Gracias por ser una persona excepcional!",
            "Hey @Mario, tu dedicación y esfuerzo son ejemplares. Siempre te destacas en todo lo que haces. ¡Sigue adelante y alcanza nuevas alturas!",
            "¡Oye @Mario! Quiero agradecerte por tu sentido del humor contagioso. Siempre logras sacar una sonrisa a quienes te rodean. ¡Eres un verdadero bromista!",
            "Hola @Mario, gracias por ser un amigo leal y confiable. Siempre puedo contar contigo en los buenos y malos momentos. ¡Eres un tesoro!",
            "¡Buenos días @Mario! Espero que hoy sea un día lleno de alegría y éxitos. Recuerda que tienes todo el potencial para lograr tus metas. ¡No te detengas!",
          ],
        },
      };

      if (idusuario in twitts) {
        resolve("twees" + twitts[idusuario].tweets);
      } else {
        reject("no existe");
      }
    }, 2000);
  });
}

function getUserAge(userBirthdates) {
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            const edades = {
                cesar: { edad :"Cesar tiene 17 años nacio el 12/12/2005" },
                cristhiam: { edad :"cristhiam tiene 26 años nacio el 06/01/1996" },
                saidy: { edad :"saidy tiene 31 años nacio el 22/07/1991" },
                mario: { edad :"mario tiene 13 años nacio el 10/01/2010" }
            }
            if(userBirthdates in edades){
                resolve(edades[userBirthdates].edad)
            }
            else{
                reject("este ususario no tiene registrada su edad ")
            }
            
        }, 1500);
    })
}


// Ejemplo de uso:






  var boton = document.getElementById("boton");
  boton.addEventListener("click",function(){

    var input = document.getElementById("entrada").value;
    if(input !== "" ){
        alert ("Genial revisa tu consola")
        getUserInfo(input)
  .then((getdata) => {
    console.log(getdata);
  })
  .catch((error) => {
    console.log(error);
  });
  getUserAge(input)
  .then((userAges) => {
    console.log(userAges)
  })
  .catch((error) => {
    console.error("Ocurrió un error:", error);
  });
  getUserTweets(input)
  .then((getdata) => {
    console.log(getdata);
  })
  .catch((error) => {
    console.log(error);
  });}
  else{
    alert("llena los espacios ")
  }
  })
  

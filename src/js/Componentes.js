    import '../css/components.css';
    import '../assets/img/cat.jpg';
    import '../assets/img/paisaje1.jpg';
    import '../assets/img/tree.jpg';
    import '../assets/img/castle.jpg';
    
    const content = document.querySelector('#content');
    const arrFotos = [
      {
        file:'/cat.jpg',
        number: 1,
        text:'Bellos :3'
      },
      {
        file:'/buho.jpg',
        number: 2,
        text:'UwU x2'
      },
      {
        file:'/castle.jpg',
        number: 3,
        text:'marcello!'
      },
      {
        file:'/tree.jpg',
        number: 4,
        text:'taba feo xd'
      },
      {
        file:'/paisaje1.jpg',
        number: 5,
        text:'chale'
      },
    ];
const htmlInicio = () =>{
    const html = `
    <div >
    <div id="imgbg1" class="imgbg">
      <div class="area">
        <section>
          <h2 id="titulo1">Inicio</h2>
          <p class="img-p">
            Bienvenida a la pagina que te hice UwU, este es un regalo por el día de tu
          cumpleaños, el cual está partido en secciones, que no son mas que pequeños
          recuerdos desde que nos conocimos, son muchísimos, claro, pero aquí están
          los que mas me gustaron, en esta parte de inicio solo te voy a hablar de
          lo que tiene la página y lo que aprendí con ella xdd.
          </p>
        </section>
      </div>
      <div id="" class="box">
        <p class="box-p">
          Primero que todo, esta página la empecé a hacer un mes antes de tu
        cumpleaños, asies, el 17/8/2020, no es mucho tiempo ya se, pero para ser
        tan simple tiene lo suyo (o eso creo), primero tuve que pensar ¿Qué va a
        tener? ¿Cómo va a ser? ¿De verdad le gustará? (aun en el momento que estoy
        subiendo esto, lo dudo), así que me decanté por una especie de un formato
        “Blog” me parecía lo mejor para contarte todo lo que estaba en mi mente,
        también quería hacer algo mas complejo but no tengo tanto conocimiento
        aún.
        </p>
      </div>
    </div>
    <div id="imgbg2" class="imgbg">
    <div class="area">
      <section>
        <h2 id="titulo2">UwU</h2>
        <p class="img-p">
        Seguramente ya habrás notado lo de las imágenes de fondo, son estáticas y
        dan un efecto bonito, decidí hacer esto para poner imágenes relacionadas a
        lo que te contaba en ese momento, fue raro para hacer porque era todo con
        maquetado :s y no entendía cómo hacerlo, pero nada que internet no haga,
        lo mismo me paso con algo que también te habrás dado cuenta y es la barra
        de arriba, ¡MRC SE PEGA :D! y además, tiene un indicador de lo que llevas
        de página, de 0 a 100%, no era necesario pero quería ponerle algo
        dinámico.
        </p>
      </section>
        <div id="" class="box">
        <p class="box-p">
        Al momento de escribir esto no tengo ni idea de a donde te lo voy a
        enviar, así que decidí hacer que la pagina sea responsiva (hasta cierto
        punto) así no me iba a preocupar si abrías esto en pc o el teléfono, tuve
        muchas consideraciones a la hora de hacer la página, hice algo sencillo
        pero igual era un reto para mi hacer una pagina que contenga todo, así que
        lo que hice fue que cada vez que presionas un botón, este cambiara según
        lo que sea UwU, y ya sin mucho mas que decir, espero que te guste mucho el
        regalo, feliz cumpleaños amore mio, me encantaría estar contigo but esto
        fue lo que hice ❤.
        </p>
        </div>
    </div>
    </div>
    `;

    const div = document.createElement('div');
          div.innerHTML = html;

    content.append(div.firstElementChild)
}

const htmlSad = () =>{

    const html = `
    <div >
    <div id="imgbg3" class="imgbg">
    <div class="area">
      <section>
        <h2 id="titulo2">Primera Lloración</h2>
        <p class="img-p">
          Ok, definitivamente este día fue muy EPIC XD pero lo contare desde donde
        me acuerdo, estábamos ya saliendo de la uni, creo que un jueves ya que el
        dia siguiente fuimos a los dos caminos, pero eso es otro cuento, fue
        nuestra última clase de matemática con machete, ese dia creo que fue que
        te robe el teléfono XD but X, le pediste el numero por si necesitabas
        alguna ayuda (si la necesitaste pero pandemia F) luego salimos y hablamos
        un rato, este Gabriel y Laura se fueron temprano, y nos quedamos
        sentaditos con lui’ en el arbolito, hablamos paja, nos diste M&M UwU taban
        buenos, lui’ y yo nos pusimos a hablar de pc por un rato y tu como que ._.XD
        </p>
      </section>
        <div id="" class="box">
        <p class="box-p">
        Ese día fue muy muy especial, a parte que nos tomamos fotitos :3 que
        después de eso Lui’ se fue, empezamos a hablar mas en cercanía, de como
        nos conocimos y tal, que todo había pasado muy rápido, como en las mañanas
        hablábamos mientras esperábamos a que iniciaran las clases, y que te
        sentabas con un grupo que ni te quería xd, pero a raíz de eso te dije lo
        que verdaderamente pensaba, que tenias una sonrisa forzada, no te sentías
        bien en ese grupo, a parte que siempre reaccionabas de esa manera ante
        casi todo (fue así menos el día del grito XD), ese día verdaderamente
        conecte contigo :3
        </p>
        </div>
    </div>
    <div id="imgbg4" class="imgbg">
      <div class="area">
        <section>
          <h2 id="titulo1">A Llorar :(</h2>
          <p class="img-p">
          Luego de eso empezó tu lloración x’d aun la recuerdo bastante clara, de
          verdad no quería hacerte llorar pero tenias los sentimientos tan
          reprimidos por todo que medio explotaste, y yo como que “AY NOOOO PUEDE
          SEEEEER” y tu como que “csm :CC” tabas roja y todo, no se me ocurrió otra
          cosa que abrazarte, te veías muy muy cuchi, a la vez que pura :3
          definitivamente ese día te liberaste bastante emocionalmente.
          </p>
        </section>
      </div>
      <div id="" class="box">
        <p class="box-p">
        Ya después de esos eventos sad, fuimos al baño, te ibas a limpiar la cara
        recuerdo, pero de verdad tenia muchas ganas de abrazarte, te veias tan sad
        y cuchi que yo estaba como “ay :CCCC” y justo que tamos abrazados, pasa la
        vieja ridícula esa 7.7 “aquí no se pueden dar abrazos” maldita vale XDDD
        pero weno, después que se hicieron como las 3 mas o menos, cada quien a su
        casa uwu.
        </p>
      </div>
    </div>
    </div>
    `;

    const div = document.createElement('div');
          div.innerHTML = html;

    content.append(div.firstElementChild)
}

const htmlWallet = () =>{
    const html = `
    <div >
    <div id="imgbg5" class="imgbg">
    <div class="area">
      <section>
        <h2 id="">Black Friday</h2>
        <p class="img-p">
        El Black Friday UFFFF ESE DIA XDDD, primero que todo, nótese que el icono
        es una billetera xd no se me ocurría que poner ahí, pero bueh, voy a
        dividir esto en dos partes XD ida y vuelta, primero, fui a la
        Humboldt ya que el día anterior (de la lloracion de uwu) habíamos acordado
        que yo te iba a acompañar, para mi no era nada, era un favor :3, recuerdo
        que le dije a mi papa a ver si esperaba un rato a ver si no llevaba de una
        a los dos caminos pero me dijo que estaba muy ocupado así que bueh.
        </p>
      </section>
        <div id="" class="box">
        <p class="box-p">
           Cuando entro a la uni, te veo hablando con este Albert (mr.dolar en el
          estado, el terror de sabaneta) porque tenia peos con la loca de lenguaje
          (ni me acuerdo como se llamaba su materia xd) bueh, nos quedamos un
          ratico, y empezamos nuestra travesía, fuimos al metro mientras hablábamos,
          de que si después de lo que había pasado el día anterior yo no iba ese
          día, me dejabas de hablar directamente :S claro que no lo iba a hacer but
          me dio un poquito de pesar el pensar que podía pasar por peos :S pero
          weno, esto lo recordare mas adelante en la historia :3.
        </p>
        </div>
    </div>
    <div id="imgbg6" class="imgbg">
      <div class="area">
        <section>
          <p class="img-p">
          Ya cuando llegamos al metro, recuerdo que no había tanta gente, pero si
          había alguito, cuando llegamos a los dos caminos, nos encontramos con
          Filipo XD taba como perdido, de camino a la universidad hablamos de porque
          no cambiabas de carrera, y saliste con lo mismo que me sales hoy en dia xd
          “ay es que no se nada de eso” pero bueh, llegamos dijimos que veníamos por
          la charla esa y nos dejaron pasar,
          </p>
        </section>
      </div>
      <div id="" class="box">
        <p class="box-p">
        Luego de eso, nos estábamos preguntando por Lui’ que según venia, pero
        aja, no fue xddd, recibimos la charla después de mil vueltas que dimos en
        la verga esa, la recibimos con el otro Luis, y los otros locos que ya no
        me acuerdo el nombre XD, normalin, unos hasta pusieron su teléfono a
        cargar en las pc. Al terminar, el loco ese feo se te acerco a ver si
        tenías dudas ¬¬¬¬🙄 en retrospectiva me dan muchos celos xd pero bueno,
        salimos de eso. Creo que compramos las plantillas de inscripción y lui
        seguía en el Sambil asi que ya era momento de regresarnos UwU,
        </p>
      </div>
      <div id="imgbg7" class="imgbg">
      <div class="area">
        <section>
          <h2 id="titulo1">El Regreso XD</h2>
          <p class="img-p">
          Cuando teníamos que devolvernos, teníamos que usar camionetica, el metro
          estaba hecho un culo ya, terrible, yo no tenia casi efectivo y tu me
          completaste, llegamos a chacao, bajamos y fuimos al Sambil, le empecé a
          escribir a lui y mientras, íbamos por las tiendas a ver ropa, yo me fijaba
          en tus gustos darks uwu se te veía en los ojos que muchas cosas te
          gustaban y otra no xddd, hasta entramos a timberland que vi la ropa que me
          gusta, estaba linda la tienda ☹ pero no hay money xd.
          </p>
        </section>
      </div>
      <div id="" class="box">
        <p class="box-p">
        Ya después yo estaba como que “AJA LUI DONDE ESTAS AHHH” me dijo que en
        feria, y fuimos a nivel feria….. me dijo que la otra feria XDDDDD weno,
        fuimos, llegamos y hasta le mandamos fotos, no estaba xd, así que seguimos
        dando vueltas por ahí mientras nos comunicábamos, hasta que entraste en
        una tienda y me dijiste “espérame afuera” yo como que “oki”, en eso me
        llega un mensaje de lui diciendo que estaba en la heladería de McDonald’s,
        yo le estaba escribiendo y en eso se me apareció por la espalda muy
        mórbido JSAJSJASJASJ, luego fuimos a ver las tiendas que recorrió Luis,
        que habían super descuentos, y cuando pasamos por la vaina de dulces paso
        lo de “¿Quieres unos kisses? 7w7” XD fue muy epic tu cara.
        </p>
      </div>
      <div id="imgbg8" class="imgbg">
      <div class="area">
        <section>
          <p class="img-p">
          Ya Luis se tenia que ir, y lo vino a buscar su papa, nosotros nos quedamos
          un rato mas viendo mas cositas, pero ya había que irnos, fuimos a ver el
          metro y estaba full pa la verga, igual las camionetas, y así empezó la
          caminata XD, compre un refresco, y empezamos uwu, ya yendo por chacaito,
          me decías que tenias sed y te ofrecí refresco, me dijiste que no, que
          estabas bien y que no querías molestar, yo que que buehh, en ese
          transcurso hablamos de que yo no me tenia que preocupar por ti, que podía
          llamar a mi mami y ya, me iba, te dije que si estaba contigo era por
          decisión mía, y asi fue, no te quería dejar, si decidí acompañarte, era
          hasta dejarte en tu casa, también que me contaste lo de diferentes
          situaciones en la que habías estado, con kike compañeras de clase, que
          casi siempre te dejaban por fuera o te dejaban sola, por lo que tenias que
          llamar a tu mami.
          </p>
        </section>
      </div>
      <div id="" class="box">
      <p class="box-p">
      En ese momento recordé lo del inicio del día, toda tenía sentido a partir
      de ahí, ya te había pasado este tipo de cosas donde te dejaban y para mi
      no fue como que tenía que estar ahí por querer ser diferente, siempre fui
      así, pero no me gusto nada eso que me dijiste que te dejaban a tu suerte,
      ese tipo de cosas no se pueden hacer :/. También hablamos de parejas
      sjajsjasjajs y de que también te gustaría que te tomaran la mano, epic,
      justo cuando llegamos al city market ya no aguantabas la sed y ahí se fue
      el glamour uwu tomaste de pico y frente a las cámaras JSAJSJAJSAJSAJS fue
      muy brutal. Ya cuando llegamos a plaza Venezuela, estaba peor que en dos
      caminos o chacao, un caos total, ya estabas desesperada y me decías que si
      quería te dejaba ir a pie, por supuesto que no te iba a dejar, se me
      ocurrió llamar a mi mami, pero no tenía casi batería, fue niche llamar
      como 7 veces, pero al final respondieron, y weno, nos buscaron xd.
      </p>
      <p class="box-p">
      Fue desesperante horriblemente porque era eso o te acompañaba a pie a tu
      casa, pero bueh, llegaron, aun recuerdo la frase de mi mama “al lado de un
      taxi” cuando habían como 25 taxis xdd pero bueh, nos montamos y tu mami ya
      estaba preocupada, bajò y todo a buscarte y tu super apenada que querías
      que te dejaran en la universidad xdd yo no sabia como iba a reaccionar tu
      mami, pero bueno, tu y tu mami estuvieron bien, llegaron vivas las dos y
      eso me alegro mucho :3.
      </p>
      </div>
    </div>
    </div>
    `;

    const div = document.createElement('div');
          div.innerHTML = html;

    content.append(div.firstElementChild)
}

const htmlHeart = () =>{

    const html = `
    <div>
    <div id="carousel">
      <a class="prev">&#10094;</a>
      <div id="carousel-container">
        <p class="number-text"><span id="indice">1</span> / 5</p>
        <img id="img" src="./assets/img/cat.jpg" />
        <p class="text">Bellos :3</p>
      </div>
      <a class="next">&#10095;</a>
    </div>

    <div id="imgbg9" class="imgbg">
      <div class="area">
        <section>
          <h2 id="titulo2">14 F</h2>
          <p class="img-p">
          Creo que ya entiendes por donde va el asunto en esta parte de la página,
          no pondré mucho xd le dejare la importancia a las imágenes, aun así si me
          gustaría decir ciertas cosas de ese día, aclarando que yo se que antes de
          esto hubieron mas cosas que fueron muy brutales como cuando fui por
          primera vez a tu casa, but quería remarcar este día por ser tu primer 14
          de febrero con alguien :’3
          </p>
        </section>
          <div id="" class="box">
          <p class="box-p">
          Siendo objetivo, ese día fue una locura XDDD llegamos he hicimos las
          hamburguesas que estaban buenas xdd pero luego de hacerlas, acá entre nos
          sabemos que paso después JASJASJAJSAJ igual teníamos mucho queso
          acumulado, eso es bueno :3 ese día no solo me sentí aceptado físicamente
          si no también emocional, fue muy lindo compartir ese dia contigo y
          sentirte verdaderamente conectada conmigo de todas las formas posibles
          uwu, ese día de verdad sentí que estábamos hechos el uno para el otro,
          fuera joda :3.
          </p>
          </div>
      </div>
  </div>
    `;

    const div = document.createElement('div');
          div.innerHTML = html;

    content.append(div.firstElementChild)
    carouselHtml();
}

const carouselHtml = (argument)=>{

  const indice      = document.querySelector('#indice');
  const img         = document.querySelector('#img');
  const text        = document.querySelector('.text');
  const carousel    = document.querySelector('#carousel');
 
  let counter       = 0;
  if(!!argument){
    counter = argument;
  }

  carousel.addEventListener('click',(event)=>{
    const classContain = event.target.classList
    if(classContain.contains('prev')){
      changeImg('prev')
    } else if(classContain.contains('next')){
      changeImg('next')
    }
    
  })
  
  const changeImg = (parameter)=>{
    
    img.classList.add('opacity0');
    img.classList.remove('opacity1');

    if(parameter==='next'){
      counter++;
    }else if(parameter==='prev'){
      counter--;
    }

    if(counter <= -1){
      counter = arrFotos.length-1;
    }else if( counter >= arrFotos.length ){
      counter = 0;
    }
  
   img.addEventListener('transitionend',(event)=>{
      indice.textContent = arrFotos[counter].number;
      img.src = 'assets/img' + arrFotos[counter].file;
      text.textContent = arrFotos[counter].text;
      img.classList.add('opacity1');
      img.classList.remove('opacity0');  
    })
    }
}

const htmlPlus = () =>{
    const html = `
    <div >
    <div id="imgbg10" class="imgbg">
      <div class="area">
        <section>
          <h2 id="titulo1">Mas cositas</h2>
          <p class="img-p">
          Aquí en esta pagina solo puse fotitos de momentos lindos, ya sean por
          WhatsApp o en persona, cada uno de ellos fueron especiales, evidentemente
          fueron más, pero tenía que escoger pocas por el espacio que me dan para la
          página xdd, si no subo las 2000 imágenes de wasa describiendo cada una.
          </p>
        </section>
      </div>
      <div id="" class="box">
        <p class="box-p">
        Uf la primera vez que fui a tu casa fue super lindo, aun así eso no me
        quitaba la pena del momento, aun la conservo cada vez que voy porque no es
        mi casa y no me gusta hacer como si fuese mi casa xdd, le llamo respeto
        pero ese día en concreto tenia MUCHA pena XDDDDD tu mami nos dio muchos
        dulces, nos tomamos las primeras fotitos así juntitos, que ya se que
        quieres repetirlas uwu, pero bueno, esperemos a diciembre again :3
        </p>
      </div>
    </div>
    <div id="imgbg11" class="imgbg">
    <div class="area">
      <section>
        <p class="img-p">
        Mrc solo diré que el primer beso fue super XD SJAJSAJSAJSJAAJSJ no le quita lo
        lindo y cuchi, pero tu cara fue como “OMGG :OOOOOOOOOO” y roja XDD luego
        ya me decías “Edgardo para, no se besar” JSAJSJAJSAJ brutal xdxdxd ese fue
        el primer día que te lleve a mi casa en diciembre, mi mami hizo cositas y
        comimos rico uwu.
        </p>
      </section>
        <div id="" class="box">
        <p class="box-p">
        Sin duda uno de los momentos que mas me gusto de haber estado contigo
        fue el día que te espere de tu asesoría de contabilidad, no
        se porque pensabas que me iba a ir xddd, quería estar un rato contigo así
        fuese un momento, tu cara de sorpresa total XD me encantó, igual no tenia
        que hacer nada ese día, me hablaste de como te fue, cosas que no
        entendías, vainas que te frustraban de no poder estudiar lo que querías,
        desde ese día te dije seriamente lo de aprender a programar, que te iba a
        gustar (aun lo sigo creyendo), también que nos quedamos dando vueltas por
        ahí, aun tu mami no me dejaba ir a la casa, pero es entendible :3 aun no
        me tenía tanta confianza. 
        </p>

        <p class="box-p">
        Siempre que estoy alguito sad, me pongo a
        recordar todos estos días y es muy bonito para mi saber que tengo a
        alguien que me comprende y a la vez entiendo, no me siento solo, me siento
        querido y mimado uwu esa ha sido la sensación que también te he querido
        manifestar, es lo que mereces y mas :3 espero que lo poco que te he dado
        te haya gustado ❤.
        </p>
        </div>
    </div>
    </div>
    `;

    const div = document.createElement('div');
          div.innerHTML = html;

    content.append(div.firstElementChild)
}

const htmlCake = () =>{
    const html = `
    <div >
    <div id="imgbg12" class="imgbg">
      <div class="area">
        <section>
          <h2 id="titulo1">Agradecimientos y Feliz cumpleaños</h2>
          <p class="img-p">
          Bueno Carmen Victoria Aguilar Ceci, no me queda mas que decirte de nuevo
          Feliz cumpleaños xd, 17 de septiembre y tienes novio 7u7 matona XD, y ya
          se que seguramente dirás que faltan muchos muchos recuerdos, yo mismo lo
          sé, fueron muchas vainas en este año, ni fue el año entero, imagínate si
          no fuese aparecido la pandemia esta de verga, fuera sido “Brutak” XD y
          weno, esta ultima pagina la estoy escribiendo un dia antes, el 16/9, me
          llevo trabajo ir redactando esto, sabes que no me gusta mucho redactar,
          pero quería hacerte algo bonito que pudiera entrar en mis manos, y weno,
          haciendo la página aprendí mucho.
          </p>
        </section>
      </div>
      <div id="" class="box">
        <p class="box-p">
        No se si te diste cuenta, pero el Vinotinto que tiene la pagina es el que tu
        me dijiste xdd, creo que quedó lindo, hay diferentes vainas en la pagina but
        weno, fueron detalles, yo de verdad espero que pases bien este día, ya se
        que tienes 40 exámenes en cada materia de 0.5 ptos cada examen, bien coños e
        madre tus profesores, pero no hay manera, sé que saldrás bien :3.
        </p>
      </div>
    </div>
    <div id="imgbg10" class="imgbg">
    <div class="area">
      <section>
        <p class="img-p">
        También te quería agradecer por todo lo que me haz brindado, me aportas
        muchísimo como persona y quiero mejorar más gracias a ti, me motivas a ser
        mejor, y no es fácil hacerlo por uno mismo, esa ha sido de las cosas que mas
        me sorprende de ti, aun con solo el apoyo de tu mami y tus abuelos, siempre
        intentas ir mas allá, es algo de admirar, sin amigos a tu lado, ha debido de
        ser muy difícil pero aun así no te detienes, eres increíble ❤.
        </p>
      </section>
        <div id="" class="box">
        <p class="box-p">
        Ya se que me he despedido bastante pero es que cada que escribo se me
        ocurren mas vainas SJAJSAJSAJSAJ pero supongo que es bueno, supongo que solo
        me queda agradecerte por todo, pero absolutamente TODO, que aunque aparecí
        en la raya para estar contigo, inscribiéndome el ultimo día a cacahumbol y
        que además quede en la misma sección que tú, fue increíble xd, espero que
        este regalo de haya gustado mucho amore :3 lo hice con todo el cariño, si te
        gustó, mándame una nota de voz luego de leer esto xd, me dices si quieres el
        archivo de la página, yo te lo mando con todo el gusto, Feliz Cumpleaños mi
        niña, te muchín ❤.
        </p>
        </div>
    </div>
    </div>
    `;

    const div = document.createElement('div');
          div.innerHTML = html;

    content.append(div.firstElementChild)
}


export const init = (component) =>{

    if(!!content.firstElementChild){
        content.firstElementChild.remove();
    }

    if(component=='inicio'){
        htmlInicio()
    }else if(component=='sad'){
      htmlSad()
    }else if(component =='wallet'){
      htmlWallet()
    }else if(component =='heart'){
      htmlHeart()
    }else if(component =='plus'){
      htmlPlus()
    }else if(component =='cake'){
      htmlCake()
    }
}
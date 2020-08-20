    import '../css/components.css';
    import '../assets/castle.jpg';
    import '../assets/paisaje1.jpg';
    import '../assets/tree.jpg';
    const content = document.querySelector('#content');
    const arrFotos = [
      {
        file:'/cat.jpg',
        number: 1,
        text:'gato'
      },
      {
        file:'/buho.jpg',
        number: 2,
        text:'buho'
      },
      {
        file:'/castle.jpg',
        number: 3,
        text:'castillo'
      },
      {
        file:'/tree.jpg',
        number: 4,
        text:'arbol'
      },
      {
        file:'/paisaje1.jpg',
        number: 5,
        text:'paisaje'
      },
    ];
const htmlInicio = () =>{
    console.log('inicio');
    const html = `
    <div >
    <div id="imgbg1" class="imgbg">
      <div class="area">
        <section>
          <h2 id="titulo1">Inicio</h2>
          <p class="img-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue
            quis lorem interdum molestie. Praesent scelerisque eleifend nibh, quis
            tempor nibh placerat a. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Sed ut velit felis. Cras vel
            malesuada dolor. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Sed aliquam, libero eu dapibus euismod, ligula lorem dictum
            tellus, a gravida lacus odio at lorem. Morbi efficitur ipsum elit,
            vitae pharetra turpis dictum at.
          </p>
        </section>
      </div>
      <div id="" class="box">
        <p class="box-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue
          quis lorem interdum molestie. Praesent scelerisque eleifend nibh, quis
          tempor nibh placerat a. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Sed ut velit felis. Cras vel
          malesuada dolor. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Sed aliquam, libero eu dapibus euismod, ligula lorem dictum
          tellus, a gravida lacus odio at lorem. Morbi efficitur ipsum elit,
          vitae pharetra turpis dictum at.
        </p>
      </div>
    </div>
    <div id="imgbg2" class="imgbg">
    <div class="area">
      <section>
        <h2 id="titulo2">Titulo</h2>
        <p class="img-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue
          quis lorem interdum molestie. Praesent scelerisque eleifend nibh, quis
          tempor nibh placerat a. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Sed ut velit felis. Cras vel
          malesuada dolor. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Sed aliquam, libero eu dapibus euismod, ligula lorem dictum
          tellus, a gravida lacus odio at lorem. Morbi efficitur ipsum elit,
          vitae pharetra turpis dictum at.
        </p>
      </section>
        <div id="" class="box">
        <p class="box-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue
            quis lorem interdum molestie. Praesent scelerisque eleifend nibh, quis
            tempor nibh placerat a. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Sed ut velit felis. Cras vel
            malesuada dolor. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Sed aliquam, libero eu dapibus euismod, ligula lorem dictum
            tellus, a gravida lacus odio at lorem. Morbi efficitur ipsum elit,
            vitae pharetra turpis dictum at.
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

    console.log('sad');
    const html = `
    <div >
    <div id="imgbg2" class="imgbg">
    <div class="area">
      <section>
        <h2 id="titulo2">Pagina 2 SPA</h2>
        <p class="img-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue
          quis lorem interdum molestie. Praesent scelerisque eleifend nibh, quis
          tempor nibh placerat a. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Sed ut velit felis. Cras vel
          malesuada dolor. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Sed aliquam, libero eu dapibus euismod, ligula lorem dictum
          tellus, a gravida lacus odio at lorem. Morbi efficitur ipsum elit,
          vitae pharetra turpis dictum at.
        </p>
      </section>
        <div id="" class="box">
        <p class="box-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue
            quis lorem interdum molestie. Praesent scelerisque eleifend nibh, quis
            tempor nibh placerat a. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Sed ut velit felis. Cras vel
            malesuada dolor. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Sed aliquam, libero eu dapibus euismod, ligula lorem dictum
            tellus, a gravida lacus odio at lorem. Morbi efficitur ipsum elit,
            vitae pharetra turpis dictum at.
        </p>
        </div>
    </div>
    <div id="imgbg1" class="imgbg">
      <div class="area">
        <section>
          <h2 id="titulo1">Titulo</h2>
          <p class="img-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue
            quis lorem interdum molestie. Praesent scelerisque eleifend nibh, quis
            tempor nibh placerat a. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Sed ut velit felis. Cras vel
            malesuada dolor. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Sed aliquam, libero eu dapibus euismod, ligula lorem dictum
            tellus, a gravida lacus odio at lorem. Morbi efficitur ipsum elit,
            vitae pharetra turpis dictum at.
          </p>
        </section>
      </div>
      <div id="" class="box">
        <p class="box-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue
          quis lorem interdum molestie. Praesent scelerisque eleifend nibh, quis
          tempor nibh placerat a. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Sed ut velit felis. Cras vel
          malesuada dolor. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Sed aliquam, libero eu dapibus euismod, ligula lorem dictum
          tellus, a gravida lacus odio at lorem. Morbi efficitur ipsum elit,
          vitae pharetra turpis dictum at.
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
    console.log('wallet');
    const html = `
    <div >
    <div id="imgbg1" class="imgbg">
    <div class="area">
      <section>
        <h2 id="">Pagina 3 SPA</h2>
        <p class="img-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue
          quis lorem interdum molestie. Praesent scelerisque eleifend nibh, quis
          tempor nibh placerat a. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Sed ut velit felis. Cras vel
          malesuada dolor. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Sed aliquam, libero eu dapibus euismod, ligula lorem dictum
          tellus, a gravida lacus odio at lorem. Morbi efficitur ipsum elit,
          vitae pharetra turpis dictum at.
        </p>
      </section>
        <div id="" class="box">
        <p class="box-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue
            quis lorem interdum molestie. Praesent scelerisque eleifend nibh, quis
            tempor nibh placerat a. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Sed ut velit felis. Cras vel
            malesuada dolor. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Sed aliquam, libero eu dapibus euismod, ligula lorem dictum
            tellus, a gravida lacus odio at lorem. Morbi efficitur ipsum elit,
            vitae pharetra turpis dictum at.
        </p>
        </div>
    </div>
    <div id="imgbg2" class="imgbg">
      <div class="area">
        <section>
          <h2 id="titulo1">Titulo</h2>
          <p class="img-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue
            quis lorem interdum molestie. Praesent scelerisque eleifend nibh, quis
            tempor nibh placerat a. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Sed ut velit felis. Cras vel
            malesuada dolor. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Sed aliquam, libero eu dapibus euismod, ligula lorem dictum
            tellus, a gravida lacus odio at lorem. Morbi efficitur ipsum elit,
            vitae pharetra turpis dictum at.
          </p>
        </section>
      </div>
      <div id="" class="box">
        <p class="box-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue
          quis lorem interdum molestie. Praesent scelerisque eleifend nibh, quis
          tempor nibh placerat a. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Sed ut velit felis. Cras vel
          malesuada dolor. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Sed aliquam, libero eu dapibus euismod, ligula lorem dictum
          tellus, a gravida lacus odio at lorem. Morbi efficitur ipsum elit,
          vitae pharetra turpis dictum at.
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
    console.log('heart');

    const html = `
    <div>
    <div id="carousel">
      <a class="prev">&#10094;</a>
      <div id="carousel-container">
        <p class="number-text"><span id="indice">1</span> / 5</p>
        <img id="img" src="./assets/cat.jpg" />
        <p class="text">Gato</p>
      </div>
      <a class="next">&#10095;</a>
    </div>

    <div id="imgbg2" class="imgbg">
      <div class="area">
        <section>
          <h2 id="titulo2">Pagina 4 SPA</h2>
          <p class="img-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue
            quis lorem interdum molestie. Praesent scelerisque eleifend nibh, quis
            tempor nibh placerat a. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Sed ut velit felis. Cras vel
            malesuada dolor. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Sed aliquam, libero eu dapibus euismod, ligula lorem dictum
            tellus, a gravida lacus odio at lorem. Morbi efficitur ipsum elit,
            vitae pharetra turpis dictum at.
          </p>
        </section>
          <div id="" class="box">
          <p class="box-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue
              quis lorem interdum molestie. Praesent scelerisque eleifend nibh, quis
              tempor nibh placerat a. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia curae; Sed ut velit felis. Cras vel
              malesuada dolor. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Sed aliquam, libero eu dapibus euismod, ligula lorem dictum
              tellus, a gravida lacus odio at lorem. Morbi efficitur ipsum elit,
              vitae pharetra turpis dictum at.
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
      console.log(event);
      indice.textContent = arrFotos[counter].number;
      img.src = 'assets' + arrFotos[counter].file;
      text.textContent = arrFotos[counter].text;
      img.classList.add('opacity1');
      img.classList.remove('opacity0');  
    })
    }
}

const htmlPlus = () =>{
    console.log('plus');
    const html = `
    <div >
    <div id="imgbg1" class="imgbg">
      <div class="area">
        <section>
          <h2 id="titulo1">Mas cositas</h2>
          <p class="img-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue
            quis lorem interdum molestie. Praesent scelerisque eleifend nibh, quis
            tempor nibh placerat a. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Sed ut velit felis. Cras vel
            malesuada dolor. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Sed aliquam, libero eu dapibus euismod, ligula lorem dictum
            tellus, a gravida lacus odio at lorem. Morbi efficitur ipsum elit,
            vitae pharetra turpis dictum at.
          </p>
        </section>
      </div>
      <div id="" class="box">
        <p class="box-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue
          quis lorem interdum molestie. Praesent scelerisque eleifend nibh, quis
          tempor nibh placerat a. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Sed ut velit felis. Cras vel
          malesuada dolor. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Sed aliquam, libero eu dapibus euismod, ligula lorem dictum
          tellus, a gravida lacus odio at lorem. Morbi efficitur ipsum elit,
          vitae pharetra turpis dictum at.
        </p>
      </div>
    </div>
    <div id="imgbg2" class="imgbg">
    <div class="area">
      <section>
        <h2 id="titulo2">Titulo</h2>
        <p class="img-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue
          quis lorem interdum molestie. Praesent scelerisque eleifend nibh, quis
          tempor nibh placerat a. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Sed ut velit felis. Cras vel
          malesuada dolor. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Sed aliquam, libero eu dapibus euismod, ligula lorem dictum
          tellus, a gravida lacus odio at lorem. Morbi efficitur ipsum elit,
          vitae pharetra turpis dictum at.
        </p>
      </section>
        <div id="" class="box">
        <p class="box-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue
            quis lorem interdum molestie. Praesent scelerisque eleifend nibh, quis
            tempor nibh placerat a. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Sed ut velit felis. Cras vel
            malesuada dolor. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Sed aliquam, libero eu dapibus euismod, ligula lorem dictum
            tellus, a gravida lacus odio at lorem. Morbi efficitur ipsum elit,
            vitae pharetra turpis dictum at.
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
    console.log('cake');
    const html = `
    <div >
    <div id="imgbg1" class="imgbg">
      <div class="area">
        <section>
          <h2 id="titulo1">Agradecimientos y Feliz cumpleaños</h2>
          <p class="img-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue
            quis lorem interdum molestie. Praesent scelerisque eleifend nibh, quis
            tempor nibh placerat a. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Sed ut velit felis. Cras vel
            malesuada dolor. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Sed aliquam, libero eu dapibus euismod, ligula lorem dictum
            tellus, a gravida lacus odio at lorem. Morbi efficitur ipsum elit,
            vitae pharetra turpis dictum at.
          </p>
        </section>
      </div>
      <div id="" class="box">
        <p class="box-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue
          quis lorem interdum molestie. Praesent scelerisque eleifend nibh, quis
          tempor nibh placerat a. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Sed ut velit felis. Cras vel
          malesuada dolor. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Sed aliquam, libero eu dapibus euismod, ligula lorem dictum
          tellus, a gravida lacus odio at lorem. Morbi efficitur ipsum elit,
          vitae pharetra turpis dictum at.
        </p>
      </div>
    </div>
    <div id="imgbg2" class="imgbg">
    <div class="area">
      <section>
        <h2 id="titulo2">Titulo</h2>
        <p class="img-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue
          quis lorem interdum molestie. Praesent scelerisque eleifend nibh, quis
          tempor nibh placerat a. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Sed ut velit felis. Cras vel
          malesuada dolor. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Sed aliquam, libero eu dapibus euismod, ligula lorem dictum
          tellus, a gravida lacus odio at lorem. Morbi efficitur ipsum elit,
          vitae pharetra turpis dictum at.
        </p>
      </section>
        <div id="" class="box">
        <p class="box-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue
            quis lorem interdum molestie. Praesent scelerisque eleifend nibh, quis
            tempor nibh placerat a. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Sed ut velit felis. Cras vel
            malesuada dolor. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Sed aliquam, libero eu dapibus euismod, ligula lorem dictum
            tellus, a gravida lacus odio at lorem. Morbi efficitur ipsum elit,
            vitae pharetra turpis dictum at.
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
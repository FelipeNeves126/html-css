const informacoes = {
    cursos: `  
        <h2>Cursos</h2>
        <ul>SG Sistemas - Lógica de programação e desenvolvimento de sistemas em Harbour</ul>
        <ul>Curso em vídeo - HTML5/CSS3 (5 módulos)</ul>
    `,
    projetos: `
        <h2>Projetos</h2>
        <!-- <p><a href="https://felipeneves126.github.io/html-css/exercicios/projeto-social-media" target="_blank">Redes sociais <i class="fa-solid fa-arrow-up-right-from-square lupa-link"></i></a></p>-->
        <p><a href="https://felipeneves126.github.io/html-css/exercicios/Projeto_HistoriaAndroid/index.html" target="_blank">História do Android<i class="fa-solid fa-arrow-up-right-from-square lupa-link"></i></a></p>
        <p><a href="https://felipeneves126.github.io/html-css/exercicios/desafio12/index.html" target="_blank">Cordel Moderno<i class="fa-solid fa-arrow-up-right-from-square lupa-link"></i></a></p>
        <p><a href="https://felipeneves126.github.io/Front_End2026/Ex02formulario/index.html" target=_blank"> Explicativo de metodologias ágeis <i class="fa-solid fa-arrow-up-right-from-square lupa-link"></i></a></p>
    `,
    
    personalidade: `
        <h2>Personalidade</h2>
        <p>Comunicativo</p>
        <p>Respeitoso</p>
        <p>Focado</p>   
    `,

    competencias: `
        <h2>Competências</h2>
        <p>C/C++</p>
        <p>HTML/CSS</p>
        <p>javascript</p>
        <p>Metodologias ágeis de desenvolvimento</p> 
    `,

};

function mostrarDetalhes(chave) {
    const painel = document.getElementById('painel-detalhes');
    const conteudo = document.getElementById('conteudo-detalhes');

    conteudo.innerHTML = informacoes[chave];

    painel.classList.remove('escondido');
    painel.classList.add('visivel');

    painel.scrollIntoView({behavior: 'smooth'});
}

function fecharDetalhes() {
    document.getElementById('painel-detalhes').classList.replace('visivel', 'escondido');
}
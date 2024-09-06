function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa)

    if (!campoPesquisa){
        section.innerHTML = "<p>Você não buscou por nenhum povo</p>"
        return
    };

    campoPesquisa = campoPesquisa.toLowerCase();
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultado = "";
    let titulo = "";
    let descricao = "";

    // Itera sobre cada elemento do array 'povos'
    for (let dado of povos) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.titulo.toLowerCase()
       // Se o que digitamos no campo de pesquisa é igual a um título existente, executa o código
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
        
        // Constrói o HTML para cada resultado, formatando os dados do objeto 'dado'
        resultado += `
            <div class="item-resultado">
                <h2> ${dado.titulo} </h2>
                <p class="descricao-meta">${dado.descricao} </p>
                <a href=${dado.link} target="_blank">Mais curiosidades</a>
            </div>
        `;
        };
        
        
    };

    if(!resultado){
        resultado = "<p>Nenhum povo encontrado</p>"
    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultado;
} 

function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (campoPesquisa == "") {
    section.innerHTML = "a";
    return;
  }
  campoPesquisa = campoPesquisa.toLowerCase();

  let resultado = "";
  let titulo = "";
  let descricao = "";

  for (let ferramenta of ferramentas) {
    titulo = ferramenta.titulo.toLowerCase();
    descricao = ferramenta.descricao.toLowerCase();
    if (
      ferramenta.titulo.includes(campoPesquisa) ||
      ferramenta.descricao.includes(campoPesquisa)
    ) {
      resultado += `

      <div class="item-resultado">
        <img src="${ferramenta.imagem}" class="img_ferramentas"/>
        <div class="descricao">
          <h2>
            <a href="#" target="_blank">
              ${ferramenta.titulo}
            </a>
          </h2>

          <p class="descricao-meta">${ferramenta.descricao}</p>
          <a href=${ferramenta.link} target="_blank">
            Saiba Mais
          </a>
        </div>
      </div>
  `
    }
  }
  section.innerHTML = resultado;
}

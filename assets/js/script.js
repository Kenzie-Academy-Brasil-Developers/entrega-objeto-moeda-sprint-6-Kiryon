const body = document.body
const main = document.createElement("div")
const h3 = document.createElement("h3")
body.appendChild(main)
body.appendChild(h3)


const coin = {
    state: 0,
    flip: function () {
      // Use "this.state" para acessar a propriedade "state".
      // Configure de forma randômica a propriedade “state” do
      // seu objeto moeda. "STATE" deve receber somente os valores 0 ou 1.
      this.state = Math.floor(Math.random() * (1 - 0 + 1)) + 0
      return this.state
    },
  
    toString: function () {
    // Se o valor de "state" for 0, retorne "Heads"
    // Se o valor de "state" for 1, retorne "Tails"
      if (this.state === 0){
          return "Heads"
      }
      if (this.state === 1){
        return "Tails"
    }
    },
  
    toHTML: function () {
        const image = document.createElement("img");
        // Colocar uma imagem correspondente a essa valor.
      // image.src = "./CAMINHO/IMAGEM.JPEG"
      // image.alt = "Heads/Tails"
      if(this.state === 0){
        image.src = "./assets/img/head.png"
        image.alt = "Heads"
        }
        if(this.state === 1){
        image.src = "./assets/img/tail.png"
        image.alt = "Tail"
        }
      main.appendChild(image)
      return image;
    },
};

function display20Flips() {
    const results = [];
    // Use um loop para arremessar a moeda 20 vezes.
    // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
    for(let i =0; i<20;i++){
        coin.flip()
        results.push(coin.toString())
    }

h3.textContent = results

return results
}
  
function display20Images() {
    const results = [];
    // Use um loop para arremessar a moeda 20 vezes.
    // Depois que o seu loop terminar, exiba o resultado na página no formato de IMAGEM.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
    for(let i =0; i<20;i++){
        coin.flip()
        results.push(coin.toHTML())
    }
    return results
}
  
display20Flips()
display20Images()
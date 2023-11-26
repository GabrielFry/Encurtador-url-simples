const resultado = document.getElementById('resultado');
const urlElement = document.getElementById('entrada'); // URL que você deseja encurtar

function encurtar(){
   const url = urlElement.value; // Obter o valor do elemento de entrada
   const tinyUrl = `https://tinyurl.com/api-create.php?url=${url}`;

   fetch(tinyUrl)
   .then(response => response.text())
   .then(shortUrl => {
       let urlshort = shortUrl;
       const link = urlElement.value;  // Declarar a variável antes de usá-la
       if (link === ''){
        resultado.innerHTML = 'INSIRA UMA URL PARA ENCURTAR!!'
       }else{
        resultado.innerHTML = `Link encurtado!!▼ \n <a href="${urlshort}" target="_blank">${urlshort}</a>`;
        urlElement.value = ''
       }
 // URL encurtada
   })
   .catch(error => console.error(error));
};

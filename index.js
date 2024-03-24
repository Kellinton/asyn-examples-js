// #region ExemploDeCallback
    var callbackSucesso = function(titulo, descricao) { // técnica wrapper
        document.write('<h1>' + titulo + '</h1>')
        document.write('</hr>')
        document.write('<p>' + descricao + '</h1>')
    }  

    var callbackErro = function(erro) {
        document.write('<p><b>Erro:</b> ' + erro + '</p>')
    }



    function exibirArtigo(id, callbackSucesso, callbackErro){
        // lógica: recuperar o id via requisição http

        if (true) {
            callbackSucesso('Funções de callback em JS', 'Funções de callback...')
        }else{
            callbackErro('Erro ao recuperar os dados')
        }
    }

    exibirArtigo(1, callbackSucesso, callbackErro)

// #endregion ExemploDeCallback


// #region AssincronismoComFecth

    // Função de callback para sucesso
    const callbackSucesso = function(titulo, descricao) {
        const artigoDiv = document.getElementById('artigo');
        artigoDiv.innerHTML = `
            <h1>${titulo}</h1>
            <hr>
            <p>${descricao}</p>
        `;
    };

    // Função de callback para erro
    const callbackErro = function(erro) {
        const artigoDiv = document.getElementById('artigo');
        artigoDiv.innerHTML = `<p><b>Erro:</b> ${erro}</p>`;
    };

    // Função para buscar um artigo por ID
    const exibirArtigo = function(id, sucessoCallback, erroCallback) {
        // Simulando uma requisição HTTP usando fetch
        fetch(`https://api.exemplo.com/artigos/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao recuperar os dados');
                }
                return response.json();
            })
            .then(data => {
                sucessoCallback(data.titulo, data.descricao);
            })
            .catch(error => {
                erroCallback(error.message);
            });
    };

    // Chamada da função para exibir o artigo com ID 1
    exibirArtigo(1, callbackSucesso, callbackErro);
// #endregion AssincronismoComFecth



// #region AssincronismoComPromises

    // Exemplo de operação assíncrona usando Promises
    function operacaoAssincrona() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Operação concluída!');// Simula uma operação assíncrona bem-sucedida
            }, 2000);// Simula um atraso de 2 segundos
        });
    }

    console.log('Iniciando operação assíncrona...');

    operacaoAssincrona().then(resultado => {
        console.log(resultado); // Será impresso após 2 segundos
    });
    
    console.log('Operação assíncrona em andamento...'); // Será impresso imediatamente

// #endregion AssincronismoComPromises



// #region AssincronismoComAsync/Await

    const callbackSucesso = function(titulo, descricao) {
        document.write('<h1>' + titulo + '</h1>');
        document.write('<hr>'); // Corrigindo a tag <hr>
        document.write('<p>' + descricao + '</p>');
    };

    const callbackErro = function(erro) {
        document.write('<p><b>Erro:</b> ' + erro + '</p>');
    };

    async function exibirArtigo(id, callbackSucesso, callbackErro) {
        try {
            // Simulando uma requisição HTTP usando fetch
            const response = await fetch(`https://api.exemplo.com/artigos/${id}`);

            // Verifica se a requisição foi bem-sucedida
            if (!response.ok) {
                throw new Error('Erro ao recuperar os dados');
            }

            // Converte o corpo da resposta para JSON
            const data = await response.json();

            // Chama a função de sucesso com os dados obtidos
            callbackSucesso(data.titulo, data.descricao);
        } catch (error) {
            // Em caso de erro, chama a função de erro
            callbackErro(error.message);
        }
    }

    // Chamada da função para exibir o artigo com ID 1
    exibirArtigo(1, callbackSucesso, callbackErro);

// #endregion AssincronismoComAsync/Await
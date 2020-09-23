var botaoAdicionar = document.getElementById('adicionar');
var inputTarefa = document.getElementById('tarefa');

inputTarefa.onkeypress = function(evento) {
    if(evento.key === 'Enter') {
        adicionar();
    }
};

botaoAdicionar.addEventListener('click', adicionar);

function adicionar() {
    var tarefa = inputTarefa.value;
    if(tarefa !== '') {
        var li = document.createElement('li');
        li.innerText = tarefa;
      
        // Forma 1 - Estilo inline
        // li.style.color = 'red';
        // li.onclick = function() {
        //     li.style.color = 'green';
        // };
        // li.ondblclick = function() {
        //     li.style.color = 'red';
        // }

        // Forma 2 - por meio de classes
        li.classList.add('para-fazer');
        li.onclick = function() {
            li.classList.remove('para-fazer');
            li.classList.add('concluida');
        };
        li.ondblclick = function() {
            li.classList.remove('concluida');
            li.classList.add('para-fazer');
        };

        var ol = document.getElementById('tarefas');
        ol.appendChild(li);

        inputTarefa.value = '';
    }
}
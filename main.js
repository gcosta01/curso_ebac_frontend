// Criar array de objetos
var alunos = [
    { nome: 'Gabriel', nota: 10 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 7 },
    { nome: 'Ana', nota: 9 },
    { nome: 'Carlos', nota: 4 }
];

  // Função para filtrar alunos com nota maior ou igual a 6
function filtrarAlunos(notaMinima, listaAlunos) {
    return listaAlunos.filter(function(aluno) {
    return aluno.nota >= notaMinima;
    });
}

  // Chamando a função para obter os alunos com nota maior ou igual a 6
var alunosAprovados = filtrarAlunos(6, alunos);

  // Exibindo os alunos aprovados no console
console.log(alunosAprovados);

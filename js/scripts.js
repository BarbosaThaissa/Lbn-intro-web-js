const cursos = [
  //"HTML e CSS", "JavaScript", "APIs REST"
  {
    curso: "HTML e CSS",
    descricao:
      "Aprenda a criar sites estáticos com HTML e CSS, do básico ao avançado!",
    duracao: "1 mês",
    valor: 500
  },
  {
    curso: "JavaScript",
    descricao:
      "Aprenda a criar sites dinamicos com JavaScript, do básico ao avançado!",
    duracao: "2 meses",
    valor: 900
  },
  {
    curso: "APIsRest",
    descricao: "Aprenda APIsRest do básico ao avançado!",
    duracao: "6 meses",
    valor: 2000
  }
];

const turmas = [
  //"HC1", "JS1", "JS2", "REST1", "REST2"
  {
    turma: "Hipátia",
    curso: "JavaScript",
    inicio: "30/11/2022",
    termino: "30/01/2023",
    numAlunos: 150,
    periodo: "Noturno",
    concluida: false
  },
  {
    turma: "Sibyla",
    curso: "JavaScript",
    inicio: "30/10/2022",
    termino: "30/12/2022",
    numAlunos: 200,
    periodo: "Integral",
    concluida: false
  },
  {
    turma: "Curie",
    curso: "HTML e CSS",
    inicio: "15/09/2022",
    termino: "15/10/2022",
    numAlunos: 180,
    periodo: "Noturno",
    concluida: true
  },
  {
    turma: "Zhenyi",
    curso: "HTML e CSS",
    inicio: "01/11/2022",
    termino: "01/01/2023",
    numAlunos: 80,
    periodo: "Integral",
    concluida: false
  },
  {
    turma: "Clarke",
    curso: "HTML e CSS",
    inicio: "04/07/2022",
    termino: "04/09/2022",
    numAlunos: 200,
    periodo: "Noturno",
    concluida: true
  },
  {
    turma: "Blackwell",
    curso: "APIsRest",
    inicio: "20/03/2022",
    termino: "20/06/2022",
    numAlunos: 100,
    periodo: "Integral",
    concluida: true
  },
  {
    turma: "Elion",
    curso: "APIsRest",
    inicio: "12/01/2022",
    termino: "12/06/2022",
    numAlunos: 200,
    periodo: "Noturno",
    concluida: true
  },
  {
    turma: "Burnell",
    curso: "APIsRest",
    inicio: "18/10/2022",
    termino: "18/04/2023",
    numAlunos: 90,
    periodo: "Integral",
    concluida: false
  }
];

const estudantes = [
  //"João", "Ana", "Cris"
  {
    estudante: "Chris Evans",
    turma: "Hipátia",
    curso: "JavaScript",
    valor: "900 reais",
    numParcelas: 9,
    desconto: false,
    vaParcelas: 100
  },
  {
    estudante: "Halle Berry",
    turma: "Burnell",
    curso: "APIsRest",
    valor: "2000 reais",
    numParcelas: 4,
    desconto: false,
    vaParcelas: 500
  },
  {
    estudante: "Lashana Lynch",
    turma: "Zhenyi",
    curso: "HTML e CSS",
    valor: "500 reais",
    numParcelas: 1,
    desconto: true,
    vaParcelas: 500
  }
];

const parcelarCurso = (parcela) => {
  //Ter 20% para pg avista ou em 2 vezes
  //Mostrar no console uma frase

  let valorTotal = cursos[2].valor;
  let valorParcela = valorTotal / parcela;

  if (parcela === 2 || parcela === 1) {
    //retorna o valor do curso com desconto

    let desconto = (valorTotal * 20) / 100;
    valorTotal -= desconto;
    valorParcela = valorTotal / parcela;

    return `O curso ${
      cursos[2].curso
    } ficou no valor total de ${valorTotal}. Em ${parcela}x de ${valorParcela.toFixed(
      2
    )} reais. Foi concedido um desconto de 20%.`;
  } else if (parcela >= 3 && parcela <= 12) {
    //retorna o valor do curso sem desconto

    return `O curso ${
      cursos[2].curso
    } ficou no valor total de R$ ${valorTotal}. Em ${parcela}x de ${valorParcela.toFixed(
      2
    )} reais.`;
  } else {
    return "Desculpe, não foi possível calcular o valor! Por favor tente um novamente";
  }
};

console.log(parcelarCurso(2));
console.log(parcelarCurso(4));
console.log(parcelarCurso(1));
console.log(parcelarCurso(5));

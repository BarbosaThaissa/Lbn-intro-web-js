const cursos = [
  {
    curso: "HTML e CSS",
    descricao:
      "Aprenda a criar sites estáticos com HTML e CSS, do básico ao avançado!",
    duracao: "1 mês",
    valor: 500,
  },
  {
    curso: "JavaScript",
    descricao:
      "Aprenda a criar sites dinamicos com JavaScript, do básico ao avançado!",
    duracao: "2 meses",
    valor: 900,
  },
  {
    curso: "APIsRest",
    descricao: "Aprenda APIsRest do básico ao avançado!",
    duracao: "6 meses",
    valor: 2000,
  },
];

const turmas = [
  {
    turma: "Hipátia",
    curso: "JavaScript",
    inicio: "30/11/2022",
    termino: "30/01/2023",
    numAlunos: 150,
    periodo: "Noturno",
    concluida: false,
  },
  {
    turma: "Sibyla",
    curso: "JavaScript",
    inicio: "30/10/2022",
    termino: "30/12/2022",
    numAlunos: 200,
    periodo: "Integral",
    concluida: false,
  },
  {
    turma: "Curie",
    curso: "HTML e CSS",
    inicio: "15/09/2022",
    termino: "15/10/2022",
    numAlunos: 180,
    periodo: "Noturno",
    concluida: true,
  },
  {
    turma: "Zhenyi",
    curso: "HTML e CSS",
    inicio: "01/11/2022",
    termino: "01/01/2023",
    numAlunos: 80,
    periodo: "Integral",
    concluida: false,
  },
  {
    turma: "Clarke",
    curso: "HTML e CSS",
    inicio: "04/07/2022",
    termino: "04/09/2022",
    numAlunos: 200,
    periodo: "Noturno",
    concluida: true,
  },
  {
    turma: "Blackwell",
    curso: "APIsRest",
    inicio: "20/03/2022",
    termino: "20/06/2022",
    numAlunos: 100,
    periodo: "Integral",
    concluida: true,
  },
  {
    turma: "Elion",
    curso: "APIsRest",
    inicio: "12/01/2022",
    termino: "12/06/2022",
    numAlunos: 200,
    periodo: "Noturno",
    concluida: true,
  },
  {
    turma: "Burnell",
    curso: "APIsRest",
    inicio: "18/10/2022",
    termino: "18/04/2023",
    numAlunos: 90,
    periodo: "Integral",
    concluida: false,
  },
];

const estudantes = [
  {
    estudante: "Chris Evans",
    turma: "Hipátia",
    curso: "JavaScript",
    valor: "900 reais",
    numParcelas: 9,
    desconto: false,
    vaParcelas: 100,
  },
  {
    estudante: "Halle Berry",
    turma: "Burnell",
    curso: "APIsRest",
    valor: "2000 reais",
    numParcelas: 4,
    desconto: false,
    vaParcelas: 500,
  },
  {
    estudante: "Lashana Lynch",
    turma: "Zhenyi",
    curso: "HTML e CSS",
    valor: "500 reais",
    numParcelas: 1,
    desconto: true,
    vaParcelas: 500,
  },
];

const carrinhoCursos = [];

const buscarCurso = (nameCurso) => {
  //uma busca pelo array de cursos, retornar o objeto referente ao curso
  const encCurso = cursos.find((curso) =>
    curso.curso.toLowerCase().startsWith(nameCurso.toLowerCase())
  );

  if (encCurso == undefined) {
    return "Curso não encontrado! Tente noamente. ";
  }

  return encCurso;
};

const addCarrinhoCursos = (nomeCurso) => {
  let curso = buscarCurso(nomeCurso);

  return carrinhoCursos.push(curso.valor);
};

const parcelarCurso = (arr, parcela) => {
  //Ter 20% para pg avista ou em 2 vezes
  let resultado = 0;
  let desconto = 0;

  if (arr.length > 0) {
    switch (arr.length) {
      case 3:
        desconto = 0.15;
        break;
      case 2:
        desconto = 0.1;
        break;
      default:
        desconto = 0;
        break;
    }

    for (const valor of arr) {
      resultado = resultado + valor;
    }

    resultado = resultado - resultado * desconto;
  }

  let valorParcela = resultado / parcela;

  if (parcela === 2 || parcela === 1) {
    resultado = resultado - (resultado * 20) / 100;
    valorParcela = resultado / parcela;

    return `O valor do pagamento é de R$ ${resultado}. Em ${parcela}x de ${valorParcela.toFixed(
      2
    )} reais. Foi concedido um desconto de 20%.`;
  } else if (parcela >= 3 && parcela <= 12) {
    return `O valor do pagamento é de R$ ${resultado}. Em ${parcela}x de ${valorParcela.toFixed(
      2
    )} reais.`;
  } else {
    return "Desculpe, não foi possível calcular o valor! Por favor tente um novamente";
  }
};

const buscarTurma = (nameTurma) => {
  const encTurma = turmas.find((turma) =>
    turma.turma.toLowerCase().startsWith(nameTurma.toLowerCase())
  );

  if (encTurma == undefined) {
    return "Turma não encontrada!";
  }

  return encTurma;
};

const buscarEstudante = (nameEstudante) => {
  const encAluno = estudantes.find((aluno) =>
    aluno.estudante.toLowerCase().includes(nameEstudante.toLowerCase())
  );

  if (encAluno == undefined) {
    return "Aluno(a) não encontrado!";
  }

  return encAluno;
};

const matricular = (nome, curso, turma, nParcelas) => {
  //inseri um aluno no array de estudantes.
  let valorCurso = buscarCurso(curso);
  let valorTotal = 0;
  let valorParcela = 0;
  let desconto = false;

  if (nParcelas > 0 && nParcelas <= 2) {
    valorTotal = valorCurso.valor - valorCurso.valor * 0.2;
    valorParcela = valorTotal / nParcelas;
    desconto = true;
  } else {
    valorTotal = valorCurso.valor;
    valorParcela = valorTotal / nParcelas;
  }

  const noAluno = {
    estudante: nome,
    turma: turma,
    curso: curso,
    valor: valorCurso.valor,
    numParcelas: nParcelas,
    desconto: desconto,
    vaParcelas: valorParcela,
  };

  estudantes.push(noAluno);

  console.log(estudantes);

  return `Aluno Matriculado \nNome: ${nome} \nCurso: ${curso} \nTurma: ${turma}`;
};

const relatorioEstudante = (nomeAluno) => {
  let reAluno = buscarEstudante(nomeAluno);

  return `Aluno: ${reAluno.estudante} \nTurma: ${reAluno.turma} \nCurso: ${reAluno.curso} \nValor Total: R$ ${reAluno.valor} \nValor Parcela: R$ ${reAluno.vaParcelas} \nNº Parcelas: ${reAluno.numParcelas}`;
};

addCarrinhoCursos("jav");
addCarrinhoCursos("api");
console.log(carrinhoCursos);

console.log(matricular("Calvin Klein", "JavaScript", "Clarke", 3));
console.log(relatorioEstudante("ca"));
console.log(parcelarCurso(carrinhoCursos, 2));
console.log(buscarCurso("ht"));
console.log(buscarEstudante("berry"));
console.log(buscarTurma("e"));
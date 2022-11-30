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

const buscarCurso = (nameCurso, cur) => {
  //uma busca pelo array de cursos, retornar o objeto referente ao curso
  let curso;

  for (let i = 0; i < cur.length; i++) {
    switch (nameCurso) {
      case "HTML e CSS":
        curso = cursos[0];
        break;
      case "JavaScript":
        curso = cursos[1];
        break;
      case "APIsRest":
        curso = cursos[2];
        break;
      default:
        return "Desculpe, não encontramos!";
    }
  }

  return curso;
};

const addCarrinhoCursos = (nomeCurso) => {
  let curso = buscarCurso(nomeCurso, cursos);

  return carrinhoCursos.push(curso.valor);
};

const parcelarCurso = (arr, parcela) => {
  //Ter 20% para pg avista ou em 2 vezes
  let resultado;

  let total1 = arr[0];
  let valor2 = arr[0] + arr[1];
  let valor3 = arr[0] + arr[1] + arr[2];
  let desconto2cur = (valor2 * 10) / 100;
  let desconto3cur = (valor3 * 15) / 100;

  let total2 = valor2 - desconto2cur;
  let total3 = valor3 - desconto3cur;

  if (arr.length === 1) {
    resultado = total1;
  } else if (arr.length === 2) {
    resultado = total2;
  } else if (arr.length === 3) {
    resultado = total3;
  } else {
    resultado = `Não foi possivel calcular`;
  }

  let valorParcela = resultado / parcela;

  if (parcela === 2 || parcela === 1) {
    let desconto = (resultado * 20) / 100;
    resultado = resultado - desconto;
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

const buscarTurma = (nameTurma, tur) => {
  let turma;

  for (let i = 0; i < tur.length; i++) {
    switch (nameTurma) {
      case "Hipátia":
        turma = turmas[0];
        break;
      case "Sibyla":
        turma = turmas[1];
        break;
      case "Curie":
        turma = turmas[2];
        break;
      case "Zheny":
        turma = turmas[3];
        break;
      case "Clarke":
        turma = turmas[4];
        break;
      case "Blackwell":
        turma = turmas[5];
        break;
      case "Elion":
        turma = turmas[6];
        break;
      case "Burnell":
        turma = turmas[7];
        break;
      default:
        return "Turma não encontrada!";
    }
  }

  return turma;
};

const buscarEstudante = (nameEstudante, aluno) => {
  switch (nameEstudante) {
    case "Chris Evans":
      aluno = estudantes[0];
      break;
    case "Halle Berry":
      aluno = estudantes[1];
      break;
    case "Lashana Lynch":
      aluno = estudantes[2];
      break;
    default:
      return "Aluno(a) não encontrado!";
  }

  return aluno;
};

const matricular = (nome, curso, turma, nParcelas) => {
  //inseri um aluno no array de estudantes.
  estudantes.push({
    estudante: nome,
    turma: turma,
    curso: curso,
    numParcelas: nParcelas,
  });

  console.log(estudantes);

  console.log(`Aluno Matriculado
  Nome: ${nome}
  Curso: ${curso}
  Turma: ${turma}`);
};

const relatorioEstudante = (nomeAluno) => {
  let reAluno = buscarEstudante(nomeAluno, estudantes);

  return `Aluno: ${reAluno.estudante}
  Turma: ${reAluno.turma}
  Curso: ${reAluno.curso}
  Valor Total: R$ ${reAluno.valor}
  Valor Parcela: R$ ${reAluno.vaParcelas}
  Nº Parcelas: ${reAluno.numParcelas}`;
};

matricular("Calvin Klein", "JavaScript", "Clarke", 3);
addCarrinhoCursos("JavaScript");
addCarrinhoCursos("APIsRest");
console.log(estudantes);

console.log(relatorioEstudante("Chris Evans"));

console.log(carrinhoCursos);
console.log(parcelarCurso(carrinhoCursos, 2));
console.log(buscarCurso("JavaScript", cursos));
console.log(buscarEstudante("Halle Berry", estudantes));
console.log(buscarTurma("Curie", turmas));
console.log(buscarTurma("E", turmas));

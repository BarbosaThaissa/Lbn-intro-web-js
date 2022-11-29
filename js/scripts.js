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

const parcelarCurso = (parcela) => {
  //Ter 20% para pg avista ou em 2 vezes

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
        return "Essa turma não existe!!";
    }
  }

  return turma;
};

const buscarEstudante = (nameEstudante, estu) => {
  let aluno;

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

console.log(buscarCurso("JavaScript", cursos));
console.log(buscarEstudante("Halle Berry", estudantes));
console.log(buscarTurma("Sibyla", turmas));


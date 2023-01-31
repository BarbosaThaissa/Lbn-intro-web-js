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

let carrinhoCursos = [];

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

const addCarrinhoCursos = () => {
  const inputCurso = document.getElementById("curso").value;
  let curso = buscarCurso(inputCurso);

  document.getElementById("financeiro-sec").innerHTML += `${curso.curso} `;
  document.getElementById("curso").value = "";

  return carrinhoCursos.push(curso.valor);
};

const parcelarCurso = () => {
  const inputParcela = Number(document.getElementById("n-parcelas").value);

  let resultado = 0;
  let desconto = 0;

  if (carrinhoCursos.length > 0) {
    switch (carrinhoCursos.length) {
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

    for (const valor of carrinhoCursos) {
      resultado = resultado + valor;
    }

    resultado = resultado - resultado * desconto;
  }

  let valorParcela = resultado / inputParcela;

  if (inputParcela === 2 || inputParcela === 1) {
    resultado = resultado - (resultado * 20) / 100;
    valorParcela = resultado / inputParcela;

    document.getElementById("financeiro-sec").innerHTML = `<h4>Valor</h4>
    <p>O valor do pagamento é de R$ ${resultado}. Em ${inputParcela}x de ${valorParcela.toFixed(
      2
    )} reais. Foi concedido um desconto de 20%.</p>`;
  } else if (inputParcela >= 3 && inputParcela <= 12) {
    document.getElementById("financeiro-sec").innerHTML = `<h4>Valor</h4>
    <p>O valor do pagamento é de R$ ${resultado}. Em ${inputParcela}x de ${valorParcela.toFixed(
      2
    )} reais.</p>`;
  } else {
    document.getElementById("financeiro-sec").innerHTML =
      "<p>Desculpe, não foi possível calcular o valor! Por favor tente um novamente<p>";
  }

  carrinhoCursos = [];
};

const buscarTurma = () => {
  const inputTurma = document.getElementById("btn-busca").value.toLowerCase();

  const encTurma = turmas.filter((turma) =>
    turma.turma.toLowerCase().startsWith(inputTurma.toLowerCase())
  );

  return encTurma.length > 0 ? gerarCard(encTurma) : gerarCard(turmas);
};

const buscarEstudante = (nameEstudante) => {
  const encAluno = estudantes.find((aluno) =>
    aluno.estudante.toLowerCase().startsWith(nameEstudante.toLowerCase())
  );

  if (encAluno == undefined) {
    return "Aluno(a) não encontrado!";
  }

  return encAluno;
};

const matricular = () => {
  const inputNome = document.getElementById("name").value;
  const inputCurso = document.getElementById("curso").value;
  const inputTurma = document.getElementById("turma").value;
  const inputParcelas = Number(document.getElementById("parcelas").value);

  let valorCurso = buscarCurso(inputCurso);
  let valorTotal = 0;
  let valorParcela = 0;
  let desconto = false;

  if (inputParcelas > 0 && inputParcelas <= 2) {
    valorTotal = valorCurso.valor - valorCurso.valor * 0.2;
    valorParcela = valorTotal / inputParcelas;
    desconto = true;
  } else {
    valorTotal = valorCurso.valor;
    valorParcela = valorTotal / inputParcelas;
  }

  const noAluno = {
    estudante: inputNome,
    turma: inputTurma,
    curso: valorCurso.curso,
    valor: valorCurso.valor,
    numParcelas: inputParcelas,
    desconto: desconto,
    vaParcelas: valorParcela,
  };

  estudantes.push(noAluno);

  document.getElementById("aluno-matri").innerHTML = `<h3 class="font-poppins">
  Aluno(a) matrículado
  <img src="../assets/certo.svg" alt="certo" class="certo" />
</h3>
<p><span class="span-turma">Aluno(a) Matriculado</span></p>
<p><span class="span-turma">Nome:</span> ${inputNome}</p>
<p><span class="span-turma">Curso:</span> ${valorCurso.curso}</p>
<p><span class="span-turma">Turma:</span> ${inputTurma}</p>`;

  document.getElementById("name").value = "";
  document.getElementById("curso").value = "";
  document.getElementById("turma").value = "";
  document.getElementById("parcelas").value = "";
};

const relatorioEstudante = () => {
  const inputName = document.getElementById("name").value.toLowerCase();

  let reAluno = buscarEstudante(inputName);

  document.getElementById(
    "relatorio-sec"
  ).innerHTML = `<p><span class="span-turma">Aluno:</span> ${reAluno.estudante}</p>
  <p><span class="span-turma">Turma:</span> ${reAluno.turma}</p>
  <p><span class="span-turma">Curso:</span> ${reAluno.curso}</p>
  <p><span class="span-turma">Valor total:</span> R$${reAluno.valor}</p>
  <p><span class="span-turma">Valor parcela:</span> R$${reAluno.vaParcelas}</p>
  <p><span class="span-turma">N.º parcelas:</span> ${reAluno.numParcelas}</p>`;

  document.getElementById("name").value = "";
};

const gerarCard = (cardTurma) => {
  const cards = cardTurma.map((cardT) => {
    return `<div class="card-turma">
    <h4 class="h4-turmas font-poppins"> ${cardT.turma}</h4>
    <p><span class="span-turma">Curso:</span> ${cardT.curso}</p>
    <p><span class="span-turma">Início:</span> ${cardT.inicio}</p>
    <p><span class="span-turma">Termino:</span> ${cardT.termino}</p>
    <p><span class="span-turma">Número de alunos:</span> ${cardT.numAlunos}</p>
    <p><span class="span-turma">Período:</span> ${cardT.periodo}</p>
    <p><span class="span-turma">Concluído:</span> ${cardT.concluida}</p>
  </div>`;
  });

  document.getElementById("cards-turmas").innerHTML = cards.join("");
  document.getElementById("btn-busca").value = "";
};

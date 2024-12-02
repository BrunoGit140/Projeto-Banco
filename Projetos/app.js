let contaCorrente = {
    titular: '',
    numeroConta: '',
    saldoCorrente: 0,
    senha: '',
  };
  
  let contaPoupanca = {
    saldoPoupanca: 0,
  };
  
  function verificarSenha() {
    let tentativas = 3;
    while (tentativas > 0) {
      const senhaInput = prompt("Digite sua senha de 4 dígitos:");
      if (senhaInput === contaCorrente.senha) {
        return true; // Senha correta
      } else {
        tentativas--;
        alert(`Senha incorreta. Você tem ${tentativas} tentativas restantes.`);
      }
    }
    alert("Conta bloqueada! Dirija-se à agência para desbloqueio.");
    return false; // Bloqueio da conta após 3 tentativas erradas
  }
  
  function cadastrarConta() {
    const nomeTitular = prompt("Digite o nome completo:");
    const senha = prompt("Digite sua senha de 4 dígitos:");
  
    if (senha.length !== 4) {
      alert("A senha precisa ter 4 dígitos.");
      return;
    }
  
    const depositoInicial = parseFloat(prompt("Realize seu primeiro depósito de no mínimo R$ 10,00!"));
  
    if (depositoInicial < 10) {
      alert("Depósito mínimo não atingido!");
      return;
    }
  
    contaCorrente.titular = nomeTitular;
    contaCorrente.numeroConta = Math.floor(Math.random() * 900) + 100;  // Gera um número de conta aleatório entre 100 e 999
    contaCorrente.saldoCorrente = depositoInicial;
    contaCorrente.senha = senha;
  
    alert(`Conta criada com sucesso! Número da conta: ${contaCorrente.numeroConta}`);
  }
  
  function mostrarExtrato() {
    const senhaValida = verificarSenha();
    if (senhaValida) {
      alert(`Extrato de ${contaCorrente.titular} (Conta ${contaCorrente.numeroConta})\n
      Saldo Conta Corrente: R$ ${contaCorrente.saldoCorrente.toFixed(2)}\n
      Saldo Conta Poupança: R$ ${contaPoupanca.saldoPoupanca.toFixed(2)}`);
    }
  }
  
  function depositar() {
    const senhaValida = verificarSenha();
    if (senhaValida) {
      const valor = parseFloat(prompt("Informe o valor a ser depositado na Conta Corrente:"));
      if (valor > 0) {
        contaCorrente.saldoCorrente += valor;
        alert(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso!`);
      } else {
        alert("Valor inválido para depósito!");
      }
    }
  }
  
  function sacar() {
    const senhaValida = verificarSenha();
    if (senhaValida) {
      const valor = parseFloat(prompt("Informe o valor a ser sacado da Conta Corrente:"));
      if (valor > 0 && valor <= contaCorrente.saldoCorrente) {
        contaCorrente.saldoCorrente -= valor;
        alert(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso!`);
      } else {
        alert("Saldo insuficiente ou valor inválido!");
      }
    }
  }
  
  function aplicar() {
    const senhaValida = verificarSenha();
    if (senhaValida) {
      const valor = parseFloat(prompt("Informe o valor a ser transferido para a Conta Poupança:"));
      if (valor > 0 && valor <= contaCorrente.saldoCorrente) {
        contaCorrente.saldoCorrente -= valor;
        contaPoupanca.saldoPoupanca += valor;
        alert(`Aplicação de R$ ${valor.toFixed(2)} realizada com sucesso!`);
      } else {
        alert("Saldo insuficiente ou valor inválido!");
      }
    }
  }
  
  function resgatar() {
    const senhaValida = verificarSenha();
    if (senhaValida) {
      const valor = parseFloat(prompt("Informe o valor a ser transferido da Conta Poupança para a Conta Corrente:"));
      if (valor > 0 && valor <= contaPoupanca.saldoPoupanca) {
        contaPoupanca.saldoPoupanca -= valor;
        contaCorrente.saldoCorrente += valor;
        alert(`Resgate de R$ ${valor.toFixed(2)} realizado com sucesso!`);
      } else {
        alert("Saldo insuficiente ou valor inválido!");
      }
    }
  }
  
  function sair() {
    alert("Saindo do sistema. Até logo!");
  }
  
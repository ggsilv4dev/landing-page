// Validando o formulário de contato
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Coleta dos valores do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Validação simples
    if (name && email && message) {
      alert('Mensagem enviada com sucesso!');
      // Aqui seria o ponto de integração com o backend
      document.getElementById('contactForm').reset();
      $('#contactModal').modal('hide');
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  });
  
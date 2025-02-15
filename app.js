// Exemplo de uma animação simples de scroll suave
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#contato').scrollIntoView({ behavior: 'smooth' });
  });
  
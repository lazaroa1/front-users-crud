# Clients Crud

### Criar estrutura do projeto

- [x] Instalaçao da lib de navingation
  - [x] Criação do component de login
    - [x] Criação do component de checagem de dados para a recuperação de senha
      - [x] Criação do component de inserção da nova senha
        - [x] Navegação por essas telas
  - [x] Criação do component de listagem dos usuarios
    - [x] Criação do component de criação do usuarios
      - [x] Criação do component de exibição do usuario
        - [x] Navegação por essas telas

### Criação persistindo na memoria Inicial

- [x] Implementação da tela de criação do usuario
  - [x] Inserção do formulario: {Nome, login, senha, email, telefone, cpf, data de nascimento, nome da mae, status[bloqueado, ativado, inativado],
  - [x] Criação do usuario com a data de criação e a data de alteração sendo gerada por moment
  - [x] Gerar id com o length do array + 1
- [x] Implementação da tela de consulta de usuario
  - [x] Listar[nome, cpf, login, situação(status), periodo de nascimento, periodo de inserção, periodo da alteração, faixa etaria]
    - [x] Navegação para criação e edição do usuario
      - [x] alterar o status do usuario na tela de consulta
- [ ] Implementar a edição do usuario
  - [ ] Criação do usuario com a data de criação e a data de alteração sendo gerada por moment
- [ ] Implementar a exclusão de todos os usuarios ou apenas de um(exclusão ira apenas alterar o status do usuario para inativo)

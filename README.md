# Clients Crud

### Criar estrutura do projeto

- [x] Instalaçao da lib de navingation
  - [x] Criação do component de login
    - [x] Criação do component de checagem de dados para a recuperação de senha
      - [x] Criação do component de inserção da nova senha
        - [x] Navegação por essas telas
  - [x] Criação do component de listagem dos usuários
    - [x] Criação do component de criação do usuários
      - [x] Criação do component de exibição do usuário
        - [x] Navegação por essas telas

### Criação persistindo na memoria Inicial

- [x] Implementação da tela de criação do usuário
  - [x] Inserção do formulario: {Nome, login, senha, email, telefone, cpf, data de nascimento, nome da mae, status[bloqueado, ativado, inativado],
  - [x] Criação do usuário com a data de criação e a data de alteração sendo gerada por moment
  - [x] Gerar id com o length do array + 1
- [x] Implementação da tela de consulta de usuário
  - [x] Listar[nome, cpf, login, situação(status), periodo de nascimento, periodo de inserção, periodo da alteração, faixa etaria]
    - [x] Navegação para criação e edição do usuário
      - [x] alterar o status do usuário na tela de consulta
- [x] Implementar a edição do usuário
  - [x] Edição do usuário atualizar o updated_at com o moment
- [x] Implementar a exclusão de todos os usuários ou apenas de um(exclusão ira apenas alterar o status do usuário para inativo)

### Logica do login

- [x] Criar um usuário padrão(login, senha, id)
- [x] Verficação do login e senha
  - [x] Caso de falha no login, apresensar um modal alertando
- [x] Verificação dos dados(login, email) para navegar para a troca de senha
  - [x] Toast de informações invalida
- [x] Alteração de senha
  - [x] Toast de confirmação de senha alterada

### Logica do cadastro e Edição

- [x] Criação do usuário verificar se o usuário ja existe(login)
- [x] Edição do usuário verificar se o usuário ja existe(login e id)
- [x] Adição de um botão para deslogar

### Logica de consulta do usuário

- [x] Adição dos campos [busca(nome, login, cpf), status, periodo de nascimento, periodo de inserção, periodo de alteração, faixa etaria(Maior que 18 e menor que 26; Maior que 25 e menor que 31; Maior que 30 e menor que 36; Maior que 35 e menor que 41; Maior que 40.)]
  - [x] Listar apenas os que NÃO são inativos apenas que o filtro inativo esteja habilitado
    - [x] Filtro de idades

### Refatorar e estilização

- [ ] Refatorar codigos
  - [ ] Login
    - [ ] Verificação dos dados
      - [ ] Consulta de de usuários
        - [ ] Cadastro de usuários
          - [ ] Adição de mascara no cadastro de usuario
- [ ] Estilizar as telas
  - [x] Login
    - [x] Verificação dos dados
      - [ ] Consulta de de usuários
        - [x] Cadastro de usuários
          - [x] Alteracao de senha
- [ ] Adição de mascaras para o cpf, telefone

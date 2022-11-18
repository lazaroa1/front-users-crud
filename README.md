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
- [x] Implementar a edição do usuario
  - [x] Edição do usuario atualizar o updated_at com o moment
- [x] Implementar a exclusão de todos os usuarios ou apenas de um(exclusão ira apenas alterar o status do usuario para inativo)

### Logica do login

- [ ] Criação um usuario padrão(login, senha, id)
- [ ] Verficação do login e senha
  - [ ] Caso de falha no login, apresensar um modal alertando
- [ ] Verificação dos dados(login, email) para navegar para a troca de senha
- [ ] Alteração de senha

### Logica do cadastro e Edição

- [ ] criação do usuario verificar se o usuario ja existe(login)
- [ ] edição do usuario verificar se o usuario ja existe(login e id)

### Logica de consulta do usuario

- [ ] Adição dos campos [busca(nome, login, cpf), status, periodo de nascimento, periodo de inserção, periodo de alteração, faixa etaria(Maior que 18 e menor que 26; Maior que 25 e menor que 31; Maior que 30 e menor que 36; Maior que 35 e menor que 41; Maior que 40.)]
- [ ] Listar apenas os que NÃO são inativos apenas que o filtro inativo esteja habilitado

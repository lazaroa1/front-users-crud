# Clients Crud

### Criar estrutura do projeto

- [x] Instalaçao da lib de navingation
  - [x] Criação do component de login
    - [x] Criação do component de checagem de dados para a recuperação de senha
      - [x] Criação do component de inserção da nova senha
        - [x] Navegação por essas telas
  - [x] Criação do component de listagem dos uusuários
    - [x] Criação do component de criação do uusuários
      - [x] Criação do component de exibição do uusuário
        - [x] Navegação por essas telas

### Criação persistindo na memoria Inicial

- [x] Implementação da tela de criação do uusuário
  - [x] Inserção do formulario: {Nome, login, senha, email, telefone, cpf, data de nascimento, nome da mae, status[bloqueado, ativado, inativado],
  - [x] Criação do uusuário com a data de criação e a data de alteração sendo gerada por moment
  - [x] Gerar id com o length do array + 1
- [x] Implementação da tela de consulta de uusuário
  - [x] Listar[nome, cpf, login, situação(status), periodo de nascimento, periodo de inserção, periodo da alteração, faixa etaria]
    - [x] Navegação para criação e edição do uusuário
      - [x] alterar o status do uusuário na tela de consulta
- [x] Implementar a edição do uusuário
  - [x] Edição do uusuário atualizar o updated_at com o moment
- [x] Implementar a exclusão de todos os uusuários ou apenas de um(exclusão ira apenas alterar o status do uusuário para inativo)

### Logica do login

- [x] Criar um uusuário padrão(login, senha, id)
- [x] Verficação do login e senha
  - [x] Caso de falha no login, apresensar um modal alertando
- [ ] Verificação dos dados(login, email) para navegar para a troca de senha
  - [ ] Toast de informações invalidar
- [ ] Alteração de senha
  - [ ] Toast de confirmação de senha alterada

### Logica do cadastro e Edição

- [ ] Criação do uusuário verificar se o uusuário ja existe(login)
- [ ] Edição do uusuário verificar se o uusuário ja existe(login e id)
- [ ] Adição de um botão para deslogar

### Logica de consulta do uusuário

- [ ] Adição dos campos [busca(nome, login, cpf), status, periodo de nascimento, periodo de inserção, periodo de alteração, faixa etaria(Maior que 18 e menor que 26; Maior que 25 e menor que 31; Maior que 30 e menor que 36; Maior que 35 e menor que 41; Maior que 40.)]
- [ ] Listar apenas os que NÃO são inativos apenas que o filtro inativo esteja habilitado


# Projeto de Automação com WebdriverIO
Este projeto realiza testes automatizados usando **WebdriverIO** e integra relatórios gerados pelo **Allure Reports**. Além disso, o projeto está configurado para rodar no modo **headless** e usa **GitHub Actions** para integração contínua (CI).

## Requisitos
Antes de começar, certifique-se de que você tem os seguintes itens instalados:
- [Node.js](https://nodejs.org/) (v16.x ou superior)
- [npm](https://www.npmjs.com/)
- **Git** para clonar o repositório
- [Allure CLI](https://docs.qameta.io/allure/) para gerar e visualizar os relatórios de testes
- Navegador **Google Chrome** ou **Firefox** para rodar os testes localmente (opcional, pois o modo headless é configurado por padrão)

## Instalação
Siga os passos abaixo para clonar o repositório e configurar o projeto:
1. Clone o repositório:
   ```bash
   git clone https://github.com/JamesonBatista/qa.automationexercise-web.webdriverio.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd seu-repositorio
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Configuração
### Configurar Modo Headless
O modo **headless** já está configurado no arquivo `wdio.conf.js` para o navegador **Chrome**. Isso significa que os testes serão executados sem abrir a interface gráfica do navegador.

### Configurar GitHub Actions
O projeto está integrado ao **GitHub Actions** para rodar testes automaticamente em cada push ou pull request. O arquivo de workflow se encontra em `.github/workflows/ci.yml` e executa os testes no modo **headless**, além de gerar relatórios Allure.

## Executando os Testes
### Rodar os Testes Localmente
Para rodar os testes no seu ambiente local:
1. Execute o seguinte comando para rodar os testes no modo **headless**:
   ```bash
   npm run test:headless
   ```
2. Para rodar os testes com o navegador aberto (sem headless):
   ```bash
   npm run test
   ```

### Gerar e Visualizar Relatórios Allure
Após executar os testes, você pode gerar e visualizar os relatórios do **Allure** com os seguintes comandos:
1. Gerar o relatório:
   ```bash
   npm run allure:generate
   ```
2. Abrir o relatório no navegador:
   ```bash
   npm run allure:open
   ```

## Executando no GitHub Actions
Sempre que você fizer **push** ou abrir um **pull request** para a branch `main`, os testes serão executados automaticamente via **GitHub Actions**. Os relatórios Allure serão gerados e disponibilizados como artefatos para download após a execução dos testes. Para visualizá-los:
1. Vá até a aba **Actions** no repositório GitHub.
2. Clique no job mais recente.
3. Baixe o relatório Allure gerado como artefato.

## Estrutura do Projeto
Aqui está uma visão geral da estrutura de pastas do projeto:
```
.
├── .github/
│   └── workflows/
│       └── ci.yml          # Arquivo de configuração do GitHub Actions
├── node_modules/            # Dependências do projeto
├── test/                    # Diretório dos testes
│   └── specs/               # Testes automatizados
├── allure-results/           # Resultados dos testes para o Allure (gerado automaticamente)
├── allure-report/            # Relatórios gerados pelo Allure (gerado automaticamente)
├── wdio.conf.js              # Arquivo de configuração do WebdriverIO
├── package.json              # Gerenciador de pacotes e scripts
└── README.md                 # Documentação do projeto
```

## Scripts Disponíveis
Aqui estão os principais scripts disponíveis no projeto:
- **`npm run test:headless`**: Executa os testes no modo headless.
- **`npm run test`**: Executa os testes com o navegador aberto.
- **`npm run allure:generate`**: Gera o relatório Allure a partir dos resultados dos testes.
- **`npm run allure:open`**: Abre o relatório Allure no navegador.



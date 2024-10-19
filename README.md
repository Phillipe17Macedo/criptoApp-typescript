
# Apresentação de React Native e ReactJS

const coinMarketCapUrl =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
const coinMarketCapApiKey = "3f640653-8b8f-4bf3-acad-5d5b20c6e1dc";

`https://api.coingecko.com/api/v3/coins/${criptoId}/market_chart`,

conteudoFlatlist: {
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#3D3D3D",
    paddingTop: 40,
  },
  conatinerCarregando: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3D3D3D",
  },
  textoCabecalho: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#84B026",
    textAlign: "center",
  },
  criptoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#217373",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  criptoLogo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  criptoInfo: {
    flex: 1,
  },
  criptoNome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  criptoPreco: {
    fontSize: 16,
    color: "#fff",
  },
  criptoVariacao: {
    fontSize: 16,
    color: "#fff",
  },

## React Page

- [React Page Phillipe](https://phillipe17macedo.github.io/index.html)
- [Documentação React Native](https://reactnative.dev/docs/getting-started)
- [Documentação Expo](https://docs.expo.dev/)

### Requisitos para o projeto

- NodeJS instalado na máquina. [Baixar NodeJS](https://nodejs.org/en/download/)
- VS Code ou outro editor de código de sua preferência. [Baixar VS Code](https://code.visualstudio.com/)
- Git instalado na máquina. [Baixar Git](https://git-scm.com/download/win)

### Links úteis

- [Expo Go - Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)
- [Expo Go - Apple Store](https://apps.apple.com/app/expo-go/id982107779)
- Criar conta na CoinMarketCap para acesso à API: [Criar conta na CoinMarketCap](https://coinmarketcap.com/api/)

---

## Instalação e Configuração

### Passos para iniciar o projeto

1. Crie um novo projeto Expo com o seguinte comando:

```bash
npx create-expo-app --template
```

2. Ao ser solicitado, selecione a opção `Blank Typescript`.
3. Escolha um nome para o projeto.
4. Navegue até a pasta do projeto e execute o comando para instalar o Expo CLI globalmente:

```bash
npm install -g expo-cli
```

5. Ainda na pasta do projeto, inicie o projeto com o seguinte comando:

```bash
npx expo start -c
```

### Instalar Dependências

Execute os comandos abaixo dentro da pasta do seu projeto para instalar as bibliotecas necessárias:

```bash
npm install @babel/core
npm install axios
npm install expo-constants
npm install expo-status-bar
npm install expo
npm install onesignal-expo-plugin
npm install react-native-chart-kit
npm install react-native-paper
npm install react-native-safe-area-context
npm install react-native-svg
npm install react-native
npm install react
```

---

## Estruturação de Pastas

Organize as pastas do seu projeto para mantê-lo bem estruturado. Um exemplo de organização pode ser encontrado no link abaixo:

projeto/
├── api/
│   ├── api.ts
├── assets/
├── styles/
│   ├── styles.tsx
├── App.tsx
└── package.json

- [Link Notion para acompanhar](https://www.notion.so/Introdu-o-React-Native-1222bf77ef438079a0d2d7493e6daf6a?pvs=4)

- [Link Docs para acompanhar](https://www.notion.so/Introdu-o-React-Native-1222bf77ef438079a0d2d7493e6daf6a?pvs=4)

## Autor

Este projeto foi desenvolvido como parte de uma apresentação sobre React Native e ReactJS.

by Phillipe Macedo

import { ref } from "vue";

export const appConfig = () => {
  // title of the app
  const appTitle = "default";
  const appDescriptor = "app";
  const appPhrase = "default app phrase";

  // footer of the app
  const version = "0.0.1";
  const author = "default author";
  const year = "2025";

  //images
  const logo = "gataticos-old";
  const splash = "save_time";
  const background = "login-back-old";

  //variables
  const username = ref<String>("default user");

  //type of project
  const isTemplate = ref<Boolean>(true);

  //tables/collections
  const defaultCollections = [
    {
      collectionName: "items",
      data: { name: "Padrão", family: 1, obs: "Item Padrão" },
    },
  ];

  //sequences
  const sequences = ["items", "payment", "orders", "purchases", "receipts"];

  //constraints
  const constraints = ["items", "payment", "orders", "purchases", "receitps"];

  //parameters of application
  const parameters = [
    {
      name: "hourcost",
      meta: { label: "Definir Custo por Hora na produção", value: 1.15 },
    },
    {
      name: "matcost",
      meta: {
        label: "Definir Custo por Grama de material na produção",
        value: 0.13,
      },
    },
    {
      name: "packcost",
      meta: {
        label: "Definir Custo da Embalagem utilizada ao enviar pedido",
        value: 2.0,
      },
    },
  ];

  //business data
  const business = [
    {
      name: "filial",
      meta: {
        name: "Padrão",
        fantasy: "Padrão",
        phone: "9999999999",
        legal: false,
        cnpjcpf: "00000000000000",
        adress: "Rua Padrao",
        number: "00",
        mail: "test@test.com",
      },
    },
  ];

  return {
    appTitle,
    appDescriptor,
    appPhrase,
    version,
    author,
    year,
    logo,
    splash,
    background,
    username,
    isTemplate,
    defaultCollections,
    sequences,
    parameters,
    business,
    constraints,
  };
};

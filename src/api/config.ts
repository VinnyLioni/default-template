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
  };
};

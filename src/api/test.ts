import { ref } from "vue";

export const testData = () => {
  const categories = [
    "loremIpsum",
    "dolorSit",
    "ametConsectetur",
    "adipiscingElit",
  ];
  const names = ["test", "example", "sample", "demo"];

  const generateRandomItem = (id: number) => {
    return {
      id,
      name: names[Math.floor(Math.random() * names.length)],
      category: categories[Math.floor(Math.random() * categories.length)],
      quantity: Math.floor(Math.random() * 10) + 1,
      active: Math.random() < 0.5,
    };
  };

  const test = [
    { id: 1, name: "test", category: "loremIpsum", quantity: 1, active: true },
    { id: 1, name: "test", category: "loremIpsum", quantity: 1, active: true },
    { id: 1, name: "test", category: "loremIpsum", quantity: 1, active: false },
    { id: 1, name: "test", category: "loremIpsum", quantity: 1, active: true },
    { id: 1, name: "test", category: "loremIpsum", quantity: 1, active: true },
    { id: 1, name: "test", category: "loremIpsum", quantity: 1, active: false },
  ];

  // Gerando mais 15 itens dinamicamente
  for (let i = 0; i < 15; i++) {
    test.push(generateRandomItem(i + 2)); // IDs começam a partir de 2 para evitar conflitos
  }

  // Adicionando mais arrays de objetos e objetos para testes
  const users = [
    { id: 1, name: "John Doe", age: 28, email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", age: 34, email: "jane.smith@example.com" },
  ];

  const products = [
    { id: 1, name: "Product A", price: 19.99, inStock: true },
    { id: 2, name: "Product B", price: 29.99, inStock: false },
  ];

  const settings = {
    theme: "dark",
    notifications: true,
    language: "en",
  };

  //forms
  const checked = ref();
  const date = ref(new Date());
  const floatlabel = ref();
  const iconfield = ref();
  const inputgroup = ref();
  const inputmask = ref();
  const inputnumber = ref();
  const inputcurrency = ref();
  const inputpercentage = ref();
  const inputquantity = ref();
  const inputtext = ref();
  const selectedcity = ref();
  const cities = ref([
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ]);
  const selectedcities = ref([]);
  const password = ref();
  const radiobutton = ref("");
  const rating = ref<number>(0);
  const selected = ref<string>("One-Way");
  const select_options = ref(["Option-1", "Option-2"]);
  const textarea = ref("");
  const items = ref([
    {
      label: "Add",
      icon: "pi pi-pencil",
    },
    {
      label: "Update",
      icon: "pi pi-refresh",
    },
  ]);
  const events = ref(["2020", "2021", "2022", "2023"]);
  const tabs = ref([
    { title: "Title 1", content: "Content 1", value: "0" },
    { title: "Title 2", content: "Content 2", value: "1" },
    { title: "Title 3", content: "Content 3", value: "2" },
  ]);

  return {
    test,
    users,
    products,
    settings,
    checked: checked.value,
    date: date.value,
    floatlabel: floatlabel.value,
    iconfield: iconfield.value,
    inputgroup: inputgroup.value,
    inputmask: inputmask.value,
    inputnumber: inputnumber.value,
    inputcurrency: inputcurrency.value,
    inputpercentage: inputpercentage.value,
    inputquantity: inputquantity.value,
    inputtext: inputtext.value,
    selectedcity: selectedcity.value,
    cities: cities.value,
    selectedcities,
    password: password.value,
    radiobutton,
    rating: rating.value,
    selected,
    select_options: select_options.value,
    textarea: textarea.value,
    items: items.value,
    events: events.value,
    tabs: tabs.value,
  };
};

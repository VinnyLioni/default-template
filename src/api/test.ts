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
      quantity: Math.floor(Math.random() * 10) + 1, // Quantidade entre 1 e 10
    };
  };

  const test = [
    { id: 1, name: "test", category: "loremIpsum", quantity: 1 },
    { id: 1, name: "test", category: "loremIpsum", quantity: 1 },
    { id: 1, name: "test", category: "loremIpsum", quantity: 1 },
    { id: 1, name: "test", category: "loremIpsum", quantity: 1 },
    { id: 1, name: "test", category: "loremIpsum", quantity: 1 },
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

  return {
    test,
    users,
    products,
    settings,
  };
};

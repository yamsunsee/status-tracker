const socket = io();
// const rootElement = document.querySelector("#root");

// const applications = [
//   { name: "Application 01", status: false, area: "8.21" },
//   { name: "Application 02", status: true, area: "8.21" },
// ];

// const addElement = (type, content) => {
//   const item = document.createElement(type);
//   item.textContent = content;
//   rootElement.appendChild(item);
// };

// applications.map((app) => {
//   addElement("li", app.name);
// });

socket.on("message", (message) => {
  console.log(message);
  // addElement("div", message);
});

export const users =
  JSON.parse(localStorage.getItem("users")) ||
  localStorage.setItem(
    JSON.stringify([{ id: 1, login: "adm", password: "123" }])
  );

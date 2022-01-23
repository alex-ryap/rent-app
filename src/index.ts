import { getDateWithDelta } from "./date-utils.js";
import { renderSearchFormBlock } from "./search-form.js";
import { renderSearchStubBlock } from "./search-results.js";
import { renderUserBlock } from "./user.js";
import { getTodosByCount } from "./todos.js";
// import { getFavoritesAmount, getUserData } from "./user-data.js";
// import { renderToast } from "./lib.js";

window.addEventListener("DOMContentLoaded", () => {
  // const user = getUserData();
  // const favoritesAmount = getFavoritesAmount();

  // console.log("User: ", user);
  // console.log("Favorites Amount: ", favoritesAmount);

  getTodosByCount(2);

  renderUserBlock("Wade Warren", "img/avatar.png", 0);
  renderSearchFormBlock(
    getDateWithDelta(new Date(), 10),
    getDateWithDelta(new Date(), 5)
  );
  renderSearchStubBlock();
  // renderToast(
  //   {
  //     text: "Это пример уведомления. Используйте его при необходимости",
  //     type: "success",
  //   },
  //   {
  //     name: "Понял",
  //     handler: () => {
  //       console.log("Уведомление закрыто");
  //     },
  //   }
  // );
});

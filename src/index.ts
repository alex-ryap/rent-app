import { getDateWithDelta } from "./date-utils.js";
import { renderSearchFormBlock } from "./search-form.js";
import { renderSearchStubBlock } from "./search-results.js";
import { renderUserBlock } from "./user.js";
// import { renderToast } from "./lib.js";

window.addEventListener("DOMContentLoaded", () => {
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

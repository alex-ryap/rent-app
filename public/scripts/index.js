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
    renderSearchFormBlock(getDateWithDelta(new Date(), 10), getDateWithDelta(new Date(), 5));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzdDLG9FQUFvRTtBQUNwRSwwQ0FBMEM7QUFFMUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUMvQyw4QkFBOEI7SUFDOUIsZ0RBQWdEO0lBRWhELCtCQUErQjtJQUMvQixzREFBc0Q7SUFFdEQsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRW5CLGVBQWUsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEQscUJBQXFCLENBQ25CLGdCQUFnQixDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ2hDLGdCQUFnQixDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQ2hDLENBQUM7SUFDRixxQkFBcUIsRUFBRSxDQUFDO0lBQ3hCLGVBQWU7SUFDZixNQUFNO0lBQ04seUVBQXlFO0lBQ3pFLHVCQUF1QjtJQUN2QixPQUFPO0lBQ1AsTUFBTTtJQUNOLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsNENBQTRDO0lBQzVDLFNBQVM7SUFDVCxNQUFNO0lBQ04sS0FBSztBQUNQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0RGF0ZVdpdGhEZWx0YSB9IGZyb20gXCIuL2RhdGUtdXRpbHMuanNcIjtcbmltcG9ydCB7IHJlbmRlclNlYXJjaEZvcm1CbG9jayB9IGZyb20gXCIuL3NlYXJjaC1mb3JtLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJTZWFyY2hTdHViQmxvY2sgfSBmcm9tIFwiLi9zZWFyY2gtcmVzdWx0cy5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyVXNlckJsb2NrIH0gZnJvbSBcIi4vdXNlci5qc1wiO1xuaW1wb3J0IHsgZ2V0VG9kb3NCeUNvdW50IH0gZnJvbSBcIi4vdG9kb3MuanNcIjtcbi8vIGltcG9ydCB7IGdldEZhdm9yaXRlc0Ftb3VudCwgZ2V0VXNlckRhdGEgfSBmcm9tIFwiLi91c2VyLWRhdGEuanNcIjtcbi8vIGltcG9ydCB7IHJlbmRlclRvYXN0IH0gZnJvbSBcIi4vbGliLmpzXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIC8vIGNvbnN0IHVzZXIgPSBnZXRVc2VyRGF0YSgpO1xuICAvLyBjb25zdCBmYXZvcml0ZXNBbW91bnQgPSBnZXRGYXZvcml0ZXNBbW91bnQoKTtcblxuICAvLyBjb25zb2xlLmxvZyhcIlVzZXI6IFwiLCB1c2VyKTtcbiAgLy8gY29uc29sZS5sb2coXCJGYXZvcml0ZXMgQW1vdW50OiBcIiwgZmF2b3JpdGVzQW1vdW50KTtcblxuICBnZXRUb2Rvc0J5Q291bnQoMik7XG5cbiAgcmVuZGVyVXNlckJsb2NrKFwiV2FkZSBXYXJyZW5cIiwgXCJpbWcvYXZhdGFyLnBuZ1wiLCAwKTtcbiAgcmVuZGVyU2VhcmNoRm9ybUJsb2NrKFxuICAgIGdldERhdGVXaXRoRGVsdGEobmV3IERhdGUoKSwgMTApLFxuICAgIGdldERhdGVXaXRoRGVsdGEobmV3IERhdGUoKSwgNSlcbiAgKTtcbiAgcmVuZGVyU2VhcmNoU3R1YkJsb2NrKCk7XG4gIC8vIHJlbmRlclRvYXN0KFxuICAvLyAgIHtcbiAgLy8gICAgIHRleHQ6IFwi0K3RgtC+INC/0YDQuNC80LXRgCDRg9Cy0LXQtNC+0LzQu9C10L3QuNGPLiDQmNGB0L/QvtC70YzQt9GD0LnRgtC1INC10LPQviDQv9GA0Lgg0L3QtdC+0LHRhdC+0LTQuNC80L7RgdGC0LhcIixcbiAgLy8gICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxuICAvLyAgIH0sXG4gIC8vICAge1xuICAvLyAgICAgbmFtZTogXCLQn9C+0L3Rj9C7XCIsXG4gIC8vICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKFwi0KPQstC10LTQvtC80LvQtdC90LjQtSDQt9Cw0LrRgNGL0YLQvlwiKTtcbiAgLy8gICAgIH0sXG4gIC8vICAgfVxuICAvLyApO1xufSk7XG4iXX0=
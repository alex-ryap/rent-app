import { renderSearchFormBlock } from "./search-form.js";
import { renderSearchStubBlock } from "./search-results.js";
import { renderUserBlock } from "./user.js";
// import { renderToast } from "./lib.js";
window.addEventListener("DOMContentLoaded", () => {
    renderUserBlock("Wade Warren", "img/avatar.png", 0);
    renderSearchFormBlock("2022-01-15", "2022-02-22");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM1QywwQ0FBMEM7QUFFMUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUMvQyxlQUFlLENBQUMsYUFBYSxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BELHFCQUFxQixDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNsRCxxQkFBcUIsRUFBRSxDQUFDO0lBQ3hCLGVBQWU7SUFDZixNQUFNO0lBQ04seUVBQXlFO0lBQ3pFLHVCQUF1QjtJQUN2QixPQUFPO0lBQ1AsTUFBTTtJQUNOLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsNENBQTRDO0lBQzVDLFNBQVM7SUFDVCxNQUFNO0lBQ04sS0FBSztBQUNQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyU2VhcmNoRm9ybUJsb2NrIH0gZnJvbSBcIi4vc2VhcmNoLWZvcm0uanNcIjtcbmltcG9ydCB7IHJlbmRlclNlYXJjaFN0dWJCbG9jayB9IGZyb20gXCIuL3NlYXJjaC1yZXN1bHRzLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJVc2VyQmxvY2sgfSBmcm9tIFwiLi91c2VyLmpzXCI7XG4vLyBpbXBvcnQgeyByZW5kZXJUb2FzdCB9IGZyb20gXCIuL2xpYi5qc1wiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICByZW5kZXJVc2VyQmxvY2soXCJXYWRlIFdhcnJlblwiLCBcImltZy9hdmF0YXIucG5nXCIsIDApO1xuICByZW5kZXJTZWFyY2hGb3JtQmxvY2soXCIyMDIyLTAxLTE1XCIsIFwiMjAyMi0wMi0yMlwiKTtcbiAgcmVuZGVyU2VhcmNoU3R1YkJsb2NrKCk7XG4gIC8vIHJlbmRlclRvYXN0KFxuICAvLyAgIHtcbiAgLy8gICAgIHRleHQ6IFwi0K3RgtC+INC/0YDQuNC80LXRgCDRg9Cy0LXQtNC+0LzQu9C10L3QuNGPLiDQmNGB0L/QvtC70YzQt9GD0LnRgtC1INC10LPQviDQv9GA0Lgg0L3QtdC+0LHRhdC+0LTQuNC80L7RgdGC0LhcIixcbiAgLy8gICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxuICAvLyAgIH0sXG4gIC8vICAge1xuICAvLyAgICAgbmFtZTogXCLQn9C+0L3Rj9C7XCIsXG4gIC8vICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKFwi0KPQstC10LTQvtC80LvQtdC90LjQtSDQt9Cw0LrRgNGL0YLQvlwiKTtcbiAgLy8gICAgIH0sXG4gIC8vICAgfVxuICAvLyApO1xufSk7XG4iXX0=
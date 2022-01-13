import { renderBlock } from "./lib.js";
const formatDate = (year, month, day) => {
    const date = new Date(year, month, day);
    return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${date.getDate()}`;
};
export function renderSearchFormBlock(dateIn, dateOut) {
    const currentDate = new Date();
    const minDate = formatDate(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const maxDate = formatDate(currentDate.getFullYear(), currentDate.getMonth() + 2, 0);
    const minDefaultDate = minDate <= dateIn && dateIn <= maxDate && dateIn <= dateOut
        ? dateIn
        : formatDate(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);
    const maxDefaultDate = minDate <= dateOut && dateOut <= maxDate && dateIn <= dateOut
        ? dateOut
        : formatDate(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 3);
    renderBlock("search-form-block", `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${minDefaultDate}" min="${minDate}" max="${maxDate}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${maxDefaultDate}" min="${minDate}" max="${maxDate}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUV2QyxNQUFNLFVBQVUsR0FBRyxDQUFDLElBQVksRUFBRSxLQUFhLEVBQUUsR0FBVyxFQUFFLEVBQUU7SUFDOUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN4QyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUNqRSxDQUFDLENBQUMsQ0FDSCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUVGLE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxNQUFjLEVBQUUsT0FBZTtJQUNuRSxNQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQy9CLE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FDeEIsV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUN6QixXQUFXLENBQUMsUUFBUSxFQUFFLEVBQ3RCLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FDdEIsQ0FBQztJQUNGLE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FDeEIsV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUN6QixXQUFXLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUMxQixDQUFDLENBQ0YsQ0FBQztJQUVGLE1BQU0sY0FBYyxHQUNsQixPQUFPLElBQUksTUFBTSxJQUFJLE1BQU0sSUFBSSxPQUFPLElBQUksTUFBTSxJQUFJLE9BQU87UUFDekQsQ0FBQyxDQUFDLE1BQU07UUFDUixDQUFDLENBQUMsVUFBVSxDQUNSLFdBQVcsQ0FBQyxXQUFXLEVBQUUsRUFDekIsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUN0QixXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUMxQixDQUFDO0lBQ1IsTUFBTSxjQUFjLEdBQ2xCLE9BQU8sSUFBSSxPQUFPLElBQUksT0FBTyxJQUFJLE9BQU8sSUFBSSxNQUFNLElBQUksT0FBTztRQUMzRCxDQUFDLENBQUMsT0FBTztRQUNULENBQUMsQ0FBQyxVQUFVLENBQ1IsV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUN6QixXQUFXLENBQUMsUUFBUSxFQUFFLEVBQ3RCLFdBQVcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQzFCLENBQUM7SUFFUixXQUFXLENBQ1QsbUJBQW1CLEVBQ25COzs7Ozs7Ozs7Ozs7Ozs7OzsyREFpQnVELGNBQWMsVUFBVSxPQUFPLFVBQVUsT0FBTzs7Ozs0REFJL0MsY0FBYyxVQUFVLE9BQU8sVUFBVSxPQUFPOzs7Ozs7Ozs7Ozs7S0FZdkcsQ0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckJsb2NrIH0gZnJvbSBcIi4vbGliLmpzXCI7XG5cbmNvbnN0IGZvcm1hdERhdGUgPSAoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyLCBkYXk6IG51bWJlcikgPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSk7XG4gIHJldHVybiBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7KFwiMFwiICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpKS5zbGljZShcbiAgICAtMlxuICApfS0ke2RhdGUuZ2V0RGF0ZSgpfWA7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoRm9ybUJsb2NrKGRhdGVJbjogc3RyaW5nLCBkYXRlT3V0OiBzdHJpbmcpIHtcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBtaW5EYXRlID0gZm9ybWF0RGF0ZShcbiAgICBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgIGN1cnJlbnREYXRlLmdldE1vbnRoKCksXG4gICAgY3VycmVudERhdGUuZ2V0RGF0ZSgpXG4gICk7XG4gIGNvbnN0IG1heERhdGUgPSBmb3JtYXREYXRlKFxuICAgIGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgY3VycmVudERhdGUuZ2V0TW9udGgoKSArIDIsXG4gICAgMFxuICApO1xuXG4gIGNvbnN0IG1pbkRlZmF1bHREYXRlID1cbiAgICBtaW5EYXRlIDw9IGRhdGVJbiAmJiBkYXRlSW4gPD0gbWF4RGF0ZSAmJiBkYXRlSW4gPD0gZGF0ZU91dFxuICAgICAgPyBkYXRlSW5cbiAgICAgIDogZm9ybWF0RGF0ZShcbiAgICAgICAgICBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgIGN1cnJlbnREYXRlLmdldE1vbnRoKCksXG4gICAgICAgICAgY3VycmVudERhdGUuZ2V0RGF0ZSgpICsgMVxuICAgICAgICApO1xuICBjb25zdCBtYXhEZWZhdWx0RGF0ZSA9XG4gICAgbWluRGF0ZSA8PSBkYXRlT3V0ICYmIGRhdGVPdXQgPD0gbWF4RGF0ZSAmJiBkYXRlSW4gPD0gZGF0ZU91dFxuICAgICAgPyBkYXRlT3V0XG4gICAgICA6IGZvcm1hdERhdGUoXG4gICAgICAgICAgY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICBjdXJyZW50RGF0ZS5nZXRNb250aCgpLFxuICAgICAgICAgIGN1cnJlbnREYXRlLmdldERhdGUoKSArIDNcbiAgICAgICAgKTtcblxuICByZW5kZXJCbG9jayhcbiAgICBcInNlYXJjaC1mb3JtLWJsb2NrXCIsXG4gICAgYFxuICAgIDxmb3JtPlxuICAgICAgPGZpZWxkc2V0IGNsYXNzPVwic2VhcmNoLWZpbGVkc2V0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNpdHlcIj7Qk9C+0YDQvtC0PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNpdHlcIiB0eXBlPVwidGV4dFwiIGRpc2FibGVkIHZhbHVlPVwi0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LNcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBkaXNhYmxlZCB2YWx1ZT1cIjU5LjkzODYsMzAuMzE0MVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJwcm92aWRlcnNcIj5cbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByb3ZpZGVyXCIgdmFsdWU9XCJob215XCIgY2hlY2tlZCAvPiBIb215PC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByb3ZpZGVyXCIgdmFsdWU9XCJmbGF0LXJlbnRcIiBjaGVja2VkIC8+IEZsYXRSZW50PC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj4tLSE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGVjay1pbi1kYXRlXCI+0JTQsNGC0LAg0LfQsNC10LfQtNCwPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrLWluLWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiJHttaW5EZWZhdWx0RGF0ZX1cIiBtaW49XCIke21pbkRhdGV9XCIgbWF4PVwiJHttYXhEYXRlfVwiIG5hbWU9XCJjaGVja2luXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrLW91dC1kYXRlXCI+0JTQsNGC0LAg0LLRi9C10LfQtNCwPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrLW91dC1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIiR7bWF4RGVmYXVsdERhdGV9XCIgbWluPVwiJHttaW5EYXRlfVwiIG1heD1cIiR7bWF4RGF0ZX1cIiBuYW1lPVwiY2hlY2tvdXRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibWF4LXByaWNlXCI+0JzQsNC60YEuINGG0LXQvdCwINGB0YPRgtC+0Lo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwibWF4LXByaWNlXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIG5hbWU9XCJwcmljZVwiIGNsYXNzPVwibWF4LXByaWNlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj48YnV0dG9uPtCd0LDQudGC0Lg8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgIDwvZm9ybT5cbiAgICBgXG4gICk7XG59XG4iXX0=
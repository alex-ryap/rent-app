import { renderBlock } from "./lib.js";

const formatDate = (year: number, month: number, day: number) => {
  const date = new Date(year, month, day);
  return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(
    -2
  )}-${date.getDate()}`;
};

export function renderSearchFormBlock(dateIn: string, dateOut: string) {
  const currentDate = new Date();
  const minDate = formatDate(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );
  const maxDate = formatDate(
    currentDate.getFullYear(),
    currentDate.getMonth() + 2,
    0
  );

  const minDefaultDate =
    minDate <= dateIn && dateIn <= maxDate && dateIn <= dateOut
      ? dateIn
      : formatDate(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() + 1
        );
  const maxDefaultDate =
    minDate <= dateOut && dateOut <= maxDate && dateIn <= dateOut
      ? dateOut
      : formatDate(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() + 3
        );

  renderBlock(
    "search-form-block",
    `
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
    `
  );
}

import { renderBlock } from "./lib.js";
export function renderUserBlock(name, avatar, favoriteItemsAmount) {
    const favoritesCaption = favoriteItemsAmount >= 1 ? favoriteItemsAmount : "ничего нет";
    const hasFavoriteItems = favoriteItemsAmount >= 1 ? true : false;
    renderBlock("user-block", `
    <div class="header-container">
      <img class="avatar" src="${avatar}" alt="${name}" />
      <div class="info">
          <p class="name">${name}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? " active" : ""}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFdkMsTUFBTSxVQUFVLGVBQWUsQ0FDN0IsSUFBWSxFQUNaLE1BQWMsRUFDZCxtQkFBMkI7SUFFM0IsTUFBTSxnQkFBZ0IsR0FDcEIsbUJBQW1CLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO0lBQ2hFLE1BQU0sZ0JBQWdCLEdBQUcsbUJBQW1CLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUVqRSxXQUFXLENBQ1QsWUFBWSxFQUNaOztpQ0FFNkIsTUFBTSxVQUFVLElBQUk7OzRCQUV6QixJQUFJOztrQ0FHbEIsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFDakMsU0FBUyxnQkFBZ0I7Ozs7S0FJaEMsQ0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckJsb2NrIH0gZnJvbSBcIi4vbGliLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJVc2VyQmxvY2soXG4gIG5hbWU6IHN0cmluZyxcbiAgYXZhdGFyOiBzdHJpbmcsXG4gIGZhdm9yaXRlSXRlbXNBbW91bnQ6IG51bWJlclxuKSB7XG4gIGNvbnN0IGZhdm9yaXRlc0NhcHRpb24gPVxuICAgIGZhdm9yaXRlSXRlbXNBbW91bnQgPj0gMSA/IGZhdm9yaXRlSXRlbXNBbW91bnQgOiBcItC90LjRh9C10LPQviDQvdC10YJcIjtcbiAgY29uc3QgaGFzRmF2b3JpdGVJdGVtcyA9IGZhdm9yaXRlSXRlbXNBbW91bnQgPj0gMSA/IHRydWUgOiBmYWxzZTtcblxuICByZW5kZXJCbG9jayhcbiAgICBcInVzZXItYmxvY2tcIixcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlci1jb250YWluZXJcIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJhdmF0YXJcIiBzcmM9XCIke2F2YXRhcn1cIiBhbHQ9XCIke25hbWV9XCIgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJuYW1lXCI+JHtuYW1lfTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImZhdlwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJoZWFydC1pY29uJHtcbiAgICAgICAgICAgICAgaGFzRmF2b3JpdGVJdGVtcyA/IFwiIGFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgfVwiPjwvaT4ke2Zhdm9yaXRlc0NhcHRpb259XG4gICAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxuICApO1xufVxuIl19
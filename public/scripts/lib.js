export function renderBlock(elementId, html) {
    const element = document.getElementById(elementId);
    element.innerHTML = html;
}
export function renderToast(message, action) {
    let messageText = "";
    if (message != null) {
        messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${(action === null || action === void 0 ? void 0 : action.name) || "Закрыть"}</button>
      </div>
    `;
    }
    renderBlock("toast-block", messageText);
    const button = document.getElementById("toast-main-action");
    if (button != null) {
        button.onclick = function () {
            if (action != null && action.handler != null) {
                action.handler();
            }
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFVBQVUsV0FBVyxDQUFDLFNBQVMsRUFBRSxJQUFJO0lBQ3pDLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDM0IsQ0FBQztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUMsT0FBTyxFQUFFLE1BQU07SUFDekMsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBRXJCLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtRQUNuQixXQUFXLEdBQUc7K0NBQzZCLE9BQU8sQ0FBQyxJQUFJO2FBQzlDLE9BQU8sQ0FBQyxJQUFJO3lDQUNnQixDQUFBLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxJQUFJLEtBQUksU0FBUzs7S0FFN0QsQ0FBQztLQUNIO0lBRUQsV0FBVyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUV4QyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDNUQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1FBQ2xCLE1BQU0sQ0FBQyxPQUFPLEdBQUc7WUFDZixJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQzVDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNsQjtRQUNILENBQUMsQ0FBQztLQUNIO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiByZW5kZXJCbG9jayhlbGVtZW50SWQsIGh0bWwpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRvYXN0KG1lc3NhZ2UsIGFjdGlvbikge1xuICBsZXQgbWVzc2FnZVRleHQgPSBcIlwiO1xuXG4gIGlmIChtZXNzYWdlICE9IG51bGwpIHtcbiAgICBtZXNzYWdlVGV4dCA9IGBcbiAgICAgIDxkaXYgaWQ9XCJpbmZvLWJsb2NrXCIgY2xhc3M9XCJpbmZvLWJsb2NrICR7bWVzc2FnZS50eXBlfVwiPlxuICAgICAgICA8cD4ke21lc3NhZ2UudGV4dH08L3A+XG4gICAgICAgIDxidXR0b24gaWQ9XCJ0b2FzdC1tYWluLWFjdGlvblwiPiR7YWN0aW9uPy5uYW1lIHx8IFwi0JfQsNC60YDRi9GC0YxcIn08L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICByZW5kZXJCbG9jayhcInRvYXN0LWJsb2NrXCIsIG1lc3NhZ2VUZXh0KTtcblxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvYXN0LW1haW4tYWN0aW9uXCIpO1xuICBpZiAoYnV0dG9uICE9IG51bGwpIHtcbiAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChhY3Rpb24gIT0gbnVsbCAmJiBhY3Rpb24uaGFuZGxlciAhPSBudWxsKSB7XG4gICAgICAgIGFjdGlvbi5oYW5kbGVyKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19
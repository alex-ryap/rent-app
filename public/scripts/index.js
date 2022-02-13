var _a;
import { Book } from "./book.js";
import { books } from "./book-collection.js";
function findSuitableBook(genre, pagesLimit, multipleRecommendations = true) {
    var _a;
    const findAlgorithm = (book) => {
        return book.genre === genre && book.pagesAmount <= pagesLimit;
    };
    if (multipleRecommendations) {
        return books.filter(findAlgorithm);
    }
    else {
        return (_a = books.find(findAlgorithm)) !== null && _a !== void 0 ? _a : [];
    }
}
const recommendedBook = findSuitableBook("fantasy", 1000);
if (recommendedBook instanceof Book) {
    console.log(recommendedBook.name);
}
else {
    console.log((_a = recommendedBook[0]) === null || _a === void 0 ? void 0 : _a.name);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDakMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTdDLFNBQVMsZ0JBQWdCLENBQ3ZCLEtBQWEsRUFDYixVQUFrQixFQUNsQix1QkFBdUIsR0FBRyxJQUFJOztJQUU5QixNQUFNLGFBQWEsR0FBRyxDQUFDLElBQVUsRUFBRSxFQUFFO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxVQUFVLENBQUM7SUFDaEUsQ0FBQyxDQUFDO0lBRUYsSUFBSSx1QkFBdUIsRUFBRTtRQUMzQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDcEM7U0FBTTtRQUNMLE9BQU8sTUFBQSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQ0FBSSxFQUFFLENBQUM7S0FDeEM7QUFDSCxDQUFDO0FBRUQsTUFBTSxlQUFlLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRTFELElBQUksZUFBZSxZQUFZLElBQUksRUFBRTtJQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztDQUNuQztLQUFNO0lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFBLGVBQWUsQ0FBQyxDQUFDLENBQUMsMENBQUUsSUFBSSxDQUFDLENBQUM7Q0FDdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb29rIH0gZnJvbSBcIi4vYm9vay5qc1wiO1xuaW1wb3J0IHsgYm9va3MgfSBmcm9tIFwiLi9ib29rLWNvbGxlY3Rpb24uanNcIjtcblxuZnVuY3Rpb24gZmluZFN1aXRhYmxlQm9vayhcbiAgZ2VucmU6IHN0cmluZyxcbiAgcGFnZXNMaW1pdDogbnVtYmVyLFxuICBtdWx0aXBsZVJlY29tbWVuZGF0aW9ucyA9IHRydWVcbik6IEJvb2sgfCBCb29rW10ge1xuICBjb25zdCBmaW5kQWxnb3JpdGhtID0gKGJvb2s6IEJvb2spID0+IHtcbiAgICByZXR1cm4gYm9vay5nZW5yZSA9PT0gZ2VucmUgJiYgYm9vay5wYWdlc0Ftb3VudCA8PSBwYWdlc0xpbWl0O1xuICB9O1xuXG4gIGlmIChtdWx0aXBsZVJlY29tbWVuZGF0aW9ucykge1xuICAgIHJldHVybiBib29rcy5maWx0ZXIoZmluZEFsZ29yaXRobSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJvb2tzLmZpbmQoZmluZEFsZ29yaXRobSkgPz8gW107XG4gIH1cbn1cblxuY29uc3QgcmVjb21tZW5kZWRCb29rID0gZmluZFN1aXRhYmxlQm9vayhcImZhbnRhc3lcIiwgMTAwMCk7XG5cbmlmIChyZWNvbW1lbmRlZEJvb2sgaW5zdGFuY2VvZiBCb29rKSB7XG4gIGNvbnNvbGUubG9nKHJlY29tbWVuZGVkQm9vay5uYW1lKTtcbn0gZWxzZSB7XG4gIGNvbnNvbGUubG9nKHJlY29tbWVuZGVkQm9va1swXT8ubmFtZSk7XG59XG4iXX0=
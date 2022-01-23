const search = (formData) => {
    console.log(formData);
};
export const handlerSearchForm = (e) => {
    e.preventDefault();
    const dateIn = (document.getElementById("check-in-date")).value;
    const dateOut = (document.getElementById("check-out-date")).value;
    const maxPrice = (document.getElementById("max-price")).value;
    search({ dateIn, dateOut, maxPrice });
};

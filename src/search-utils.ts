interface SearchFormData {
  dateIn: string;
  dateOut: string;
  maxPrice: string;
}

const search = (formData: SearchFormData): void => {
  console.log(formData);
};

export const handlerSearchForm = (e: Event) => {
  e.preventDefault();
  const dateIn: string = (<HTMLInputElement>(
    document.getElementById("check-in-date")
  )).value;
  const dateOut: string = (<HTMLInputElement>(
    document.getElementById("check-out-date")
  )).value;
  const maxPrice: string = (<HTMLInputElement>(
    document.getElementById("max-price")
  )).value;

  search({ dateIn, dateOut, maxPrice });
};

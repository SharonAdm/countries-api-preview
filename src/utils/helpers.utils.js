export function commafy(num) {
  let str = num.toString().split(".");
  if (str[0].length >= 5) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  }
  if (str[1] && str[1].length >= 5) {
    str[1] = str[1].replace(/(\d{3})/g, "$1 ");
  }
  return str.join(".");
}

export function getCurrency(currencyObject) {
  let str = "";
  Object.keys(currencyObject).forEach((key) => {
    str += currencyObject[key].name + " ";
  });
  return str;
}

export function getLanguages(languagesObject) {
  let str = "";
  Object.keys(languagesObject).forEach((key) => {
    str += languagesObject[key] + " ";
  });
  return str;
}

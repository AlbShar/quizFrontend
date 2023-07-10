// We use the function, when there is html tags in JSON.
type JSONText =  {
  selector: string;
  json: string;
}

const convertJSONToText = (dataArray: JSONText[]): void => {
  dataArray.forEach((data) => {
    if (document.querySelector(data.selector)) {
      (document.querySelector(data.selector) as HTMLHtmlElement).innerHTML =
        JSON.parse(JSON.stringify(data.json));
    }
  });
};

export { convertJSONToText };

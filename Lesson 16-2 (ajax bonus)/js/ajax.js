
const ajaxFunc = (url, method, functionName, dataArray) => {
  let xhttp = new XMLHttpRequest();
  xhttp.open(method, url, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(requestData(dataArray));

  xhttp.onreadystatechange = () => {
    if (this.readyState == 4 && this.status == 200) {
      functionName(this.response);
    }
  }
}

const requestData = (dataArr) => {
  let out = "";
  for (let key in dataArr) {
    out += `${key} = ${dataArr[key]}&`;
  }
  console.log(out);
  return out;
}


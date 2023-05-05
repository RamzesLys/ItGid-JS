
const ajaxFunc = (url, method, functionName, dataArray) => {
  let xhttp = new XMLHttpRequest();
  xhttp.open(method, url, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhttp.send(dataArray);
  xhttp.onreadystatechange = () => {
    if (this.readyState == 4 && this.status == 200) {
      functionName(this);
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

const f1 = (data) => {
  console.log(data);
}

let a = {
  "name": "Ivan",
  "age": 53
}

ajaxFunc('back.php', 'post', f1, requestData(a))
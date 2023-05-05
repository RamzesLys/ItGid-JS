//const ajaxFunc = (url, method, functionName, dataArray)
//POST -> date = '2018-12-30'


document.querySelector('button').onclick = function() {
  let input = document.querySelector('#inp-date');
  let date = {"data": input.value};
  ajaxFunc('datetime.php', 'POST', showTime, date);
}


function showTime(data) {
  data = JSON.parse(data);
  // alert(data.F);
  console.log(data);
  console.log(data.F);
}


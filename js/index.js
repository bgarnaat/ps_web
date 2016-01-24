var labels_header = ['prep complete', 'double check', 'date', 'time', 'room', 'instructor'];
var data_check = [1, 2, 3, 4, 5, 6];
var data_check_dbl = ['A', 'B', 'C', 'D', 'E', 'F'];
var data_date = ['B', 'C', 'D', 'E', 'F', 'A'];
var data_time = ['C', 'D', 'E', 'F', 'A', 'B'];
var data_room = ['D', 'E', 'F', 'A', 'B', 'C'];
var data_instrcutor = ['E', 'F', 'A', 'B', 'C', 'D'];
var data = [data_check, data_check_dbl, data_date, data_time, data_room, data_instrcutor];

function createTable(headers, content) {
  console.log('starting... createTable');
  var tbl = document.createElement('table');
  console.log('starting... create header');
  createRow(tbl, '', headers, 'th');
  console.log('finished create header');
  console.log('starting... create content');
  for (var i = 0; i < data_date.length; i++) {
    console.log('starting... createRow: ' + i);
    createRow(tbl, i, data, 'td');
    console.log('finished createRow: ' +  i);
  }
  console.log('finished create content');
  document.body.appendChild(tbl);
  console.log('finished createTable');
}
function createRow(tbl, i, content, cell_type) {
  var row = document.createElement('tr');
  for (var j = 0; j < content.length; j++) {
    console.log('starting... createCell: ' + j);
    createCell(row, i, content[j], cell_type);
    console.log('finished createCell: ' + j);
  }
  tbl.appendChild(row);
  console.log('finished createRow');
}
function createCell(row, i, content, cell_type) {
  console.log('starting... ' + i);
  var cell = document.createElement(cell_type);
  typeof(i) === "number" ? cell.textContent = content[i] : cell.textContent = content;
  row.appendChild(cell);
  console.log('finished: ' + i);
}

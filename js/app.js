'use strict';

function Employee(name) {
  this.name = name;
}

function Schedule() {
  this.monday = [];
  this.tuesday = [];
  this.wednesday = [];
  this.thursday = [];
  this.friday = [];
}


function makeTable(){
  var main = document.getElementById('main');
  var table = document.getElementById('table');
  table.setAttribute('id', 'table');
  main.appendChild(table);
}
makeTable();

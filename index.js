/*jslint node: true, evil: true */
'use strict';

var view = require('./view');
console.log = view.log;

var Gun = require('gun/gun');
window.gun = new Gun().get('repl');
var $ = require('jquery');

$('form').submit(function (e) {
  e.stopPropagation();
  e.preventDefault();
  var back, JS;
  JS = $(this).children('input').val();
  try {
    back = eval(JS);
  } catch (error) {
    return view.log(error.message);
  }
  view.log(back);
});

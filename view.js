/*jslint node: true, nomen: true*/
'use strict';

var $ = require('jquery');
var log = $('#log');
var Gun = require('gun/gun');
var prettyjson = require('prettyjson');
var view;

module.exports = view = {
  log: function (data) {
    if (!data) {
      return;
    }
    if (typeof data !== 'string') {
      if (Gun.is(data)) {
        return data.val(function (val) {
          delete val._;
          view.log(val);
        });
      }

      try {
        data = prettyjson.render(data);
      } catch (e) {
        data = String(data);
      }
    } else if (data === 'Warning! You have no peers to connect to!') {
      return;
    }
    log.text(data.replace(/!$/, ''));

    return exports;
  }
};

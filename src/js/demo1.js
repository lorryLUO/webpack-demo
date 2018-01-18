
var obj = require('./tool.js');

var demo1 = {
    init: function () {
        this.bindEvent();
    },
    bindEvent: function () {
        //var demo1 = document.getElementsByClassName('demo1')[0];
        var demo1 = obj.getDom('demo1');
        demo1.onclick = this.changeStyle;
    },
    changeStyle: function () {
        this.style.width = '200px';
        this.style.height = '200px';
        this.style.background = 'green';
        console.log('1');
    }
}

module.exports = demo1;
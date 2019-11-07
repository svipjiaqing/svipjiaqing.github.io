(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
    document.getElementById('go').addEventListener('click', start);
    
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() =>engine.toText('HELLO '))

        .then(() => engine.shake())

         .then(() => engine.toText('明辉 '))

        .then(() => engine.shake())

        .then(() => engine.toText('TODAY '))

        .then(() => engine.shake())

        .then(() => engine.toText('BELONG TO'))

        .then(() => engine.shake())

        .then(() => engine.toText('YOU '))

        .then(() => engine.shake())

        .then(() => engine.toText('一定要'))

        .then(() => engine.shake())

        .then(() => engine.toText('HAPPY❤'))

        .then(() => engine.shake())

        .then(() => engine.toText('Best Wishes'))

        .then(() => engine.shake())

        .then(() => engine.toText('AND'))

        .then(() => engine.shake())
         .then(() => engine.toText('DONT'))

        .then(() => engine.shake())
        .then(() => engine.toText('FORGET'))

        .then(() => engine.shake())

        .then(() => engine.toText('ME'))

        .then(() => engine.shake())

        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();

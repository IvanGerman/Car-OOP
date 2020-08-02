(function() {
    var garage = document.getElementById('garage');

    for(var i = 0; i < 77; i++) {
        var div = document.createElement('div');
        var id = 'car' + i;
        div.id = id;
        garage.appendChild(div);
        startCarProcess(id);
    };
})();



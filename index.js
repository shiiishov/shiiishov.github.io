function loadStyleSheet(url) {
    var styleSheet = document.createElement('link');
    styleSheet.href = url;
    styleSheet.type = 'text/css';
    styleSheet.rel = 'stylesheet';
    document.getElementsByTagName('head')[0].appendChild(styleSheet);
}

var date = new Date(); // Получаем текущие дату и время
var h = date.getHours(); // Получаем текущий час
    if (h < 8 || h > 21) 
        loadStyleSheet('night.css'); // Если сейчас ночь, то меняем файл стилей
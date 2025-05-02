(function () {
    'use strict';

    // Добавим мультиязычную поддержку (по аналогии с head_filter.js)
    Lampa.Lang.add({
        hello_plugin_name: {
            ru: 'Привет-плагин',
            en: 'Hello Plugin'
        },
        hello_plugin_description: {
            ru: 'Добавляет текст Hello в шапку',
            en: 'Adds Hello text to header'
        }
    });

    function startPlugin() {
        // Описание плагина для Lampa
        var manifest = {
            type: 'other',
            version: '1.0.0',
            name: Lampa.Lang.translate('hello_plugin_name'),
            description: Lampa.Lang.translate('hello_plugin_description'),
            component: 'hello_plugin'
        };

        Lampa.Manifest.plugins = manifest;

        // Функция добавляет надпись Hello в шапку
        function addHelloToHeader() {
            let hello = $('<div style="color: #fff; margin-left: 1em; font-weight: bold;">Hello</div>');
            $('.head .head__body').append(hello); // Вставляем в левую часть шапки
        }

        // Дождемся готовности приложения
        if (window.appready) {
            addHelloToHeader();
        } else {
            Lampa.Listener.follow('app', function (e) {
                if (e.type === 'ready') addHelloToHeader();
            });
        }
    }

    // Запускаем плагин
    startPlugin();
})();

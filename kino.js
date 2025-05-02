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
            var html$g;
            console.log("qweqwe");
            let hello = $('<div class="card selector layer--visible layer--render card--loaded"><div class="card__view"><img src="http://tmdbimg.rootu.top/t/p/w500//tgSmrSZHMtI0PFBiDIrjfRV3qAm.jpg" class="card__img"><div class="card__icons"><div class="card__icons-inner"></div></div><div class="card__vote">6.6</div></div><div class="card__title">Опустошение</div><div class="card__age">2025</div></div>');
            $('.head .head__body').append(hello); // Вставляем в левую часть шапки

            html$g = Lampa.Template.get('head');
            console.log(html$g);
            html$g.find('.card--loaded').on('hover:enter', function () {
                
            console.log("Testtt");
              ParentalControl.personal('settings', function () {
                Controller.toggle('settings');
              }, false, true);
            });
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

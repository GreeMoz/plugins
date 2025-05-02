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
            let hello = $('<div class="selector card--loaded"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64" aria-hidden="true" role="img"> <rect x="10" y="32" width="44" height="10" rx="5" ry="5" fill="#fff" /><circle cx="20" cy="28" r="8" fill="#fff" /><circle cx="32" cy="24" r="8" fill="#fff" /><circle cx="44" cy="28" r="8" fill="#fff" /></svg></div>');
            $('.head .head__body').append(hello); // Вставляем в левую часть шапки

            $('.head .card--loaded').on('hover:enter', function () {
                
            Lampa.Activity.push({
    url: undefined,
    component: 'full',
    id: 40290,
    method: 'tv',
    card: {
        "adult": false,
        "backdrop_path": "/vlg654HjwNc1J8bmjBtmRxgLs36.jpg",
        "genre_ids": [
            10764
        ],
        "id": 40290,
        "origin_country": [
            "US"
        ],
        "original_language": "en",
        "original_name": "MasterChef",
        "overview": "Огромное количество кулинаров принимает участие в состязаниях, главным призом которых является статус «Лучшего повара Америки». Помимо этого, они получают 250 000 долларов, а также возможность за счет издательства выпустить книгу, в которой будут представлены их рецепты. Судят участников лучшие кулинары. Рекомендуем к просмотру! Шоу вам непременно понравится.",
        "popularity": 25.1628,
        "poster_path": "/42gO1qCC6GPtHKNXvOdhunhzyS3.jpg",
        "first_air_date": "2010-07-27",
        "name": "Лучший повар Америки",
        "vote_average": 7.075,
        "vote_count": 272,
        "ready": true,
        "title": "Лучший повар Америки",
        "original_title": "MasterChef",
        "release_date": "2010-07-27",
        "release_year": "2010",
        "source": "tmdb"
    },
    source: 'tmdb'
  });
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

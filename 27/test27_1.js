console.log("Работа Валерии!");
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [58.138155, 52.674523],
        zoom: 17
    });

    var myPlacemark = new ymaps.Placemark([58.138155, 52.674523], {
        balloonContent: 'г. Глазов, Первомайская улица, 25'
    });
    myMap.geoObjects.add(myPlacemark);

    ymaps.panorama.createPlayer(
        'panorama',
        [58.138480, 52.674803],
        {
            direction: [204.4, 10],
            span: [104.86, 60]
        }
    ).done(
        function (player) {
            console.log("Панорама Первомайской, 25 успешно загружена!");
        },
        function (error) {
            console.error("Ошибка загрузки панорамы:", error.message);
        }
    );
}
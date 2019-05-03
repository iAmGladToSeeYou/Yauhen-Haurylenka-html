var getWeather = {

  takeWeather: function(event) {
      var request = new XMLHttpRequest();
      var target = event.target;
      request.open('GET', 'http://localhost:3000/', true);

      request.onreadystatechange = function() {
        if (request.readyState != 4) return;
        if (request.status != 200) {
          alert('Ошибка ' + request.status + ': ' + request.statusText);
          return;
        }else {
          var weatherObj = JSON.parse(request.responseText);
          var today = new Date(weatherObj.dt*1000).getDate();
          var infoDay = document.body.querySelector('.daysinfo');
          
          if(today == target.getAttribute('value') && target.style.backgroundColor === 'red') {
            var sunRise = new Date(weatherObj.sys.sunrise*1000);
            var sunSet = new Date(weatherObj.sys.sunset*1000);
            var info = '';
            info += '<p style="font-size: 16px">' + weatherObj.name + '</p>';
            info += '<p style="font-size: 14px">' + '<img src = "http://openweathermap.org/img/w/' + weatherObj.weather[0].icon + '.png" +  + ></p>';
            info += '<p style= "font-size: 14px">Средняя Температура: ' + Math.ceil(weatherObj.main.temp - 273,15) + '°' + '</p>';

            info += '<p style = "font-size: 14px">Влажность:' + weatherObj.main.humidity + '%' + '</p>';

            info += '<p style = "font-size: 14px">Скорость ветра: ' +weatherObj.wind.speed +'м/с' + '</p>';

            info+= '<p style = "font-size: 14px">Восход солнца: ' +
            sunRise.getHours() + ':' + sunRise.getMinutes() + '</p>';

            info+= '<p style = "font-size: 14px">Заход солнца: ' +
            sunSet.getHours() + ':' + sunSet.getMinutes() + '</p>';


            infoDay.innerHTML = info;
          }else {
            var info = '<p style="font-size: 18px">Извините погоды на этот день нету</p> ';
            info += '<img src="cat.png" style="width:100px; padding-top:40px">';
            infoDay.innerHTML = info;
          }
        };
      };

    request.send();
  }
};

var daysBlock = document.body.querySelector('.daysnumber');
daysBlock.addEventListener('click', getWeather.takeWeather);

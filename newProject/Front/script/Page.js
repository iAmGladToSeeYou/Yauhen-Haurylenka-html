function Calendar(selector) {
  var parent = document.querySelector(selector);
  var year = new Date().getFullYear();
  var month = new Date().getMonth();
  var index = 0;
  var daysInCurrentMonth = 0;
  var arrDaysName = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  var arrDaysCount = [];

  function monthMinus() {
    month--;
    if(month === -1) {
      month = 11;
      year--;
    };
  };

  function monthPlus() {
    month++;
    if(month === 12) {
      month = 0;
      year++;
    };
  };

  function getArrDays() {
    var firstDay = 1;
    daysInCurrentMonth = new Date(year, month+1,0).getDate();
    index = new Date(year, month, firstDay).getDay();
    if(index === 1 || index === 0) {
      index += 6;
    } else {
      index -= 1;
    };
    for(i = 0; i < 42; i++) {
      arrDaysCount[i] = (new Date(year,month,firstDay - index)).getDate();
      firstDay++;
    };
  };
  getArrDays();


  this.render = function () {
    var container = helpers.createElement('div', 'container');
    parent.appendChild(container);

    var monthContainer = helpers.createElement('div', 'monthContainer');
    container.appendChild(monthContainer);

    var monthArrowLeft = helpers.createElement('div', 'arrowLeft');
    monthArrowLeft.innerHTML = '<i class="fas fa-arrow-alt-circle-left"></i>';
    monthArrowLeft.addEventListener('mouseup',sizeUp);
    monthArrowLeft.addEventListener('mousedown', sizeDown);
    monthArrowLeft.addEventListener('click', prevMonth);
    monthContainer.appendChild(monthArrowLeft);

    var month = helpers.createElement('div', 'month');
    monthContainer.appendChild(month);

    var monthArrowRigth = helpers.createElement('div', 'arrowRigth');
    monthArrowRigth.innerHTML = '<i class="fas fa-arrow-alt-circle-right"></i>';
    monthArrowRigth.addEventListener('mouseup',sizeUp);
    monthArrowRigth.addEventListener('mousedown', sizeDown);
    monthArrowRigth.addEventListener('click',nextMonth);
    monthContainer.appendChild(monthArrowRigth);

    var daysNameContainer = helpers.createElement('div', 'daysNameContainer');
    container.appendChild(daysNameContainer);

    for(var i = 0; i < arrDaysName.length; i++) {
      var dayName = helpers.createElement('div', 'daysNameContainer_name');
      dayName.innerHTML = arrDaysName[i];
      daysNameContainer.appendChild(dayName);
    };

    var daysNumbContainer = helpers.createElement('div', 'daysNumberContainer');
    daysNumbContainer.addEventListener('mousedown', changeDaysWeather)
    container.appendChild(daysNumbContainer);

    for(var i = 0; i < arrDaysCount.length; i++) {
      var day = helpers.createElement('div', 'daysNumberContainer_number');
      day.innerHTML = arrDaysCount[i];
      daysNumbContainer.appendChild(day);
    };

    var weatherContainer = helpers.createElement('div', 'container_weather');
    weatherContainer.innerHTML = new Date().getDate();
    container.appendChild(weatherContainer);

  };


  function renderItems() {
    var daysParent = document.querySelector('.daysNumberContainer');
    var monthParent = document.querySelector('.month');
    monthParent.innerHTML = new Date(year,month,1).toLocaleString('en-Us', {month: 'long'}) + ' ' + year;

    for(var i = 0; i < arrDaysCount.length; i++) {
      day = document.querySelectorAll('.daysNumberContainer_number');
      day[i].innerHTML = arrDaysCount[i];
      day[i].classList.remove('daysNumberContainer_number_color');
      day[i].classList.remove('daysNumberContainer_number_bg')

      if(i >= index && i < index + daysInCurrentMonth) {
        day[i].classList.add('daysNumberContainer_number_color');
      };
      if(month === new Date().getMonth() && year === new Date().getFullYear()) {
        if(i === index + new Date().getDate()) {
          day[i-1].classList.add('daysNumberContainer_number_bg');
        };
      };
    };

  };

  function changeDaysWeather(event) {
    var weather = document.querySelector('.container_weather');
    weather.innerHTML = event.target.innerHTML;
  }

  function sizeDown() {
    this.classList.toggle('arrowRigth_down');
  };

  function sizeUp() {
    this.classList.toggle('arrowRigth_down');
  };

  function nextMonth() {
    monthPlus();
    getArrDays();
    renderItems();
  };

  function prevMonth() {
    monthMinus();
    getArrDays();
    renderItems();
  };

  this.nextMonth = nextMonth;
  this.prevMonth = prevMonth;
  this.renderItems = renderItems;
};


var helpers = {
  createElement: function(element, name) {
    var elem = document.createElement(element);
    elem.classList.add(name);
    return elem;
  }
}

var calendar = new Calendar('.main');
calendar.render();
calendar.renderItems();

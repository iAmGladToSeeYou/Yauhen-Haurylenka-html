function Render(parent, arrDays, monthAndYear) {
  this.parent = parent;
  this.arrDays = arrDays;
  this.monthAndYear = monthAndYear;
  this.arrNameDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
};

Render.prototype.createElement = function(element, className, classNameParent) {
  var parentElem = document.querySelector(classNameParent);
  var element = document.createElement(element);
  element.classList.add(className);
  parentElem.appendChild(element);
  return element;
};

Render.prototype.addAllElements = function() {
  var container = this.createElement('div', 'container', '.main');
  var monthContainer = this.createElement('div', 'monthContainer', '.container');
  var arrowLeft = this.createElement('div', 'arrowLeft', '.monthContainer');
  arrowLeft.innerHTML ='<i class="fas fa-arrow-alt-circle-left"></i>';
  var month = this.createElement('div', 'month', '.monthContainer');
  month.innerHTML = this.monthAndYear;
  var arrowRigth = this.createElement('div', 'arrowRigth', '.monthContainer');
  arrowRigth.innerHTML ='<i class="fas fa-arrow-alt-circle-right"></i>';
  var daysNameContainer = this.createElement('div', 'daysNameContainer', '.container');

  for(var i = 0; i < this.arrNameDays.length; i++) {
    var dayName = this.createElement('div', 'daysNameContainer_name', '.daysNameContainer');
    dayName.innerHTML = this.arrNameDays[i];
  };

  var daysNumberContainer = this.createElement('div', 'daysNumberContainer', '.container');

  for(var i = 0; i < this.arrDays.length; i++) {
    var daysCount = this.createElement('div', 'daysNumberContainer_number', '.daysNumberContainer');
  };

  var containerWeather = this.createElement('div', 'container_weather', '.container');

};

Render.prototype.renderDateMonth = function() {
  for(var i = 0; i < this.arrDays.length; i++) {
    var day = document.querySelectorAll('.daysNumberContainer_number');
    day[i].classList.remove('daysNumberContainer_number_bg');
    day[i].classList.remove('daysNumberContainer_number_color')
    day[i].innerHTML = this.arrDays[i];
    if(i > this.arrDays.firstDayIndex && i < this.arrDays.lastDayIndex) {
      day[i].classList.add('daysNumberContainer_number_color');
    }
  };
  if(this.arrDays.currentDay) {
    day[this.arrDays.today].classList.add('daysNumberContainer_number_bg');
  }

  var month = document.querySelector('.month');
  month.innerHTML = this.monthAndYear;

  var weather = document.querySelector('.container_weather');
  weather.innerHTML = new Date().getDate();
};

function Calendar() {
  this.model = new GetArrDays();
  this.render = new Render('main', this.model.calculated(), this.model.monthAndYear());
}

Calendar.prototype.nextMonth = function() {
  this.model.month++;
  if(this.model.month === 12) {
    this.model.month = 0;
    this.model.year++
  };
  this.model.index = this.index = new Date(this.model.year, this.model.month, 1).getDay();
  this.render.renderDateMonth(this.model.calculated(), this.model.monthAndYear());
};

Calendar.prototype.prevMonth = function() {
  this.model.month--;
  if(this.model.month === -1) {
    this.model.month = 11;
    this.model.year--;
  };
  this.model.index = this.index = new Date(this.model.year, this.model.month, 1).getDay();
  this.render.renderDateMonth(this.model.calculated(),this.model.monthAndYear());
};

Calendar.prototype.arrowDown = function(event) {
  this.classList.toggle('arrowRigth_down');
};

Calendar.prototype.weatherShow = function(event) {
  var weatherContainer = document.querySelector('.container_weather');
  weatherContainer.innerHTML = event.target.innerHTML;
}

Calendar.prototype.addEvents = function(selector, eventName, functionName) {
  var elem = document.querySelector(selector);
  elem.addEventListener(eventName, functionName);
};


Calendar.prototype.addAllIvents = function() {
  this.addEvents('.arrowRigth', 'click' , this.nextMonth.bind(this));
  this.addEvents('.arrowLeft', 'click', this.prevMonth.bind(this));
  this.addEvents('.arrowRigth', 'mousedown', this.arrowDown);
  this.addEvents('.arrowRigth', 'mouseup', this.arrowDown);
  this.addEvents('.arrowLeft', 'mousedown', this.arrowDown);
  this.addEvents('.arrowLeft', 'mouseup', this.arrowDown);
  this.addEvents('.daysNumberContainer', 'mousedown', this.weatherShow)
};



var calendar = new Calendar;
calendar.render.addAllElements();
calendar.render.renderDateMonth();
calendar.addAllIvents();

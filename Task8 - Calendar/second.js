var  daysManipulation = {
  month: 0,
  year: 0,

  setYear: function () {
    this.year = new Date().getFullYear();
    return this;
  },


  setMonth: function () {
    this.month = new Date().getMonth();
    return this;
  },


  infoForRenderMonth:  function() {
    var month = new Date(2000,this.month,1).toLocaleString('en-Us', {month: 'long'});
    var year = this.year;
    return [month, year];
  },


  monthPlus: function() {
    this.month++;
    if (this.month === 12) {
      this.month = 0;
      this.year ++;
    };
    return [this.month, this.year]
  },


  monthMinus: function () {
    this.month--;
    if(this.month === -1) {
      this.month = 11;
      this.year--;
    };
    return [this.month, this.year]
  },


  prevMonth: function () {
    var index = new Date(this.year, this.month, 1).getDay();
    if(index === 1 || index === 0) {
      index += 6;
    }else {
      index -= 1;
    };
    var daysCount = new Date(this.year, this.month, 0).getDate();
    var arrPrevMonth = [];
    for(var i = index - 1; i >= 0; i--) {
      arrPrevMonth[i] = daysCount;
      daysCount--;
    };
    arrPrevMonth.index = index;
    return arrPrevMonth;
  },

  currentMonth: function () {
    var days = new Date(this.year, this.month + 1, 0).getDate();
    var arrCurrentMonth = [];
    var firstDay = 1;
    for(var i = 0; i < days; i++) {
      arrCurrentMonth.push(firstDay);
      firstDay++;
    };
    arrCurrentMonth.days = days;
    return arrCurrentMonth;
  },

  nextMonth: function () {
    var arrNextMonth = [];
    for(var i = 1; i < 14; i++) {
      arrNextMonth.push(i);
    };
    return arrNextMonth;
  },

  allDaysCalendar: function() {
    var arrPrev = daysManipulation.prevMonth();
    var arrCurrent = daysManipulation.currentMonth();
    var arrNext = daysManipulation.nextMonth();
    var finish = [].concat(arrPrev,arrCurrent,arrNext);
    finish.length = 42;
    finish.index = arrPrev.index;
    finish.daysCount = arrCurrent.days + arrPrev.index;
    return finish;
  },

  currentDay: function () {
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    var result = false;
    if(month === this.month && year === this.year) {
      result = true;
    };
    return result;
  }

};

daysManipulation.setYear().setMonth();

var render = {

  renderMonth: function() {
    var info = daysManipulation.infoForRenderMonth();
    var elem = document.body.querySelector('.month');
    elem.innerHTML = info[0] + ' ' + info[1];
    elem.style.color = 'white';
    elem.style.fontSize = '36px';
  },

  renderDays: function() {

    var days = daysManipulation.allDaysCalendar();
    var currentDay = daysManipulation.currentDay();
    var elem = document.body.querySelectorAll('.daysData');
    var day = new Date().getDate();

    for(var i = 0; i < elem.length; i ++) {
      elem[i].style.backgroundColor = 'transparent';

      if(i >= days.index && i < days.daysCount) {
        elem[i].style.color = 'white';
        if(currentDay && i === days.index-1 + day) {
          elem[i].style.backgroundColor = 'red';
        };

      }else {
        elem[i].style.color = 'grey';

      };
      elem[i].setAttribute('value', days[i]);
    };
  }

};

render.renderMonth();
render.renderDays();

var eventsForArrow = {
  sizeDown: function() {
    this.style.fontSize = '30px';
    this.style.paddingTop = '5px';
    this.style.paddingLeft = '5px';
  },

  sizeUp: function() {
    this.style.fontSize = '40px';
    this.style.paddingTop = '0px';
    this.style.paddingLeft = '0px';
  },

  focus: function () {
    this.style.cursor = 'pointer';
  },

  monthChangePlus: function() {
    daysManipulation.monthPlus();
    render.renderMonth();
    render.renderDays();

  },

  monthChangeMinus: function() {
    daysManipulation.monthMinus();
    render.renderMonth();
    render.renderDays();
  }


};


var leftArrow = document.querySelector('.arrowLeft');
var rigthArrow = document.querySelector('.arrowRigth');
rigthArrow.addEventListener("mousedown",eventsForArrow.sizeDown);
rigthArrow.addEventListener("mouseup",eventsForArrow.sizeUp);
rigthArrow.addEventListener("mouseover",eventsForArrow.focus);
rigthArrow.addEventListener("click",eventsForArrow.monthChangePlus);


leftArrow.addEventListener("mousedown",eventsForArrow.sizeDown);
leftArrow.addEventListener("mouseup",eventsForArrow.sizeUp);
leftArrow.addEventListener('mouseover',eventsForArrow.focus);
leftArrow.addEventListener("click",eventsForArrow.monthChangeMinus);



var eventsForDays = {

  daysInfo: function(event) {
    var info = document.body.querySelector('.daysinfo');
    var target = event.target;
    var targetContent = event.target.getAttribute('value');
    info.style.display = 'block';
    info.style.fontSize = '70px';
    info.style.color = 'white';
    info.style.textAlign = 'center';
    // info.innerHTML = targetContent;
  },

  daysInfoHidden: function() {
    this.style.display = 'none';
  }

};


var daysBlock = document.body.querySelector('.daysnumber');
daysBlock.addEventListener('click', eventsForDays.daysInfo);


var weatherBlock = document.body.querySelector('.daysinfo');
weatherBlock.addEventListener('click', eventsForDays.daysInfoHidden)

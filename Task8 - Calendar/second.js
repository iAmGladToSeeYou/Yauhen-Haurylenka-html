var arrMonthName = ['January','February','March','April','May','June','Jule','August','September','October','November','December'];

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
    for(var i = 0; i < arrMonthName.length; i++) {
      if( i === this.month) {
        return [arrMonthName[i], this.year];
      };
    };
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


  currentDaysTemplate: function() {
    var arrDays = [];
    var index = new Date(this.year, this.month, 1).getDay();

    if(index === 1 || index === 0) {
      index += 6;
    }else {
      index -= 1;
    };

    var day = new Date(this.year, this.month, 0).getDate();
    var daysCount = new Date(this.year, this.month + 1 , 0).getDate();

    for(var i = index - 1; i >= 0; i--) {
      arrDays[i] = day;
      day--;
    };
    day = 1;

    for(var i = index; i < daysCount + index; i++) {
      arrDays[i] = day;
      day++
    };

    var days = 1;
    for(var i = (daysCount + index); i < 42; i++) {
      arrDays.push(days);
      days++;
    };
    
    arrDays.index = index;
    arrDays.daysCount = daysCount + index;
    return arrDays;
  },

  currentDay: function () {
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    var day = new Date().getDate();
    if(month === this.month && year === this.year) {
      return [true,day];
    };
    return false;
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

    var days = daysManipulation.currentDaysTemplate();
    var currentDay = daysManipulation.currentDay();
    var elem = document.body.querySelectorAll('.daysData');

    for(var i = 0; i < elem.length; i ++) {
      elem[i].style.backgroundColor = 'transparent';

      if(i >= days.index && i < days.daysCount) {
        elem[i].style.color = 'white';
        if(currentDay[0] === true) {

          elem[days.index + currentDay[1]].style.backgroundColor = 'red';
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
    info.style.paddingTop = '100px';
    info.innerHTML = targetContent;
  },

  daysInfoHidden: function() {
    this.style.display = 'none';
  }

};


var daysBlock = document.body.querySelector('.daysnumber');
daysBlock.addEventListener('click', eventsForDays.daysInfo);


var weatherBlock = document.body.querySelector('.daysinfo');
weatherBlock.addEventListener('click', eventsForDays.daysInfoHidden)

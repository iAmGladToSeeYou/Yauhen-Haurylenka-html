var arrMonthInfo = [{name:'January', days:31},
                    {name:'February', days:28, count:0},
                    {name:'March', days:31},
                    {name:'April', days:30},
                    {name:'May', days:31},
                    {name:'June', days:30},
                    {name:'Jule', days:31},
                    {name:'August', days:31},
                    {name:'September', days:30},
                    {name:'October', days:31},
                    {name:'November', days:30},
                    {name:'December', days:31}];

var month = document.body.querySelector('.month');
var takeMonth = new Date().getMonth();
var takeYear = new Date().getFullYear();
var takeDay = new Date().getDate();
for(var i = 0; i < arrMonthInfo.length; i++) {
  if(takeMonth === i) {
    month.count = i;
    month.innerHTML = arrMonthInfo[i].name + ' ' + takeYear;
  };
};


var daysNumbers = document.body.querySelectorAll('.daysData');
var firstDayIndex = new Date(takeYear, takeMonth, 1).getDay();
var indexForPrevMonth = firstDayIndex;


var renderCurrentMonth = function () {

  if(firstDayIndex === 1) {
    firstDayIndex += 7;
  }else if (firstDayIndex === 0) {
    firstDayIndex = 7;
  };

  for(var i = 1; i <= arrMonthInfo[month.count].days; i++) {
    daysNumbers[firstDayIndex-1].setAttribute('value', i);
    if(i === takeDay) {
      daysNumbers[firstDayIndex-1].style.backgroundColor = 'rgba(57, 117, 219, 0.6)';
      daysNumbers[firstDayIndex-1].style.textShadow = '3px 3px 1px black';
    };
    firstDayIndex++;
  };

}();

var renderAnotherMonth = function() {

  if(indexForPrevMonth === 1) {
    indexForPrevMonth += 7;
  };

  var days = arrMonthInfo[month.count-1].days;

  for(var i = indexForPrevMonth - 2; i >= 0; i--) {
    daysNumbers[i].setAttribute('value', days);
    daysNumbers[i].style.color = '#97a6bf';
    days--;
  };

  days = 1;

  for(var i = firstDayIndex - 1; i < daysNumbers.length; i++ ) {
    daysNumbers[i].setAttribute('value', days);
    daysNumbers[i].style.color = '#97a6bf';
    days++;
  };

}();


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

  monthChangeMinus: function() {
    month.count--;
    if(month.count === -1) {
      month.count = 11;
      takeYear--;
    }
    month.innerHTML = arrMonthInfo[month.count].name + ' ' + takeYear;

    var firstDayIndex = new Date(takeYear,month.count,1 ).getDay();
    var indexForPrevMonth = firstDayIndex;

    var renderCurrentMonthMinus = function () {
      if(firstDayIndex === 1) {
        firstDayIndex += 7;
      }else if (firstDayIndex === 0) {
        firstDayIndex = 7;
      };

      for(var i = 1; i <= arrMonthInfo[month.count].days; i++) {
        daysNumbers[firstDayIndex-1].setAttribute('value', i);
        daysNumbers[firstDayIndex-1].style.color = 'white';
        daysNumbers[firstDayIndex-1].style.backgroundColor = 'transparent';
        daysNumbers[firstDayIndex-1].style.textShadow = 'none';
        firstDayIndex++;
      };
    }();

    var renderAnotherMonthMinus = function () {
      if(indexForPrevMonth === 1) {
        indexForPrevMonth += 7;
      };

      var days = 0;
      if(month.count === 0) {
        days = arrMonthInfo[11].days;
      }else {
        days = arrMonthInfo[month.count-1].days;
      };

      for(var i = indexForPrevMonth - 2; i >= 0; i--) {
        daysNumbers[i].setAttribute('value', days);
        daysNumbers[i].style.color = '#97a6bf';
        days--;
      };

      days = 1;

      for(var i = firstDayIndex - 1; i < daysNumbers.length; i++ ) {
        daysNumbers[i].setAttribute('value', days);
        daysNumbers[i].style.color = '#97a6bf';
        days++;
      };

    }();

  },

  monthChangePlus: function() {
    month.count++;
    if(month.count === 12) {
      month.count = 0;
      takeYear++;
    }
    month.innerHTML = arrMonthInfo[month.count].name + ' ' + takeYear;

    var firstDayIndex = new Date(takeYear,month.count,1 ).getDay();
    var indexForPrevMonth = firstDayIndex;

    var renderCurrentMonthMinus = function () {
      if(firstDayIndex === 1) {
        firstDayIndex += 7;
      }else if (firstDayIndex === 0) {
        firstDayIndex = 7;
      }

      for(var i = 1; i <= arrMonthInfo[month.count].days; i++) {
        daysNumbers[firstDayIndex-1].setAttribute('value', i);
        daysNumbers[firstDayIndex-1].style.color = 'white';
        daysNumbers[firstDayIndex-1].style.backgroundColor = 'transparent';
        daysNumbers[firstDayIndex-1].style.textShadow = 'none';
        firstDayIndex++;
      };
    }();

    var renderAnotherMonthMinus = function () {
      if(indexForPrevMonth === 1) {
        indexForPrevMonth += 7;
      }else if (firstDayIndex === 0) {
        firstDayIndex = 7;
      };

      var days = 0;
      if(month.count === 0) {
        days = arrMonthInfo[11].days;
      }else {
        days = arrMonthInfo[month.count-1].days;
      };

      for(var i = indexForPrevMonth - 2; i >= 0; i--) {
        daysNumbers[i].setAttribute('value', days);
        daysNumbers[i].style.color = '#97a6bf';
        days--;
      };

      days = 1;

      for(var i = firstDayIndex - 1; i < daysNumbers.length; i++ ) {
        daysNumbers[i].setAttribute('value', days);
        daysNumbers[i].style.color = '#97a6bf';
        days++;
      };

    }();
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

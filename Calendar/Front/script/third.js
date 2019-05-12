function GetArrDays() {
  this.year = new Date().getFullYear();
  this.month = new Date().getMonth();
  this.index = new Date(this.year, this.month, 1).getDay();
  this.arrDaysCount = [];
};

GetArrDays.prototype.calculated = function() {
  var firstDay = 1;
  if(this.index === 1 || this.index === 0) {
    this.index += 6;
  } else {
    this.index -= 1;
  };
  for(i = 0; i < 42; i++) {
    this.arrDaysCount[i] = (new Date(this.year,this.month,firstDay - this.index)).getDate();
    firstDay++;
  };
  this.arrDaysCount.lastDayIndex = new Date(this.year, this.month + 1, 0).getDate() + this.index;
  this.arrDaysCount.firstDayIndex = this.index - 1;
  if(this.month === new Date().getMonth() && this.year === new Date().getFullYear()) {
    this.arrDaysCount.currentDay = true;
    this.arrDaysCount.today = new Date().getDate() + this.index - 1;
  }else {
    this.arrDaysCount.currentDay = false;
  }
  return this.arrDaysCount;
};

GetArrDays.prototype.monthAndYear = function() {
  var month = new Date(this.year, this.month, 1).toLocaleString('en-Us', {month: 'long'});
  return `${month} ${this.year}`;
}

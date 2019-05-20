class GetArrDays {
  year: number;
  month: number;
  index: number;
  arrDaysCount : number[];
  monthAndYear: string;
  objInfo: {
    firstDayIndex: number, today: boolean, currentData: number,lastDayIndex: number
  };

  constructor() {
    this.year = new Date().getFullYear();
    this.month = new Date().getMonth();
    this.index = new Date(this.year, this.month, 1).getDay();
    this.arrDaysCount = [];
    this.monthAndYear = '';
    this.objInfo = {firstDayIndex:null, today: null, currentData: null, lastDayIndex: null};
  }

  calculated() {
    let firstDay:number = 1;
    if(this.index === 1 || this.index === 0) {
      this.index += 6;
    } else {
      this.index -= 1;
    };
    for(let i:number = 0; i < 42; i++) {
      this.arrDaysCount[i] = (new Date(this.year,this.month,firstDay - this.index)).getDate();
      firstDay++;
    };
    return this.arrDaysCount;
  }

  info() {
    this.objInfo.firstDayIndex = this.index - 1;
    this.objInfo.lastDayIndex = new Date(this.year, this.month + 1, 0).getDate() + this.index;

    if(this.month === new Date().getMonth() && this.year === new Date().getFullYear()) {
      this.objInfo.today = true;
      this.objInfo.currentData = new Date().getDate() + this.index - 1;
    }else {
      this.objInfo.today = false;
    }
    return this.objInfo;
  }

  getMonthAndYear() {
    let month = new Date(this.year, this.month, 1).toLocaleString('en-Us', {month: 'long'});
    this.monthAndYear = `${month} ${this.year}`;
    return this.monthAndYear;
  }

}

interface IModel {
  year: number;
  month: number;
  index: number;
  arrDaysCount : number[];
  monthAndYear: string;
  objInfo: IMonthInfo<number>;

  calculated():number[];
  info():IMonthInfo<number>;
  getMonthAndYear():string;

};

class GetArrDays implements IModel {
  year: number;
  month: number;
  index: number;
  arrDaysCount : number[];
  monthAndYear: string;
  objInfo: IMonthInfo<number>;

  constructor() {
    this.year = new Date().getFullYear();
    this.month = new Date().getMonth();
    this.index = new Date(this.year, this.month, 1).getDay();
    this.arrDaysCount = [];
    this.monthAndYear = '';
    this.objInfo = {firstDayIndex:null, today: null, currentData: null, lastDayIndex: null};;
  }
  calculated():number[]{
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

  info():IMonthInfo<number>{
    this.objInfo.firstDayIndex = this.index - 1;
    this.objInfo.lastDayIndex = new Date(this.year, this.month + 1, 0).getDate() + this.index;

    if(this.month === new Date().getMonth() && this.year === new Date().getFullYear()) {
      this.objInfo.today = 1;
      this.objInfo.currentData = new Date().getDate() + this.index - 1;
    }else {
      this.objInfo.today = 0;
    }
    return this.objInfo;
  }

  getMonthAndYear():string {
    let month:string = new Date(this.year, this.month, 1).toLocaleString('en-Us', {month: 'long'});
    this.monthAndYear = `${month} ${this.year}`;
    return this.monthAndYear;
  }

}

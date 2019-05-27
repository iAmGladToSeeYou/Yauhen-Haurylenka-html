interface IView {
  parent: string;
  arrDays: number[];
  monthAndYear: string;
  monthInfo: IMonthInfo<number>;
  readonly arrNameDays: string[];

  createElement(element:string, className: string, classNameParent: string):HTMLElement;
  renderDateMonth():void;
}

interface IMonthInfo<T> {
  firstDayIndex:T;
  today:T;
  currentData:T;
  lastDayIndex:T;
}

class Render implements IView{
  parent: string;
  arrDays: number[];
  monthAndYear: string;
  monthInfo: IMonthInfo<number>;
  readonly arrNameDays:string[];

  constructor(parent: string, arrDays: number[], monthAndYear:string, monthInfo:IMonthInfo<number>) {
    this.parent = parent;
    this.arrDays = arrDays;
    this.monthAndYear = monthAndYear;
    this.monthInfo = monthInfo;
    this.arrNameDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  }

  createElement(element: string, className: string, classNameParent: string):HTMLElement {
    let parentElem:HTMLElement = document.querySelector(classNameParent);
    let currentElement:HTMLElement = document.createElement(element);
    currentElement.classList.add(className);
    parentElem.appendChild(currentElement);
    return currentElement;
  }

  addAllElements(): void {
    let container:HTMLElement = this.createElement('div', 'container', '.main');

    let monthContainer:HTMLElement  = this.createElement('div', 'monthContainer', '.container');

    let arrowLeft:HTMLElement  = this.createElement('div', 'arrowLeft', '.monthContainer');
    arrowLeft.innerHTML ='<i class="fas fa-arrow-alt-circle-left"></i>';

    let month:HTMLElement  = this.createElement('div', 'month', '.monthContainer');
    month.innerHTML = this.monthAndYear;

    let arrowRigth:HTMLElement  = this.createElement('div', 'arrowRigth', '.monthContainer');
    arrowRigth.innerHTML ='<i class="fas fa-arrow-alt-circle-right"></i>';

    let daysNameContainer:HTMLElement  = this.createElement('div', 'daysNameContainer', '.container');

    for(let i:number = 0; i < this.arrNameDays.length; i++) {
      let dayName:HTMLElement  = this.createElement('div', 'daysNameContainer_name', '.daysNameContainer');
      dayName.innerHTML = this.arrNameDays[i];
    }

    let daysNumberContainer:HTMLElement  = this.createElement('div', 'daysNumberContainer', '.container');

    for(let i:number = 0; i < this.arrDays.length; i++) {
      let daysCount:HTMLElement  = this.createElement('div', 'daysNumberContainer_number', '.daysNumberContainer');
    }

    let containerWeather:HTMLElement  = this.createElement('div', 'container_weather', '.container');
  }

  renderDateMonth():void {
    let day = document.querySelectorAll<HTMLElement>('.daysNumberContainer_number');
    for(let i:number = 0; i < this.arrDays.length; i++) {
      day[i].classList.remove('daysNumberContainer_number_bg');
      day[i].classList.remove('daysNumberContainer_number_color')
      day[i].innerHTML = this.arrDays[i] + '';
      if(i > this.monthInfo.firstDayIndex && i < this.monthInfo.lastDayIndex) {
        day[i].classList.add('daysNumberContainer_number_color');
      }
    };
    if(this.monthInfo.today) {
      day[this.monthInfo.currentData].classList.add('daysNumberContainer_number_bg');
    }

    let month:HTMLElement = document.querySelector('.month');
    month.innerHTML = this.monthAndYear + '';

    let weather:HTMLElement = document.querySelector('.container_weather');
    weather.innerHTML = new Date().getDate() + '';
  }


}

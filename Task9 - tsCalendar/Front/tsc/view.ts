class Render {
  parent: string;
  arrDays: number[];
  monthAndYear: string;
  monthInfo: {
    firstDayIndex: number, today: boolean, currentData: number,lastDayIndex: number
  };
  private arrNameDays:string[];

  constructor(parent: string, arrDays: number[], monthAndYear:string, monthInfo:{ firstDayIndex: number,
              today: boolean,
              currentData: number,
              lastDayIndex: number
  }) {
    this.parent = parent;
    this.arrDays = arrDays;
    this.monthAndYear = monthAndYear;
    this.monthInfo = monthInfo;
    this.arrNameDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  }

  createElement(element: string, className: string, classNameParent: string):HTMLElement {
    let parentElem = document.querySelector(classNameParent) as HTMLElement;
    let currentElement = document.createElement(element) as HTMLElement;
    currentElement.classList.add(className);
    parentElem.appendChild(currentElement);
    return currentElement;
  }

  addAllElements(): void {
    let container = this.createElement('div', 'container', '.main');

    let monthContainer = this.createElement('div', 'monthContainer', '.container');

    let arrowLeft = this.createElement('div', 'arrowLeft', '.monthContainer');
    arrowLeft.innerHTML ='<i class="fas fa-arrow-alt-circle-left"></i>';

    let month = this.createElement('div', 'month', '.monthContainer');
    month.innerHTML = this.monthAndYear;

    let arrowRigth = this.createElement('div', 'arrowRigth', '.monthContainer');
    arrowRigth.innerHTML ='<i class="fas fa-arrow-alt-circle-right"></i>';

    let daysNameContainer = this.createElement('div', 'daysNameContainer', '.container');

    for(let i:number = 0; i < this.arrNameDays.length; i++) {
      let dayName = this.createElement('div', 'daysNameContainer_name', '.daysNameContainer');
      dayName.innerHTML = this.arrNameDays[i];
    }

    let daysNumberContainer = this.createElement('div', 'daysNumberContainer', '.container');

    for(let i:number = 0; i < this.arrDays.length; i++) {
      let daysCount = this.createElement('div', 'daysNumberContainer_number', '.daysNumberContainer');
    }

    let containerWeather = this.createElement('div', 'container_weather', '.container');
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

    let month = document.querySelector('.month') as HTMLElement;
    month.innerHTML = this.monthAndYear + '';

    let weather = document.querySelector('.container_weather') as HTMLElement;
    weather.innerHTML = new Date().getDate() + '';
  }


}

class Calendar {
  model: GetArrDays;
  render: Render;

  constructor() {
    this.model = new GetArrDays();
    this.render = new Render('main', this.model.calculated(), this.model.getMonthAndYear(), this.model.info());
  }

  nextMonth() {
    this.model.month++;
    if(this.model.month === 12) {
      this.model.month = 0;
      this.model.year++
    };
    this.model.index = new Date(this.model.year, this.model.month, 1).getDay();
    this.render.arrDays = this.model.calculated();
    this.render.monthAndYear = this.model.getMonthAndYear();
    this.render.monthInfo = this.model.info();
    this.render.renderDateMonth();
  }

  prevMonth() {
    this.model.month--;
    if(this.model.month === -1) {
      this.model.month = 11;
      this.model.year--;
    };
    this.model.index = new Date(this.model.year, this.model.month, 1).getDay();
    this.render.arrDays = this.model.calculated();
    this.render.monthAndYear = this.model.getMonthAndYear();
    this.render.monthInfo = this.model.info();
    this.render.renderDateMonth();
  }

  arrowDown(event): void {
      event.target.classList.toggle('arrowRigth_down');
  }

  weatherShow(event): void {
    let weatherContainer = document.querySelector('.container_weather') as HTMLElement;
    weatherContainer.innerHTML = event.target.innerHTML;
  }

  addEvents(selector:string, eventName:string, functionName): void {
    let elem = document.querySelector(selector) as HTMLElement;
    elem.addEventListener(eventName, functionName);
  }

  addAllIvents(): void {
    this.addEvents('.arrowRigth', 'click' , this.nextMonth.bind(this));
    this.addEvents('.arrowLeft', 'click', this.prevMonth.bind(this));
    this.addEvents('.arrowRigth', 'mousedown', this.arrowDown);
    this.addEvents('.arrowRigth', 'mouseup', this.arrowDown);
    this.addEvents('.arrowLeft', 'mousedown', this.arrowDown);
    this.addEvents('.arrowLeft', 'mouseup', this.arrowDown);
    this.addEvents('.daysNumberContainer', 'mousedown', this.weatherShow)
  }
}

let calendar: Calendar = new Calendar;
calendar.render.addAllElements();
calendar.render.renderDateMonth();
calendar.addAllIvents();

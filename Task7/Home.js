class House {
  constructor(obj) {
    this.length = obj.length;
    this.firstFloor = obj.firstFloor;
    this.stages = obj.stages;
    this.roof = obj.roof;
  };

  makeHouse() {
    return this.roof + this.stages + this.firstFloor;
  }

};


class Builders {

  addLength() {
    this.length = +prompt('Какой длинны дом вы хотите?', '');
    return this.length;
  };

  addWindows() {
    var i = true;
    while(i) {
      this.windows = +prompt('Сколько окон на одной лестничной площадки ?', '');
      if(this.length/this.windows >= 4) {
        i = false;
      }else {
        alert('Слишком много окон');
      };
    };
  };

  addFirstFloor() {

    if(this.length === 0 || this.length === undefined) {
      alert('Ты забыл указать длинну дома');
      return "Длинна дома необходима архитектору";
    };

    this.count = +prompt('Сколько подьездов вы хотите?', '');
      this.firstFloor = '\n|' + ' '.repeat(this.length * this.count) + '|' +
                        '\n|' + ('   □'.repeat(this.windows) + ' '.repeat(this.length-this.windows*4)).repeat(this.count) + '|' +
                        '\n|' + ' '.repeat(this.length * this.count) + '|' +
                        '\n|' + ('_█' + '_'.repeat(this.length-2)).repeat(this.count) + '|';

    return this.firstFloor;
  };

  addStages() {
    var value = +prompt('Сколько этажей вы хотите ?', '');
    this.stages = ('\n|' + ' '.repeat(this.length * this.count) + '|' +
                  '\n|' + ('   □'.repeat(this.windows) + ' '.repeat(this.length-this.windows*4)).repeat(this.count) + '|' +
                  '\n|' + ' '.repeat(this.length * this.count) + '|' +
                  '\n|' + '_'.repeat(this.length * this.count) + '|').repeat(value-1);
    return this.stages;
  }

  addRoof() {
    var type = +prompt('Какой тип крыши ? 1 - Двухскатная. 2 - Плоская. 3 - Мансардная.', '');

    var length = this.length*this.count + 2;
    if(type === 1) {
      for(var i = 1; i < length/2; i++) {
        var value = '';
        value = '\n' + ' '.repeat(length/2-i) + '/' + ' '.repeat(length - 2 - (length/2-i)*2) + '\\' + ' '.repeat(length/2-i);
        if(i === length/2-1) {
          value = '\n' + ' '.repeat(length/2-i) + '/' + '_'.repeat(length - 2 - (length/2-i)*2) + '\\' + ''.repeat(length/2-i);
        };
        this.roof += value;
      };
    }else if (type === 2) {
      this.roof = '\n' + '_'.repeat(length) +
                  '\n' + '|' + ' '.repeat(length-2) + '|' +
                  '\n' + '|' + '_'.repeat(length-2) + '|';
    }else if (type === 3) {
      this.roof = '\n' + ' '.repeat(2) + '_'.repeat(length-4) + ' '.repeat(2) +
                  '\n' + ' /' + ' '.repeat(length-4) + '\\ ' +
                  '\n' +'|' + '_'.repeat(length-2) + '|';
    };
    return this.roof;
  };

  build() {
    return new House(this);
  }
}


var house = new Builders();
  house.addLength();
  house.addWindows();
  house.addFirstFloor();
  house.addStages();
  house.addRoof();
var myHouse = house.build();
myHouse.makeHouse();

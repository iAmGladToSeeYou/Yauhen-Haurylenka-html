class House {
  constructor(obj) {
    this.length = obj.length;
    this.floorCount = obj.floorCount;
    this.windowsCount = obj.windowsCount;
    this.stagesCount = obj.stagesCount;
    this.renderFloor = obj.renderFloor;
    this.renderFirstFloor = obj.renderFirstFloor;
    this.renderRoof = obj.renderRoof;
  };

  makeHouse() {
    return this.renderRoof + this.renderFloor.repeat(this.stagesCount)  + this.renderFirstFloor;
  };

};



class Builders {

  constructor(length = 14,floorCount = 3,windowsCount = 2,stagesCount = 3) {
    this.length = length;
    while(this.length < 10) {
      alert('Слишком маленькая длинна дома');
      this.length = +prompt('Какой длинны дом вы хотите?','')
    };

    this.floorCount = floorCount;
    while(this.floorCount < 1) {
      alert('В вашем доме должен быть подъезд');
      this.floorCount  = +prompt('Сколько подъездов будет в вашем доме ?','')
    };

    this.windowsCount = windowsCount;
    while(6 * this.windowsCount >= this.length) {
      alert('Слишком много окон для такой длинны дома');
      this.windowsCount = +prompt('Сколько окон будет на этаже?','')
    };

    this.stagesCount = stagesCount;
    while(this.stagesCount <= 0) {
      alert('Хоть один этаж но должен быть');
      this.windowsCount = +prompt('Сколько этажей будет в вашем доме?','')
    };

  };


  addFloor() {
    this.renderFloor = '\n┃' + ' '.repeat(this.length*this.floorCount) + '┃' +

                    '\n┃' + ('  ┏┳━┓'.repeat(this.windowsCount) +
                    ' '.repeat(this.length-(this.windowsCount*6))).repeat(this.floorCount) + '┃' +

                    '\n┃' + ('  ┃┣━┫'.repeat(this.windowsCount) +
                    ' '.repeat(this.length-(this.windowsCount*6))).repeat(this.floorCount) + '┃' +

                    '\n┃' + ('  ┗┻━┛'.repeat(this.windowsCount) +
                    ' '.repeat(this.length-(this.windowsCount*6))).repeat(this.floorCount) + '┃' +

                    '\n┃' + '_'.repeat(this.length*this.floorCount) + '┃';

    return this;
  };

  addFirstFloor() {
    this.renderFirstFloor = '\n┃' + ' '.repeat(this.length*this.floorCount) +                        '┃' +
                              '\n┃' + (' '.repeat(Math.floor((this.length-4)/2)) + '┏━━┓' + ' '.repeat(Math.ceil((this.length-4)/2))).repeat(this.floorCount) + '┃' +
                              '\n┃' + (' '.repeat(Math.floor((this.length-4)/2)) + '┃  ┃' + ' '.repeat(Math.ceil((this.length-4)/2))).repeat(this.floorCount) + '┃' +
                              '\n┃' + ('_'.repeat(Math.floor((this.length-4)/2)) + '┃  ┃' + '_'.repeat(Math.ceil((this.length-4)/2))).repeat(this.floorCount) + '┃';;

    return this;
  };

  addRoof() {
    var type = +prompt('Какой тип крыши ? 1 - Двухскатная. 2 - Плоская. 3 - Мансардная.', '');

    var length = this.length * this.floorCount + 2;
    this.renderRoof = '';
    if(type === 1) {

      for(var i = 1; i < length/4; i++) {
        var value = '';
        value = '\n' + ' '.repeat(length/2-i*2) + '/' + '■'.repeat(length - 2 - (length/2-i*2)*2) + '\\' + ' '.repeat(length/2-i*2);
        if(i === length/4-1) {
          value = '\n' + '_'.repeat(length/2-i*2) + '/' + '■'.repeat(length - 2 - (length/2-i*2)*2) + '\\' + '_'.repeat(length/2-i*2);
        };

        this.renderRoof += value;
      };

    }else if (type === 2) {

      this.renderRoof = '\n' + '■'.repeat(length) +
                        '\n' + '┃' + '■'.repeat(length-2) + '┃' +
                        '\n' + '┃' + '■'.repeat(length-2) + '┃';
    }else if (type === 3) {

      this.renderRoof = '\n' + ' ◢' + '■'.repeat(length-5) + '◣ ' +
                        '\n' +'┃' + '■'.repeat(length-2) + '┃';
    };
    return this;
  };

  build() {
    return new House(this);
  }
}


var house = new Builders();
  house.addFloor().addFirstFloor().addRoof();;
var myHouse = house.build();
myHouse.makeHouse();

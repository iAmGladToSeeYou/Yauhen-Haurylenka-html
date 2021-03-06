class AllPlanet {
  constructor(name,radius) {
    this._radiusEarth = 6371;

    this.name = name;
    this.radius = radius;
  };

  sizeMoreThenEarth() {
    var delta = 0;
    var result = '';
    if(this._radiusEarth > this.radius) {
      delta = this._radiusEarth - this.radius;
      result = "Earth's radius more then radius " + this.name + " on " + delta + "km";
    }else if (this._radiusEarth === this.radius) {
      result = "Earth's radius the same " + this.name + " radius";
    }else {
      delta = this.radius - this._radiusEarth;
      result = this.name + " radius more then Earth's radius on " + delta;
    };
    return result;
  };

  planetSquare() {
    var result = 4 * 3.14 * Math.pow(this.radius, 2);
    return this.name + " square:" + result + "km²";
  };
};

class SunSystemPlanet extends AllPlanet {
  constructor(name,radius, period) {
    super(name, radius);

    this._earthPeriod = 365;

    this.period = period;
  };

  howLongerPeriod() {
    var finish = '';
    if(this.period > this._earthPeriod) {
      finish = "In " + (this.period/this._earthPeriod).toFixed(2) + " times " + this.name + " year, more then Earth's year";
    }else if(this._earthPeriod > this.period) {
      finish = "one year on Earth equal, " + (this.period/this._earthPeriod).toFixed(2) + " years on " + this.name;
    };
    return finish;
  };

  sizeMoreThenEarth() {
    var delta = 0;
    var result = '';
    if(this._radiusEarth > this.radius) {
      delta = this._radiusEarth * 2 - this.radius * 2;
      result = "Earth's diameter more then diameter " + this.name + " on " + delta + "km";
    }else if (this._radiusEarth * 2 === this.radius * 2) {
      result = "Earth's diameter the same " + this.name + " diameter";
    }else {
      delta = this.radius * 2 - this._radiusEarth * 2;
      result =  this.name + " diameter more then Earth's diameter on " + delta + ' km';
    }
    return result;
  };
};

var mercury = new SunSystemPlanet("Mercury", 2439, 88);
var mars = new SunSystemPlanet("Mars", 686 , 3389);
var upiter = new SunSystemPlanet("Upiter",69911, 4328)

mercury.sizeMoreThenEarth()

function AllPlanet(name, radius) {
  this._radiusEarth = 6371;

  this.name = name;
  this.radius = radius;

  this.sizeMoreThenEarth = function () {
    var delta = 0;
    var result = 0;
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
};



function SunSystemPlanet(name, radius, period) {
  AllPlanet.apply(this, arguments);

  this._earthPeriod = 365;
  this.period = period;

  this.howLongerPeriod = function() {
    var finish = 0;
    if(this.period > this._earthPeriod) {
      finish = "In " + (this.period/this._earthPeriod).toFixed(2) + " times " + this.name + " year, more then Earth's year";
    }else if(this._earthPeriod > this.period) {
      finish = "one year on Earth equal, " + (this.period/this._earthPeriod).toFixed(2) + " years on " + this.name;
    };
    return finish;
  };

  this.run = function () {
    alert("So go find who have bigger size. Earth or " + this.name + "?. And how much.")
  }

  var pSizeMoreThenEarth = this.sizeMoreThenEarth;
  this.sizeMoreThenEarth = function () {
    this.run();
    return pSizeMoreThenEarth.call(this);
  };

};

var mercury = new SunSystemPlanet("Mercury",2439,88);
var mars = new SunSystemPlanet("Mars",3389, 686);
var upiter = new SunSystemPlanet("Upiter",69911,4328);

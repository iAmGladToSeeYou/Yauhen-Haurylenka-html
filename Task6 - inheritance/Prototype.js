function AllPlanet(name, radius) {
  this._radiusEarth = 6371;
  this.name = name;
  this.radius = radius;
}
AllPlanet.prototype.sizeMoreThenEarth = function() {
  var delta = 0;
  var result;
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


function SunPlanet(name, period , radius) {
  AllPlanet.apply(this,arguments);

  this._earthPeriod = 365;
  this.period = period;
};

SunPlanet.prototype = Object.create(AllPlanet.prototype);
SunPlanet.prototype.constructor = Planet;

SunPlanet.prototype.howLongerPeriod = function() {
  var finish;
  if(this.period > this._earthPeriod) {
    finish = "In " + (this.period/this._earthPeriod).toFixed(2) + " times " + this.name + " year, more then Earth's year";
  }else if(this._earthPeriod > this.period) {
    finish = "one year on Earth equal, " + (this.period/this._earthPeriod).toFixed(2) + " years on " + this.name;
  };
  return finish;
};

SunPlanet.prototype.sizeMoreThenEarth = function() {
  var delta = 0;
  var result;
  if(this._radiusEarth > this.radius) {
    delta = this._radiusEarth*2 - this.radius*2;
    result = "Earth's diameter more then diameter " + this.name + " on " + delta + "km";
  }else if (this._radiusEarth*2 === this.radius*2) {
    result = "Earth's diameter the same " + this.name + " diameter";
  }else {
    delta = this.radius*2 - this._radiusEarth*2;
    result =  this.name + " diameter more then Earth's diameter on " + delta + ' km';
  }
  return result;
};

var mercury = new SunPlanet("Mercury", 88, 2439);
var mars = new SunPlanet("Mars", 686 , 3389);
var upiter = new SunPlanet("Upiter", 4328 ,69911);


upiter.sizeMoreThenEarth()

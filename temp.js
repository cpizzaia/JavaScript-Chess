var ClassA = function(lol) {
  this.init(lol);
};

ClassA.prototype.init = function(lol) {
  this.idk = lol;
};


var ClassB = function(idk) {
  this.spicy = idk;
  this.init(idk);
};

ClassB.prototype = Object.create(ClassA.prototype);


a = new ClassB("whocares");

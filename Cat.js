function Cat(){
	this.name = "Tom";
	this.age = 18;
	this.gender = "male"
}
Cat.prototype.eat = function(){
	console.log('eating'); 
};
module.exprots = Cat;
function Data(array) {
	this.data = array.sort(function(a,b){return a-b;}); 
	this.observations = array.length;
}
Data.prototype.getSum = function(){
	var sum = 0; 
	for(a=0;a<this.observations;a++){
		sum += this.data[a];
	} 
	return sum;
}
Data.prototype.getMean = function(){
	return this.getSum()/this.observations;
}  
Data.prototype.getMedian = function(){
	return (this.observations % 2) ? this.data[(this.observations/2)-0.5] : (this.data[(this.observations/2)]+this.data[(this.observations/2)-1])/2;
}
Data.prototype.getRange = function(){
	return this.data[this.observations-1]-this.data[0];
}
Data.prototype.getVariance = function(scope){
	var mean = this.getMean(), ssto = 0; 
	for(a=0;a<this.observations;a++){
		ssto += Math.pow(this.data[a]-mean,2);
	} 
	if(scope=="pop"){return ssto/this.observations;} 
	else if(scope=="samp"){return ssto/(this.observations-1);}
}
Data.prototype.getStDev = function(scope){
	return Math.pow(this.getVariance(scope),0.5);
}
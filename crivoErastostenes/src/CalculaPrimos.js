
function CalculaPrimos() {
	this.arrayPrimos = [];
}

CalculaPrimos.prototype.calcular = function(n) {
	this.populaArrayComTodosNumeros(n);
	this.calculaErastos(n);
	return this.arrayPrimos;
};

CalculaPrimos.prototype.populaArrayComTodosNumeros = function(n) {
	for(var i=2; i<=n ; i++) {
		this.arrayPrimos.push(i);
	}
}

CalculaPrimos.prototype.calculaErastos = function(n) {
	var maiorNumeroChecado = Math.sqrt(this.arrayPrimos[this.arrayPrimos.length-1]);
	for(var i=0 ; this.arrayPrimos[i] <= maiorNumeroChecado; i++) {
		var itemChecado = this.arrayPrimos[i];
		for(var j=0; j < n ; j++){
			if(this.arrayPrimos[j]!=itemChecado && this.arrayPrimos[j]%itemChecado == 0) { 
				this.arrayPrimos.splice(this.arrayPrimos.indexOf(this.arrayPrimos[j]), 1);
			}
		}
	}
}

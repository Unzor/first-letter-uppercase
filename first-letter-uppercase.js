String.prototype.firstLetterUppercase = function() {
var spliced = this.split('');
var spliced2 = spliced.slice(1, spliced.length);
var spliced3 = [spliced[0].toUpperCase(), spliced2.join("")]
return spliced3.join("");
}

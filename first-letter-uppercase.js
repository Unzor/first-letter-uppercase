String.prototype.firstLetterUpperCase = function() {
return [this.split('')[0].toUpperCase(), this.split('').slice(1, this.split('').length).join("")].join("")
}

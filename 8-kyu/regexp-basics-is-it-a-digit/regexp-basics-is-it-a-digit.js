String.prototype.digit = function() {
  return this.toString().length === 1 && /[0-9]/.test(this.toString())
};
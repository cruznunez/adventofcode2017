// we have to pass in the number as a string for larger numbers
function captcha(string) {
  var array = string.split('')
  var sum = 0
  array.forEach(function(str, index) {
    if (str == array[(index + 1) % array.length]) {
      sum += parseInt(str)
    }
  })
  return sum
}

console.log(captcha('1122')) // 3
console.log(captcha('1111')) // 4
console.log(captcha('1234')) // 0
console.log(captcha('91212129')) // 9

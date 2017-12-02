def captcha(num)
  string = num.to_s
  string = string + string[0]
  array = string.split ''
  sum = 0
  array.each_with_index do |str, index|
    if str == array[index + 1]
      sum += str.to_i
    end
  end
  sum
end

puts captcha 1122 # 3
puts captcha 1111 # 4
puts captcha 1234 # 0
puts captcha 91212129 # 9

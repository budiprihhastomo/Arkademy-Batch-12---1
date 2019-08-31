const is_prime = (num) => {
  var flag = true
  for (var i = 2; i < num; i++) {
    if (num % i != 0) {
      flag = true
    } else {
      flag = false
      break
    }
  }
  if (flag == true || num == 2) {
    return true
  } else return false
}

const segitigaPrima = (row) => {
  var i, j
  if (row <= 0 || row > 10) {
    console.log("Hanya Boleh Range 1 - 10")
  } else {
    for (i = 0; i < row; i++) {
      var count = 2
      var str = ''
      for (j = 0; j <= i; j++) {
        while (!is_prime(count)) {
          count++
        }
        str += count
        count++
      }
      console.log(str)
    }
  }
  return false
}

segitigaPrima(5)
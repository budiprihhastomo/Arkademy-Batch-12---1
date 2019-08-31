const sort_numeric = (_i) => {
  var pecah = _i.toString().split(0)
  var result = ""
  pecah.map((item)=>{
    result += item.split('').sort((a,b) => a - b).join('')
  })
  console.log(result)
}

sort_numeric(5956560159466056)
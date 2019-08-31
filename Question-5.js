const pecah_kalimat = (_i) => {
    var require = ['pro', 'gram', 'merit', 'program', 'it', 'programmer']
    var result = []
    var temp = []
  
    const review = (text) => {
      require.map((item)=>{
        if(text.indexOf(item) == 0){
          temp.push(item)
          review(text.slice(item.length))
          temp.pop()
        }
      })
      if(text.length == 0){
        result.push(temp.join(', '))
      }
    }
    review(_i)
    result.map((val)=>{
      console.log(val)
    })
  }
  
  pecah_kalimat("programit")
  pecah_kalimat("programmerit")
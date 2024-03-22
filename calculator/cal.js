function buttonclick(val){

      document.getElementById('screen').value+=val
}

function cleardata(){

     document.getElementById('screen').value=""
}

function result(){

    let text =  document.getElementById('screen').value
    let res = eval(text)

   let sum = document.getElementById('screen').value = res

}


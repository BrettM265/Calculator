function btnClick(obj) {
    
  let inputScreen = document.getElementById('display');
     
    let btnPushed = obj.innerHTML;
     
    if (btnPushed === '=') {
        inputScreen.innerHTML = eval(inputScreen.innerHTML);
         
    } else if (btnPushed == 'Clear All') {
        
        inputScreen.innerHTML = '0';
         
    } else {
        if (inputScreen.innerHTML === '0') {
            inputScreen.innerHTML = btnPushed;
             
        } else {
            inputScreen.innerHTML += btnPushed;   
        }
    }
}
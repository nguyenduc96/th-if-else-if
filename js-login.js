function loGin(){
    let log = document.getElementById('login').value;
    let text;
    if (log=='Admin'){
        let pass=document.getElementById('pass').value;
        if (pass=='TheMaster') {
            text = "Welcome!";
        }
            else if (pass==""){
                text="Canceled.";
            }
                else {
                    text= "Wrong password";
            }
        }
     else if ( log==""){
        text='Canceled.';
    } else {
        text= "I don't know you"
    }
    document.getElementById('output').innerHTML = text;
}
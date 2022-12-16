function run(){
    var userText=document.querySelector('#userText').value;
    var ul=document.querySelector('ul');
    var li=document.createElement('li');
    li.innerText=userText.split("").reverse().join("");
        ul.appendChild(li);
//return alert(userText.split("").reverse().join(""));
}
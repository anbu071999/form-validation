function show(data){
    let text=document.getElementById("txt"),
    arr=document.getElementsByClassName("subMenu"),
    clickedTxt=document.getElementById(data);

    for(let i=0;i<arr.length;i++){
        if(clickedTxt.innerText === arr[i].innerText){
            arr[i].classList.add("active");
        }else{
            arr[i].classList.remove("active");
        }
    }
    text.innerText = clickedTxt.innerText;
}
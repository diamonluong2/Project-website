// Function 
document.getElementById("count").onclick = function ex(){
    let number1 = parseInt(document.getElementById("so-1").value) ;
    let number2 = parseInt(document.getElementById("so-2").value) ;
    let number3 = parseInt(document.getElementById("so-3").value) ;
    let phienthi = document.getElementById("hienthi");
    
    let array = [number1,number2,number3];
    let ar = array.sort();
    for (let i = 0; i <= 2; i ++){
        phienthi.innerHTML += `<span> ${ar[i]}</span>
        <span>${i === ar.length-1 ? "" : ","} `;
        phienthi.style.display = "block"
    }
}

// Bài tập 2

document.getElementById("chaohoi").onclick = function (){
    let areaSelect = document.getElementById("area").value;
    document.getElementById("chao-hoi").innerHTML = `<span> Xin chào ${areaSelect} !`
 
}

// Bài tập 3
document.getElementById("count1").onclick = function (){
    let number1 = parseInt(document.getElementById("sothu-1").value) ;
    let number2 = parseInt(document.getElementById("sothu-2").value) ;
    let number3 = parseInt(document.getElementById("sothu-3").value) ;
    let phienthi = document.getElementById("hien-thi");

    let soDu = number1%2 + number2%2 + number3%2;
    if(soDu===2){
        phienthi.innerHTML = `<span> Có 2 số lẻ, 1 số chẵn </span>`
        phienthi.style.display = "block"
    }else if(soDu===3){
        phienthi.innerHTML = `<span> Có 3 số lẻ </span>`
        phienthi.style.display = "block"
    }else if(soDu===1){
        phienthi.innerHTML = `<span> Có 1 số lẻ, 2 số chẵn </span>`
        phienthi.style.display = "block"
    }else if(soDu===0){
        phienthi.innerHTML = `<span> Có 3 số chẵn </span>`
        phienthi.style.display = "block"
    }

}

// Bài tập 4
document.getElementById("count2").onclick = function (){
    let number1 = parseInt(document.getElementById("soth-1").value) ;
    let number2 = parseInt(document.getElementById("soth-2").value) ;
    let number3 = parseInt(document.getElementById("soth-3").value) ;
    let phienthi = document.getElementById("hien_thi");
    
    let numb = Math.sqrt(number1**2 + number2**2);
    if(number1===number2){
        phienthi.innerHTML = `<span> Là tam giác cân </span>`
        phienthi.style.display = "block"
    }else if(number1===number2 && number1===number3){
        phienthi.innerHTML = `<span> Là tam giác đều </span>`
        phienthi.style.display = "block"
    }else if(numb===number3){
        phienthi.innerHTML = `<span> Tam giác vuông </span>`
        phienthi.style.display = "block"
    }else{
        phienthi.innerHTML = `<span> Tam giác có 3 cạnh </span>`
        phienthi.style.display = "block"

    }

}

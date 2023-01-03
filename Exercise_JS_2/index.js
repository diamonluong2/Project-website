// Function 
// Bài tập 1
document.getElementById("yesterday").onclick = function (){
    let yearEl = document.getElementById("year").value;
    let dateEl = document.getElementById("date").value;
    let monthEl = document.getElementById("month").value;
    let yesDay = parseInt(dateEl) - 1;
    document.getElementById("ket-qua").innerHTML = `<span> Kết quả là: ${yesDay}/${monthEl}/${yearEl}</span>`
    document.getElementById("ket-qua").style.display = "block";
 
}

// Bài tập 2
document.getElementById("count-day").onclick = function (){
    let yearEl = parseInt(document.getElementById("year1").value);
    let monthEl = parseInt(document.getElementById("month1").value) ;
    var date;
    
    switch(monthEl){
        case 1:
        case 3:    
        case 5:    
        case 7:    
        case 8:    
        case 10:    
        case 12:    
            date = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            date = 30;
            break;
        case 2:
            if (yearEl%4 && yearEl %100 ? false:true){
                date = 29;

            }else if(yearEl%400){
                date = 29;
            }else{
                date = 28;
            }
            break;
        default:
            console.log("Kết quả bị sai");
    }

    document.getElementById("ket-qua1").innerHTML = `<span> Kết quả là: Tháng ${monthEl} có ${date} ngày</span>`
    document.getElementById("ket-qua1").style.display = "block";
 
}

// Bài tập 3
document.getElementById("count-number").onclick = function (){
let n = parseInt(document.getElementById("so-3chu").value);
let nTram = Math.floor(n / 100);
let nDonvi = n % 10;
let nChuc = (n - nDonvi)%100;
let nChuc1 = nChuc/10;

let cTram;
let cChuc1;
let cDonvi;
switch(nTram){
    case 1:
        cTram = "Một Trăm"
        break;
    case 2:
        cTram = "Hai Trăm" 
        break;
    case 3:
        cTram = "Ba Trăm" 
        break;
    case 4:
        cTram = "Bốn Trăm" 
        break;
    case 5:
        cTram = "Năm Trăm" 
        break;
    case 6:
        cTram = "Sáu Trăm" 
        break;
    case 7:
        cTram = "Bảy Trăm" 
        break;
    case 8:
        cTram = "Tám Trăm" 
        break;
    case 9:
        cTram = "Chín Trăm" 
        break;

}
switch(nChuc1){
    case 1:
        cChuc1 = "Mười"
        break;
    case 2:
        cChuc1 = "Hai Mươi" 
        break;
    case 3:
        cChuc1 = "Ba Mươi" 
        break;
    case 4:
        cChuc1 = "Bốn Mươi" 
        break;
    case 5:
        cChuc1 = "Năm Mươi" 
        break;
    case 6:
        cChuc1 = "Sáu Mươi" 
        break;
    case 7:
        cChuc1 = "Bảy Mươi" 
        break;
    case 8:
        cChuc1 = "Tám Mươi" 
        break;
    case 9:
        cChuc1 = "Chín Mươi" 
        break;

}
switch(nDonvi){
    case 1:
        cDonvi = "Một"
        break;
    case 2:
        cDonvi = "Hai" 
        break;
    case 3:
        cDonvi = "Ba" 
        break;
    case 4:
        cDonvi = "Bốn" 
        break;
    case 5:
        cDonvi = "Năm" 
        break;
    case 6:
        cDonvi = "Sáu" 
        break;
    case 7:
        cDonvi = "Bảy" 
        break;
    case 8:
        cDonvi = "Tám" 
        break;
    case 9:
        cDonvi = "Chín" 
        break;

}
document.getElementById("ket-qua3").innerHTML = `<span> ${cTram} ${cChuc1} ${cDonvi}  </span>`
document.getElementById("ket-qua3").style.display = "block";




}
// Bài tập 4
document.getElementById("finding").onclick = function (){
    let nameStudent1 = document.getElementById("ten-sv1").value
    let nameStudent2 = document.getElementById("ten-sv2").value
    let nameStudent3 = document.getElementById("ten-sv3").value
    let toaDox1 = parseInt(document.getElementById("x1").value);
    let toaDoy1 = parseInt(document.getElementById("y1").value);

    let toaDox2 = parseInt(document.getElementById("x2").value);
    let toaDoy2 = parseInt(document.getElementById("y2").value);


    let toaDox3 = parseInt(document.getElementById("x3").value);
    let toaDoy3 = parseInt(document.getElementById("y3").value);

    let toaDoxSc = parseInt(document.getElementById("xSchool").value);
    let toaDoySc = parseInt(document.getElementById("ySchool").value);

    let sumDo1 = Math.sqrt((toaDoxSc-toaDox1)**2 +(toaDoySc-toaDoy1)**2);
    let sumDo2 = Math.sqrt((toaDoxSc-toaDox2)**2 +(toaDoySc-toaDoy2)**2);
    let sumDo3 = Math.sqrt((toaDoxSc-toaDox3)**2 +(toaDoySc-toaDoy3)**2);
    if(sumDo1>sumDo2 && sumDo1 >sumDo3){
        document.getElementById("ket-qua2").innerHTML = `<span> Sinh viên xa trường nhất: ${nameStudent1}  </span>`
        document.getElementById("ket-qua2").style.display = "block";
    }else if(sumDo2>sumDo1 && sumDo2 >sumDo3){
        document.getElementById("ket-qua2").innerHTML = `<span> Sinh viên xa trường nhất: ${nameStudent2}  </span>`
        document.getElementById("ket-qua2").style.display = "block";
    }else if(sumDo3>sumDo1&&sumDo3>sumDo2){
        document.getElementById("ket-qua2").innerHTML = `<span> Sinh viên xa trường nhất: ${nameStudent3}  </span>`
        document.getElementById("ket-qua2").style.display = "block";
    }


}


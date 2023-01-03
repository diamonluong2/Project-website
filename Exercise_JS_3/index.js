// Function 
// Bài tập 1
let calKhuVuc = function(khuVuc){
    let diemKhuVuc = 0;
    switch(khuVuc){
        case "A":
            diemKhuVuc = 2;
            break;
        case "B":
            diemKhuVuc = 1;
            break;
        case "C":
            diemKhuVuc = 0.5;
            break;
        default:
            diemKhuVuc = 0;

    }

    return diemKhuVuc;
}

let calDoiTuong = function(doiTuong){
    switch(doiTuong){
        case 1:
            return  2.5;
        case 2:
            return  1.5;
        case 3:
            return  1;
        default:
            return  0;
    }

}
let reSult = document.getElementById("ket-qua");
reSult.onclick = function ex1(){
    let diemMon1 = document.getElementById("txtSubject1").value;
    let diemMon2 = document.getElementById("txtSubject2").value;
    let diemMon3 = document.getElementById("txtSubject3").value;
    let diemChuan = document.getElementById("txtStandardGrade").value;

    let diem3Mon = parseInt(diemMon1) + parseInt(diemMon2) + parseInt(diemMon3);

    // Tính điểm ưu tiên 
    let khuVuc = document.getElementById("area").value;
    let diemKhuVuc =  calKhuVuc(khuVuc);
    let doiTuong = document.getElementById("type").value;
    let diemDoiTuong = calDoiTuong(doiTuong);
    let diemTong = diem3Mon + diemKhuVuc + diemDoiTuong;
    if(diemTong>=diemChuan && diemMon1 >0 && diemMon2 >0 && diemMon3 >0){
        let reSultCuoi = document.getElementById("ketqua");
        reSultCuoi.innerHTML = "<h1>" + "Đậu:" + "Điểm tổng là: " + diemTong + "</h1>"
    }
    else{
        let reSultCuoi = document.getElementById("ketqua");
        reSultCuoi.innerHTML = "<h1>" + "Rớt" + "</h1>"
    }
}

// Bài tâp 2 
document.getElementById("ket-qua1").onclick = function (){
    let customerEl = document.getElementById("customer").value;
    let kwEl = parseInt(document.getElementById("kw").value);
    let sumKW;
    if (kwEl<=50) {
        let sumKW = kwEl * 500;
        document.getElementById("ketqua1").innerHTML= `<span> Tôi tên: ${customerEl} Tiền điện: ${sumKW} </span>`
        document.getElementById("ketqua1").style.display = "block"
    }else if(kwEl<=100){
        let sumKW = (kwEl-50) * 650 + 50*500;
        document.getElementById("ketqua1").innerHTML= `<span> Tôi tên: ${customerEl} Tiền điện: ${sumKW} </span>`
        document.getElementById("ketqua1").style.display = "block"
    }else if(kwEl<=200){
        let sumKW = (kwEl-100) * 850 + 50*650 + 50*500;
        document.getElementById("ketqua1").innerHTML= `<span> Tôi tên: ${customerEl} Tiền điện: ${sumKW} </span>`
        document.getElementById("ketqua1").style.display = "block"
    }else if(kwEl<=350){
        let sumKW = (kwEl-150) * 1100 + 50*500 + 50*650 + 100*850;
        document.getElementById("ketqua1").innerHTML= `<span> Tôi tên: ${customerEl} Tiền điện: ${sumKW} </span>`
        document.getElementById("ketqua1").style.display = "block"
    }else if(kwEl>350){
        let sumKW = (kwEl-350) * 1300 + 50*500 + 50*650 + 100*850 + 150*1100;
        document.getElementById("ketqua1").innerHTML= `<span> Tôi tên: ${customerEl} Tiền điện: ${sumKW} </span>`
        document.getElementById("ketqua1").style.display = "block"
    }

} 


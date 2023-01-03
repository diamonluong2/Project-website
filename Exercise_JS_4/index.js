// Function 
// Bài tâp 1 
document.getElementById("ket-qua1").onclick = function (){
    let nameEl = document.getElementById("name").value;
    let salaryEl = parseInt(document.getElementById("salary").value);
    let peopleEl = parseInt(document.getElementById("people").value);
    let sumSalary = salaryEl - 4E+6 - peopleEl*1.6E+6;
    if (sumSalary<=60) {
        let sum = sumSalary * 0.05;
        document.getElementById("ketqua1").innerHTML= `<span> Tôi tên: ${nameEl} Tiền thuế phải trả là: ${sum} </span>`
        document.getElementById("ketqua1").style.display = "block"
    }else if(sumSalary<=120){
        let sum = sumSalary * 0.1;
        document.getElementById("ketqua1").innerHTML= `<span> Tôi tên: ${nameEl} Tiền thuế phải trả là: ${sum} </span>`
        document.getElementById("ketqua1").style.display = "block"
    }else if(sumSalary<=210){
        let sum = sumSalary * 0.15;
        document.getElementById("ketqua1").innerHTML= `<span> Tôi tên: ${nameEl} Tiền thuế phải trả là: ${sum} </span>`
        document.getElementById("ketqua1").style.display = "block"
    }else if(sumSalary<=384){
        let sum = sumSalary * 0.2;
        document.getElementById("ketqua1").innerHTML= `<span> Tôi tên: ${nameEl} Tiền thuế phải trả là: ${sum} </span>`
        document.getElementById("ketqua1").style.display = "block"
    }else if(sumSalary<=624){
        let sum = sumSalary * 0.25;
        document.getElementById("ketqua1").innerHTML= `<span> Tôi tên: ${nameEl} Tiền thuế phải trả là: ${sum} </span>`
        document.getElementById("ketqua1").style.display = "block"
    }else if(sumSalary<=960){
        let sum = sumSalary * 0.3;
        document.getElementById("ketqua1").innerHTML= `<span> Tôi tên: ${nameEl} Tiền thuế phải trả là: ${sum} </span>`
        document.getElementById("ketqua1").style.display = "block"
    }else if(sumSalary>960){
        let sum = sumSalary * 0.35;
        document.getElementById("ketqua1").innerHTML= `<span> Tôi tên: ${nameEl} Tiền thuế phải trả là: ${sum} </span>`
        document.getElementById("ketqua1").style.display = "block"

    }

} 
// Bài tập 2
function myFunction(){
    let loaiEl = document.getElementById("loai-kh").value;
    switch(loaiEl){
        case "Nhà Dân":
        document.getElementById("so-ketnoi").style.display = "none";
        break;
        case "Doanh Nghiệp":
        document.getElementById("so-ketnoi").style.display = "block";
        break;
        case "":
        document.getElementById("so-ketnoi").style.display = "none";
        break;
        default:
            console.log("Bị lỗi rồi: ");
    }
    return loaiEl;
}
document.getElementById("ket-qua2").onclick = function (){
    let codeEl = document.getElementById("code").value;
    let kenhEl = parseInt(document.getElementById("kenh").value);
    let loaiEl = document.getElementById("loai-kh").value;
    let sum;
    let loaiEL1 = myFunction(loaiEl)
    if(loaiEL1 ==="Nhà Dân"){
        sum = 4.5 + 20.5 + 7.5*kenhEl;
    }else if(loaiEL1 ==="Doanh Nghiệp"){
        let ketnoiEl = parseInt(document.getElementById("so-ketnoi").value);
        if(ketnoiEl<=10){
            sum = 15 + 75*ketnoiEl + 50*kenhEl;
        }else if(ketnoiEl>10){
            sum = 15 + (ketnoiEl - 10)*5 + 75*10 + 50*kenhEl;
        }

    }
    document.getElementById("ketqua2").innerHTML = `<span> Mã khách hàng: ${codeEl} Tiền cáp: ${sum}</span>`
    document.getElementById("ketqua2").style.display = "block";
}
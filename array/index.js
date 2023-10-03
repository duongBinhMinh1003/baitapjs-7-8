var numArr=[];
function tinhTong(){
    var tong=0;
    for(var i =0 ; i< numArr.length;i++){
        if(numArr[i]>0){
        tong += numArr[i];
    }
    else{
        break;
    }
}
    document.getElementById("result").innerHTML=`<h3>1.Tổng là:${tong} </h3>`;
    document.getElementById("result").classList.add("bg-light");
}
function demSo(){
    var count = 0;
    for( var i =0 ; i< numArr.length;i++){
        if(numArr[i] > 0){
            count++;
        }
        else{
            break;
        }
    }
    document.getElementById("result2").innerHTML=`<h3>2.Đếm số dương:${count} </h3>`;
    document.getElementById("result2").classList.add("bg-light");
}
function timSo(){
    var min = numArr[0];
    for(var i =0 ; i< numArr.length;i++){
        if(numArr[i]<min && numArr[i] > 0){
            min=numArr[i];
        }
       
    }
    
    document.getElementById("result3").innerHTML=`<h3>4.Tìm số dương nhỏ nhất:${min} </h3>`;
    document.getElementById("result3").classList.add("bg-light");
}
function timSoChan(){
    var soChan=-1;
    for(var i =0 ; i< numArr.length;i++){
        if(numArr[i] %2 == 0 && numArr[i]>0){
          soChan = numArr[i];
        }
}

document.getElementById("result4").innerHTML=`<h3>5.Tìm số chẵn cuối cùng:${soChan} </h3>`;
    document.getElementById("result4").classList.add("bg-light");
}
function timSo3(){
    var min = numArr[0];
    for(var i =0 ; i< numArr.length;i++){
        if(numArr[i]<min){
            min=numArr[i];
        }
       
    }
    
    document.getElementById("result33").innerHTML=`<h3>3.Tìm số nhỏ nhất:${min} </h3>`;
    document.getElementById("result33").classList.add("bg-light");
}


function doiCho(){
    var num1EL=document.getElementById("num1").value*1;
    var num2EL=document.getElementById("num2").value*1;
    var temp = numArr[num1EL];
    numArr[num1EL] = numArr[num2EL];
    numArr[num2EL] = temp;
    document.getElementById("result5").innerHTML=`<h3>6.Hàm sau khi đỏi chỗ là:${numArr} </h3>`;
    document.getElementById("result5").classList.add("bg-light");

}
function sapXep(){
    numArr.sort(function(a, b) {
        return a - b;
    });
    document.getElementById("result6").innerHTML=`<h3>7.Hàm sau khi sắp xếp là:${numArr} </h3>`;
    document.getElementById("result6").classList.add("bg-light");
}
function kiemTraSoNguyenTo(num) {
    if(num<2){
        return false;
    }
    var k =Math.sqrt(num);
    for(var i=2 ; i<=k ; i++){
        if(num % i == 0){
            return false;
        }
        
        }
        return true;
}

function timSoNguyenToDauTien(Arr) {
    for (var i = 0; i < Arr.length; i++) {
        if (kiemTraSoNguyenTo(Arr[i])) {
            return Arr[i];
        }
    }
    
    return -1; 
}

function SNT(){
    var soNguyenToDauTien=timSoNguyenToDauTien(numArr);
    document.getElementById("result7").innerHTML=`<h3>8.Số nguyên tố đầu tiên là:${soNguyenToDauTien} </h3>`;
    document.getElementById("result7").classList.add("bg-light");
}


function demSoNguyen(){
    var soLuong=0;
    for( var i = 0 ;i < numArr.length  ; i++){
        if(Number.isInteger(numArr[i])){
            soLuong++;
        }
    }
    document.getElementById("result8").innerHTML=`<h3>9.Số nguyên:${soLuong} </h3>`;
    document.getElementById("result8").classList.add("bg-light");
}


function dem(){
    var demDuong=0;
    var demAm=0;
    for(var i =0 ;i <numArr.length;i++){
        if(numArr[i] > 0){
            demDuong++;
        }
        else{
            demAm++;
        }
    }
    if(demDuong > demAm){
        return "Số dương > Số âm";
    }
    else if(demDuong < demAm){
        return "Số âm > Số dương";
    }
    else{
        return "Số dương = Số âm";
    }
}
function soSanh(){
    var ketQua=dem();
    document.getElementById("result9").innerHTML=`<h3>10.${ketQua} </h3>`;
    document.getElementById("result9").classList.add("bg-light");

}
function themSo(){
    var nhapN=document.getElementById("nhapSoN").value*1;
    numArr.push(nhapN);
    document.getElementById("result1").innerText=`OUTPUT:   ${numArr}`;
    document.getElementById("result1").classList.add("bg-warning");
}


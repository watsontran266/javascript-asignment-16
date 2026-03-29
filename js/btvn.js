let arr = [];
let arrReal = [];

// hiển thị mảng số đã nhập
function renderArray() {
  document.getElementById("result-array").innerText = `Mảng: ${arr.join(", ")}`;
}

// hiển thị mảng số thực
function renderRealArray() {
  document.getElementById("result-real-array").innerText = `Mảng số thực: ${arrReal.join(", ")}`;
}

// kiểm tra mảng rỗng
function checkArrayEmpty(resultId) {
  if (arr.length === 0) {
    document.getElementById(resultId).innerText = "👉 Mảng đang rỗng, vui lòng thêm số";
    return true;
  }
  return false;
}

// thêm số vào mảng
document.getElementById("btn-add").addEventListener("click", () => {
  let value = document.getElementById("input-number").value;

  if (value.trim() === "") {
    document.getElementById("result-array").innerText = "👉 Vui lòng nhập số";
    return;
  }

  arr.push(Number(value));
  renderArray();
  document.getElementById("input-number").value = "";
});

// 1. tổng các số dương
document.getElementById("btn-sum-positive").addEventListener("click", () => {
  if (checkArrayEmpty("result-1")) return;

  let tong = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      tong += arr[i];
    }
  }

  document.getElementById("result-1").innerText = `👉 Tổng các số dương trong mảng là: ${tong}`;
});

// 2. đếm số dương
document.getElementById("btn-count-positive").addEventListener("click", () => {
  if (checkArrayEmpty("result-2")) return;

  let dem = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      dem++;
    }
  }

  document.getElementById("result-2").innerText = `👉 Có ${dem} số dương trong mảng`;
});

// 3. tìm số nhỏ nhất
document.getElementById("btn-min").addEventListener("click", () => {
  if (checkArrayEmpty("result-3")) return;

  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  document.getElementById("result-3").innerText = `👉 Số nhỏ nhất trong mảng là: ${min}`;
});

// 4. tìm số dương nhỏ nhất
document.getElementById("btn-min-positive").addEventListener("click", () => {
  if (checkArrayEmpty("result-4")) return;

  let minDuong = null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      if (minDuong === null || arr[i] < minDuong) {
        minDuong = arr[i];
      }
    }
  }

  if (minDuong === null) {
    document.getElementById("result-4").innerText = "👉 Không có số dương trong mảng";
  } else {
    document.getElementById("result-4").innerText = `👉 Số dương nhỏ nhất trong mảng là: ${minDuong}`;
  }
});

// 5. tìm số chẵn cuối cùng, nếu không có thì trả về -1
document.getElementById("btn-last-even").addEventListener("click", () => {
  if (checkArrayEmpty("result-5")) return;

  let soChanCuoi = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      soChanCuoi = arr[i];
    }
  }

  document.getElementById("result-5").innerText = `👉 ${soChanCuoi}`;
});

// 6. đổi chỗ 2 giá trị và in ra mảng sau khi đổi
document.getElementById("btn-swap").addEventListener("click", () => {
  if (checkArrayEmpty("result-6")) return;

  let valueIndex1 = document.getElementById("input-index1").value;
  let valueIndex2 = document.getElementById("input-index2").value;
  let index1 = Number(valueIndex1);
  let index2 = Number(valueIndex2);

  if (valueIndex1.trim() === "" || valueIndex2.trim() === "") {
    document.getElementById("result-6").innerText = "👉 Vui lòng nhập đầy đủ 2 vị trí";
    return;
  }

  if (
    index1 < 0 ||
    index2 < 0 ||
    index1 >= arr.length ||
    index2 >= arr.length
  ) {
    document.getElementById("result-6").innerText = "👉 Vị trí không hợp lệ";
    return;
  }

  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;

  renderArray();
  document.getElementById("result-6").innerText =
    `👉 Mảng sau khi đổi chỗ vị trí ${index1} và ${index2}: ${arr.join(", ")}`;
});

// 7. sắp xếp tăng dần và in ra mảng sau khi sắp xếp
document.getElementById("btn-sort").addEventListener("click", () => {
  if (checkArrayEmpty("result-7")) return;

  arr.sort((a, b) => a - b);
  renderArray();
  document.getElementById("result-7").innerText = `👉 Mảng sau khi sắp xếp tăng dần: ${arr.join(", ")}`;
});

// hàm kiểm tra số nguyên tố
function isPrime(n) {
  if (n < 2 || !Number.isInteger(n)) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// 8. tìm số nguyên tố đầu tiên, nếu không có thì trả về -1
document.getElementById("btn-first-prime").addEventListener("click", () => {
  if (checkArrayEmpty("result-8")) return;

  let soNguyenToDauTien = -1;

  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      soNguyenToDauTien = arr[i];
      break;
    }
  }

  document.getElementById("result-8").innerText = `👉 ${soNguyenToDauTien}`;
});

// 9. thêm số thực vào mảng số thực
document.getElementById("btn-add-real").addEventListener("click", () => {
  let value = document.getElementById("input-real").value;

  if (value.trim() === "") {
    document.getElementById("result-9").innerText = "👉 Vui lòng nhập số thực";
    return;
  }

  arrReal.push(Number(value));
  renderRealArray();
  document.getElementById("input-real").value = "";
});

// 9. đếm số nguyên trong mảng số thực
document.getElementById("btn-count-integer").addEventListener("click", () => {
  if (arrReal.length === 0) {
    document.getElementById("result-9").innerText = "👉 Mảng số thực đang rỗng";
    return;
  }

  let demSoNguyen = 0;

  for (let i = 0; i < arrReal.length; i++) {
    if (Number.isInteger(arrReal[i])) {
      demSoNguyen++;
    }
  }

  document.getElementById("result-9").innerText = `👉 Có ${demSoNguyen} số nguyên trong mảng số thực`;
});

// 10. so sánh số lượng số dương và số âm
document.getElementById("btn-compare").addEventListener("click", () => {
  if (checkArrayEmpty("result-10")) return;

  let demSoDuong = 0;
  let demSoAm = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      demSoDuong++;
    } else if (arr[i] < 0) {
      demSoAm++;
    }
  }

  if (demSoDuong > demSoAm) {
    document.getElementById("result-10").innerText = "👉 Số lượng số dương nhiều hơn số âm";
  } else if (demSoAm > demSoDuong) {
    document.getElementById("result-10").innerText = "👉 Số lượng số âm nhiều hơn số dương";
  } else {
    document.getElementById("result-10").innerText = "👉 Số lượng số dương và số âm bằng nhau";
  }
});
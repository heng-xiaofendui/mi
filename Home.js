let phone = document.querySelector('#phone .main .right');

let total;
let xhr = new XMLHttpRequest();

xhr.onloadend = function () {
    if (xhr.status == 200) {
        // 请求成功，获取结果
        total = JSON.parse(xhr.responseText);


        for (let i = 0; i < 4; i++) {
            phone.innerHTML += `<div class="div1">
                <a href='${total[i].url}'>
                    <div class="top">
                        
                        <img src="${total[i].imgurl}" alt="" width="106px" height="134px">
                        <h3>${total[i].name}</h3>
                        <p>${total[i].describe}</p>
                        <span>${total[i].price}</span>
                    </div>
                </a>

                <a href='${total[i + 4].url}'>
                    <div class="bottom">
                        <img src="${total[i + 4].imgurl}" alt="" width="106px" height="134px">
                        <h3>${total[i + 4].name}</h3>
                        <p>${total[i + 4].describe}</p>
                        <span>${total[i + 4].price}</span>
                    </div>
                </a>

                </div>`
        }












    } else {
        alert(xhr.responseText);
    }
}


xhr.open('get', 'http://localhost/mi/mi.json');

xhr.send(null);








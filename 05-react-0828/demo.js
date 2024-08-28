// 監聽事件
function editTitle() {
    const btn2 = document.getElementById('btn2');
    btn2.addEventListener('click', () => {
        console.log(3);
        document.title = "按鈕2更新title";
    });
}
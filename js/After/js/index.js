window.addEventListener('load',function(){
    //获取元素
    var activate = document.querySelectorAll('.activate');
    var tr = document.querySelector('#tbody').children;
    //注册事件\
    
    for(var i = 0;i<tr.length;i++){
        tr[i].addEventListener('click',function(){
            for(var i =0;i<tr.length;i++){
                tr[i].style.background = '';
            }
            this.style.background = "#e2f489";
        })
    }
    var kaiqi = document.querySelector('.kaiqi');
    kaiqi.addEventListener('click',function(){
        alert('开启成功');
        for(var i = 0;i<activate.length;i++) {
            activate[i].innerHTML = "已激活";
        }
    })
    console.log(kaiqi);
})
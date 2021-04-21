window.addEventListener('load',function(){
    //获取元素
    var activate = document.querySelectorAll('.activate');
    var tr = document.querySelector('#tbody').children;
    var kaiqi = document.querySelector('.kaiqi');
    var guanbi = document.querySelector('.guanbi');
    var mark = document.querySelector('.mark');
    var sun = document.querySelector('.sun');
    var balance = document.querySelector('#balance');
    var maintain = document.querySelector('#maintain');
    var earnings = document.querySelector('#earnings');
    var user = document.querySelector('#user');
    //注册事件
    // 渠道维护提示
    maintain.addEventListener('click',function(){
        setTimeout(function(){
            alert('通道维护');
        },1000)
    })
    //鼠标点击一个选中一行 排他思想
    for(var i = 0;i<tr.length;i++){
        tr[i].addEventListener('click',function(){
            for(var i =0;i<tr.length;i++){
                tr[i].style.background = '';
            }
            this.style.background = "#e2f489";
        })
    }
    var test = window.location.href;
    console.log(test);
    //通过表格里面的sun来扣余额钱
    // var time = setInterval(function(){
    //     balance.innerHTML = balance.innerHTML - sun.innerHTML;
    //     earnings.innerHTML = earnings.innerHTML - sun.innerHTML;
    // },1000)
    // 空期自动增加
    // var KongQi = setInterval(function(){
    //     mark.innerHTML++;
    // },1000)
    //每五分钟扣钱

    //盈利加余额
    //字符串转换
    var mon = parseInt(balance.innerHTML);
    var sy = parseInt(earnings.innerHTML);
    //相加
    balance.innerHTML = mon + sy;
    //获取账号数据
    user.innerHTML
    //开启关闭权限
    kaiqi.addEventListener('click',function(){
        if(confirm('确定开启权限吗？')){
            alert('开启成功');
            for(var i = 0;i<activate.length;i++) {
            activate[i].innerHTML = "已激活";
            }
        }
    })
    guanbi.addEventListener('click',function(){
        if(confirm('确定关闭权限吗？')){
            alert('关闭成功');
            for(var i = 0;i<activate.length;i++) {
            activate[i].innerHTML = "未激活";
            }
        }
    })
})
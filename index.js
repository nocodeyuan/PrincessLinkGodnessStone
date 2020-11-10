;(function(document){

    const btn = document.getElementById('btn');

    //绑定点击事件
    btn.addEventListener('click',render,false);
    document.addEventListener('keydown',listen,false);

    function listen(e){
        const event = e || window.event;
        if(event.keyCode === 13){
            render();
        }
    }
    
    /**
     * 页面渲染
    **/
    function render(){
        //当前星级
        const currentX = document.getElementsByClassName('input_a')[0].value;
        //将要升至的星级
        const willX = document.getElementsByClassName('input_b')[0].value;
        console.log('current'+currentX+' will'+willX);
        if(reg(currentX,willX)){
            document.getElementsByClassName('article')[0].innerText = calc(currentX,willX)+'';
        }else{
            alert('输入逻辑错误');
        }
    }   


    /**
     *  正则校验 
    **/
    function reg(current,will){
        if(current>will || current<1 || current>5 || will<1 || will>5){
            return false;
        }
        return true;
    }

    /**
     * 1x-2x 30  20*1+10*2
     * 2x-3x 100 10*2+20*3+20*4+50*5
     * 3x-4x 120 
     * 4x-5x 150
     * 计算母猪石需求数量
     * 20 40 60 80 100 
     * 120 150 270
     * 130 250 400
     * 
    **/
    function calc(current,will){
        const arr = [0,0,30,130,250,400];
        //获取碎片需求数量120 150 270
        const suipian = arr[will]-arr[current];
        console.log("碎片："+suipian);
        //统计母猪石数量
        let result = 0;
        for(let i=1;i<=suipian;i++){
           
            result += count(i);
            console.log({i,result})
        }
        return result;
    }

    //每个碎片需求母猪石数量判断
    function count(num){
        if(num<=20){
            return 1
        }else if(num>20 && num<=40){
            return 2
        }else if(num>40 && num<=60){
            return 3
        }else if(num>60 && num<=80){
            return 4
        }else{
            return 5
        }
    }
})(document)
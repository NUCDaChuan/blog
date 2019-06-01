window.onload=function(){

    //标题变红
    let heads=document.getElementById('head');
    heads.onmouseenter=function(){
        heads.style.color='red';
    };
    heads.onmouseleave=function(){
        heads.style.color="#fff";
    };

    //下划线
    let dailyList=document.getElementById('dailyList');
    let dailyListLi=dailyList.getElementsByTagName('a');
    for(let i=0;i<dailyListLi.length;i++){
        dailyListLi[i].onclick=function(){
            for(let j=0;j<dailyListLi.length;j++){
                dailyListLi[j].style.borderBottom='none';
            }
            this.style.borderBottom='2px solid #000';
        }
    }

    let newslist=document.querySelectorAll('.newslist li');
    let newslistP=document.querySelectorAll('.newslist p');
    let newslistA=document.querySelectorAll('.newslist a');

    for(let i=0;i<newslist.length;i++){
        newslist[i].onmouseover=function(){
            for(let j=0;j<newslist.length;j++){
                newslistP[j].style.display='none';
                newslist[j].style.background="none";
                newslistA[j].style.fontWeight="normal";

            }
            newslistP[i].style.display='-webkit-box';
            newslist[i].style.background="#f7f7f7";
            newslistA[i].style.fontWeight="bold";
        }
    }
    //轮播图
    let index=0;
    let current=0,next=0;
    let bannerdian=document.querySelectorAll('.bannerDrop li');
    let leftBtn=document.querySelector('.leftBtn');
    let rightBtn=document.querySelector('.rightBtn');
    let bannerImg=document.querySelectorAll('.bannerLeftUl li');
    let bannerLeft=document.querySelector('.bannerLeft');
    let w=bannerImg[0].offsetWidth;
    let flag=true;
    let t= setInterval(rightBtn.onclick,2000);
    bannerLeft.onmouseenter=function(){
        clearInterval(t)
    }
    bannerLeft.onmouseleave=function(){
        t= setInterval(rightBtn.onclick,2000);
    }
    rightBtn.onclick=function(){
        if(!flag){
            return;
        }
       flag=false;
        next++;
        if(next==bannerImg.length) {
            next = 0;
        }
        bannerImg[next].style.left=w+'px';
        bannerdian[current].classList.remove('hot');
        bannerdian[next].classList.add('hot');
        animate(bannerImg[current],{left:-w});
        animate(bannerImg[next],{left:0},function(){
            flag=true;
        });
        current=next;
    }
    leftBtn.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        next--;
        if(next<0) {
            next =bannerImg.length-1;
        }
        bannerImg[next].style.left=-w+'px';
        bannerdian[current].classList.remove('hot');
        bannerdian[next].classList.add('hot');
        animate(bannerImg[current],{left:w});
        animate(bannerImg[next],{left:0},function(){
            flag=true;
        });
        current=next;
    }

    for(let i=0;i<bannerdian.length;i++){
        bannerdian[i].onclick=function(){
            if(next===i){
                return;
            }
            next=i;
            if(next>current){
                bannerImg[next].style.left=w+'px';
                animate(bannerImg[current],{left:-w});
                animate(bannerImg[next],{left:0});

            }else{
                bannerImg[next].style.left=-w+'px';
                animate(bannerImg[current],{left:w});
                animate(bannerImg[next],{left:0});

            }

            bannerdian[current].classList.remove('hot');
            bannerdian[next].classList.add('hot');
            current=next;
        }
    }
    /*
    * 左右点击播放轮播图
    * */
    // rightBtn.onclick=function(){
    //     index++;
    //     if(index==bannerLeftImg.length){
    //         index=0;
    //     }
    //     bannerLeftImg.forEach(function(ele){
    //         ele.style.zIndex= 1;
    //     })
    //     Array.prototype.forEach.call(bannerdian,function(elem){
    //         elem.classList.remove('hot')
    //     })
    //     bannerdian[index].classList.add('hot');
    //     bannerLeftImg[index].style.zIndex = 998;
    // }
    // leftBtn.onclick=function(){
    //     index--;
    //     if(index<0){
    //         index=bannerLeftImg.length-1;
    //     }
    //     bannerLeftImg.forEach(function(ele){
    //         ele.style.zIndex= 1;
    //     })
    //     Array.prototype.forEach.call(bannerdian,function(elem){
    //         elem.classList.remove('hot')
    //     })
    //     bannerdian[index].classList.add('hot');
    //     bannerLeftImg[index].style.zIndex = 998;
    // }

}
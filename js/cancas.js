
    var can =document.getElementById('canvas');
        var ctx = can.getContext("2d");//设置canvas的绘图环境
        var w = can.width = window.innerWidth;//设置canvas的宽
        var h= can.height = window.innerHeight;//设置canvas的高
        var counts = 30;//雨点个数
        var drops = [];//用一个数组来存储每一个雨滴对象
        window.onresize = function(){
            var w = can.width = window.innerWidth;//设置canvas的宽
            var h= can.height = window.innerHeight;//设置canvas的高     
        }
        function Drop(){};
        Drop.prototype = {
            init: function(){//初始化属性值(宽高等)
                this.x = random(0,w);//随机生成x坐标，取值在（0.w）之间
                this.y = 0;//y的初始值
                this.vy = random(4,5);
                this.l = random(h*0.8,h*0.9);
                this.r = 1;//初始半径
                this.vr = 1;
                this.a = 1;
                this.va = 0.96//透明度更新速度
                this.sin=0.5;
            },
            draw: function(){
                if(this.y >= this.l){
                        ctx.beginPath();
                        ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
                        ctx.strokeStyle = "rgba(0,255,255,"+this.a+")";
                        ctx.stroke();
                }else{
                    ctx.fillStyle = "rgb(0,255,255)";
                    ctx.fillRect(this.x,this.y,2,10);
                }

                //更新坐标位置
                this.update();
            },
            update: function(){
                if(this.y<this.l){
                    this.y += this.vy;
                    // console.log(this.sin);
                    this.x = this.x+Math.sin(this.sin);
                }
                else{
                    if(this.a >0.03){
                        this.r += this.vr;//更新半径
                        if(this.r>10){//半径大于50慢慢消失
                            this.a *= this.va;
                        }
                    }else{
                    this.init();
                }
            }
        }
    }
        //实例化雨滴对象
        /*var drop = new Drop();
        drop.init();//初始化添加属性
        drop.draw();//绘制出来
        */

        function move(){
            //drop.draw();
            ctx.fillStyle = "rgba(0,0,0,0.1)";
            ctx.fillRect(0,0,w,h);//清空画布
            for(i=0;i<drops.length ; i++){
                drops[i].draw( );
            }
            requestAnimationFrame(move);//帧动画
        }
        move();

        function setDrop(){
            for (var i=0;i<counts;i++) {
            (function(j){
                setTimeout(function(){
                    //console.log(j);
                    var drop = new Drop();
                    drop.init();
                    drops.push(drop);
                },j*200)
            })(i)               
        }
    }
        setDrop();
        /*setInterval(function(){
            ctx.clearRect(0,0,w,h);
            drop.draw();
        },1000/60);
        */
        function random(min,max){
            return Math.floor(Math.random()*(max-min))+min;
        }
        //console.log(drops);
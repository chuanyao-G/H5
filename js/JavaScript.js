//<script src=""></script>

//随机数-------------------------------------
function randomInt(min , max){
      return min + parseInt( Math.random() * (max - min + 1));
}


//随机颜色-----------------------------------
function randomColor(){
  var r = randomInt(0 , 255),
      g = randomInt(0 , 255),
      b = randomInt(0 , 255)
  var _randomColor = "rgb("+ r +","+ g +"," + b + ")";
  return _randomColor;
}


//阶乘---------------------------------------
	function p(n){
	if(n===1){
	return 1;
	}
	return p(n-1)*n;
	}
	
	
//随机点名-------------------------------------
//<input type="text" id="class_name">
//<button id="btn">随机点名</button>
var arr = ["吴彦祖","吴孟达","吴奇隆","吴秀波","吴邪","无人"];
  btn.onclick = function(){
      var r_int = randomInt(0,arr.length - 1);
      var r_name = arr.splice(r_int,1);
      if(r_name[0] === undefined){
            class_name.value = "没有名字了";
      }else{
            class_name.value = r_name[0];
      }
}
  
  
//随机大小  -----------------------------------
function randomInt(min, max){
      return min + parseInt(Math.random() * (max - min) + 1);
} 


//时分秒 ---------------------------------------  
function countDown(dateString){
      var target = new Date(dateString);
      var now = Date.now();
      //差值时间(单位为ms);
      var Dtime = target.getTime() - now;

      var hour = parseInt(Dtime / 1000 / 3600) ;
      var minute = parseInt((Dtime - hour * 1000 * 3600) / 1000 / 60);
      var second = parseInt((Dtime - hour * 1000 * 3600 - minute * 1000 * 60) / 1000);
      var ms = Dtime % 1000;
      return {
            hour : buling(hour),
            minute : minute,
            second : second,
            ms : ms
      }
}


//补零-------------------------------------------
function buling(num){
      return num < 10 ? "0" + num : num;
}


//查询选择器,通过选择器获取对象，返回伪数-------------------
function _(select){
      // 如果选择的数组只有一项,直接返回这个项而不是数组;
      var doms = document.querySelectorAll(select);
      if(doms.length === 0){
            return null;
      }
      return doms.length === 1 ? doms[0] : doms;
}


// 伪数组转换成真数组的方法------------------------------
function _toArray(list){
      return Array.prototype.slice.call(list);
}

function _on(dom,event_type,fn){
      dom.addEventListener(event_type,fn);
}

function _off(dom,event_type,fn){
      dom.removeEventListener(event_type,fn);
}

function _once(dom,event_type,fn){
      dom.addEventListener(event_type,fn);
      // 当个事件执行的时候,移除掉当前监听的事件;
      dom.addEventListener(event_type,removeEvent)
      // 是清空参数函数及当前清空函数的功能;
      function removeEvent(){
            _off(dom,event_type,fn);
            _off(dom,event_type,removeEvent);
      }
}


// 事件委托封装;
function _delegation(parent_node,event_type,target_selector,fn){
      // 1. 绑定不同的事件;
     parent_node.addEventListener(event_type,handlerClick)
     // 2. 事件处理函数;
     function handlerClick(evt){
           // 2.1 判断部分;
           var e = evt || window.event;
           var target = e.target || e.srcElement;
           // 2.1.1 选择范围会改变
           var targets = document.querySelectorAll(target_selector);
           targets = Array.from(targets);
           if(targets.indexOf(target) === -1) return false;
           // 2.2 事件处理函数;
           fn(e);
     }
}


//cookie------------------------------------
function _cookie(key,value,path,expires){
      var str = "";
      str += key + "=" + value + ";";
      if(path){
            str += "path=" + path + ";";
      }
      if(expires){
            var d = new Date();
            d.setDate(d.getDate() + expires);
            str += "expires=" + d + ";";
      }
      document.cookie = str;
      return str;
}

function _removeCookie(key,path){
_cookie(key,"",path,-1)
}

function _getCookie(key){
      var cookieString = document.cookie;
      var cookieArray = cookieString.split("; ");      
      var res = "";
      var hasKey = cookieArray.some(function(item){
            res = item.split("=")[1];
            return item.split("=")[0] === key
      })
      if(hasKey){
            return res;
      }else{
            return "";
      }
}


//cookie------------------------------------
function _cookie(key,value,expires,path){
      var str = "";
      str = key + "=" + value +";";

      if(typeof expires === "number"){
            var d = new Date();
            d.setDate(d.getDate() + expires);
            str += "expires="+ d + ";";
      }
      str += "path=" + path + ";";
      document.cookie = str;
      return str;
}



//运动框架-----------------------------
function animate(dom,attr,target){
  clearInterval(dom.timer);
  dom.timer = setInterval(()=>{
        let distance = target -  getStyle(dom,attr,"number");
    let speed = distance > 0 ?  Math.ceil(distance/10) : Math.floor(distance  / 10);
    dom.style[attr] =  getStyle(dom,attr,"number") + speed + "px";
            if(distance === 0){
                  clearInterval(dom.timer);
                  timer = null;
            }
      },50)
}
function getStyle(dom,attr,type){
  var res_attr =  getComputedStyle(dom)[attr];
  if(type === "number"){
        return parseInt(res_attr);
  }
      return res_attr;
}



//选项卡:------------------------------------

 function Tab(btn_selector  , content_selector ){
          this.index = 0;
          this.btns = document.querySelectorAll(btn_selector);
          this.contents = document.querySelectorAll(content_selector);
    }     
    Tab.prototype.init = function(event_type){
          this.event_type = event_type ? event_type : "click";
          this.btns = Array.from(this.btns);
          this.contents = Array.from(this.contents);
          this.bindEvent();
    }
    Tab.prototype.bindEvent = function(){
          this.btns.forEach((item,index)=>{
                item.addEventListener(this.event_type,this.changeIndex.bind(this,index))
                item.addEventListener(this.event_type,this.changeClass.bind(this));
          });
    }
    Tab.prototype.changeIndex = function(index){
          this.index = index;
    }
    Tab.prototype.changeClass = function(){
          this.contents.forEach((item , index)=>{
                item.className = item.className.replace(/\sactive/g,"");
                this.btns[index].className = "";
          })
          this.contents[this.index].className += " active";
          this.btns[this.index].className += " active";
    }
    var tab = new Tab(".button-wrap button",".content-box");
    tab.init("mouseenter");










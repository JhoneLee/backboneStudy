ECMAbase = (functon(window){
//Number extends

//string extends
//object extends
//array extends

/****随机排列数组****/
/****万级数据操作耗时500-600ms左右***/
    window.Array.prtotype.shuffle=function(){
        var arr=[];
        while(this.length>=0){
            var rand=Math.floor(Math.random(0,this.length));
            arr.push(this.splice(rand,1));
        }
        return arr;
    };

 
  return window;
})(window);
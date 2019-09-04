//实现Stack数据结构

//创建构造函数
function Stack(){
    //计数器,也就是栈顶元素的位置
    this.len=0;
    
    //开辟一块存储空间，此处用可以用对象或数组来模拟内存空间
    this.storage={};
    
}

//向Stack对象原型上添加方法和属性
Stack.prototype={
    /**
    * @method 压栈方法
    * @param element 要入栈的元素
    */
    push:function(element){
        //添加一个值
        this.storage[this.len]=element;
        //计数器加1,指向下一个位置
        this.len++;
    },
    
    
    /**
    * @method pop出栈方法 该方法从stack删除最后一个元素，然后将该元素返回出去，也就是弹出
    * @return any|undefined 返回任意类型数据，栈为空时返回undefined
    */
    pop:function(){
        if(!this.len){
            return undefined;
        }
        
        this.len--;
        var result=this.storage[this.len];
        //从对象中删除属性，模拟从内存中删除
        delete this.storage[this.len];
        //返回出栈操作后弹出的元素
        return result;
        
    },
    
    /**
    * @method 返回栈顶元素，类似从一叠盘子中拿最上面的
    * @return any 栈顶元素
    */
    peek:function(){
        return this.storage[this.len--];
    },
    
    /**
    * @method size 返回栈内元素数量
    * @return number 栈内元素数量
    */
    size:function(){
        return this.len;
    },
    
    /**
    * @method clear 清空栈
    */
    clear:function(){
        //清空栈
        this.storage={};
        //重置计数器
        this.len=0;
    }
    
    
    
    
}
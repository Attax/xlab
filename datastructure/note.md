# xlab 数据结构学习笔记

# JavaScript实现常见的数据结构

## stack（栈）

Stack一种连续储存的数据结构，具有的后进先出（last in first out）特点，类似于一堆盘子，只能从最上面取，一个接着一个，后放上去的盘子先被使用。
想要读取栈中的某个元素，就是将其之间的所有元素出栈才能完成。Stack通常具有如下的方法或属性：

+ push（入栈/压栈）
+ pop （出栈）
+ peek（返回栈顶元素
+ length（返回栈内元素数量）
+ clear （清空栈）

```javascript
//实现Stack数据结构

//创建构造函数
var Stack=function (){
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
```

-----


## Queue（队列）

Queue类似Stack,不同的是遵循先进先出（first in first out）的原则,也就是先来后到，最常见的例子就是是生活中的排队，这也是这种数据结构叫做Queque（队列）的原因。与Stack类型，Queue也有一些常见的方法：

+ enqueue（入队）:向队尾添加元素
+ dequeque （出队）：移除队首元素，并将该元素返回
+ front : 获取队首元素
+ back : 获取队尾元素
+ clear:清空队列
+ isEmpty : 判断队列是否为空
+ size ： 获取队里元素数量



```javascript
//实现Queue数据结构

var Queue=function(){
    //开辟一块存储空间，此处用数组来模拟内存空间
    this.storage=[];
} 


Queue.prototype={

	/**
	* @method enqueue 入队
	* @param element 待入队的元素
	*/
	enqueue:function(element){
		//将元素压入队尾
		this.storage.push(element);
	},

	/**
	* @method dequeue 出队（删除队首元素并返回）
	* @return any 队首元素
	*/
	dequeue:function(){
		//从队列头部删除元素，并返回该队列头部元素
		return this.storage.shift();
	},

	/**
	* @method front 返回队首元素
	* @return any 队首元素
	*/
	front:function(){
		//返回
		return this.storage[0];
	},
	/**
	* @method back 返回队尾元素
	* @return any 队尾元素
	*/
	back:function(){
		//返回
		return this.storage[this.storage.length-1];
	},
	
	/**
	* @method clear 清空队列
	*/

	clear:function(){
		//清空存储空间
		this.storage=[];
	},
	/**
	* @method isEmpty 返回队列是否为空
	* @return Boolean true or false
	*/
	isEmpty:function(){
		return !this.storage.length;
	},

	/**
	* @method size 返回队列长度
	* @return Number 队列长度
	*/

	size:function(){
		return this.storage.length;
	}

}
```





### Priority Queue（优先队列）

在实际开发工作中，队列的最常见体现是MQ（Message Queue 消息队列）,消息队列的任务队列中包含常规的队列，遵循先来后到的原则，一个任务处理完，接着处理下一个任务，但也有另外一种队列，优先队列。优先队列在生活中的体现比如去银行、机场等有VIP通道，VIP候机室等，可以比普通队列有更高的优先级，享受更好的服务。在开发中体现的是优先级比较高的任务，比如在处理能力有限的情况下，要优先保证核心任务的处理。举个例子，现在的服务器性能较差，要优先保障客户下单、支付等优先级或者权重高的任务被及时处理，而像发送广告邮件这种任务就可以延后处理，甚至不处理。

实现优先队列一般有两种方式：

+ 设置优先级，按照优先级排列位置，按顺序处理队列

+ 设置优先级，依次排列位置，按优先级处理队列

两种方式不同的地方在于优先级生效的时机，一个是在排队时生效，一个是处理队列时生效，究其本质并无太多不同



```javascript
//实现Queue数据结构


var Queue=function(){
    //开辟一块存储空间，此处用数组来模拟内存空间
    this.storage=[];
} 


Queue.prototype={
	//storage:[],
	/**
	* @method enqueue 入队
	* @param element 待入队的元素
	*/
	enqueue:function(element){
		//将元素压入队尾
		this.storage.push(element);
	},

	/**
	* @method dequeue 出队（删除队首元素并返回）
	* @return any 队首元素
	*/
	dequeue:function(){
		//从队列头部删除元素，并返回该队列头部元素
		return this.storage.shift();
	},

	/**
	* @method front 返回队首元素
	* @return any 队首元素
	*/
	front:function(){
		//返回
		return this.storage[0];
	},
	/**
	* @method back 返回队尾元素
	* @return any 队尾元素
	*/
	back:function(){
		//返回
		return this.storage[this.storage.length-1];
	},
	
	/**
	* @method clear 清空队列
	*/

	clear:function(){
		//清空存储空间
		this.storage=[];
	},
	/**
	* @method isEmpty 返回队列是否为空
	* @return Boolean true or false
	*/
	isEmpty:function(){
		return !this.storage.length;
	},

	/**
	* @method size 返回队列长度
	* @return Number 队列长度
	*/

	size:function(){
		return this.storage.length;
	},
	
	print:function(){
		console.log(this.storage);
	}

};



var extend=function(subClass,superClass){
	//subClass

	//利用空对象实现继承
	var F=function(){};
	
	F.prototype=superClass.prototype;
	subClass.prototype=new F();
	subClass.prototype.constructor=subClass;
	subClass.upper=superClass.prototype;
}


var PriorityQueue=function(){
	//storage属性无法继承，因为父类的storage不是挂载在原型上的，而是每个实例都有一个单独的
	this.storage=[];
};

//继承普通队列类
extend(PriorityQueue,Queue);

//改写父类的方法

/**
* @method enqueue 入队
* @param element 待入队的元素
* @param priority 待入队的元素的优先级(数字越小，优先级越高，1为最高) 此处我们实现的是最小优先队列，对应的还有最大优先队列，不过通常我们用权重来指代，权重越大的，在队列中越靠前
*/

PriorityQueue.prototype.enqueue=function(element,priority){
	
	var _that=this;
	
	var _newElement={
		'element':element,
		'priority':priority
	};
	
	
	//如果队列为空
	if(_that.isEmpty()){
		//将元素压入队尾（此时也是队首）
		_that.storage.push(_newElement);
	}else{
		//记录当前元素是否被添加过,如果循环结束还没有被添加，直接添加到队尾
		var _added=false;
		//循环队列，
		for(var i=0;i<_that.storage.length;i++){
			//如果当前元素优先级低于待添加元素
			if(priority<_that.storage[i].priority){
				//添加到当前元素之前
				_that.storage.splice(i,0,_newElement);
				//设置当前元素已经被添加过
				_added=true;
				//跳出循环
				break;
			}
		}

		//循环结束，如果还未被添加过，直接添加到队尾
		if(!_added){
			_that.storage.push(_newElement);
		}

	}

};

```



上面的代码示例为最小优先队列，priority值越低，优先级越高，在队列中的位置越靠前。同样的，有最小就有最大，还有一种实现优先队列叫最大优先队列，我习惯称之为权重队列（weight）,权重值（weight）越大，在队列中的位置越靠前。

-----

##  LinkedList （链表）
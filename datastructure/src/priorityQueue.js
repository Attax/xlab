//实现Queue数据结构


var Queue=function(){
    //开辟一块存储空间，此处用数组来模拟内存空间
    storage=[];
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
	

	
	
	//如果队列没有元素
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





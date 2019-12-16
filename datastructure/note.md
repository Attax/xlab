# xlab 数据结构学习笔记

# JavaScript实现常见的数据结构

## stack（栈）

Stack一种连续储存的数据结构，具有的后进先出（last in first out）特点，类似于一堆盘子，只能从最上面取，一个接着一个，后放上去的盘子先被使用。
想要读取栈中的某个元素，就是将其之间的所有元素出栈才能完成。Stack通常具有如下的方法或属性：

+ push(element)：入栈/压栈
+ pop ()：出栈，返回被移除的元素
+ peek()：返回栈顶元素
+ size()：返回栈内元素数量
+ clear ()：清空栈
+ isEmpty()：返回栈是否为空

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
    },
    /**
    * @method isEmpty 返回栈是否为空
    * @return Boolean true or false
    */
    isEmpty:function(){
        return !this.len;
    }
    
}
```

-----


## Queue（队列）

Queue类似Stack,不同的是遵循先进先出（first in first out）的原则,也就是先来后到，最常见的例子就是是生活中的排队，这也是这种数据结构叫做Queque（队列）的原因。与Stack类型，Queue也有一些常见的方法：

+ enqueue(element)：入队，向队尾添加元素
+ dequeque()：出队，移除队首元素，并将该元素返回
+ front()： 获取队首元素
+ back()： 获取队尾元素
+ clear()：清空队列
+ isEmpty()： 判断队列是否为空
+ size ()： 获取队列元素数量



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


//实现一个继承方法
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

链表存储有序的数据集合，但不同于数组，链表中的元素并不是连续的，每个链表元素由一个存储自身的节点和一个指向下一个节点的引用（也称为指针或者链接）组成。相比于数组这种定长的数据结构，添加或移除元素时不需要改动其他元素，所以链表修改比较快，而数组可以访问直接访问任何位置的元素，所以读取比较快，想访问链表中的元素，需要从表头开始，依次读取，直到找到指定的元素。

链表在生活中常见的例子是火车编组和自行车链条。火车车厢是火车编组（链表）的节点，车厢之间的连接挂钩就是引用（也就是所谓的指针）。如果要给火车编组中添加一节车厢（新节点），只需要把要添加位置的两个车厢之间的连接断开，把前一节车厢和新添加的车厢连接上，再把新添加的车厢的和原来的后一节车厢连接起来。这个操作就是链表中的修改操作。

链表通常具有以下方法或属性：

+ append(element)：向链表尾部添加一个元素
+ insert(position,element)：向链表指定位置添加一个元素
+ remove(element) ：从链表中移除一项
+ indexOf：返回元素在链表中的位置，如果没有，则返回-1
+ removAt(position)：从链表中指定位置移除元素
+ isEmpty : 判断链表是否为空
+ size ： 获取链表元素数量



```javascript
//实现LinkedList数据结构


var LinkedList = function() {
    var _that = this;

    //初始化链表第一个节点
    _that.head = null;
    //初始化链表长度为0
    _that.length = 0;
}


LinkedList.prototype = {
    /**
     * @method append 向链表尾部添加节点
     * @param element 待添加的元素
     */
    append: function(element) {
        var _that = this;
        //初始化当前节点
        var current = null;

        //生成链表节点
        var node = {
            //节点的元素
            'element': element,
			//指向下一个节点的链
			'next': null
        };


        //如果链表第一个节点不存在，即链表为空
        if (_that.head === null) {
            //设置要添加的节点为链表的第一个节点
            _that.head = node;
        } else {
            //指定当前指针为第一个节点
            current = _that.head;
            //开始循环
            //如果当前节点存在指向下一个节点的指针，则还没有找到链接最后一个节点，继续循环，
            //直到找到没有下一个指针的节点，也就是最后一个节点
            while (current.next) {
                //将当前节点设置为下一个，继续循环
                current = current.next;
            }

            //将最后一个节点的指针指向待添加的节点
            current.next = node;
        }

        //更新节点元素数量
        _that.length++;

    },

    /**
     * @method insert 插入节点
     * @param position {Number} 插入的位置
     * @param element {any} 插入的节点
     */
    insert: function(position, element) {
        var _that = this;
        //先检查越界值,确保传入的位置在链表范围内
        if (position > -1 && position <= _that.length) {

            //生成链表节点
            var node = {
                //节点的元素
                'element': element,
                //指向下一个节点的链
                'next': null
            };


            //设置当前节点为头节点，即第0个节点
            var current = _that.head;
            //记录上一个节点（移除一个节点后，需要把断开的链表重新连上，所以需要记录上一个和下一个）
            var previous = null;
            //记录当前位置为0
            var index = 0;
            //如果要在链表头部添加
            if (position === 0) {
                node.next = current;
                _that.head = node;
            } else {
                /**
                 * 对当前位置++，比较是否小于要添加节点的位置，
                 * 如果小于，则继续向后
                 */
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                //将被插入的节点和被插入位置的节点连接起来
                node.next = current;
                //将被插入位置的上一个节点和被插入的节点连接起来
                previous.next = node;

            }
            //更新节点元素数量
            _that.length++;
            return true;
        } else {
            return false;
        }
    },
    /**
     * @method removeAt 移除某位置的节点并返回该节点
     * @param {Number} position 
     * @return {any} 被移除的节点
     */
    removeAt: function(position) {
        var _that = this;
        //先检查越界值,确保传入的位置在链表范围内
        if (position > -1 && position < _that.length) {
            //设置当前节点为头节点，即第0个节点
            var current = _that.head;
            //记录上一个节点（移除一个节点后，需要把断开的链表重新连上，所以需要记录上一个和下一个）
            var previous = null;
            //记录当前位置为0
            var index = 0;
            //如果要移除的是首节点，则移除后的首节点为下一个节点
            if (position === 0) {
                _that.head = current.next;
            } else {
                /**
                 * 对当前位置++，比较是否小于要移除的位置，
                 * 如果小于，则当前位置还不是要移除的位置，继续向后
                 */
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                //将被删除节点的上一个节点与被删除节点的下一个节点连接起来，跳过current（被删除节点）
                previous.next = current.next;

            }
            //更新节点元素数量
            _that.length--;
            return current.element;

        } else {
            return null;
        }
    },

	
	/**
	* @method indexOf查找节点的位置
	* @param element 待查找的节点
	* @returns number 返回元素所在位置，如果元素不存在，返回-1
	*/
    indexOf: function(element) {
		var _that=this;
		//从第0个节点开始查询
		var current=_that.head;
		//记录元素位置
		var index=0;
		while(current){
			if(element===current.element){
				//返回位置
				return index;
			}
			index++;
			//查找下一个节点
			current=current.next;
		}
		//如果查询完所有的没有找到匹配的，返回-1
		return -1;
    },
	
	/**
	* @method remove 
	* @param {any} element 要移除的节点
	* @returns {any|null} 被移除的节点
	*/
    remove: function(element) {
		var _that;
		//查找元素位置
		var index=_that.indexOf(element);
		//调用removeAt方法移除元素
		return _that.removeAt(index);
    },
	
	
	/**
	* @method toString 转为字符串输出
	*/
	toString:function(){
		var _that=this;
		var current=_that.head;
		var string='';
		
		while(current){
			string+=current.element+(current.next?'\r\n':'');
			current=current.next;
		}
		
		return string;
	},
    /**
     * @method isEmpty 返回链表是否为空
     * @return Boolean true or false
     */
    isEmpty: function() {
        return !this.length;
    },

    /**
     * @method size 返回队列长度
     * @return Number 队列长度
     */

    size: function() {
        return this.length;
    },
	
	//获取头节点
    getHead: function() {
       	return this.head;
    }

};
```

###  双向链表

双向链表和普通链表的区别是在双向链表中链接是双向的，一个链指向下一个元素，一个链指向上一个元素。双向链表提供了两种迭代方法：从头到尾或者反过来，可以访问指定节点的上一个或者下一个节点。在单向链表中，如果错过了要查找的元素，就要从头开始，重新开始迭代

双向链表方法：

+ append(element)：向链表尾部添加一个元素
+ insert(position,element)：向链表指定位置添加一个元素
+ remove(element) ：从链表中移除一项
+ indexOf：返回元素在链表中的位置，如果没有，则返回-1
+ removAt(position)：从链表中指定位置移除元素
+ isEmpty : 判断链表是否为空
+ size ： 获取链表元素数量

```javascript
//实现doublyLinkedList数据结构

var DoublyLinkedList = function() {
    var _that = this;

    //初始化链表第一个节点
    _that.head = null;
	//链表的最后一个节点
	_that.tail=null;
    //初始化链表长度为0
    _that.length = 0;
}


DoublyLinkedList.prototype = {
    /**
     * @method append 向链表尾部添加节点
     * @param element 待添加的元素
     */
    append: function(element) {
        var _that = this;
        //初始化当前节点
        var current = null;

        //生成链表节点
        var node = {
             //节点的元素
			'element': element,
			//指向下一个节点的链
			'next': null,
			//指向上一个节点的链
			'prev':null
        };


        //如果链表第一个节点不存在，即链表为空
        if (_that.head === null) {
            //设置要添加的节点为链表的第一个节点
            _that.head = node;
			//尾节点设置为新添加的节点
			_that.tail=node;
        } else {
            //指定当前指针为第一个节点
            current = _that.head;
            //开始循环
            //如果当前节点存在指向下一个节点的指针，则还没有找到链接最后一个节点，继续循环，
            //直到找到没有下一个指针的节点，也就是最后一个节点
			//此处借由while循环完成，其实应该可以通过tail节点直接添加，而不经过循环
            while (current.next) {
                //将当前节点设置为下一个，继续循环
                current = current.next;
            }
			//将待添加到链表尾部的节点的prev指向链表中的最后一个节点
			node.prev=current;
            //将最后一个节点的指针指向待添加的节点
            current.next = node;
			//尾节点设置为新添加的节点
			_that.tail=node;
			
			/**
			//此种方式不借助循环，性能更好
			node.prev=_that.tail;
			_that.next=node;
			//设置新添加节点为最小的尾节点
			_that.tail=node;
			*/
			
			
        }

        //更新节点元素数量
        _that.length++;

    },

    /**
     * @method insert 插入节点
     * @param position {Number} 插入的位置
     * @param element {any} 插入的节点
     */
    insert: function(position, element) {
        var _that = this;
        //先检查越界值,确保传入的位置在链表范围内
        if (position > -1 && position <= _that.length) {

            //生成链表节点
            var node = {
               'element': element,
				//指向下一个节点的链
				'next': null,
				//指向上一个节点的链
				'prev':null
            };


            //设置当前节点为头节点，即第0个节点
            var current = _that.head;
            //记录上一个节点（移除一个节点后，需要把断开的链表重新连上，所以需要记录上一个和下一个）
            var previous = null;
            //记录当前位置为0
            var index = 0;
            //如果要在链表头部添加
            if (position === 0) {
				//如果头部节点不存在
				if(!_that.head){
					_that.head = node;
					_that.tail=node;
				}else{
					node.next = current;
					current.prev=node;
					_that.head=node;
				}
                
                
            }//如果是添加到最后
			else if(position==_that.length){
				current=_that.tail;
				current.next=node;
				node.prev=current;
				_that.tail=node;
			} 
			else {
                /**
                 * 对当前位置++，比较是否小于要添加节点的位置，
                 * 如果小于，则继续向后
                 */
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                //将被插入的节点和被插入位置的节点连接起来
                node.next = current;
                //将被插入位置的上一个节点和被插入的节点连接起来
                previous.next = node;
				
				current.prev=node;
				node.prev=previous;

            }
            //更新节点元素数量
            _that.length++;
            return true;
        } else {
            return false;
        }
    },
    /**
     * @method removeAt 移除某位置的节点并返回该节点
     * @param {Number} position 
     * @return {any} 被移除的节点
     */
    removeAt: function(position) {
        var _that = this;
        //先检查越界值,确保传入的位置在链表范围内
        if (position > -1 && position < _that.length) {
            //设置当前节点为头节点，即第0个节点
            var current = _that.head;
            //记录上一个节点（移除一个节点后，需要把断开的链表重新连上，所以需要记录上一个和下一个）
            var previous = null;
            //记录当前位置为0
            var index = 0;
            //如果要移除的是首节点，则移除后的首节点为下一个节点
            if (position === 0) {
				//设置新的首节点
                _that.head = current.next;
				//如果只有一项
				if(_that.length==1){
					_that.tail=null;
				}else{
					//新的首节点前指针要设置为null
					_that.head.prev=null;
				}
            }
			//如果要删除的是最后一项 尾节点
			else if(position===_that.length-1){
				
				current=_that.tail;
				//生成新的尾节点
				_that.tail=current.prev;
				_that.tail.next=null;
			}
			else {
                /**
                 * 对当前位置++，比较是否小于要移除的位置，
                 * 如果小于，则当前位置还不是要移除的位置，继续向后
                 */
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                //将被删除节点的上一个节点与被删除节点的下一个节点连接起来，跳过current（被删除节点）
                previous.next = current.next;
				//修改被删除节点的后一个节点的前指针为被删除节点的前指针
				current.next.prev=previous;

            }
            //更新节点元素数量
            _that.length--;
            return current.element;

        } else {
            return null;
        }
    },

	
	/**
	* @method indexOf查找节点的位置
	* @param element 待查找的节点
	* @returns number 返回元素所在位置，如果元素不存在，返回-1
	*/
    indexOf: function(element) {
		var _that=this;
		//从第0个节点开始查询
		var current=_that.head;
		//记录元素位置
		var index=0;
		while(current){
			if(element===current.element){
				//返回位置
				return index;
			}
			index++;
			//查找下一个节点
			current=current.next;
		}
		//如果查询完所有的没有找到匹配的，返回-1
		return -1;
    },
	
	/**
	* @method remove 
	* @param {any} element 要移除的节点
	* @returns {any|null} 被移除的节点
	*/
    remove: function(element) {
		var _that;
		//查找元素位置
		var index=_that.indexOf(element);
		//调用removeAt方法移除元素
		return _that.removeAt(index);
    },
	
	
	/**
	* @method toString 转为字符串输出
	*/
	toString:function(){
		var _that=this;
		var current=_that.head;
		var string='';
		
		while(current){
			string+=current.element+(current.next?'\r\n':'');
			current=current.next;
		}
		
		return string;
	},
    /**
     * @method isEmpty 返回链表是否为空
     * @return Boolean true or false
     */
    isEmpty: function() {
        return !this.length;
    },

    /**
     * @method size 返回队列长度
     * @return Number 队列长度
     */

    size: function() {
        return this.length;
    },
	
	//获取头节点
    getHead: function() {
       	return this.head;
    }

};
```



### 循环链表

循环链表可以向单向链表一样只有单向引用，也可以向双向链表一样双向引用。循环链表和普通单向链表的区别在于，最后一个元素的下一个指针（tail.next）不是null，而是第一个元素（head）

双向循环链表有指向head元素的tail.next 和指向tail元素的head.prev



## 集合

集合是一组无序且唯一（不能重复）的项组成
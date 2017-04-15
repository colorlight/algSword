# Recursive and Iteration

## Recursive
### good part:
* 将大问题分解
* 简洁
### bad part: 
* 函数压栈，开销
* 重复计算
* 栈溢出


## v1 Recursive最简单版本
根据fib的数学定义而得

<pre>
f(n)={ 0                        n = 0
       1                        n = 1   
      f(n - 1) + f(n - 2)       n = else
</pre>

复杂度分析**(用具体的例子)**
<pre>
		f(10)
	    f(9)     f(8)
	f(8)  f(7)   f(7)  f(6)
f(7)  f(6)   f(6)  f(5) f(6)  f(5)   f(5)  f(4)
</pre>

如果按照节点数目衡量的话，复杂度是2的10次方 -1
如果按照最后一层节点计算的话是 2的9次方。
笼统的说就是2的n次方

## v2  Iteration 循环迭代版本
v1版本的缺点就是大量重复的节点运算，为了减少，从头往后算
为了算fib(10), 先算fib(2), 再算fib(3)....

算法复杂度计算
for循环，无嵌套， 复杂度O(n)
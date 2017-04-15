function fib(n){
	var result=[0, 1];
	
	if(n < 2){
		return result[n];
	}
	
	for(let currCnt = 2; currCnt <= n; currCnt++){
		var last = currCnt - 1,
			lastlast = currCnt -2;
		result[currCnt] = result[last] + result[lastlast];
		lastlast = last;
		last = currCnt;
	}
	
	return result[n];
	
}
exports.open=function(){
	alert(__modulename+'/open');	

	require(__modulename+'/send').send();
};

exports.temparr=['a','b','c'];
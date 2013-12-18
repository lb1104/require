exports.open=function(){

	alert(__modulename+'/open');

	alert(require('sms').temparr);

	require('sms/send').send();

};
const utils ={
	getToday:function(){
		let todayFull = new Date();
		let todayYear = todayFull.getFullYear();
		let todayMonth = (todayFull.getMonth()+1)>=10?(todayFull.getMonth()+1):"0"+(todayFull.getMonth()+1);
		let todayDate = todayFull.getDate()>=10?todayFull.getDate():"0"+todayFull.getDate(); 
		let todayHour = todayFull.getHours()>=10?todayFull.getHours():"0"+todayFull.getHours();
		let todayMinute = todayFull.getMinutes()>=10?todayFull.getMinutes():"0"+todayFull.getMinutes();
		let todaySecond = todayFull.getSeconds()>=10?todayFull.getSeconds():"0"+todayFull.getSeconds();
		return todayYear+"-"+todayMonth+"-"+todayDate+" "+todayHour+":"+todayMinute+":"+todaySecond;
	},
	getCountDown:function(DistTime){

	},
	
};
export default utils;
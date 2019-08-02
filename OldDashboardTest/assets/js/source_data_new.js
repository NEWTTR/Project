// 定义control方法来传入年份日期参数
function control( year, date ){

  this.year       = year;
  this.date       = date;

};

//实例化control来控制具体的年份日期
var control = new control( '2019', '08.01.2019')

function newPro( month, apple, orange, pear, peach, banana) {
	this.month = month;
	this.apple = apple;
	this.orange = orange;
	this.pear = pear;
	this.peach = peach;
	this.banana = banana;
}

function newItem( month, count, country ){

  this.month = month;
  this.count = count;
  this.country = country;

};

function newProject( lgreg ) {
	this.lgreg = lgreg;
	
	this.purchase = new Array();
	this.sellout = new Array();
	this.item = new Array();
}

var lgreg = new Array();

var ASIA = new newProject( "ASIA" );
lgreg.push( ASIA );

var USA = new newProject( "USA" );
lgreg.push( USA );

ASIA.purchase.push( new newPro('Jan', 1, 2, 3, 4, 5 ) );
ASIA.purchase.push( new newPro('Feb', 31, 22, 13, 24, 25 ) );
ASIA.purchase.push( new newPro('Mar', 11, 12, 13, 14, 45 ) );
ASIA.purchase.push( new newPro('Apr', 41, 42, 23, 14, 25 ) );
ASIA.purchase.push( new newPro('May', 51, 12, 23, 34, 55 ) );
ASIA.purchase.push( new newPro('Jun', 13, 32, 53, 64, 75 ) );
ASIA.purchase.push( new newPro('Jul', 15, 25, 35, 64, 65 ) );
ASIA.purchase.push( new newPro('Aug', 19, 27, 34, 42, 53 ) );
ASIA.purchase.push( new newPro('Sep', 12, 26, 32, 34, 45 ) );
ASIA.purchase.push( new newPro('Oct', 11, 23, 33, 44, 75 ) );
ASIA.purchase.push( new newPro('Nov', 18, 29, 83, 54, 35 ) );
ASIA.purchase.push( new newPro('Dec', 21, 32, 33, 34, 25 ) );
ASIA.purchase.push( new newPro('YTD', 51, 12, 13, 14, 25 ) );

ASIA.sellout.push( new newPro('Jan', 21, 32, 23, 34, 25 ) );
ASIA.sellout.push( new newPro('Feb', 21, 12, 3, 14, 15 ) );
ASIA.sellout.push( new newPro('Mar', 1, 2, 3, 4, 5 ) );
ASIA.sellout.push( new newPro('Apr', 31, 32, 13, 4, 15 ) );
ASIA.sellout.push( new newPro('May', 41, 2, 13, 24, 45 ) );
ASIA.sellout.push( new newPro('Jun', 3, 22, 33, 44, 55 ) );
ASIA.sellout.push( new newPro('Jul', 15, 5, 15, 44, 35 ) );
ASIA.sellout.push( new newPro('Aug', 9, 17, 24, 32, 43 ) );
ASIA.sellout.push( new newPro('Sep', 21, 16, 22, 24, 35 ) );
ASIA.sellout.push( new newPro('Oct', 1, 13, 23, 34, 65 ) );
ASIA.sellout.push( new newPro('Nov', 11, 19, 73, 44, 25 ) );
ASIA.sellout.push( new newPro('Dec', 11, 22, 23, 24, 15 ) );
ASIA.sellout.push( new newPro('YTD', 41, 2, 3, 24, 35 ) );

USA.sellout.push( new newPro('Jan', 1, 2, 3, 4, 5 ) );
USA.sellout.push( new newPro('Feb', 31, 22, 13, 24, 25 ) );
USA.sellout.push( new newPro('Mar', 11, 12, 13, 14, 45 ) );
USA.sellout.push( new newPro('Apr', 41, 42, 23, 14, 25 ) );
USA.sellout.push( new newPro('May', 51, 12, 23, 34, 55 ) );
USA.sellout.push( new newPro('Jun', 13, 32, 53, 64, 75 ) );
USA.sellout.push( new newPro('Jul', 15, 25, 35, 64, 65 ) );
USA.sellout.push( new newPro('Aug', 19, 27, 34, 42, 53 ) );
USA.sellout.push( new newPro('Sep', 12, 26, 32, 34, 45 ) );
USA.sellout.push( new newPro('Oct', 11, 23, 33, 44, 75 ) );
USA.sellout.push( new newPro('Nov', 18, 29, 83, 54, 35 ) );
USA.sellout.push( new newPro('Dec', 21, 32, 33, 34, 25 ) );
USA.sellout.push( new newPro('YTD', 51, 12, 13, 14, 25 ) );

USA.purchase.push( new newPro('Jan', 21, 32, 23, 34, 25 ) );
USA.purchase.push( new newPro('Feb', 21, 12, 3, 14, 15 ) );
USA.purchase.push( new newPro('Mar', 1, 2, 3, 4, 5 ) );
USA.purchase.push( new newPro('Apr', 31, 32, 13, 4, 15 ) );
USA.purchase.push( new newPro('May', 41, 2, 13, 24, 45 ) );
USA.purchase.push( new newPro('Jun', 3, 22, 33, 44, 55 ) );
USA.purchase.push( new newPro('Jul', 15, 5, 15, 44, 35 ) );
USA.purchase.push( new newPro('Aug', 9, 17, 24, 32, 43 ) );
USA.purchase.push( new newPro('Sep', 21, 16, 22, 24, 35 ) );
USA.purchase.push( new newPro('Oct', 1, 13, 23, 34, 65 ) );
USA.purchase.push( new newPro('Nov', 11, 19, 73, 44, 25 ) );
USA.purchase.push( new newPro('Dec', 11, 22, 23, 24, 15 ) );
USA.purchase.push( new newPro('YTD', 41, 2, 3, 24, 35 ) );

ASIA.item[0] = new newItem('Jan', 13, 'Iraq');
ASIA.item[1] = new newItem('Jan', 12, 'Syria');
ASIA.item[2] = new newItem('Jan', 11, 'Pakistan');
ASIA.item[3] = new newItem('Feb', 12, 'Egypt');
ASIA.item[4] = new newItem('Feb', 11, 'Mali');
ASIA.item[5] = new newItem('Feb', 10, 'Pakistan');
ASIA.item[6] = new newItem('Mar', 13, 'Afghanistan');
ASIA.item[7] = new newItem('Mar', 10, 'Egypt');
ASIA.item[8] = new newItem('Mar', 9, 'Pakistan');
ASIA.item[9] = new newItem('Apr', 12, 'Iraq');
ASIA.item[10] = new newItem('Apr', 11, 'Mali');
ASIA.item[11] = new newItem('Apr', 10, 'Afghanistan');
ASIA.item[12] = new newItem('May', 13, 'Afghanistan');
ASIA.item[13] = new newItem('May', 12, 'Iraq');
ASIA.item[14] = new newItem('May', 10, 'Egypt');
ASIA.item[15] = new newItem('Jun',  10, 'Afghanistan');
ASIA.item[16] = new newItem('Jun',  10, 'Mali');
ASIA.item[17] = new newItem('Jun' , 9, 'Pakistan');
ASIA.item[18] = new newItem('Jul',  11, 'Iraq');
ASIA.item[19] = new newItem('Jul',  10, 'Mali');
ASIA.item.push( new newItem('Jul',  9,  'Egypt')) ;
ASIA.item.push( new newItem( 'Aug', 12, 'Pakistan'  )) ;
ASIA.item.push( new newItem( 'Aug', 10, 'Egypt'  )) ;
ASIA.item.push( new newItem( 'Aug', 9, 'Iraq'  )) ;
ASIA.item.push( new newItem( 'Sep', 13, 'Pakistan'  )) ;
ASIA.item.push( new newItem( 'Sep', 12, 'Egypt'  )) ;
ASIA.item.push( new newItem( 'Sep', 10, 'Mali'  )) ;
ASIA.item.push( new newItem( 'Oct', 11, 'Afghanistan'  )) ;
ASIA.item.push( new newItem( 'Oct', 11, 'Mali'  )) ;
ASIA.item.push( new newItem( 'Oct', 9,  'Pakistan'  )) ;
ASIA.item.push( new newItem( 'Nov', 12, 'Iraq'  )) ;
ASIA.item.push( new newItem( 'Nov', 11, 'Mali'  )) ;
ASIA.item.push( new newItem( 'Nov', 9,  'Egypt'  )) ;
ASIA.item.push( new newItem( 'Dec', 12, 'Syria'  )) ;
ASIA.item.push( new newItem( 'Dec', 12, 'Pakistan'  )) ;
ASIA.item.push( new newItem( 'Dec', 9,  'Afghanistan'  )) ;
ASIA.item.push( new newItem( 'YTD', 31, 'Mali'  )) ;
ASIA.item.push( new newItem( 'YTD', 20, 'Egypt'  )) ;
ASIA.item.push( new newItem( 'YTD', 9,  'Afghanistan'  )) ;

USA.item[0] = new newItem('Jan', 3, 'Iraq');
USA.item[1] = new newItem('Jan', 12, 'Syria');
USA.item[2] = new newItem('Jan', 10, 'Pakistan');
USA.item[3] = new newItem('Feb', 12, 'Egypt');
USA.item[4] = new newItem('Feb', 11, 'Mali');
USA.item[5] = new newItem('Feb', 10, 'Pakistan');
USA.item[6] = new newItem('Mar', 13, 'Afghanistan');
USA.item[7] = new newItem('Mar', 10, 'Egypt');
USA.item[8] = new newItem('Mar', 9, 'Pakistan');
USA.item[9] = new newItem('Apr', 12, 'Iraq');
USA.item[10] = new newItem('Apr', 11, 'Mali');
USA.item[11] = new newItem('Apr', 10, 'Afghanistan');
USA.item[12] = new newItem('May', 13, 'Afghanistan');
USA.item[13] = new newItem('May', 12, 'Iraq');
USA.item[14] = new newItem('May', 10, 'Egypt');
USA.item[15] = new newItem('Jun',  10, 'Afghanistan');
USA.item[16] = new newItem('Jun',  10, 'Mali');
USA.item[17] = new newItem('Jun' , 9, 'Pakistan');
USA.item[18] = new newItem('Jul',  11, 'Iraq');
USA.item[19] = new newItem('Jul',  10, 'Mali');
USA.item.push( new newItem('Jul',  9,  'Egypt')) ;
USA.item.push( new newItem( 'Aug', 12, 'Pakistan'  )) ;
USA.item.push( new newItem( 'Aug', 10, 'Egypt'  )) ;
USA.item.push( new newItem( 'Aug', 9, 'Iraq'  )) ;
USA.item.push( new newItem( 'Sep', 13, 'Pakistan'  )) ;
USA.item.push( new newItem( 'Sep', 12, 'Egypt'  )) ;
USA.item.push( new newItem( 'Sep', 10, 'Mali'  )) ;
USA.item.push( new newItem( 'Oct', 11, 'Afghanistan'  )) ;
USA.item.push( new newItem( 'Oct', 11, 'Mali'  )) ;
USA.item.push( new newItem( 'Oct', 9,  'Pakistan'  )) ;
USA.item.push( new newItem( 'Nov', 12, 'Iraq'  )) ;
USA.item.push( new newItem( 'Nov', 11, 'Mali'  )) ;
USA.item.push( new newItem( 'Nov', 9,  'Egypt'  )) ;
USA.item.push( new newItem( 'Dec', 12, 'Syria'  )) ;
USA.item.push( new newItem( 'Dec', 12, 'Pakistan'  )) ;
USA.item.push( new newItem( 'Dec', 9,  'Afghanistan'  )) ;
USA.item.push( new newItem( 'YTD', 11, 'Mali'  )) ;
USA.item.push( new newItem( 'YTD', 10, 'Egypt'  )) ;
USA.item.push( new newItem( 'YTD', 9,  'Afghanistan'  )) ;

//*********************************************************************************************
//*********************************************************************************************
//*********************************************************************************************


// 定义control方法来传入年份日期参数
function control( year, date ){

  this.year       = year;
  this.date       = date;

};

//实例化control来控制具体的年份日期
var control = new control( '2015', '10.12.2015')



function newRisk( month, percentage, country ){

  this.month      = month;
  this.percentage = percentage;
  this.country    = country;

};

function newDoc( month, all, hits, approved, positiveList, negativeList ){

this.month = month;
this.all   = all,
this.hits  = hits;
this.approved = approved;
this.positiveList = positiveList;
this.negativeList = negativeList;

};

function newLgreg(lgreg) {

  this.lgreg        = lgreg;

  this.allDoc       = new Array();
  this.allHR        = new Array();
  this.allFI        = new Array();
  this.allBP        = new Array();
  
  this.po           = new Array();
  this.so           = new Array();
  this.od           = new Array();
  
  this.applicants   = new Array();
  this.employes     = new Array();

  this.cu           = new Array();
  this.ve           = new Array();

  this.riskDoc   = new Array();
  this.riskHR    = new Array();
  this.riskFI    = new Array();
  this.riskBP    = new Array();

};

var lgreg = new Array();

//following part is dynamic



var SPLEU = new newLgreg( "SPLEU" );
lgreg.push( SPLEU );

var SPLUS = new newLgreg( "SPLUS" );
lgreg.push( SPLUS );


SPLEU.riskDoc[0] = new newRisk('Jan', 13, 'Iraq');
SPLEU.riskDoc[1] = new newRisk('Jan', 12, 'Syria');
SPLEU.riskDoc[2] = new newRisk('Jan', 11, 'Pakistan');
SPLEU.riskDoc[3] = new newRisk('Feb', 12, 'Egypt');
SPLEU.riskDoc[4] = new newRisk('Feb', 11, 'Mali');
SPLEU.riskDoc[5] = new newRisk('Feb', 10, 'Pakistan');
SPLEU.riskDoc[6] = new newRisk('Mar', 13, 'Afghanistan');
SPLEU.riskDoc[7] = new newRisk('Mar', 10, 'Egypt');
SPLEU.riskDoc[8] = new newRisk('Mar', 9, 'Pakistan');
SPLEU.riskDoc[9] = new newRisk('Apr', 12, 'Iraq');
SPLEU.riskDoc[10] = new newRisk('Apr', 11, 'Mali');
SPLEU.riskDoc[11] = new newRisk('Apr', 10, 'Afghanistan');
SPLEU.riskDoc[12] = new newRisk('May', 13, 'Afghanistan');
SPLEU.riskDoc[13] = new newRisk('May', 12, 'Iraq');
SPLEU.riskDoc[14] = new newRisk('May', 10, 'Egypt');
SPLEU.riskDoc[15] = new newRisk('Jun',  10, 'Afghanistan');
SPLEU.riskDoc[16] = new newRisk('Jun',  10, 'Mali');
SPLEU.riskDoc[17] = new newRisk('Jun' , 9, 'Pakistan');
SPLEU.riskDoc[18] = new newRisk('Jul',  11, 'Iraq');
SPLEU.riskDoc[19] = new newRisk('Jul',  10, 'Mali');
SPLEU.riskDoc.push( new newRisk('Jul',  9,  'Egypt')) ;
SPLEU.riskDoc.push( new newRisk( 'Aug', 12, 'Pakistan'  )) ;
SPLEU.riskDoc.push( new newRisk( 'Aug', 10, 'Egypt'  )) ;
SPLEU.riskDoc.push( new newRisk( 'Aug', 9, 'Iraq'  )) ;
SPLEU.riskDoc.push( new newRisk( 'Sep', 13, 'Pakistan'  )) ;
SPLEU.riskDoc.push( new newRisk( 'Sep', 12, 'Egypt'  )) ;
SPLEU.riskDoc.push( new newRisk( 'Sep', 10, 'Mali'  )) ;
SPLEU.riskDoc.push( new newRisk( 'Oct', 11, 'Afghanistan'  )) ;
SPLEU.riskDoc.push( new newRisk( 'Oct', 11, 'Mali'  )) ;
SPLEU.riskDoc.push( new newRisk( 'Oct', 9,  'Pakistan'  )) ;
SPLEU.riskDoc.push( new newRisk( 'Nov', 12, 'Iraq'  )) ;
SPLEU.riskDoc.push( new newRisk( 'Nov', 11, 'Mali'  )) ;
SPLEU.riskDoc.push( new newRisk( 'Nov', 9,  'Egypt'  )) ;
SPLEU.riskDoc.push( new newRisk( 'Dec', 12, 'Syria'  )) ;
SPLEU.riskDoc.push( new newRisk( 'Dec', 12, 'Pakistan'  )) ;
SPLEU.riskDoc.push( new newRisk( 'Dec', 9,  'Afghanistan'  )) ;
SPLEU.riskDoc.push( new newRisk( 'YTD', 11, 'Mali'  )) ;
SPLEU.riskDoc.push( new newRisk( 'YTD', 10, 'Egypt'  )) ;
SPLEU.riskDoc.push( new newRisk( 'YTD', 9,  'Afghanistan'  )) ;

SPLEU.riskBP[0] = new newRisk('Jan', 13, 'Iraq');
SPLEU.riskBP[1] = new newRisk('Jan', 12, 'Syria');
SPLEU.riskBP[2] = new newRisk('Jan', 11, 'Pakistan');
SPLEU.riskBP[3] = new newRisk('Feb', 12, 'Egypt');
SPLEU.riskBP[4] = new newRisk('Feb', 11, 'Mali');
SPLEU.riskBP[5] = new newRisk('Feb', 10, 'Pakistan');
SPLEU.riskBP[6] = new newRisk('Mar', 13, 'Afghanistan');
SPLEU.riskBP[7] = new newRisk('Mar', 10, 'Egypt');
SPLEU.riskBP[8] = new newRisk('Mar', 9, 'Pakistan');
SPLEU.riskBP[9] = new newRisk('Apr', 12, 'Iraq');
SPLEU.riskBP[10] = new newRisk('Apr', 11, 'Mali');
SPLEU.riskBP[11] = new newRisk('Apr', 10, 'Afghanistan');
SPLEU.riskBP[12] = new newRisk('May', 13, 'Afghanistan');
SPLEU.riskBP[13] = new newRisk('May', 12, 'Iraq');
SPLEU.riskBP[14] = new newRisk('May', 10, 'Egypt');
SPLEU.riskBP[15] = new newRisk('Jun',  10, 'Afghanistan');
SPLEU.riskBP[16] = new newRisk('Jun',  10, 'Mali');
SPLEU.riskBP[17] = new newRisk('Jun' , 9, 'Pakistan');
SPLEU.riskBP[18] = new newRisk('Jul',  11, 'Iraq');
SPLEU.riskBP[19] = new newRisk('Jul',  10, 'Mali');
SPLEU.riskBP.push( new newRisk('Jul',  9,  'Egypt')) ;
SPLEU.riskBP.push( new newRisk( 'Aug', 12, 'Pakistan'  )) ;
SPLEU.riskBP.push( new newRisk( 'Aug', 10, 'Egypt'  )) ;
SPLEU.riskBP.push( new newRisk( 'Aug', 9, 'Iraq'  )) ;
SPLEU.riskBP.push( new newRisk( 'Sep', 13, 'Pakistan'  )) ;
SPLEU.riskBP.push( new newRisk( 'Sep', 12, 'Egypt'  )) ;
SPLEU.riskBP.push( new newRisk( 'Sep', 10, 'Mali'  )) ;
SPLEU.riskBP.push( new newRisk( 'Oct', 11, 'Afghanistan'  )) ;
SPLEU.riskBP.push( new newRisk( 'Oct', 11, 'Mali'  )) ;
SPLEU.riskBP.push( new newRisk( 'Oct', 9,  'Pakistan'  )) ;
SPLEU.riskBP.push( new newRisk( 'Nov', 12, 'Iraq'  )) ;
SPLEU.riskBP.push( new newRisk( 'Nov', 11, 'Mali'  )) ;
SPLEU.riskBP.push( new newRisk( 'Nov', 9,  'Egypt'  )) ;
SPLEU.riskBP.push( new newRisk( 'Dec', 12, 'Syria'  )) ;
SPLEU.riskBP.push( new newRisk( 'Dec', 12, 'Pakistan'  )) ;
SPLEU.riskBP.push( new newRisk( 'Dec', 9,  'Afghanistan'  )) ;
SPLEU.riskBP.push( new newRisk( 'YTD', 11, 'Mali'  )) ;
SPLEU.riskBP.push( new newRisk( 'YTD', 10, 'Egypt'  )) ;
SPLEU.riskBP.push( new newRisk( 'YTD', 9,  'Afghanistan'  )) ;


SPLUS.riskDoc.push( new newRisk(  'Jan', 13, 'Iraq' )) ;
SPLUS.riskDoc.push( new newRisk( 'Jan', 12, 'Mali'  )) ;
SPLUS.riskDoc.push( new newRisk(  'Jan', 11, 'Pakistan' )) ;
SPLUS.riskDoc.push( new newRisk(  'Feb', 11, 'Iraq' )) ;
SPLUS.riskDoc.push( new newRisk( 'Feb', 11, 'Mali'  )) ;
SPLUS.riskDoc.push( new newRisk( 'Feb', 11, 'Pakistan'  )) ;
SPLUS.riskDoc.push( new newRisk( 'Mar', 12, 'Afghanistan'  )) ;
SPLUS.riskDoc.push( new newRisk( 'Mar', 12, 'Iraq'  )) ;
SPLUS.riskDoc.push( new newRisk( 'Mar', 10, 'Pakistan'  )) ;
SPLUS.riskDoc.push( new newRisk( 'Apr', 13, 'Iraq'   )) ;
SPLUS.riskDoc.push( new newRisk( 'Apr', 12, 'Mali'  )) ;
SPLUS.riskDoc.push( new newRisk( 'Apr', 10, 'Afghanistan'  )) ;
SPLUS.riskDoc.push( new newRisk( 'May', 11, 'Afghanistan'  )) ;
SPLUS.riskDoc.push( new newRisk( 'May', 11, 'Iraq' )) ;
SPLUS.riskDoc.push( new newRisk( 'May', 9,  'Mali'  )) ;
SPLUS.riskDoc.push( new newRisk( 'YTD', 25, 'Zulu'  )) ;
SPLUS.riskDoc.push( new newRisk( 'YTD', 14, 'Gambia'  )) ;
SPLUS.riskDoc.push( new newRisk( 'YTD', 9,  'Congo'  )) ;

SPLUS.so.push( new newDoc( 'Jan', 49,  6, 5, 5, 1  ) );
SPLUS.so.push( new newDoc( 'Feb', 52,  5, 5, 5, 0  ) );
SPLUS.so.push( new newDoc( 'Mar', 64,  7, 7, 7, 0  ) );
SPLUS.so.push( new newDoc( 'Apr', 35,  4, 2, 2, 2 ) );
SPLUS.so.push( new newDoc( 'May', 41,  6, 2, 3, 1  ) );
SPLUS.so.push( new newDoc( 'Jun',  65,  8, 4, 4, 4  ) );
SPLUS.so.push( new newDoc(  'Jul',  43,  4, 4, 4, 0 ) );
SPLUS.so.push( new newDoc( 'Aug', 50,  5, 5, 5, 0  ) );
SPLUS.so.push( new newDoc( 'Sep',  53,  3, 3, 3, 0  ) );
SPLUS.so.push( new newDoc( 'Oct', 48,  4, 3, 3, 1  ) );
SPLUS.so.push( new newDoc( 'Nov', 52,  7, 5, 5, 2 ) );
SPLUS.so.push( new newDoc( 'Dec', 47,  6, 6, 6, 0  ) );
SPLUS.so.push( new newDoc( 'YTD', 593, 63, 51, 51, 12 ) );

SPLUS.allDoc.push( new newDoc( 'Jan', 49,  6, 5, 5, 1  ) );
SPLUS.allDoc.push( new newDoc( 'Feb', 52,  5, 5, 5, 0  ) );
SPLUS.allDoc.push( new newDoc( 'Mar', 64,  7, 7, 7, 0  ) );
SPLUS.allDoc.push( new newDoc( 'Apr', 35,  4, 2, 2, 2 ) );
SPLUS.allDoc.push( new newDoc( 'May', 41,  6, 2, 3, 1  ) );
SPLUS.allDoc.push( new newDoc( 'Jun',  65,  8, 4, 4, 4  ) );
SPLUS.allDoc.push( new newDoc(  'Jul',  43,  4, 4, 4, 0 ) );
SPLUS.allDoc.push( new newDoc( 'Aug', 50,  5, 5, 5, 0  ) );
SPLUS.allDoc.push( new newDoc( 'Sep',  53,  3, 3, 3, 0  ) );
SPLUS.allDoc.push( new newDoc( 'Oct', 48,  4, 3, 3, 1  ) );
SPLUS.allDoc.push( new newDoc( 'Nov', 52,  7, 5, 5, 2 ) );
SPLUS.allDoc.push( new newDoc( 'Dec', 47,  6, 6, 6, 0  ) );
SPLUS.allDoc.push( new newDoc( 'YTD', 320, 50, 51, 51, 12 ) );

SPLEU.allDoc.push( new newDoc( 'Jan', 49,  6, 5, 5, 1  ) );
SPLEU.allDoc.push( new newDoc( 'Feb', 52,  5, 5, 5, 0  ) );
SPLEU.allDoc.push( new newDoc( 'Mar', 64,  7, 7, 7, 0  ) );
SPLEU.allDoc.push( new newDoc( 'Apr', 35,  4, 2, 2, 2 ) );
SPLEU.allDoc.push( new newDoc( 'May', 41,  6, 2, 3, 1  ) );
SPLEU.allDoc.push( new newDoc( 'Jun', 65,  8, 4, 4, 4  ) );
SPLEU.allDoc.push( new newDoc( 'Jul', 43,  4, 4, 4, 0 ) );
SPLEU.allDoc.push( new newDoc( 'Aug', 50,  5, 5, 5, 0  ) );
SPLEU.allDoc.push( new newDoc( 'Sep',  53,  3, 3, 3, 0  ) );
SPLEU.allDoc.push( new newDoc( 'Oct', 48,  4, 3, 3, 1  ) );
SPLEU.allDoc.push( new newDoc( 'Nov', 52,  7, 5, 5, 2 ) );
SPLEU.allDoc.push( new newDoc( 'Dec', 47,  6, 6, 6, 0  ) );
SPLEU.allDoc.push( new newDoc( 'YTD', 593, 63, 51, 51, 12 ) );

SPLEU.allBP.push( new newDoc( 'Jan', 49,  6, 5, 5, 1  ) );
SPLEU.allBP.push( new newDoc( 'Feb', 52,  5, 5, 5, 0  ) );
SPLEU.allBP.push( new newDoc( 'Mar', 64,  7, 7, 7, 0  ) );
SPLEU.allBP.push( new newDoc( 'Apr', 35,  4, 2, 2, 2 ) );
SPLEU.allBP.push( new newDoc( 'May', 41,  6, 2, 3, 1  ) );
SPLEU.allBP.push( new newDoc( 'Jun', 65,  8, 4, 4, 4  ) );
SPLEU.allBP.push( new newDoc( 'Jul', 43,  4, 4, 4, 0 ) );
SPLEU.allBP.push( new newDoc( 'Aug', 50,  5, 5, 5, 0  ) );
SPLEU.allBP.push( new newDoc( 'Sep',  53,  3, 3, 3, 0  ) );
SPLEU.allBP.push( new newDoc( 'Oct', 48,  4, 3, 3, 1  ) );
SPLEU.allBP.push( new newDoc( 'Nov', 52,  7, 5, 5, 2 ) );
SPLEU.allBP.push( new newDoc( 'Dec', 47,  6, 6, 6, 0  ) );
SPLEU.allBP.push( new newDoc( 'YTD', 593, 63, 51, 51, 12 ) );


SPLEU.po.push( new newDoc( 'Jan', 49,  6, 5, 5, 1  ) );
SPLEU.po.push( new newDoc( 'Feb', 52,  5, 5, 5, 0  ) );
SPLEU.po.push( new newDoc( 'Mar', 64,  7, 7, 7, 0  ) );
SPLEU.po.push( new newDoc( 'Apr', 35,  4, 2, 2, 2 ) );
SPLEU.po.push( new newDoc( 'May', 41,  6, 2, 3, 1  ) );
SPLEU.po.push( new newDoc( 'Jun',  65,  8, 4, 4, 4  ) );
SPLEU.po.push( new newDoc(  'Jul', 50,  5, 5, 5, 0  ) );
SPLEU.po.push( new newDoc( 'Sep',  53,  3, 3, 3, 0  ) );
SPLEU.po.push( new newDoc( 'Oct', 48,  4, 3, 3, 1  ) );
SPLEU.po.push( new newDoc( 'Nov', 52,  7, 5, 5, 2 ) );
SPLEU.po.push( new newDoc( 'Dec', 47,  6, 6, 6, 0  ) );
SPLEU.po.push( new newDoc( 'YTD', 593, 63, 51, 51, 12 ) );


SPLEU.so.push( new newDoc( 'Jan', 49,  6, 5, 5, 1  ) );
SPLEU.so.push( new newDoc( 'Feb', 52,  5, 5, 5, 0  ) );
SPLEU.so.push( new newDoc( 'Mar', 64,  7, 7, 7, 0  ) );
SPLEU.so.push( new newDoc( 'Apr', 35,  4, 2, 2, 2 ) );
SPLEU.so.push( new newDoc( 'May', 41,  6, 2, 3, 1  ) );
SPLEU.so.push( new newDoc( 'Jun',  65,  8, 4, 4, 4  ) );
SPLEU.so.push( new newDoc(  'Jul',  43,  4, 4, 4, 0 ) );
SPLEU.so.push( new newDoc( 'Aug', 50,  5, 5, 5, 0  ) );
SPLEU.so.push( new newDoc( 'Sep',  53,  3, 3, 3, 0  ) );
SPLEU.so.push( new newDoc( 'Oct', 48,  4, 3, 3, 1  ) );
SPLEU.so.push( new newDoc( 'Nov', 52,  7, 5, 5, 2 ) );
SPLEU.so.push( new newDoc( 'Dec', 47,  6, 6, 6, 0  ) );
SPLEU.so.push( new newDoc( 'YTD', 593, 63, 51, 51, 12 ) );

SPLEU.cu.push( new newDoc( 'Jan', 49,  6, 5, 5, 1  ) );
SPLEU.cu.push( new newDoc( 'Feb', 52,  5, 5, 5, 0  ) );
SPLEU.cu.push( new newDoc( 'Mar', 64,  7, 7, 7, 0  ) );
SPLEU.cu.push( new newDoc( 'Apr', 35,  4, 2, 2, 2 ) );
SPLEU.cu.push( new newDoc( 'May', 41,  6, 2, 3, 1  ) );
SPLEU.cu.push( new newDoc( 'Jun',  65,  8, 4, 4, 4  ) );
SPLEU.cu.push( new newDoc(  'Jul', 50,  5, 5, 5, 0  ) );
SPLEU.cu.push( new newDoc( 'Sep',  53,  3, 3, 3, 0  ) );
SPLEU.cu.push( new newDoc( 'Oct', 48,  4, 3, 3, 1  ) );
SPLEU.cu.push( new newDoc( 'Nov', 52,  7, 5, 5, 2 ) );
SPLEU.cu.push( new newDoc( 'Dec', 47,  6, 6, 6, 0  ) );
SPLEU.cu.push( new newDoc( 'YTD', 593, 63, 51, 51, 12 ) );


SPLEU.ve.push( new newDoc( 'Jan', 49,  6, 5, 5, 1  ) );
SPLEU.ve.push( new newDoc( 'Feb', 52,  5, 5, 5, 0  ) );
SPLEU.ve.push( new newDoc( 'Mar', 64,  7, 7, 7, 0  ) );
SPLEU.ve.push( new newDoc( 'Apr', 35,  4, 2, 2, 2 ) );
SPLEU.ve.push( new newDoc( 'May', 41,  6, 2, 3, 1  ) );
SPLEU.ve.push( new newDoc( 'Jun',  65,  8, 4, 4, 4  ) );
SPLEU.ve.push( new newDoc(  'Jul',  43,  4, 4, 4, 0 ) );
SPLEU.ve.push( new newDoc( 'Aug', 50,  5, 5, 5, 0  ) );
SPLEU.ve.push( new newDoc( 'Sep',  53,  3, 3, 3, 0  ) );
SPLEU.ve.push( new newDoc( 'Oct', 48,  4, 3, 3, 1  ) );
SPLEU.ve.push( new newDoc( 'Nov', 52,  7, 5, 5, 2 ) );
SPLEU.ve.push( new newDoc( 'Dec', 47,  6, 6, 6, 0  ) );
SPLEU.ve.push( new newDoc( 'YTD', 593, 63, 51, 51, 12 ) );


//more shit from system
var KREC = new newLgreg( "KREC" );
lgreg.push( KREC );
KREC.riskDoc.push( new newRisk( "Jan", 0, "None" ));
KREC.riskDoc.push( new newRisk( "Jan", 0, "None" ));
KREC.riskDoc.push( new                     newRisk( "Jan", 0, "None" ));
KREC.allDoc.push(new newDoc( "Jan", 12, 0, 12, 0, 0));
KREC.riskDoc.push( new newRisk( "Feb", 100, "China, " ));
KREC.riskDoc.push( new newRisk( "Feb",                                                                          0, "None" ));
KREC.riskDoc.push( new newRisk( "Feb", 0, "None" ));
KREC.allDoc.push(new newDoc( "Feb", 54, 54, 0, 0, 0));
KREC.riskDoc.push( new newRisk( "Mar", 100, "China, France, India, "                                                                 ));
KREC.riskDoc.push( new newRisk( "Mar", 0, "None" ));
KREC.riskDoc.push( new newRisk( "Mar", 0, "None" ));
KREC.allDoc.push(new newDoc( "Mar", 174, 88, 8, 0, 0));
KREC.riskDoc.push( new                                                                   newRisk( "Apr", 0, "None" ));
KREC.riskDoc.push( new newRisk( "Apr", 0, "None" ));
KREC.riskDoc.push( new newRisk( "Apr", 0, "None" ));
KREC.allDoc.push(new newDoc( "Apr", 0, 0, 0, 0,                                                                        0));
KREC.riskDoc.push( new newRisk( "May", 0, "None" ));
KREC.riskDoc.push( new newRisk( "May", 0, "None" ));
KREC.riskDoc.push( new newRisk( "May", 0, "None" ));
KREC.allDoc.push(new newDoc( "May", 16,                                                    0, 16, 0, 0));
KREC.riskDoc.push( new newRisk( "Jun", 0, "None" ));
KREC.riskDoc.push( new newRisk( "Jun", 0, "None" ));
KREC.riskDoc.push( new newRisk( "Jun", 0, "None" ));
KREC.allDoc.push(new                                                             newDoc( "Jun", 0, 0, 0, 0, 0));
KREC.riskDoc.push( new newRisk( "Jul", 0, "None" ));
KREC.riskDoc.push( new newRisk( "Jul", 0, "None" ));
KREC.riskDoc.push( new newRisk( "Jul", 0,                                                                            "None" ));
KREC.allDoc.push(new newDoc( "Jul", 0, 0, 0, 0, 0));
KREC.riskDoc.push( new newRisk( "Aug", 0, "None" ));
KREC.riskDoc.push( new newRisk( "Aug", 0, "None" ));
KREC.riskDoc.push(                                                                   new newRisk( "Aug", 0, "None" ));
KREC.allDoc.push(new newDoc( "Aug", 0, 0, 0, 0, 0));
KREC.riskDoc.push( new newRisk( "Sep", 0, "None" ));
KREC.riskDoc.push( new newRisk( "Sep",                                                                             0, "None" ));
KREC.riskDoc.push( new newRisk( "Sep", 0, "None" ));
KREC.allDoc.push(new newDoc( "Sep", 6, 0, 6, 0, 0));
KREC.riskDoc.push( new newRisk( "Oct", 0, "None"                                                                                       ));
KREC.riskDoc.push( new newRisk( "Oct", 0, "None" ));
KREC.riskDoc.push( new newRisk( "Oct", 0, "None" ));
KREC.allDoc.push(new newDoc( "Oct", 0, 0, 0, 0, 0));
KREC.riskDoc.push( new                                                                      newRisk( "Nov", 25, "China, " ));
KREC.riskDoc.push( new newRisk( "Nov", 0, "None" ));
KREC.riskDoc.push( new newRisk( "Nov", 0, "None" ));
KREC.allDoc.push(new newDoc( "Nov", 18, 2, 0, 0,                                                                   0));
KREC.riskDoc.push( new newRisk( "Dec", 0, "None" ));
KREC.riskDoc.push( new newRisk( "Dec", 0, "None" ));
KREC.riskDoc.push( new newRisk( "Dec", 0, "None" ));
KREC.allDoc.push(new newDoc( "Dec", 0,                                                     0, 0, 0, 0));
KREC.riskDoc.push( new newRisk( "YTD", 100, "China;France;India;China;" ));
KREC.riskDoc.push( new newRisk( "YTD", 25, "China;" ));
KREC.riskDoc.push( new newRisk( "YTD", 0, "None"                                                             ));
KREC.allDoc.push(new newDoc( "YTD", 280, 144, 42, 0, 0));
KREC.po.push(new newDoc( "Jan", 0, 0, 0, 0, 0));
KREC.po.push(new newDoc( "Feb", 0, 0,                                                                                                           0, 0, 0));
KREC.po.push(new newDoc( "Mar", 6, 0, 6, 0, 0));
KREC.po.push(new newDoc( "Apr", 0, 0, 0, 0, 0));
KREC.po.push(new newDoc( "May",                                                                                                                   16, 0, 16, 0, 0));
KREC.po.push(new newDoc( "Jun", 0, 0, 0, 0, 0));
KREC.po.push(new newDoc( "Jul", 0, 0, 0, 0,                                                                                                                                                0));
KREC.po.push(new newDoc( "Aug", 0, 0, 0, 0, 0));
KREC.po.push(new newDoc( "Sep", 0, 0, 0, 0, 0));
KREC.po.push(new newDoc( "Oct", 0, 0,                                                                                                                   0, 0, 0));
KREC.po.push(new newDoc( "Nov", 0, 0, 0, 0, 0));
KREC.po.push(new newDoc( "Dec", 0, 0, 0, 0, 0));
KREC.po.push(new newDoc( "YTD",                                                                                                                   22, 0, 22, 0, 0));
KREC.so.push(new newDoc( "Jan", 12, 0, 12, 0, 0));
KREC.so.push(new newDoc( "Feb", 54, 54, 0, 0,                                                                                                                                            0));
KREC.so.push(new newDoc( "Mar", 168, 88, 2, 0, 0));
KREC.so.push(new newDoc( "Apr", 0, 0, 0, 0, 0));
KREC.so.push(new newDoc( "May", 0, 0,                                                                                                                0, 0, 0));
KREC.so.push(new newDoc( "Jun", 0, 0, 0, 0, 0));
KREC.so.push(new newDoc( "Jul", 0, 0, 0, 0, 0));
KREC.so.push(new newDoc( "Aug",                                                                                                                   0, 0, 0, 0, 0));
KREC.so.push(new newDoc( "Sep", 6, 0, 6, 0, 0));
KREC.so.push(new newDoc( "Oct", 0, 0, 0, 0,                                                                                                                                                  0));
KREC.so.push(new newDoc( "Nov", 10, 2, 0, 0, 0));
KREC.so.push(new newDoc( "Dec", 0, 0, 0, 0, 0));
KREC.so.push(new newDoc( "YTD", 250, 144,                                                                                                              20, 0, 0));
KREC.od.push(new newDoc( "Jan", 0, 0, 0, 0, 0));
KREC.od.push(new newDoc( "Feb", 0, 0, 0, 0, 0));
KREC.od.push(new newDoc( "Mar",                                                                                                                  0, 0, 0, 0, 0));
KREC.od.push(new newDoc( "Apr", 0, 0, 0, 0, 0));
KREC.od.push(new newDoc( "May", 0, 0, 0, 0,                                                                                                                                                  0));
KREC.od.push(new newDoc( "Jun", 0, 0, 0, 0, 0));
KREC.od.push(new newDoc( "Jul", 0, 0, 0, 0, 0));
KREC.od.push(new newDoc( "Aug", 0, 0,                                                                                                                   0, 0, 0));
KREC.od.push(new newDoc( "Sep", 0, 0, 0, 0, 0));
KREC.od.push(new newDoc( "Oct", 0, 0, 0, 0, 0));
KREC.od.push(new newDoc( "Nov",                                                                                                                   8, 0, 0, 0, 0));
KREC.od.push(new newDoc( "Dec", 0, 0, 0, 0, 0));
KREC.od.push(new newDoc( "YTD", 8, 0, 0, 0, 0));
var  SPLCN = new newLgreg( "SPLCN" );
lgreg.push( SPLCN );
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None" ));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None" ));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None"                                            ));
SPLCN.allDoc.push(new newDoc( "Dec", 0, 0, 0, 0, 0));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None" ));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None" ));
SPLCN.riskDoc.push( new                                                                  newRisk( "Dec", 0, "None" ));
SPLCN.allDoc.push(new newDoc( "Dec", 0, 0, 0, 0, 0));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None" ));
SPLCN.riskDoc.push( new newRisk( "Dec",                                                                              0, "None" ));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None" ));
SPLCN.allDoc.push(new newDoc( "Dec", 0, 0, 0, 0, 0));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None"                                                                                    ));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None" ));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None" ));
SPLCN.allDoc.push(new newDoc( "Dec", 0, 0, 0, 0, 0));
SPLCN.riskDoc.push( new                                                                  newRisk( "Dec", 0, "None" ));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None" ));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None" ));
SPLCN.allDoc.push(new newDoc( "Dec", 0, 0, 0, 0,                                                                     0));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None" ));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None" ));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None" ));
SPLCN.allDoc.push(new newDoc( "Dec", 0,                                                 0, 0, 0, 0));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None" ));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None" ));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None"                                                                                    ));
SPLCN.allDoc.push(new newDoc( "Dec", 0, 0, 0, 0, 0));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None" ));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None" ));
SPLCN.riskDoc.push( new                                                                  newRisk( "Dec", 0, "None" ));
SPLCN.allDoc.push(new newDoc( "Dec", 0, 0, 0, 0, 0));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None" ));
SPLCN.riskDoc.push( new newRisk( "Dec",                                                                              0, "None" ));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None" ));
SPLCN.allDoc.push(new newDoc( "Dec", 0, 0, 0, 0, 0));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None"                                                                                    ));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None" ));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None" ));
SPLCN.allDoc.push(new newDoc( "Dec", 0, 0, 0, 0, 0));
SPLCN.riskDoc.push( new                                                                  newRisk( "Dec", 0, "None" ));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None" ));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None" ));
SPLCN.allDoc.push(new newDoc( "Dec", 0, 0, 0, 0,                                                                     0));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None" ));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None" ));
SPLCN.riskDoc.push( new newRisk( "Dec", 0, "None" ));
SPLCN.allDoc.push(new newDoc( "Dec", 0,                                                 0, 0, 0, 0));
SPLCN.riskDoc.push( new newRisk( "YTD", 100, "USA;China;" ));
SPLCN.riskDoc.push( new newRisk( "YTD", 30, "New Zealand;" ));
SPLCN.riskDoc.push( new newRisk( "YTD", 21, "New                                                                    Zealand;" ));
SPLCN.allDoc.push(new newDoc( "YTD", 192, 64, 42, 0, 0));
SPLCN.po.push(new newDoc( "Jan", 0, 0, 0, 0, 0));
SPLCN.po.push(new newDoc( "Feb", 30,                                                                                                 30, 0, 0, 0));
SPLCN.po.push(new newDoc( "Mar", 6, 0, 6, 0, 0));
SPLCN.po.push(new newDoc( "Apr", 16, 16, 0, 0,                                                                                                                                                0));
SPLCN.po.push(new newDoc( "May", 16, 0, 16, 0, 0));
SPLCN.po.push(new newDoc( "Jun", 0, 0, 0, 0, 0));
SPLCN.po.push(new newDoc( "Jul", 0, 0,                                                                                                              0, 0, 0));
SPLCN.po.push(new newDoc( "Aug", 0, 0, 0, 0, 0));
SPLCN.po.push(new newDoc( "Sep", 0, 0, 0, 0, 0));
SPLCN.po.push(new newDoc(                                                                                                                       "Oct", 0, 0, 0, 0, 0));
SPLCN.po.push(new newDoc( "Nov", 0, 0, 0, 0, 0));
SPLCN.po.push(new newDoc( "Dec", 0, 0, 0, 0,                                                                                                                                         0));
SPLCN.po.push(new newDoc( "YTD", 68, 46, 22, 0, 0));
SPLCN.so.push(new newDoc( "Jan", 12, 0, 12, 0, 0));
SPLCN.so.push(new newDoc( "Feb", 58, 12,                                                                                                         0, 0, 0));
SPLCN.so.push(new newDoc( "Mar", 48, 6, 2, 0, 0));
SPLCN.so.push(new newDoc( "Apr", 0, 0, 0, 0, 0));
SPLCN.so.push(new newDoc(                                                                                                                      "May", 0, 0, 0, 0, 0));
SPLCN.so.push(new newDoc( "Jun", 0, 0, 0, 0, 0));
SPLCN.so.push(new newDoc( "Jul", 0, 0, 0, 0,                                                                                                                                         0));
SPLCN.so.push(new newDoc( "Aug", 0, 0, 0, 0, 0));
SPLCN.so.push(new newDoc( "Sep", 6, 0, 6, 0, 0));
SPLCN.so.push(new newDoc( "Oct", 0, 0,                                                                                                                0, 0, 0));
SPLCN.so.push(new newDoc( "Nov", 0, 0, 0, 0, 0));
SPLCN.so.push(new newDoc( "Dec", 0, 0, 0, 0, 0));
SPLCN.so.push(new newDoc(                                                                                                                       "YTD", 124, 18, 20, 0, 0));
SPLCN.od.push(new newDoc( "Jan", 0, 0, 0, 0, 0));
SPLCN.od.push(new newDoc( "Feb", 0, 0, 0, 0,                                                                                                                                     0));
SPLCN.od.push(new newDoc( "Mar", 0, 0, 0, 0, 0));
SPLCN.od.push(new newDoc( "Apr", 0, 0, 0, 0, 0));
SPLCN.od.push(new newDoc( "May", 0, 0,                                                                                                                0, 0, 0));
SPLCN.od.push(new newDoc( "Jun", 0, 0, 0, 0, 0));
SPLCN.od.push(new newDoc( "Jul", 0, 0, 0, 0, 0));
SPLCN.od.push(new newDoc(                                                                                                                       "Aug", 0, 0, 0, 0, 0));
SPLCN.od.push(new newDoc( "Sep", 0, 0, 0, 0, 0));
SPLCN.od.push(new newDoc( "Oct", 0, 0, 0, 0,                                                                                                                                         0));
SPLCN.od.push(new newDoc( "Nov", 0, 0, 0, 0, 0));
SPLCN.od.push(new newDoc( "Dec", 0, 0, 0, 0, 0));
SPLCN.od.push(new newDoc( "YTD", 0, 0,                                                                                                                0, 0, 0));
KREC.riskFI.push( new newRisk( "Jan", 0, "None"                                                                                                                       ));
KREC.riskFI.push( new newRisk( "Jan", 0, "None" ));
KREC.riskFI.push( new newRisk( "Jan", 0, "None" ));
KREC.allFI.push(new newDoc( "Jan", 0, 0, 0, 0, 0));
KREC.riskFI.push( new                                                                          newRisk( "Feb", 0, "None" ));
KREC.riskFI.push( new newRisk( "Feb", 0, "None" ));
KREC.riskFI.push( new newRisk( "Feb", 0, "None" ));
KREC.allFI.push(new newDoc( "Feb", 0, 0, 0, 0,                                                                           0));
KREC.riskFI.push( new newRisk( "Mar", 0, "None" ));
KREC.riskFI.push( new newRisk( "Mar", 0, "None" ));
KREC.riskFI.push( new newRisk( "Mar", 0, "None" ));
KREC.allFI.push(new newDoc( "Mar", 0, 0,                                                      0, 0, 0));
KREC.riskFI.push( new newRisk( "Apr", 0, "None" ));
KREC.riskFI.push( new newRisk( "Apr", 0, "None" ));
KREC.riskFI.push( new newRisk( "Apr", 0, "None" ));
KREC.allFI.push(new newDoc( "Apr",                                                      0, 0, 0, 0, 0));
KREC.riskFI.push( new newRisk( "May", 0, "None" ));
KREC.riskFI.push( new newRisk( "May", 0, "None" ));
KREC.riskFI.push( new newRisk( "May", 0, "None"                                                                                       ));
KREC.allFI.push(new newDoc( "May", 0, 0, 0, 0, 0));
KREC.riskFI.push( new newRisk( "Jun", 0, "None" ));
KREC.riskFI.push( new newRisk( "Jun", 0, "None" ));
KREC.riskFI.push( new                                                                          newRisk( "Jun", 0, "None" ));
KREC.allFI.push(new newDoc( "Jun", 0, 0, 0, 0, 0));
KREC.riskFI.push( new newRisk( "Jul", 0, "None" ));
KREC.riskFI.push( new newRisk( "Jul", 0,                                                                                 "None" ));
KREC.riskFI.push( new newRisk( "Jul", 0, "None" ));
KREC.allFI.push(new newDoc( "Jul", 0, 0, 0, 0, 0));
KREC.riskFI.push( new newRisk( "Aug", 0, "None" ));
KREC.riskFI.push( new                                                                   newRisk( "Aug", 0, "None" ));
KREC.riskFI.push( new newRisk( "Aug", 0, "None" ));
KREC.allFI.push(new newDoc( "Aug", 0, 0, 0, 0, 0));
KREC.riskFI.push( new newRisk( "Sep", 0,                                                                                 "None" ));
KREC.riskFI.push( new newRisk( "Sep", 0, "None" ));
KREC.riskFI.push( new newRisk( "Sep", 0, "None" ));
KREC.allFI.push(new newDoc( "Sep", 0, 0, 0, 0, 0));
KREC.riskFI.push( new                                                                   newRisk( "Oct", 0, "None" ));
KREC.riskFI.push( new newRisk( "Oct", 0, "None" ));
KREC.riskFI.push( new newRisk( "Oct", 0, "None" ));
KREC.allFI.push(new newDoc( "Oct", 0, 0, 0, 0,                                                                           0));
KREC.riskFI.push( new newRisk( "Nov", 0, "None" ));
KREC.riskFI.push( new newRisk( "Nov", 0, "None" ));
KREC.riskFI.push( new newRisk( "Nov", 0, "None" ));
KREC.allFI.push(new newDoc( "Nov", 0, 0,                                                      0, 0, 0));
KREC.riskFI.push( new newRisk( "Dec", 0, "None" ));
KREC.riskFI.push( new newRisk( "Dec", 0, "None" ));
KREC.riskFI.push( new newRisk( "Dec", 0, "None" ));
KREC.allFI.push(new newDoc( "Dec",                                                      0, 0, 0, 0, 0));
KREC.riskFI.push( new newRisk( "YTD", 0, "None" ));
KREC.riskFI.push( new newRisk( "YTD", 0, "None" ));
KREC.riskFI.push( new newRisk( "YTD", 0, "None"                                                                                       ));
KREC.allFI.push(new newDoc( "YTD", 0, 0, 0, 0, 0));




























var gcProject;
var gcDocument;
var gcMonth;
var gcDeal;

var text = {

	title				: 'SICOD Sanctioned Party List screening: ',
	language 			: 'Language',
	top3risk			: 'Top 3 Risk Countries',
	monthly 			: 'Monthly',
	module 				: 'Module',
	monthlyTrend		: 'Month trend',
	all 				: 'All',
	hits 				: 'Hits',
	approved 			: 'Approved',
	positiveList		: 'Positive list',
	negativeList		: 'Negative list',
	legalRegulation		: 'Legal regulation',
	month 				: 'Month',
	january				: 'January',
	february			: 'February',
	march				: 'March',
	april				: 'April',
	may					: 'May',
	june				: 'June',
	july				: 'July',
	august				: 'August',
	september			: 'September',
	october				: 'October',
	november			: 'November',
	december			: 'December',
	ytd 				: 'YTD',
	documentType 		: 'Document type',
	salesOrder			: 'Sales orders',
	purchaseOrder 		: 'Purchase orders',
	outboundDelivery 	: 'Outbound delivery',
	applicants 			: 'Applicants',
	employes    		: 'Employees',
	doc        			: 'Documents',
	hr 					: 'HR',
	fi 					: 'FI',
 	bp 					: 'BP',
	currentYear 		: 'Current Year',
	customers 			: 'Customers',
	vendors 			: 'Vendors',
	purchase			: 'Purchase',
	sellout				: 'Sellout'
};

// 设置初始信息
function fillStaticParts(control){

	document.getElementById("logo").innerHTML 	= text.title + control.year;
	// document.getElementById("plantNr").innerHTML = dependencies.plantNr;
	// document.getElementById("plantTxt").value = dependencies.plantTxt;
	// document.getElementById("companyNr").innerHTML = dependencies.companyNr;
	// document.getElementById("companyTxt").value = dependencies.companyTxt;
	// document.getElementById("simulDate").innerHTML = dependencies.simulDate;
	
	// document.getElementById("lgreg").value 	= header.lGreg;
	// document.getElementById("prNum").value 	= header.prNum;
	// document.getElementById("prtxt").value 	= header.prtxt;
	// document.getElementById("hsCode").value = header.hsCode;
	// document.getElementById("dimum").value 	= header.dimum;
	// document.getElementById("bomPrice").value = header.bomPrice;

	// document.getElementById("nonOrigVal").innerHTML = header.nonOrigVal;
	// document.getElementById("origVal").innerHTML = header.origVal;


};

// 设置选择框中的选择值
function setSelectOptions(){
	
	var selProject = document.getElementById("selectProject");
	var selDeal = document.getElementById("selectDeal");

	for (var i = 0; i < lgreg.length; i++) {

		//create lgreg select option
		var el = document.createElement("option");
		el.textContent = lgreg[i].lgreg ;
		el.value = lgreg[i].lgreg;
		selProject.appendChild(el);	
	};


	if ( lgreg[0].purchase[0] ) {

		var eld = document.createElement("option");
		eld.textContent = text.purchase ;
		eld.value = 'purchase';
		selDeal.appendChild(eld);
	};

	if ( lgreg[0].sellout[0] ) {

		var eld = document.createElement("option");
		eld.textContent = text.sellout ;
		eld.value = 'sellout';
		selDeal.appendChild(eld);
	};

	gcDeal = selDeal.children[0].value;

	gcProject 		= lgreg[0].lgreg;	
	
	gcMonth			= 'YTD';

};

	// 调用了初始化选择框值方法
	setSelectOptions();


// 选择框的监听方法
function atProjectChange( projectName ){

	var currentLgreg;

	// select current lgreg
	for (var i = lgreg.length - 1; i >= 0; i--) {
		if (lgreg[i].lgreg === projectName)
		{
			currentLgreg = lgreg[i];
			break;
		};
	};

	// /rebuild menu
	var selDeal = document.getElementById("selectDeal");
	
	//first delete children
	while (selDeal.hasChildNodes()) {   
		selDeal.removeChild(selDeal.firstChild);
	};
	
	//set menus again
	if ( lgreg[0].purchase[0] ) {
	
		var eld = document.createElement("option");
		eld.textContent = text.purchase ;
		eld.value = 'purchase';
		selDeal.appendChild(eld);
	};
	
	if ( lgreg[0].sellout[0] ) {
	
		var eld = document.createElement("option");
		eld.textContent = text.sellout ;
		eld.value = 'sellout';
		selDeal.appendChild(eld);
	};

	gcDeal = selDeal.children[0].value;

	//Set remaining global constants
	gcProject 		= currentLgreg.lgreg;	
	
	// gcMonth			= 'YTD';
	
	
	//set document 
	updateAll( gcProject, gcDeal, gcMonth );

};

function atDealChange( dealName ){

	var currentLgreg;

	// select current lgreg
	for (var i = lgreg.length - 1; i >= 0; i--) {
		if (lgreg[i].lgreg === gcProject)
		{
			currentLgreg = lgreg[i];
			break;
		};
	};

	gcProject  = currentLgreg.lgreg;	
	gcDeal = dealName;
	
	updateAll( gcProject, gcDeal, gcMonth);

};

function atMonthChange( monthName ){

	gcMonth			= monthName;
	
	updateAll( gcProject, gcDeal, gcMonth);

};

function updateAll( projectName, dealName, month ){

	//select hits docs
	var currentLgreg;

	for (var i = lgreg.length - 1; i >= 0; i--) {
		if (lgreg[i].lgreg === projectName)
		{
			currentLgreg = lgreg[i];
			break;
		};
	};
	
	//var currentMonthDoc = new newDoc( 'Empty', 0, 0, 0, 0, 0 );
	var currentMonthDoc ;
	for (var i = 0 ; i < currentLgreg[dealName].length ; i++) {
		
		if (currentLgreg[dealName][i].month === month) {
			currentMonthDoc = currentLgreg[dealName][i];
			break;
		};

	};

	//we have all the info, update graphs
	for (var i = 0; i < 12; i++) {
		
		var tempMonth;
		var ok = false;

		switch (i){
			case 0:
			tempMonth = 'Jan';
			break;
			case 1:
			tempMonth = 'Feb';
			break;
			case 2:
			tempMonth = 'Mar';
			break;
			case 3:
			tempMonth = 'Apr';
			break;
			case 4:
			tempMonth = 'May';
			break;
			case 5:
			tempMonth = 'Jun';
			break;
			case 6:
			tempMonth = 'Jul';
			break;
			case 7:
			tempMonth = 'Aug';
			break;
			case 8:
			tempMonth = 'Sep';
			break;
			case 9:
			tempMonth = 'Oct';
			break;
			case 10:
			tempMonth = 'Nov';
			break;
			case 11:
			tempMonth = 'Dec';
		};

		for (var n = 0 ; n < currentLgreg[dealName].length ; n++) {

			if (currentLgreg[dealName][n].month === tempMonth) {
				window.lineRisk.datasets[0].points[i].value = currentLgreg[dealName][n].apple;
				window.lineRisk.datasets[1].points[i].value = currentLgreg[dealName][n].orange;
				window.lineRisk.datasets[2].points[i].value = currentLgreg[dealName][n].pear;
				window.lineRisk.datasets[3].points[i].value = currentLgreg[dealName][n].peach;
				window.lineRisk.datasets[4].points[i].value = currentLgreg[dealName][n].banana;
				
				// console.log(currentLgreg[dealName][n].apple);

				ok = true;
				break;

			};
		};

		if (!ok) {

			window.lineRisk.datasets[0].points[i].value = 0;
			window.lineRisk.datasets[1].points[i].value = 0;
			window.lineRisk.datasets[2].points[i].value = 0;
			window.lineRisk.datasets[3].points[i].value = 0;
			window.lineRisk.datasets[4].points[i].value = 0;

		};

	};


	var n = 0;

	for (var i = 0 ; i < currentLgreg['item'].length ; i++){	
		
		if (currentLgreg['item'][i].month == month) {			

			window.polarRisk.segments[n].value =  currentLgreg['item'][i].count;				
			window.polarRisk.segments[n].label =  currentLgreg['item'][i].country;				

			n = n + 1;
		};

	};

	window.polarRisk.update();

	//Generate Legends
	while (document.getElementById('legendRisk').hasChildNodes()) {   
		document.getElementById('legendRisk').removeChild(document.getElementById('legendRisk').firstChild);
	};

	var legendHolder = document.createElement('div');
	legendHolder.innerHTML = polarRisk.generateLegend();
	document.getElementById('legendRisk').appendChild(legendHolder.firstChild);

	
	window.pieRisk.segments[0].value = currentMonthDoc.apple;
	window.pieRisk.segments[1].value = currentMonthDoc.orange;
	window.pieRisk.segments[2].value = currentMonthDoc.pear;
	window.pieRisk.segments[3].value = currentMonthDoc.peach;
	window.pieRisk.segments[4].value = currentMonthDoc.banana;
	
	window.doughnutRisk.segments[0].value = currentMonthDoc.apple;
	window.doughnutRisk.segments[1].value = currentMonthDoc.orange;
	window.doughnutRisk.segments[2].value = currentMonthDoc.pear;
	window.doughnutRisk.segments[3].value = currentMonthDoc.peach;
	window.doughnutRisk.segments[4].value = currentMonthDoc.banana;
	
	window.barHits.datasets[0].bars[0].value = currentMonthDoc.apple;
	window.barHits.datasets[0].bars[1].value = currentMonthDoc.orange;
	window.barHits.datasets[0].bars[2].value = currentMonthDoc.pear;
	window.barHits.datasets[0].bars[3].value = currentMonthDoc.peach;
	window.barHits.datasets[0].bars[4].value = currentMonthDoc.banana;

	window.barHits.update();

	window.lineRisk.update();
	
	window.doughnutRisk.update();
	
	window.pieRisk.update();

};

	// 定义了柱状图的初始数据来源 柱状图的数据结构
	var monthHitsData = {
		labels: ['apple', 'orange', 'pear', 'peach', 'banana'], //横坐标
		datasets: [
		{
			label: text.hits,
			fillColor: "#62A9F9",	   //柱状的颜色
			strokeColor: "#62A9F9",    //柱状的边框颜色
			highlightFill: "#BEDCFD",  //鼠标放在柱状图上的显示颜色
			highlightStroke: "#8ABFFB",//鼠标放在柱状图上的边框显示颜色
			data: [19, 97, 6, 26, 26]
		} //多少数据对比显示都塞多少个{}
		// {
		// 	label: text.hits,
		// 	fillColor: "#62A9F9",	   //柱状的颜色
		// 	strokeColor: "#62A9F9",    //柱状的边框颜色
		// 	highlightFill: "#BEDCFD",  //鼠标放在柱状图上的显示颜色
		// 	highlightStroke: "#8ABFFB",//鼠标放在柱状图上的边框显示颜色
		// 	data: [19, 97, 6, 26, 26]
		// }
		]
	};

	// 定义了绘画柱状图的方法
	var ctx2 = document.getElementById("monthHits").getContext("2d");
	window.barHits = new Chart(ctx2).Bar(monthHitsData);

	// 定义了极地图的初始数据来源 极地图的数据结构
	var polardata = [
            {
            value: 300,
            color:"#F7464A",      //扇形的颜色
            highlight: "#FF5A5E", //鼠标放在扇形上的颜色
            label: "Mali"		  //鼠标放在扇形上的label
            },
            {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Egypt"
            },
            {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Afghanistan"
            }
            ];

	//定义了绘画极地图的方法
	var ctx = document.getElementById("topRisk").getContext("2d");
	window.polarRisk = new Chart(ctx).PolarArea(polardata);
	
	// 实现了极地图中右侧的标记，具体实现方法未知
	var legendHolder = document.createElement('div');
	legendHolder.innerHTML = polarRisk.generateLegend();
	document.getElementById('legendRisk').appendChild(legendHolder.firstChild);
	
	// 定义了饼图的初始数据来源 饼图的数据结构
	var piedata = [
            {
            value: 300,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "apple"
            },
            {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "orange"
            },
            {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "pear"
            },
            {
            value: 100,
            color: "#0DB35C",
            highlight: "#6DB35B",
            label: "peach"
            },
            {
            value: 100,
            color: "#7FB45C",
            highlight: "#7FB45C",
            label: "banana"
            },						
            ];
	
	// 定义了绘画饼图的方法
	var ctx3 = document.getElementById("pieTest").getContext("2d");
	window.pieRisk = new Chart(ctx3).Pie(piedata);
	
	// 实现了饼图中右侧的标记，具体实现方法未知
	var legendPieHolder = document.createElement('div');
	legendPieHolder.innerHTML = pieRisk.generateLegend();
	document.getElementById('legendPieRisk').appendChild(legendPieHolder.firstChild);
	
	//定义了甜甜圈图的初始数据来源 甜甜圈图的数据结构
	var doughnutdata = [
            {
            value: 300,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "apple"
            },
            {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "orange"
            },
            {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "pear"
            },
            {
            value: 100,
            color: "#0DB35C",
            highlight: "#6DB35B",
            label: "peach"
            },
            {
            value: 100,
            color: "#7FB45C",
            highlight: "#7FB45C",
            label: "banana"
            },						
            ];
			
	// 定义了绘画甜甜圈图的方法
	var ctx4 = document.getElementById("doughnutTest").getContext("2d");
	window.doughnutRisk = new Chart(ctx4).Doughnut(doughnutdata);

	// 实现了甜甜圈图中右侧的标记，具体实现方法未知
	var legendDoughnutHolder = document.createElement('div');
	legendDoughnutHolder.innerHTML = doughnutRisk.generateLegend();
	document.getElementById('legendDoughnutRisk').appendChild(legendDoughnutHolder.firstChild);
	
	// 定义了折线图的初始数据来源 折线图的数据结构
	var linedata = {
            labels: [text.january, text.february, text.march, text.april, text.may, text.june, text.july, text.august, text.september, 
		text.october, text.november, text.december],
			datasets: [
				{
					label: 'apple',
					fillColor: "rgba(220,220,220,0.2)",
					strokeColor: "rgba(220,220,220,1)",
					pointColor: "rgba(220,220,220,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(220,220,220,1)",
					data: [68, 79, 60, 71, 68, 76, 60, 68, 67, 66, 77, 67 ]
				},
				{
					label: 'orange',
					fillColor: "#FFE6BD",
					strokeColor: "#FFDA87",
					pointColor: "#FFDA87",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "#FFDA87",
					data: [3, 2, 4, 5, 6, 2, 3, 2, 1, 4 ,2 , 1]
				},
				{
					label: 'pear',
					fillColor: "#C5E89F",
					strokeColor: "#9CC96B",
					pointColor: "#9CC96B",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "#9CC96B",
					data: [2, 2, 3, 3, 5, 2, 2, 2, 1, 3, 2, 1]
				},
				{
					label: 'peach',
					fillColor: "rgba(151,187,205,0.2)",
					strokeColor: "rgba(151,187,205,1)",
					pointColor: "rgba(151,187,205,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(151,187,205,1)",
					data: [2, 2, 3, 5, 5, 2, 2, 2, 1, 3, 2, 1 ]
				},
				{
					label: 'banana',
					fillColor: "#FF6C51",
					strokeColor: "#F54928",
					pointColor: "#F54928",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "#F54928",
					data: [1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0 ]
				},
				],
				};
	
	// 定义了绘画折线图的方法
	var ctx5 = document.getElementById("lineTest").getContext("2d");
	window.lineRisk = new Chart(ctx5).Line(linedata, {
            bezierCurve: false
            });
	
	// 实现了折线图中右侧的标记，具体实现方法未知
	var legendLineHolder = document.createElement('div');
	legendLineHolder.innerHTML = lineRisk.generateLegend();
	document.getElementById('legendLineRisk').appendChild(legendLineHolder.firstChild);
	
	
	//调用方法来显示相应信息
	fillStaticParts(control);
	
	updateAll( gcProject, gcDeal, gcMonth);
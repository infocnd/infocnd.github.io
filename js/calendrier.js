function makeCalendar(month,year,events) {
	var week = ['Sun<span>day</span>','Mon<span>day</span>','Tue<span>sday</span>','Wed<span>nesday</span>','Thu<span>rsday</span>','Fri<span>day</span>','Sat<span>urday</span>'];
	var months = ['Jan<span>uary</span>','Feb<span>ruary</span>','Mar<span>ch</span>','Apr<span>il</span>','May','Jun<span>e</span>','Jul<span>y</span>','Aug<span>ust</span>','Sep<span>tember</span>','Oct<span>ober</span>','Nov<span>ember</span>','Dec<span>ember</span>'];
	
	document.getElementById('calendar').innerHTML = '';
	document.getElementById('list').innerHTML = '';
	// Date Parsing
	var first = new Date(year,(month-1),1);// First Day of the Month
	var last = new Date(year,(month-1)+1,0);// Last Day of the Month
	var startIndex = first.getDay();
	var endIndex = last.getDay();
	var days = last.getDate();
	
	// Title
	var title = document.createElement('h1');
	var ll = (month==1)?'12,'+(year-1):(month-1)+','+year;
	ll = '<a href="javascript:makeCalendar('+ll+')" class="l"><</a>';
	var rr = (month==12)?'1,'+(parseInt(year)+1):(parseInt(month)+1)+','+year;
	rr = '<a href="javascript:makeCalendar('+rr+')" class="r">></a>';
	title.className = 'title';
	title.innerHTML = ll+months[month-1]+' '+year+rr;
	document.getElementById('calendar').appendChild(title);
	
	// Table
	var table = document.createElement('table');
	table.id = 'cal';
	document.getElementById('calendar').appendChild(table);
	
	// List
	var list = document.getElementById('list');
	function addListDate(a) {
		var d = document.createElement('div');
		d.className = 'date';
		d.innerHTML = month+'/'+(a+1)+'/'+year;
		list.appendChild(d);
	}
	function addList(a,b) {
		var li = document.createElement('li');
		var a = document.createElement('a');
		a.href = b.link;
		a.innerHTML = b.title;
		li.appendChild(a);
		list.appendChild(li)
	}
	
	// Rows
	var di = 0, row = document.createElement('tr');
	table.appendChild(row);
	
	function rows() {
		if (di==6){
			di=0;
			row = document.createElement('tr');
			table.appendChild(row);
		} else {
			di++;
		}
	}
	
	// Day Headers
	for (var i = 0; i < week.length; i++) {
		var d = document.createElement('th');
		d.innerHTML = week[i];
		row.appendChild(d);
		rows();
	}
	
	// Blank Days
	for (var i = 0; i < startIndex; i++) {
		var d = document.createElement('td');
		d.className = 'non day';
		d.appendChild(document.createElement('p'));
		row.appendChild(d);
		rows();
	}
	
	// Regular Days
	for (var i = 0; i < days; i++) {
		var d = document.createElement('td');
		d.className = 'day';
		var n = document.createElement('span');
		n.innerHTML = (i+1);
		n.className = 'number';
		d.appendChild(n);
		row.appendChild(d);
		rows();
		if (events) {
			var ev = events[year+'-'+month+'-'+i];
			if (ev){
				addListDate(i);
				for (var ii = 0; ii < ev.length; ii++) {
					var a = document.createElement('a');
					a.href = ev[ii].link;
					a.title = ev[ii].notes;
					a.innerHTML = ev[ii].title;
					d.appendChild(a);
					addList(i,ev[ii]);
				}
			}
		}
	}
	
	// Blank Days
	for (var i = 0; i < (6-endIndex); i++) {
		var d = document.createElement('td');
		d.className = 'non day';
		d.appendChild(document.createElement('p'));
		row.appendChild(d);
	}
}

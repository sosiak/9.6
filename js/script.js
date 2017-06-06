	var list = document.getElementById('list');
	var add = document.getElementById('addElem');

	add.addEventListener('click', function() {
		var element = document.createElement('li');
		var li = document.getElementsByTagName('li');
		var k = li.length;
		console.log(k);
		element.innerHTML = 'Item ' + k;
		list.appendChild(element);
	})


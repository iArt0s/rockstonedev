(function () {
	const timeNode = document.querySelector('time');
  
  function setTime() {
		const time = new Intl.DateTimeFormat('ru-RU', { 
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'      
    })
    .format(Date.now());
    
    timeNode.setAttribute('datetime', time);
    timeNode.textContent = time;
    
    setTimeout(setTime, 1000);
  }
  
  setTime();  
})();

(function () {
	const form = document.querySelector('form');
  const list = document.querySelector('ul');
  
  form.onsubmit = function (e) {
  	e.preventDefault();
    
    const item = document.createElement('li');
    item.textContent = form.elements['message'].value;
    list.appendChild(item);
    form.elements['message'].value = '';
  }
})();
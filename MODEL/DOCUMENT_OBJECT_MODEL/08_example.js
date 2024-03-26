let menu = document.getElementById('menu');
menu.insertAdjacentHTML('beforeend', '<li>browse</li>');
menu.insertAdjacentHTML('beforeend', '<li>search</li>');
parent.replaceChild(newChild, oldChild);
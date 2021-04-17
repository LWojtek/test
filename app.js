document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('#registrar');
	const mainDiv = document.querySelector('.main');
	const ul = document.querySelector('#invitedList');
	
	
	const div = document.createElement('div');
	const filterLabel = document.createElement('label');
	const filterCheckbox = document.createElement('input');
	
	filterLabel.textContent = "Hide those who haven't responded";
	filterCheckbox.type = 'checkbox';
	
	div.appendChild(filterLabel);
	div.appendChild(filterCheckbox);
	
	mainDiv.insertBefore(div, ul)
	
	function addGuest(e){
		e.preventDefault();
		if (input.value) {
		   const text = input.value;
		   input.value = '';
		   const li = createLi(text)
		   ul.appendChild(li);
		 }
	
	}

	
	
	function createLi(text){

		function createElement(elementName, property, value){
			const element = document.createElement(elementName);
			element[property] = value;
			return element;
		}

		function appendToLi(elementName, property, value){
			const element = createElement(elementName, property, value)	
			li.appendChild(element);
			return element;
		}

		const li = document.createElement('li');
		appendToLi('span', 'textContent', text)	
		const label = createElement('label', 'textContent', 'Confirmed');
		const checkbox = createElement('input', 'type', 'checkbox');
		label.appendChild(checkbox);
		li.appendChild(label);
		appendToLi('button', 'textContent', 'Edit');	
		appendToLi('button', 'textContent', 'Remove');	
		return li;
	}
	
	
	
	// **************************************************** //
	// *********** E V E N T  L I S T E N E R S *********** //
	// **************************************************** //
	
	form.addEventListener('submit', addGuest)
	
	
	ul.addEventListener('change', (e) => {
	  const checkbox = e.target;
	  const checked = checkbox.checked;
	  const listItem = checkbox.parentNode.parentNode;
	 
	  
	  if (checkbox.type = 'checkbox') {
		  if (checked) {
			listItem.className = 'responded';
		  } else {
		   listItem.className = '';
		  }    
	  }
	})

	filterCheckbox.addEventListener('change', (e) => {
		const isChecked = e.target.checked;
		const lis = ul.children;
	
		if(isChecked){
			for (let i = 0; i < lis.length; i++) {
				let li = lis[i]
				if (li.className === 'responded') {
					li.style.display = '';
				} else {
					li.style.display = 'none';
				}
			}
		} else {
			for (let i = 0; i < lis.length; i++) {
				let li = lis[i]
				li.style.display = '';
			}
		}
	})
	
	
	ul.addEventListener('click', (e) => {
		if(e.target.tagName === 'BUTTON') {
			const button = e.target
			const li = e.target.parentNode;
			const ul = li.parentNode;
			const nameActions = {
				remove: () => {
					ul.removeChild(li) 
				}, 
				edit: () => {
					const span = li.firstElementChild;
					const input = document.createElement('input');
					input.type = 'text';
					input.value = span.textContent;
					li.insertBefore(input, span);
					li.removeChild(span);
					button.textContent = 'Save';
				},
				save: () => {
					const input = li.firstElementChild;	
					const span = document.createElement('span');
					span.textContent = input.value;	
					li.insertBefore(span, input);
					li.removeChild(input)
					button.textContent = 'Edit';
				}
			}

			const action = button.textContent;
			nameActions[action]
			
				if (action === 'Remove') {
					nameActions.remove();
				} else if (action === 'Edit') {
					nameActions.edit();
				} else if (action === 'Save') {  
					nameActions.save();		// <<<< ---------- tu jest problem
				}

	  } 
	})
})









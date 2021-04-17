const form = document.querySelector('#registrar');
const input = document.querySelector('#input');
const ul = document.querySelector('#invitedList');


function addGuest(e){
	e.preventDefault();
	if (input.value) {
       const text = input.value;
       input.value = '';
       const li = createLi(text)
       ul.appendChild(li);
	   console.log(li);
     }

}

function createLi(text){
	const li = document.createElement('li');
	const span = document.createElement('span');
	span.textContent = text;
	li.appendChild(span);
	const label = document.createElement('label');
	label.textContent = 'Confirmed';
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	label.appendChild(checkbox);
	li.appendChild(label);
	const editButton = document.createElement('button');
	editButton.textContent = 'Edit';
	li.appendChild(editButton);
	const removeButton = document.createElement('button');
	removeButton.textContent = 'Remove';  
	li.appendChild(removeButton)

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


ul.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') {
	    const button = e.target
	    const li = e.target.parentNode;
         const ul = li.parentNode;
      	if (button.textContent === 'Remove') {
			ul.removeChild(li)
		} else if (button.textContent === 'Edit') {
			const span = li.firstElementChild;
			const input = document.createElement('input');
			input.type = 'text';
			input.value = span.textContent;
			li.insertBefore(input, span);
			li.removeChild(span);
			button.textContent = 'Save';
		} else if (button.textContent === 'Save') {  // <<<< ---------- tu jest problem
			const input = li.firstElementChild;	
			const span = document.createElement('span');
			span.textContent = input.value;	
			li.insertBefore(span, input);
			li.removeChild(input)
			button.textContent = 'Edit';
		}
  } 
})







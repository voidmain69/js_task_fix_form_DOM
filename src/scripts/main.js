'use strict';

// write code here
const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');
  const div = input.parentElement;

  input.placeholder = input.name.toLocaleUpperCase();

  label.textContent = input.name;
  label.htmlFor = input.id;
  label.className = 'field-label';
  div.appendChild(label);
}

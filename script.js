//your code here!

const list = document.getElementById('infi-list');

function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    li.textContent = `List Item ${list.children.length + 1}`;
    list.appendChild(li);
  }
}

// Initial items
addItems(10);

// With loading delay simulation
list.addEventListener('scroll', () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight - 10) {
    // Show loading (optional)
    const loader = document.createElement('div');
    loader.textContent = 'Loading...';
    list.appendChild(loader);
    
    // Simulate network delay
    setTimeout(() => {
      list.removeChild(loader);
      addItems(2);
    }, 500);
  }
});
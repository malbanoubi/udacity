/**
 * Define Global Variables
 * 
*/

const sections = Array.from(document.querySelectorAll('section'));
const menu = document.getElementById('navbar__list'); 

// Go to top btn 

const toTop = document.getElementById('to-top');

// Hide header for scroll

const header = document.querySelector('.page__header');

// On Click, Scroll to the page's top, replace 'smooth' with 'instant' if you don't want smooth scrolling

toTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// On scroll, Show/Hide the btn with animation

window.onscroll = () =>  window.scrollY > 1000 ? toTop.style.opacity = 1 : toTop.style.opacity = 0;

/**
 * End Global Variables
*/

// Create List Item for menu navbar 
function createListItem() {
    for (section of sections) {
        sectionName = section.getAttribute('data-nav');
        sectionLink = section.getAttribute('id');
        // Create item for ech one
        listItem = document.createElement('li');
        // Add the txt item
        listItem.innerHTML = `<a class='menu__link' href='#${sectionLink}'>${sectionName}</a>`;
        //Add List Item In The Menu
        menu.appendChild(listItem);
    }
}
// build the nav
createListItem();
// End Create List Item for menu navbar 

// Set sections as active & smooth click to scroll
window.addEventListener('scroll', listLinkActive);
function listLinkActive(){
  sections.forEach(section =>{
  const sectionTop = section.getBoundingClientRect().top;
  const link = document.querySelector(`a[href="#${section.id}"]`);
	  if(sectionTop >= 0 && sectionTop <= 410){
		link.classList.add('active-link');
		section.classList.add('your-active-class');
	 	}
	  else{
		link.classList.remove('active-link');
		section.classList.remove('your-active-class');
	 	}
//	  smooth click to scroll
	  
link.addEventListener("click", (e)=>{
    e.preventDefault()
    section.scrollIntoView({ behavior: 'smooth' });
});
	  
//	  End smooth click to scroll
});
}
// End sections as active & smooth click to scroll

// Hide header for scroll (display : none)
window.addEventListener('scroll', () =>{
	const scrollable = document.documentElement.scrollHeight - window.innerHeight;
	const scrolled = window.scrollY ;
	
	if ((scrolled) >= 2500 && scrollable) {
		header.style.display = 'none';
		
	}
	else {
		header.style.display = 'block';
	}
})
// End Hide header for scroll (display : none)
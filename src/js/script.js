const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay2 = document.getElementById('overlay2')

openModalButtons.forEach(button=>{
	button.addEventListener('click',()=>{
		const modal = document.querySelector(button.dataset.modalTarget)
		openModal(modal)
	})
})

overlay2.addEventListener('click',()=>{
	const modals = document.querySelectorAll('.modal.active')
	modals.forEach(modal=>{
		closeModal(modal)
	})
})


closeModalButtons.forEach(button=>{
	button.addEventListener('click',()=>{
		const modal = button.closest('.modal')
		closeModal(modal)
	})
})

function openModal(modal){
	if(modal == null){
		return
	}
	modal.classList.add('active')
	overlay2.classList.add('active')
}
function closeModal(modal){
	if(modal == null){
		return
	}
	modal.classList.remove('active')
	overlay2.classList.remove('active')
}
const numbers = document.querySelectorAll('.number');
const submitBtn = document.getElementById('submit-btn');
const nextPage = document.querySelector('.next-page');
const selectedRatingText = document.getElementById('selected-rating');

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        numbers.forEach((n) => 
        n.classList.remove('active'));
        number.classList.add('active');
    });
});
 
submitBtn.addEventListener('click', () => {
    
    const selectedNumber = Array.from(numbers).find((selectedNumber) =>
    selectedNumber.classList.contains('active'));
    selectedRatingText.textContent = `you selected ${selectedNumber.textContent} out of 5`;
    nextPage.style.display = 'block';
document.querySelector('.rating-system').style.display = 'none';
});
document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const SEAT_NO = document.getElementById('SEAT_NO').value.trim();
    const MOTHER_NAME = document.getElementById('MOTHER_NAME').value.trim();
    
    try {
        const response = await fetch('SAMPLE.json');
        if (!response.ok) throw new Error('Failed to fetch results');
        
        const data = await response.json();
        
        // Convert SEAT_NO to number for comparison
        const student = data.find(s => 
            s.SEAT_NO === parseInt(SEAT_NO) && 
            s.MOTHER_NAME.toLowerCase() === MOTHER_NAME.toLowerCase()
        );
        
        if (student) {
            localStorage.setItem('userSEAT_NO', SEAT_NO);
            window.location.href = 'result.html';
        } else {
            const errorMessage = document.getElementById('errorMessage');
            errorMessage.textContent = 'Invalid Seat Number or Mother Name. Please try again.';
            errorMessage.classList.remove('hidden');
        }
    } catch (error) {
        console.error('Error:', error);
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = 'An error occurred. Please try again later.';
        errorMessage.classList.remove('hidden');
    }
});
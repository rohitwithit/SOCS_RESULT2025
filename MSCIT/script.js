async function fetchResults() {
    try {
        const response = await fetch('SAMPLE.json');
        if (!response.ok) throw new Error('Failed to fetch results');
        const data = await response.json();

        const SEAT_NO = localStorage.getItem('userSEAT_NO');
        if (!SEAT_NO) window.location.href = 'index1.html';

        const studentData = data.find(student =>
            student.SEAT_NO === parseInt(SEAT_NO)
        );

        if (studentData) displayResults(studentData);
        else document.getElementById('resultDetails').innerHTML =
            '<div class="error">No results found</div>';
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('resultDetails').innerHTML =
            '<div class="error">Error loading results</div>';
    }
}

// Keep displayResults() function the same
function displayResults(data) {
    // Update student info
    // Basic Info
    document.getElementById('SEAT_NO').textContent = data.SEAT_NO;
    document.getElementById('NAME').textContent = data.NAME;
    document.getElementById('PRN').textContent = data.PRN;
    document.getElementById('MOTHER_NAME').textContent = data.MOTHER_NAME;

    // MIT421
    document.getElementById('MIT421I').textContent = data.MIT421I;
    document.getElementById('MIT421E').textContent = data.MIT421E;
    document.getElementById('MIT421TL').textContent = data.MIT421TL;
    document.getElementById('MIT421GR').textContent = data.MIT421GR;
    document.getElementById('MIT421GP').textContent = data.MIT421GP;
    document.getElementById('MIT421TGP').textContent = data.MIT421TGP;
    document.getElementById('MIT421STATUS').textContent = data.MIT421STATUS;

    // MIT422
    document.getElementById('MIT422I').textContent = data.MIT422I;
    document.getElementById('MIT422E').textContent = data.MIT422E;
    document.getElementById('MIT422TL').textContent = data.MIT422TL;
    document.getElementById('MIT422GR').textContent = data.MIT422GR;
    document.getElementById('MIT422GP').textContent = data.MIT422GP;
    document.getElementById('MIT422TGP').textContent = data.MIT422TGP;
    document.getElementById('MIT422STATUS').textContent = data.MIT422STATUS;

    // MIT423
    document.getElementById('MIT423I').textContent = data.MIT423I;
    document.getElementById('MIT423E').textContent = data.MIT423E;
    document.getElementById('MIT423TL').textContent = data.MIT423TL;
    document.getElementById('MIT423GR').textContent = data.MIT423GR;
    document.getElementById('MIT423GP').textContent = data.MIT423GP;
    document.getElementById('MIT423TGP').textContent = data.MIT423TGP;
    document.getElementById('MIT423STATUS').textContent = data.MIT423STATUS;

    // MIT424
    document.getElementById('MIT424I').textContent = data.MIT424I;
    document.getElementById('MIT424E').textContent = data.MIT424E;
    document.getElementById('MIT424TL').textContent = data.MIT424TL;
    document.getElementById('MIT424GR').textContent = data.MIT424GR;
    document.getElementById('MIT424GP').textContent = data.MIT424GP;
    document.getElementById('MIT424TGP').textContent = data.MIT424TGP;
    document.getElementById('MIT424STATUS').textContent = data.MIT424STATUS;

    // MIT425
    document.getElementById('MIT425I').textContent = data.MIT425I;
    document.getElementById('MIT425E').textContent = data.MIT425E;
    document.getElementById('MIT425TL').textContent = data.MIT425TL;
    document.getElementById('MIT425GR').textContent = data.MIT425GR;
    document.getElementById('MIT425GP').textContent = data.MIT425GP;
    document.getElementById('MIT425TGP').textContent = data.MIT425TGP;
    document.getElementById('MIT425STATUS').textContent = data.MIT425STATUS;

    // MIT426
    document.getElementById('MIT426I').textContent = data.MIT426I;
    document.getElementById('MIT426E').textContent = data.MIT426E;
    document.getElementById('MIT426TL').textContent = data.MIT426TL;
    document.getElementById('MIT426GR').textContent = data.MIT426GR;
    document.getElementById('MIT426GP').textContent = data.MIT426GP;
    document.getElementById('MIT426TGP').textContent = data.MIT426TGP;
    document.getElementById('MIT426STATUS').textContent = data.MIT426STATUS;

    // MITE427A
    document.getElementById('MITE427AI').textContent = data.MITE427AI;
    document.getElementById('MITE427AE').textContent = data.MITE427AE;
    document.getElementById('MITE427ATL').textContent = data.MITE427ATL;
    document.getElementById('MITE427AGR').textContent = data.MITE427AGR;
    document.getElementById('MITE427AGP').textContent = data.MITE427AGP;
    document.getElementById('MITE427ATGP').textContent = data.MITE427ATGP;
    document.getElementById('MITE427ASTATUS').textContent = data.MITE427ASTATUS;


    // Total/CGPA
    document.getElementById('TOTAL').textContent = data.TOTAL;
    document.getElementById('PERCENTAGE').textContent = data.PERCENTAGE;
    document.getElementById('CGPA').textContent = data.CGPA;

    
    document.getElementById('PHOTO').src = data.PHOTO;
}

function logout() {
    localStorage.removeItem('userSEAT_NO'); // Corrected key
    window.location.href = 'index1.html';
}
document.addEventListener('DOMContentLoaded', fetchResults);

function downloadPDF() {
    // Get button container and store original display style
    const buttonContainer = document.querySelector('#btn11').parentNode;
    const originalDisplay = window.getComputedStyle(buttonContainer).display;

    // Hide buttons temporarily
    buttonContainer.style.display = 'none';

    // Initialize jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');

    // Get the HTML element to convert
    const element = document.querySelector('.container');

    // html2canvas options
    const options = {
        scale: 2,
        useCORS: true,
        logging: true,
        scrollX: 0,
        scrollY: 0,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
    };

    // Generate PDF
    html2canvas(element, options).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = doc.internal.pageSize.getWidth() - 20;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        doc.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
        const seatNo = document.getElementById('SEAT_NO').textContent.trim();
        const name = document.getElementById('NAME').textContent.trim();
        doc.save(`${seatNo}_${name}_Result.pdf`);

    }).finally(() => {
        // Restore buttons visibility
        buttonContainer.style.display = originalDisplay;
    });


    alert("wait 10 seconds for Downloading PDF..");
}
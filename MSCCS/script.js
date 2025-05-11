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

    // MCS421
    document.getElementById('MCS421I').textContent = data.MCS421I;
    document.getElementById('MCS421E').textContent = data.MCS421E;
    document.getElementById('MCS421TL').textContent = data.MCS421TL;
    document.getElementById('MCS421GR').textContent = data.MCS421GR;
    document.getElementById('MCS421GP').textContent = data.MCS421GP;
    document.getElementById('MCS421TGP').textContent = data.MCS421TGP;
    document.getElementById('MCS421STATUS').textContent = data.MCS421STATUS;

    // MCS422
    document.getElementById('MCS422I').textContent = data.MCS422I;
    document.getElementById('MCS422E').textContent = data.MCS422E;
    document.getElementById('MCS422TL').textContent = data.MCS422TL;
    document.getElementById('MCS422GR').textContent = data.MCS422GR;
    document.getElementById('MCS422GP').textContent = data.MCS422GP;
    document.getElementById('MCS422TGP').textContent = data.MCS422TGP;
    document.getElementById('MCS422STATUS').textContent = data.MCS422STATUS;

    // MCS423
    document.getElementById('MCS423I').textContent = data.MCS423I;
    document.getElementById('MCS423E').textContent = data.MCS423E;
    document.getElementById('MCS423TL').textContent = data.MCS423TL;
    document.getElementById('MCS423GR').textContent = data.MCS423GR;
    document.getElementById('MCS423GP').textContent = data.MCS423GP;
    document.getElementById('MCS423TGP').textContent = data.MCS423TGP;
    document.getElementById('MCS423STATUS').textContent = data.MCS423STATUS;

    // MCS424
    document.getElementById('MCS424I').textContent = data.MCS424I;
    document.getElementById('MCS424E').textContent = data.MCS424E;
    document.getElementById('MCS424TL').textContent = data.MCS424TL;
    document.getElementById('MCS424GR').textContent = data.MCS424GR;
    document.getElementById('MCS424GP').textContent = data.MCS424GP;
    document.getElementById('MCS424TGP').textContent = data.MCS424TGP;
    document.getElementById('MCS424STATUS').textContent = data.MCS424STATUS;

    // MCS425
    document.getElementById('MCS425I').textContent = data.MCS425I;
    document.getElementById('MCS425E').textContent = data.MCS425E;
    document.getElementById('MCS425TL').textContent = data.MCS425TL;
    document.getElementById('MCS425GR').textContent = data.MCS425GR;
    document.getElementById('MCS425GP').textContent = data.MCS425GP;
    document.getElementById('MCS425TGP').textContent = data.MCS425TGP;
    document.getElementById('MCS425STATUS').textContent = data.MCS425STATUS;

    // MCS426
    document.getElementById('MCS426I').textContent = data.MCS426I;
    document.getElementById('MCS426E').textContent = data.MCS426E;
    document.getElementById('MCS426TL').textContent = data.MCS426TL;
    document.getElementById('MCS426GR').textContent = data.MCS426GR;
    document.getElementById('MCS426GP').textContent = data.MCS426GP;
    document.getElementById('MCS426TGP').textContent = data.MCS426TGP;
    document.getElementById('MCS426STATUS').textContent = data.MCS426STATUS;

    // MCSE427A
    document.getElementById('MCSE427AI').textContent = data.MCSE427AI;
    document.getElementById('MCSE427AE').textContent = data.MCSE427AE;
    document.getElementById('MCSE427ATL').textContent = data.MCSE427ATL;
    document.getElementById('MCSE427AGR').textContent = data.MCSE427AGR;
    document.getElementById('MCSE427AGP').textContent = data.MCSE427AGP;
    document.getElementById('MCSE427ATGP').textContent = data.MCSE427ATGP;
    document.getElementById('MCSE427ASTATUS').textContent = data.MCSE427ASTATUS;


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
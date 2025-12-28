async function fetchResults() {
    try {
        const response = await fetch('SAMPLE.json');
        if (!response.ok) throw new Error('Failed to fetch results');
        const data = await response.json();

        const SEAT_NO = localStorage.getItem('userSEAT_NO');
        if (!SEAT_NO || isNaN(SEAT_NO)) {
            window.location.href = 'index1.html';
            return;
        }

        const seatNo = Number(SEAT_NO);

        const studentData = data.find(student =>
            Number(student.SEAT_NO) === seatNo
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
    document.getElementById('PHOTO').src = data.PHOTO;

    // MITE517A
    document.getElementById('MITE517AI').textContent = data.MITE517AI;
    document.getElementById('MITE517AE').textContent = data.MITE517AE;
    document.getElementById('MITE517ATL').textContent = data.MITE517ATL;
    document.getElementById('MITE517AGR').textContent = data.MITE517AGR;
    document.getElementById('MITE517AGP').textContent = data.MITE517AGP;
    document.getElementById('MITE517ATGP').textContent = data.MITE517ATGP;
    document.getElementById('MITE517ASTATUS').textContent = data.MITE517ASTATUS;

    // MIT511
    document.getElementById('MIT511I').textContent = data.MIT511I;
    document.getElementById('MIT511E').textContent = data.MIT511E;
    document.getElementById('MIT511TL').textContent = data.MIT511TL;
    document.getElementById('MIT511GR').textContent = data.MIT511GR;
    document.getElementById('MIT511GP').textContent = data.MIT511GP;
    document.getElementById('MIT511TGP').textContent = data.MIT511TGP;
    document.getElementById('MIT511STATUS').textContent = data.MIT511STATUS;

    // MIT512
    document.getElementById('MIT512I').textContent = data.MIT512I;
    document.getElementById('MIT512E').textContent = data.MIT512E;
    document.getElementById('MIT512TL').textContent = data.MIT512TL;
    document.getElementById('MIT512GR').textContent = data.MIT512GR;
    document.getElementById('MIT512GP').textContent = data.MIT512GP;
    document.getElementById('MIT512TGP').textContent = data.MIT512TGP;
    document.getElementById('MIT512STATUS').textContent = data.MIT512STATUS;

    // MIT513
    document.getElementById('MIT513I').textContent = data.MIT513I;
    document.getElementById('MIT513E').textContent = data.MIT513E;
    document.getElementById('MIT513TL').textContent = data.MIT513TL;
    document.getElementById('MIT513GR').textContent = data.MIT513GR;
    document.getElementById('MIT513GP').textContent = data.MIT513GP;
    document.getElementById('MIT513TGP').textContent = data.MIT513TGP;
    document.getElementById('MIT513STATUS').textContent = data.MIT513STATUS;

    // MIT514
    document.getElementById('MIT514I').textContent = data.MIT514I;
    document.getElementById('MIT514E').textContent = data.MIT514E;
    document.getElementById('MIT514TL').textContent = data.MIT514TL;
    document.getElementById('MIT514GR').textContent = data.MIT514GR;
    document.getElementById('MIT514GP').textContent = data.MIT514GP;
    document.getElementById('MIT514TGP').textContent = data.MIT514TGP;
    document.getElementById('MIT514STATUS').textContent = data.MIT514STATUS;

    // MIT515
    document.getElementById('MIT515I').textContent = data.MIT515I;
    document.getElementById('MIT515E').textContent = data.MIT515E;
    document.getElementById('MIT515TL').textContent = data.MIT515TL;
    document.getElementById('MIT515GR').textContent = data.MIT515GR;
    document.getElementById('MIT515GP').textContent = data.MIT515GP;
    document.getElementById('MIT515TGP').textContent = data.MIT515TGP;
    document.getElementById('MIT515STATUS').textContent = data.MIT515STATUS;

    // MIT516
    document.getElementById('MIT516I').textContent = data.MIT516I;
    document.getElementById('MIT516E').textContent = data.MIT516E;
    document.getElementById('MIT516TL').textContent = data.MIT516TL;
    document.getElementById('MIT516GR').textContent = data.MIT516GR;
    document.getElementById('MIT516GP').textContent = data.MIT516GP;
    document.getElementById('MIT516TGP').textContent = data.MIT516TGP;
    document.getElementById('MIT516STATUS').textContent = data.MIT516STATUS;



    // Total/CGPA
    document.getElementById('TOTAL').textContent = data.TOTAL;
    document.getElementById('PERCENTAGE').textContent = data.PERCENTAGE;
    document.getElementById('CGPA').textContent = data.CGPA;



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
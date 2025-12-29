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

    // MDSE106A
    document.getElementById('MDSE106AI').textContent = data.MDSE106AI;
    document.getElementById('MDSE106AE').textContent = data.MDSE106AE;
    document.getElementById('MDSE106ATL').textContent = data.MDSE106ATL;
    document.getElementById('MDSE106AGR').textContent = data.MDSE106AGR;
    document.getElementById('MDSE106AGP').textContent = data.MDSE106AGP;
    document.getElementById('MDSE106ATGP').textContent = data.MDSE106ATGP;
    document.getElementById('MDSE106ASTATUS').textContent = data.MDSE106ASTATUS;

    // MDSE106B
    document.getElementById('MDSE106BI').textContent = data.MDSE106BI;
    document.getElementById('MDSE106BE').textContent = data.MDSE106BE;
    document.getElementById('MDSE106BTL').textContent = data.MDSE106BTL;
    document.getElementById('MDSE106BGR').textContent = data.MDSE106BGR;
    document.getElementById('MDSE106BGP').textContent = data.MDSE106BGP;
    document.getElementById('MDSE106BTGP').textContent = data.MDSE106BTGP;
    document.getElementById('MDSE106BSTATUS').textContent = data.MDSE106BSTATUS;

    // MDS101
    document.getElementById('MDS101I').textContent = data.MDS101I;
    document.getElementById('MDS101E').textContent = data.MDS101E;
    document.getElementById('MDS101TL').textContent = data.MDS101TL;
    document.getElementById('MDS101GR').textContent = data.MDS101GR;
    document.getElementById('MDS101GP').textContent = data.MDS101GP;
    document.getElementById('MDS101TGP').textContent = data.MDS101TGP;
    document.getElementById('MDS101STATUS').textContent = data.MDS101STATUS;

    // MDS102
    document.getElementById('MDS102I').textContent = data.MDS102I;
    document.getElementById('MDS102E').textContent = data.MDS102E;
    document.getElementById('MDS102TL').textContent = data.MDS102TL;
    document.getElementById('MDS102GR').textContent = data.MDS102GR;
    document.getElementById('MDS102GP').textContent = data.MDS102GP;
    document.getElementById('MDS102TGP').textContent = data.MDS102TGP;
    document.getElementById('MDS102STATUS').textContent = data.MDS102STATUS;

    // MDS103
    document.getElementById('MDS103I').textContent = data.MDS103I;
    document.getElementById('MDS103E').textContent = data.MDS103E;
    document.getElementById('MDS103TL').textContent = data.MDS103TL;
    document.getElementById('MDS103GR').textContent = data.MDS103GR;
    document.getElementById('MDS103GP').textContent = data.MDS103GP;
    document.getElementById('MDS103TGP').textContent = data.MDS103TGP;
    document.getElementById('MDS103STATUS').textContent = data.MDS103STATUS;

    // MDS104
    document.getElementById('MDS104I').textContent = data.MDS104I;
    document.getElementById('MDS104E').textContent = data.MDS104E;
    document.getElementById('MDS104TL').textContent = data.MDS104TL;
    document.getElementById('MDS104GR').textContent = data.MDS104GR;
    document.getElementById('MDS104GP').textContent = data.MDS104GP;
    document.getElementById('MDS104TGP').textContent = data.MDS104TGP;
    document.getElementById('MDS104STATUS').textContent = data.MDS104STATUS;

    // MDS105
    document.getElementById('MDS105I').textContent = data.MDS105I;
    document.getElementById('MDS105E').textContent = data.MDS105E;
    document.getElementById('MDS105TL').textContent = data.MDS105TL;
    document.getElementById('MDS105GR').textContent = data.MDS105GR;
    document.getElementById('MDS105GP').textContent = data.MDS105GP;
    document.getElementById('MDS105TGP').textContent = data.MDS105TGP;
    document.getElementById('MDS105STATUS').textContent = data.MDS105STATUS;

    // MDS108
    document.getElementById('MDS108I').textContent = data.MDS108I;
    document.getElementById('MDS108E').textContent = data.MDS108E;
    document.getElementById('MDS108TL').textContent = data.MDS108TL;
    document.getElementById('MDS108GR').textContent = data.MDS108GR;
    document.getElementById('MDS108GP').textContent = data.MDS108GP;
    document.getElementById('MDS108TGP').textContent = data.MDS108TGP;
    document.getElementById('MDS108STATUS').textContent = data.MDS108STATUS;



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
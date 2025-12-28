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

    // MCSE517A
    document.getElementById('MCSE517AI').textContent = data.MCSE517AI;
    document.getElementById('MCSE517AE').textContent = data.MCSE517AE;
    document.getElementById('MCSE517ATL').textContent = data.MCSE517ATL;
    document.getElementById('MCSE517AGR').textContent = data.MCSE517AGR;
    document.getElementById('MCSE517AGP').textContent = data.MCSE517AGP;
    document.getElementById('MCSE517ATGP').textContent = data.MCSE517ATGP;
    document.getElementById('MCSE517ASTATUS').textContent = data.MCSE517ASTATUS;

    // MCSE517B
    document.getElementById('MCSE517BI').textContent = data.MCSE517BI;
    document.getElementById('MCSE517BE').textContent = data.MCSE517BE;
    document.getElementById('MCSE517BTL').textContent = data.MCSE517BTL;
    document.getElementById('MCSE517BGR').textContent = data.MCSE517BGR;
    document.getElementById('MCSE517BGP').textContent = data.MCSE517BGP;
    document.getElementById('MCSE517BTGP').textContent = data.MCSE517BTGP;
    document.getElementById('MCSE517BSTATUS').textContent = data.MCSE517BSTATUS;

    // MCS511
    document.getElementById('MCS511I').textContent = data.MCS511I;
    document.getElementById('MCS511E').textContent = data.MCS511E;
    document.getElementById('MCS511TL').textContent = data.MCS511TL;
    document.getElementById('MCS511GR').textContent = data.MCS511GR;
    document.getElementById('MCS511GP').textContent = data.MCS511GP;
    document.getElementById('MCS511TGP').textContent = data.MCS511TGP;
    document.getElementById('MCS511STATUS').textContent = data.MCS511STATUS;

    // MCS512
    document.getElementById('MCS512I').textContent = data.MCS512I;
    document.getElementById('MCS512E').textContent = data.MCS512E;
    document.getElementById('MCS512TL').textContent = data.MCS512TL;
    document.getElementById('MCS512GR').textContent = data.MCS512GR;
    document.getElementById('MCS512GP').textContent = data.MCS512GP;
    document.getElementById('MCS512TGP').textContent = data.MCS512TGP;
    document.getElementById('MCS512STATUS').textContent = data.MCS512STATUS;

    // MCS513
    document.getElementById('MCS513I').textContent = data.MCS513I;
    document.getElementById('MCS513E').textContent = data.MCS513E;
    document.getElementById('MCS513TL').textContent = data.MCS513TL;
    document.getElementById('MCS513GR').textContent = data.MCS513GR;
    document.getElementById('MCS513GP').textContent = data.MCS513GP;
    document.getElementById('MCS513TGP').textContent = data.MCS513TGP;
    document.getElementById('MCS513STATUS').textContent = data.MCS513STATUS;

    // MCS514
    document.getElementById('MCS514I').textContent = data.MCS514I;
    document.getElementById('MCS514E').textContent = data.MCS514E;
    document.getElementById('MCS514TL').textContent = data.MCS514TL;
    document.getElementById('MCS514GR').textContent = data.MCS514GR;
    document.getElementById('MCS514GP').textContent = data.MCS514GP;
    document.getElementById('MCS514TGP').textContent = data.MCS514TGP;
    document.getElementById('MCS514STATUS').textContent = data.MCS514STATUS;

    // MCS515
    document.getElementById('MCS515I').textContent = data.MCS515I;
    document.getElementById('MCS515E').textContent = data.MCS515E;
    document.getElementById('MCS515TL').textContent = data.MCS515TL;
    document.getElementById('MCS515GR').textContent = data.MCS515GR;
    document.getElementById('MCS515GP').textContent = data.MCS515GP;
    document.getElementById('MCS515TGP').textContent = data.MCS515TGP;
    document.getElementById('MCS515STATUS').textContent = data.MCS515STATUS;

    // MCS516
    document.getElementById('MCS516I').textContent = data.MCS516I;
    document.getElementById('MCS516E').textContent = data.MCS516E;
    document.getElementById('MCS516TL').textContent = data.MCS516TL;
    document.getElementById('MCS516GR').textContent = data.MCS516GR;
    document.getElementById('MCS516GP').textContent = data.MCS516GP;
    document.getElementById('MCS516TGP').textContent = data.MCS516TGP;
    document.getElementById('MCS516STATUS').textContent = data.MCS516STATUS;



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
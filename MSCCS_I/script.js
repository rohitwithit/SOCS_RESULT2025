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

    // MCSE417A
    document.getElementById('MCSE417AI').textContent = data.MCSE417AI;
    document.getElementById('MCSE417AE').textContent = data.MCSE417AE;
    document.getElementById('MCSE417ATL').textContent = data.MCSE417ATL;
    document.getElementById('MCSE417AGR').textContent = data.MCSE417AGR;
    document.getElementById('MCSE417AGP').textContent = data.MCSE417AGP;
    document.getElementById('MCSE417ATGP').textContent = data.MCSE417ATGP;
    document.getElementById('MCSE417ASTATUS').textContent = data.MCSE417ASTATUS;

    // MCSE417B
    document.getElementById('MCSE417BI').textContent = data.MCSE417BI;
    document.getElementById('MCSE417BE').textContent = data.MCSE417BE;
    document.getElementById('MCSE417BTL').textContent = data.MCSE417BTL;
    document.getElementById('MCSE417BGR').textContent = data.MCSE417BGR;
    document.getElementById('MCSE417BGP').textContent = data.MCSE417BGP;
    document.getElementById('MCSE417BTGP').textContent = data.MCSE417BTGP;
    document.getElementById('MCSE417BSTATUS').textContent = data.MCSE417BSTATUS;

    // MCS411
    document.getElementById('MCS411I').textContent = data.MCS411I;
    document.getElementById('MCS411E').textContent = data.MCS411E;
    document.getElementById('MCS411TL').textContent = data.MCS411TL;
    document.getElementById('MCS411GR').textContent = data.MCS411GR;
    document.getElementById('MCS411GP').textContent = data.MCS411GP;
    document.getElementById('MCS411TGP').textContent = data.MCS411TGP;
    document.getElementById('MCS411STATUS').textContent = data.MCS411STATUS;

    // MCS412
    document.getElementById('MCS412I').textContent = data.MCS412I;
    document.getElementById('MCS412E').textContent = data.MCS412E;
    document.getElementById('MCS412TL').textContent = data.MCS412TL;
    document.getElementById('MCS412GR').textContent = data.MCS412GR;
    document.getElementById('MCS412GP').textContent = data.MCS412GP;
    document.getElementById('MCS412TGP').textContent = data.MCS412TGP;
    document.getElementById('MCS412STATUS').textContent = data.MCS412STATUS;

    // MCS413
    document.getElementById('MCS413I').textContent = data.MCS413I;
    document.getElementById('MCS413E').textContent = data.MCS413E;
    document.getElementById('MCS413TL').textContent = data.MCS413TL;
    document.getElementById('MCS413GR').textContent = data.MCS413GR;
    document.getElementById('MCS413GP').textContent = data.MCS413GP;
    document.getElementById('MCS413TGP').textContent = data.MCS413TGP;
    document.getElementById('MCS413STATUS').textContent = data.MCS413STATUS;

    // MCS414
    document.getElementById('MCS414I').textContent = data.MCS414I;
    document.getElementById('MCS414E').textContent = data.MCS414E;
    document.getElementById('MCS414TL').textContent = data.MCS414TL;
    document.getElementById('MCS414GR').textContent = data.MCS414GR;
    document.getElementById('MCS414GP').textContent = data.MCS414GP;
    document.getElementById('MCS414TGP').textContent = data.MCS414TGP;
    document.getElementById('MCS414STATUS').textContent = data.MCS414STATUS;

    // MCS415
    document.getElementById('MCS415I').textContent = data.MCS415I;
    document.getElementById('MCS415E').textContent = data.MCS415E;
    document.getElementById('MCS415TL').textContent = data.MCS415TL;
    document.getElementById('MCS415GR').textContent = data.MCS415GR;
    document.getElementById('MCS415GP').textContent = data.MCS415GP;
    document.getElementById('MCS415TGP').textContent = data.MCS415TGP;
    document.getElementById('MCS415STATUS').textContent = data.MCS415STATUS;

    // MCS416
    document.getElementById('MCS416I').textContent = data.MCS416I;
    document.getElementById('MCS416E').textContent = data.MCS416E;
    document.getElementById('MCS416TL').textContent = data.MCS416TL;
    document.getElementById('MCS416GR').textContent = data.MCS416GR;
    document.getElementById('MCS416GP').textContent = data.MCS416GP;
    document.getElementById('MCS416TGP').textContent = data.MCS416TGP;
    document.getElementById('MCS416STATUS').textContent = data.MCS416STATUS;



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
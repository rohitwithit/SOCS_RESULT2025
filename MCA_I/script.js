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

    // MCA411
    document.getElementById('MCA411I').textContent = data.MCA411I;
    document.getElementById('MCA411E').textContent = data.MCA411E;
    document.getElementById('MCA411TL').textContent = data.MCA411TL;
    document.getElementById('MCA411GR').textContent = data.MCA411GR;
    document.getElementById('MCA411GP').textContent = data.MCA411GP;
    document.getElementById('MCA411TGP').textContent = data.MCA411TGP;
    document.getElementById('MCA411STATUS').textContent = data.MCA411STATUS;

    // MCA412
    document.getElementById('MCA412I').textContent = data.MCA412I;
    document.getElementById('MCA412E').textContent = data.MCA412E;
    document.getElementById('MCA412TL').textContent = data.MCA412TL;
    document.getElementById('MCA412GR').textContent = data.MCA412GR;
    document.getElementById('MCA412GP').textContent = data.MCA412GP;
    document.getElementById('MCA412TGP').textContent = data.MCA412TGP;
    document.getElementById('MCA412STATUS').textContent = data.MCA412STATUS;

    // MCA413
    document.getElementById('MCA413I').textContent = data.MCA413I;
    document.getElementById('MCA413E').textContent = data.MCA413E;
    document.getElementById('MCA413TL').textContent = data.MCA413TL;
    document.getElementById('MCA413GR').textContent = data.MCA413GR;
    document.getElementById('MCA413GP').textContent = data.MCA413GP;
    document.getElementById('MCA413TGP').textContent = data.MCA413TGP;
    document.getElementById('MCA413STATUS').textContent = data.MCA413STATUS;

    // MCA414
    document.getElementById('MCA414I').textContent = data.MCA414I;
    document.getElementById('MCA414E').textContent = data.MCA414E;
    document.getElementById('MCA414TL').textContent = data.MCA414TL;
    document.getElementById('MCA414GR').textContent = data.MCA414GR;
    document.getElementById('MCA414GP').textContent = data.MCA414GP;
    document.getElementById('MCA414TGP').textContent = data.MCA414TGP;
    document.getElementById('MCA414STATUS').textContent = data.MCA414STATUS;

    // MCA415
    document.getElementById('MCA415I').textContent = data.MCA415I;
    document.getElementById('MCA415E').textContent = data.MCA415E;
    document.getElementById('MCA415TL').textContent = data.MCA415TL;
    document.getElementById('MCA415GR').textContent = data.MCA415GR;
    document.getElementById('MCA415GP').textContent = data.MCA415GP;
    document.getElementById('MCA415TGP').textContent = data.MCA415TGP;
    document.getElementById('MCA415STATUS').textContent = data.MCA415STATUS;

    // MCA416
    document.getElementById('MCA416I').textContent = data.MCA416I;
    document.getElementById('MCA416E').textContent = data.MCA416E;
    document.getElementById('MCA416TL').textContent = data.MCA416TL;
    document.getElementById('MCA416GR').textContent = data.MCA416GR;
    document.getElementById('MCA416GP').textContent = data.MCA416GP;
    document.getElementById('MCA416TGP').textContent = data.MCA416TGP;
    document.getElementById('MCA416STATUS').textContent = data.MCA416STATUS;

    // MCA417
    document.getElementById('MCA417I').textContent = data.MCA417I;
    document.getElementById('MCA417E').textContent = data.MCA417E;
    document.getElementById('MCA417TL').textContent = data.MCA417TL;
    document.getElementById('MCA417GR').textContent = data.MCA417GR;
    document.getElementById('MCA417GP').textContent = data.MCA417GP;
    document.getElementById('MCA417TGP').textContent = data.MCA417TGP;
    document.getElementById('MCA417STATUS').textContent = data.MCA417STATUS;

    // MCA420A
    document.getElementById('MCA420AI').textContent = data.MCA420AI;
    document.getElementById('MCA420AE').textContent = data.MCA420AE;
    document.getElementById('MCA420ATL').textContent = data.MCA420ATL;
    document.getElementById('MCA420AGR').textContent = data.MCA420AGR;
    document.getElementById('MCA420AGP').textContent = data.MCA420AGP;
    document.getElementById('MCA420ATGP').textContent = data.MCA420ATGP;
    document.getElementById('MCA420ASTATUS').textContent = data.MCA420ASTATUS;

    // MCA420B
    document.getElementById('MCA420BI').textContent = data.MCA420BI;
    document.getElementById('MCA420BE').textContent = data.MCA420BE;
    document.getElementById('MCA420BTL').textContent = data.MCA420BTL;
    document.getElementById('MCA420BGR').textContent = data.MCA420BGR;
    document.getElementById('MCA420BGP').textContent = data.MCA420BGP;
    document.getElementById('MCA420BTGP').textContent = data.MCA420BTGP;
    document.getElementById('MCA420BSTATUS').textContent = data.MCA420BSTATUS;

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

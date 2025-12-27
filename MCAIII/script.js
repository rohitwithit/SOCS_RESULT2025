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

    // MCA421
    document.getElementById('MCA421I').textContent = data.MCA421I;
    document.getElementById('MCA421E').textContent = data.MCA421E;
    document.getElementById('MCA421TL').textContent = data.MCA421TL;
    document.getElementById('MCA421GR').textContent = data.MCA421GR;
    document.getElementById('MCA421GP').textContent = data.MCA421GP;
    document.getElementById('MCA421TGP').textContent = data.MCA421TGP;
    document.getElementById('MCA421STATUS').textContent = data.MCA421STATUS;

    // MCA422
    document.getElementById('MCA422I').textContent = data.MCA422I;
    document.getElementById('MCA422E').textContent = data.MCA422E;
    document.getElementById('MCA422TL').textContent = data.MCA422TL;
    document.getElementById('MCA422GR').textContent = data.MCA422GR;
    document.getElementById('MCA422GP').textContent = data.MCA422GP;
    document.getElementById('MCA422TGP').textContent = data.MCA422TGP;
    document.getElementById('MCA422STATUS').textContent = data.MCA422STATUS;

    // MCA423
    document.getElementById('MCA423I').textContent = data.MCA423I;
    document.getElementById('MCA423E').textContent = data.MCA423E;
    document.getElementById('MCA423TL').textContent = data.MCA423TL;
    document.getElementById('MCA423GR').textContent = data.MCA423GR;
    document.getElementById('MCA423GP').textContent = data.MCA423GP;
    document.getElementById('MCA423TGP').textContent = data.MCA423TGP;
    document.getElementById('MCA423STATUS').textContent = data.MCA423STATUS;

    // MCA427A
    document.getElementById('MCA427AI').textContent = data.MCA427AI;
    document.getElementById('MCA427AE').textContent = data.MCA427AE;
    document.getElementById('MCA427ATL').textContent = data.MCA427ATL;
    document.getElementById('MCA427AGR').textContent = data.MCA427AGR;
    document.getElementById('MCA427AGP').textContent = data.MCA427AGP;
    document.getElementById('MCA427ATGP').textContent = data.MCA427ATGP;
    document.getElementById('MCA427ASTATUS').textContent = data.MCA427ASTATUS;

    // MCA428A
    document.getElementById('MCA428AI').textContent = data.MCA428AI;
    document.getElementById('MCA428AE').textContent = data.MCA428AE;
    document.getElementById('MCA428ATL').textContent = data.MCA428ATL;
    document.getElementById('MCA428AGR').textContent = data.MCA428AGR;
    document.getElementById('MCA428AGP').textContent = data.MCA428AGP;
    document.getElementById('MCA428ATGP').textContent = data.MCA428ATGP;
    document.getElementById('MCA428ASTATUS').textContent = data.MCA428ASTATUS;

    // MCA416
    document.getElementById('MCA416I').textContent = data.MCA416I;
    document.getElementById('MCA416E').textContent = data.MCA416E;
    document.getElementById('MCA416TL').textContent = data.MCA416TL;
    document.getElementById('MCA416GR').textContent = data.MCA416GR;
    document.getElementById('MCA416GP').textContent = data.MCA416GP;
    document.getElementById('MCA416TGP').textContent = data.MCA416TGP;
    document.getElementById('MCA416STATUS').textContent = data.MCA416STATUS;

    // MCA424
    document.getElementById('MCA424I').textContent = data.MCA424I;
    document.getElementById('MCA424E').textContent = data.MCA424E;
    document.getElementById('MCA424TL').textContent = data.MCA424TL;
    document.getElementById('MCA424GR').textContent = data.MCA424GR;
    document.getElementById('MCA424GP').textContent = data.MCA424GP;
    document.getElementById('MCA424TGP').textContent = data.MCA424TGP;
    document.getElementById('MCA424STATUS').textContent = data.MCA424STATUS;

    // MCA425
    document.getElementById('MCA425I').textContent = data.MCA425I;
    document.getElementById('MCA425E').textContent = data.MCA425E;
    document.getElementById('MCA425TL').textContent = data.MCA425TL;
    document.getElementById('MCA425GR').textContent = data.MCA425GR;
    document.getElementById('MCA425GP').textContent = data.MCA425GP;
    document.getElementById('MCA425TGP').textContent = data.MCA425TGP;
    document.getElementById('MCA425STATUS').textContent = data.MCA425STATUS;

    // MCA427B
    document.getElementById('MCA427BI').textContent = data.MCA427BI;
    document.getElementById('MCA427BE').textContent = data.MCA427BE;
    document.getElementById('MCA427BTL').textContent = data.MCA427BTL;
    document.getElementById('MCA427BGR').textContent = data.MCA427BGR;
    document.getElementById('MCA427BGP').textContent = data.MCA427BGP;
    document.getElementById('MCA427BTGP').textContent = data.MCA427BTGP;
    document.getElementById('MCA427BSTATUS').textContent = data.MCA427BSTATUS;

    // MCA428B
    document.getElementById('MCA428BI').textContent = data.MCA428BI;
    document.getElementById('MCA428BE').textContent = data.MCA428BE;
    document.getElementById('MCA428BTL').textContent = data.MCA428BTL;
    document.getElementById('MCA428BGR').textContent = data.MCA428BGR;
    document.getElementById('MCA428BGP').textContent = data.MCA428BGP;
    document.getElementById('MCA428BTGP').textContent = data.MCA428BTGP;
    document.getElementById('MCA428BSTATUS').textContent = data.MCA428BSTATUS;


    // Total/CGPA
    document.getElementById('TOTAL').textContent = data.TOTAL;
    document.getElementById('PERCENTAGE').textContent = data.PERCENTAGE;
    document.getElementById('CGPA').textContent = data.CGPA;


    const subjectCode = document.getElementById('subjectCodeElective');
    const subjectName = document.getElementById('subjectNameElective');

    const subjectCode1 = document.getElementById('subjectCodeElective1');
    const subjectName1 = document.getElementById('subjectNameElective1');

    const specificSeatNumbers = [
        380785,
        380788,
        380793,
        380798,
        380810,
        380821,
        380823,
        380825,
        380826,
        380832,
        380836,
        380843
    ];

    // Check if current student's seat is in the special list
    if (specificSeatNumbers.includes(Number(data.SEAT_NO))) {
        subjectCode.textContent = '1222420061';
        subjectName.textContent = 'MCA-426(A) Digital Image Processing(DIP)';
    } else {
        subjectCode.textContent = '1222420063';
        subjectName.textContent = 'MCA-427(A) Python Programming';
    }

    if (specificSeatNumbers.includes(Number(data.SEAT_NO))) {
        subjectCode1.textContent = '1222420062';
        subjectName1.textContent = 'MCA-426(B) Lab on DIP';
    } else {
        subjectCode1.textContent = '1222420064';
        subjectName1.textContent = 'MCA-427(B) Lab on Python Programming';
    }

    document.getElementById('PHOTO').src = data.PHOTO;
}

function logout() {
    localStorage.removeItem('userSEAT_NO'); // Corrected key
    window.location.href = 'index1.html';
}
document.addEventListener('DOMContentLoaded', fetchResults);

// function downloadPDF() {
//     // Get button container and store original display style
//     const buttonContainer = document.querySelector('#btn11').parentNode;
//     const originalDisplay = window.getComputedStyle(buttonContainer).display;

//     // Hide buttons temporarily
//     buttonContainer.style.display = 'none';

//     // Initialize jsPDF
//     const { jsPDF } = window.jspdf;
//     const doc = new jsPDF('p', 'mm', 'a4');

//     // Get the HTML element to convert
//     const element = document.querySelector('.container');

//     // html2canvas options
//     const options = {
//         scale: 2,
//         useCORS: true,
//         logging: true,
//         scrollX: 0,
//         scrollY: 0,
//         windowWidth: element.scrollWidth,
//         windowHeight: element.scrollHeight
//     };

//     // Generate PDF
//     html2canvas(element, options).then((canvas) => {
//         const imgData = canvas.toDataURL('image/png');
//         const imgWidth = doc.internal.pageSize.getWidth() - 20;
//         const imgHeight = (canvas.height * imgWidth) / canvas.width;

//         doc.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
//         const seatNo = document.getElementById('SEAT_NO').textContent.trim();
//         const name = document.getElementById('NAME').textContent.trim();
//         doc.save(`${seatNo}_${name}_Result.pdf`);

//     }).finally(() => {
//         // Restore buttons visibility
//         buttonContainer.style.display = originalDisplay;
//     });


//     alert("wait 10 seconds for Downloading PDF..");
// }












    // async function downloadPDF() {
    //     const { jsPDF } = window.jspdf;

    //     const doc = new jsPDF({
    //         orientation: 'portrait',
    //         unit: 'mm',
    //         format: 'a4'
    //     });

    //     const seatNo = document.getElementById('SEAT_NO').textContent.trim();
    //     const name = document.getElementById('NAME').textContent.trim();
    //     const motherName = document.getElementById('MOTHER_NAME').textContent.trim();
    //     const prn = document.getElementById('PRN').textContent.trim();
    //     const cgpa = document.getElementById('CGPA').textContent.trim();
    //     const percentage = document.getElementById('PERCENTAGE').textContent.trim();
    //     const total = document.getElementById('TOTAL').textContent.trim();

    //     let y = 10;

    //     doc.setFontSize(12);
    //     doc.text("Kavayitri Bahinabai Chaudhari North Maharashtra University, Jalgaon", 10, y);
    //     y += 7;
    //     doc.text("School of Computer Sciences", 10, y);
    //     y += 7;
    //     doc.setFontSize(14);
    //     doc.text("MCA Semester-II Examination Apr/May - 2025", 10, y);
    //     y += 10;

    //     doc.setFontSize(12);
    //     doc.text(`Seat No: ${seatNo}`, 10, y);
    //     doc.text(`PRN: ${prn}`, 100, y);
    //     y += 7;
    //     doc.text(`Name: ${name} (${motherName})`, 10, y);
    //     y += 7;
    //     doc.text("College: School of Computer Sciences, Jalgaon (10000G)", 10, y);
    //     y += 10;

    //     // Create table headers and rows
    //     const headers = [
    //         ["Code", "Subject", "INT", "EXT", "Total", "Out Of", "Credits", "Grade", "GP", "TGP", "Status"]
    //     ];

    //     const rows = [];
    //     const tableRows = document.querySelectorAll("#resultDetails table tr");

    //     for (let i = 1; i < tableRows.length - 2; i++) {
    //         const cells = tableRows[i].querySelectorAll("td");
    //         if (cells.length === 11) {
    //             rows.push(Array.from(cells).map(cell => cell.textContent.trim()));
    //         }
    //     }

    //     // Add table
    //     doc.autoTable({
    //         startY: y,
    //         head: headers,
    //         body: rows,
    //         styles: { fontSize: 9, cellPadding: 2 },
    //         theme: 'grid',
    //         margin: { left: 10, right: 10 }
    //     });

    //     y = doc.lastAutoTable.finalY + 10;
    //     doc.setFontSize(12);
    //     doc.text(`CGPA: ${cgpa}`, 10, y);
    //     doc.text(`Percentage: ${percentage}`, 80, y);
    //     doc.text(`Total: ${total} / 650`, 150, y);

    //     y += 10;
    //     doc.text("Date: 15/05/2025", 10, y);

    //     doc.save(`${seatNo}_${name}_Result.pdf`);
    // }




  
    async function downloadPDF() {
        const { jsPDF } = window.jspdf;

        const doc = new jsPDF('p', 'mm', 'a4');
        const lineHeight = 7;
        let y = 20;

        // Get student data
        const seatNo = document.getElementById('SEAT_NO').textContent.trim();
        const prn = document.getElementById('PRN').textContent.trim();
        const name = document.getElementById('NAME').textContent.trim();
        const motherName = document.getElementById('MOTHER_NAME').textContent.trim();
        const cgpa = document.getElementById('CGPA').textContent.trim();
        const percentage = document.getElementById('PERCENTAGE').textContent.trim();
        const total = document.getElementById('TOTAL').textContent.trim();

        // Header
        doc.setFontSize(14);
        doc.setFont("Times", "bold");
        doc.text("Kavayitri Bahinabai Chaudhari North Maharashtra University, Jalgaon", 105, y, { align: "center" });
        y += lineHeight;
        doc.text("School of Computer Sciences", 105, y, { align: "center" });
        y += lineHeight;
        doc.setFontSize(12);
        doc.text("MCA Semester-II Examination Apr/May - 2025", 105, y, { align: "center" });
        y += lineHeight * 2;

        // Student Info
        doc.setFont("Times", "normal");
        doc.text(`Seat No: ${seatNo}    PRN: ${prn}`, 14, y);
        y += lineHeight;
        doc.text(`Name: ${name} (${motherName})`, 14, y);
        y += lineHeight;
        doc.text(`College: School of Computer Sciences, Jalgaon (10000G)`, 14, y);
        y += lineHeight;

        // Table headers
        const headers = [["Code", "Subject", "INT", "EXT", "Total", "Out Of", "Credits", "Grade", "GP", "TGP", "Status"]];

        // Collect rows from HTML table
        const rows = [];
        const tableRows = document.querySelectorAll("#resultDetails table tr");
        for (let i = 1; i < tableRows.length - 2; i++) {
            const cells = tableRows[i].querySelectorAll("td");
            if (cells.length === 11) {
                rows.push(Array.from(cells).map(cell => cell.textContent.trim()));
            }
        }

        // Add autoTable
        doc.autoTable({
            head: headers,
            body: rows,
            startY: y,
            theme: 'grid',
            styles: { font: "Times", fontSize: 9, halign: 'center' },
            headStyles: { fillColor: [211, 211, 211], textColor: 0, fontStyle: 'bold' },
            margin: { left: 10, right: 10 },
        });

        // After table
        y = doc.lastAutoTable.finalY + 10;
        doc.setFontSize(11);
        doc.text(`CGPA: ${cgpa}`, 14, y);
        doc.text(`Percentage: ${percentage}`, 80, y);
        doc.text(`Total: ${total} / 650`, 150, y);
        y += lineHeight;
        doc.text("Date: 15/05/2025", 14, y);

        // Save
        doc.save(`${seatNo}_${name}_Result.pdf`);
    }


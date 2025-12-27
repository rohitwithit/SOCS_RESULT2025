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
    document.getElementById('PHOTO').src = data.PHOTO;

    // MCA511
    document.getElementById('MCA511I').textContent = data.MCA511I;
    document.getElementById('MCA511E').textContent = data.MCA511E;
    document.getElementById('MCA511TL').textContent = data.MCA511TL;
    document.getElementById('MCA511GR').textContent = data.MCA511GR;
    document.getElementById('MCA511GP').textContent = data.MCA511GP;
    document.getElementById('MCA511TGP').textContent = data.MCA511TGP;
    document.getElementById('MCA511STATUS').textContent = data.MCA511STATUS;

    // MCA512
    document.getElementById('MCA512I').textContent = data.MCA512I;
    document.getElementById('MCA512E').textContent = data.MCA512E;
    document.getElementById('MCA512TL').textContent = data.MCA512TL;
    document.getElementById('MCA512GR').textContent = data.MCA512GR;
    document.getElementById('MCA512GP').textContent = data.MCA512GP;
    document.getElementById('MCA512TGP').textContent = data.MCA512TGP;
    document.getElementById('MCA512STATUS').textContent = data.MCA512STATUS;

    // MCA513
    document.getElementById('MCA513I').textContent = data.MCA513I;
    document.getElementById('MCA513E').textContent = data.MCA513E;
    document.getElementById('MCA513TL').textContent = data.MCA513TL;
    document.getElementById('MCA513GR').textContent = data.MCA513GR;
    document.getElementById('MCA513GP').textContent = data.MCA513GP;
    document.getElementById('MCA513TGP').textContent = data.MCA513TGP;
    document.getElementById('MCA513STATUS').textContent = data.MCA513STATUS;

    // MCA516A
    document.getElementById('MCA516AI').textContent = data.MCA516AI;
    document.getElementById('MCA516AE').textContent = data.MCA516AE;
    document.getElementById('MCA516ATL').textContent = data.MCA516ATL;
    document.getElementById('MCA516AGR').textContent = data.MCA516AGR;
    document.getElementById('MCA516AGP').textContent = data.MCA516AGP;
    document.getElementById('MCA516ATGP').textContent = data.MCA516ATGP;
    document.getElementById('MCA516ASTATUS').textContent = data.MCA516ASTATUS;

    // MCA516B
    document.getElementById('MCA516BI').textContent = data.MCA516BI;
    document.getElementById('MCA516BE').textContent = data.MCA516BE;
    document.getElementById('MCA516BTL').textContent = data.MCA516BTL;
    document.getElementById('MCA516BGR').textContent = data.MCA516BGR;
    document.getElementById('MCA516BGP').textContent = data.MCA516BGP;
    document.getElementById('MCA516BTGP').textContent = data.MCA516BTGP;
    document.getElementById('MCA516BSTATUS').textContent = data.MCA516BSTATUS;

    // MCA518A
    document.getElementById('MCA518AI').textContent = data.MCA518AI;
    document.getElementById('MCA518AE').textContent = data.MCA518AE;
    document.getElementById('MCA518ATL').textContent = data.MCA518ATL;
    document.getElementById('MCA518AGR').textContent = data.MCA518AGR;
    document.getElementById('MCA518AGP').textContent = data.MCA518AGP;
    document.getElementById('MCA518ATGP').textContent = data.MCA518ATGP;
    document.getElementById('MCA518ASTATUS').textContent = data.MCA518ASTATUS;

    // MCA518B
    document.getElementById('MCA518BI').textContent = data.MCA518BI;
    document.getElementById('MCA518BE').textContent = data.MCA518BE;
    document.getElementById('MCA518BTL').textContent = data.MCA518BTL;
    document.getElementById('MCA518BGR').textContent = data.MCA518BGR;
    document.getElementById('MCA518BGP').textContent = data.MCA518BGP;
    document.getElementById('MCA518BTGP').textContent = data.MCA518BTGP;
    document.getElementById('MCA518BSTATUS').textContent = data.MCA518BSTATUS;

    // MCA520
    document.getElementById('MCA520I').textContent = data.MCA520I;
    document.getElementById('MCA520E').textContent = data.MCA520E;
    document.getElementById('MCA520TL').textContent = data.MCA520TL;
    document.getElementById('MCA520GR').textContent = data.MCA520GR;
    document.getElementById('MCA520GP').textContent = data.MCA520GP;
    document.getElementById('MCA520TGP').textContent = data.MCA520TGP;
    document.getElementById('MCA520STATUS').textContent = data.MCA520STATUS;


    // Total/CGPA
    document.getElementById('TOTAL').textContent = data.TOTAL;
    document.getElementById('PERCENTAGE').textContent = data.PERCENTAGE;
    document.getElementById('CGPA').textContent = data.CGPA;


    const subjectCode = document.getElementById('subjectCodeElective');
    const subjectName = document.getElementById('subjectNameElective');

    const subjectCode1 = document.getElementById('subjectCodeElective1');
    const subjectName1 = document.getElementById('subjectNameElective1');

    const NLP = [
        743081, 743082, 743086, 743088, 743089, 743092, 743093, 743096,
        743104, 743107, 743109, 743111, 743116, 743124, 743130, 743135
    ];

    const AIP = [
        743079, 743080, 743083, 743084, 743085, 743090, 743091, 743094,
        743097, 743098, 743100, 743101, 743113, 743114, 743115, 743118,
        743121, 743126, 743128, 743129, 743131, 743133
    ];

    // Check if current student's seat is in the special list
    if (NLP.includes(Number(data.SEAT_NO))) {
        subjectCode.textContent = '1222430041';
        subjectName.textContent = 'MCA-514(A) Natural Language Processing';
    } else if (AIP.includes(Number(data.SEAT_NO))) {
        subjectCode.textContent = '1222430043';
        subjectName.textContent = 'MCA-515(A) AI in Practice with Python';
    }
    else {
        subjectCode.textContent = '1222430045';
        subjectName.textContent = 'MCA-516(A) High Performance Computing Paradigms and Applications';
    }

    if (NLP.includes(Number(data.SEAT_NO))) {
        subjectCode1.textContent = '1222430042';
        subjectName1.textContent = 'MCA-514(B) Lab on Natural Language Processing';
    } else if (AIP.includes(Number(data.SEAT_NO))) {
        subjectCode1.textContent = '1222430044';
        subjectName1.textContent = 'MCA-515(B) Lab on AI in Practice with Python';
    } else {
        subjectCode1.textContent = '1222420064';
        subjectName1.textContent = 'MCA-516(B) Lab on High Performanc Computing';
    }


}

function logout() {
    localStorage.removeItem('userSEAT_NO'); // Corrected key
    window.location.href = 'index1.html';
}
document.addEventListener('DOMContentLoaded', fetchResults);



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


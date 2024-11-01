// สมมติว่ามีฟังก์ชัน generateQueueNumber() สำหรับสร้างหมายเลขคิว
let currentQueue = generateQueueNumber();

// แสดงหมายเลขคิวและช่องบริการเริ่มต้น
document.getElementById('queue-number').textContent = currentQueue;
document.getElementById('channel-number').textContent = 1; // เปลี่ยนช่องบริการตามต้องการ

// ปุ่มรีเซ็ตคิว
document.getElementById('reset-button').addEventListener('click', () => {
    currentQueue = generateQueueNumber();
    document.getElementById('queue-number').textContent = currentQueue;
});

// ปุ่มเรียกคิวซ้ำ
document.getElementById('recall-button').addEventListener('click', () => {
    alert(`เรียกคิวที่ ${currentQueue} อีกครั้ง`);
});

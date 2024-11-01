// สมมติว่ามีฟังก์ชัน generateQueueNumber() สำหรับสร้างหมายเลขคิว
let currentQueue = generateQueueNumber();
let currentChannel = 1; // เริ่มต้นที่ช่อง 1

// แสดงหมายเลขคิวและช่องบริการเริ่มต้น
document.getElementById('queue-number').textContent = currentQueue;
document.getElementById('channel-number').textContent = currentChannel;

// ปุ่มรีเซ็ตคิว
document.getElementById('reset-button').addEventListener('click', () => {
    currentQueue = generateQueueNumber();
    currentChannel = 1; // รีเซ็ตช่องบริการกลับไปที่ 1
    document.getElementById('queue-number').textContent = currentQueue;
    document.getElementById('channel-number').textContent = currentChannel;
});

// ปุ่มเรียกคิวซ้ำ
document.getElementById('recall-button').addEventListener('click', () => {
    alert(`เรียกคิวที่ ${currentQueue} อีกครั้ง ที่ช่อง ${currentChannel}`);

    // สลับช่องบริการ (ตัวอย่างการสลับแบบง่าย)
    currentChannel = (currentChannel % 3) + 1; // สลับไปยังช่องถัดไป
    document.getElementById('channel-number').textContent = currentChannel;
});

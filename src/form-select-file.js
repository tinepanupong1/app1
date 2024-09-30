import React from 'react';

export default function FormSelectFile() {
  const inputFile = React.useRef();
  const selectMaxNumFiles = React.useRef();
  const selectMaxSizeFiles = React.useRef();

  let maxNumfiles = [1, 2, 3, 4, 5];
  let maxSize = [50, 100, 200, 500, 1000]; // ขนาดเป็น KB

  const onClickButton = () => {
    let maxNumfiles = selectMaxNumFiles.current.value;
    let maxSize = selectMaxSizeFiles.current.value;

    // ตรวจสอบจำนวนไฟล์ที่เลือก
    if (inputFile.current.files.length > maxNumfiles) {
      alert(`เลือกได้ไม่เกิน ${maxNumfiles} ไฟล์`);
      return;
    }

    // ตรวจสอบขนาดไฟล์
    for (let f of inputFile.current.files) {
      if (f.size > maxSize * 1000) { // เปลี่ยน KB เป็น Byte
        alert(`ขนาดของแต่ละไฟล์ต้องไม่เกิน ${maxSize} KB`);
        return;
      }
    }

    alert('Files OK');
  };

  return (
    <div className="mt-4 mx-auto p-3 rounded" style={{ width: '400px', background: '#cee' }}>
      <form>
        <div className="form-group mb-3">
          <label htmlFor="maxNumFiles" className="form-label">จำนวนไฟล์สูงสุด</label>
          <select id="maxNumFiles" className="form-select form-select-sm" ref={selectMaxNumFiles}>
            {maxNumfiles.map(i => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="maxFileSize" className="form-label">ขนาดไฟล์สูงสุด (KB)</label>
          <select id="maxFileSize" className="form-select form-select-sm" ref={selectMaxSizeFiles}>
            {maxSize.map(i => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="file" className="form-label">เลือกไฟล์</label>
          <input type="file" id="file" accept="image/*" className="form-control form-control-sm" ref={inputFile} multiple />
        </div>

        <div className="text-center mt-4">
          <button type="button" className="btn btn-sm btn-primary px-4" onClick={onClickButton}>OK</button>
        </div>
      </form>
    </div>
  );
}

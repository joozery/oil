import React from "react";
import "./App.css";

const WaterRateUI = () => {
  return (
    <div className="water-rate-form">
  <header className="header">
    <h1>คิดค่าน้ำอัตราค่าบริการใหม่</h1>
  </header>
  <div className="form-content">
    <div className="form-row">
      <div className="form-group">
        <label>ขนาดมาตร</label>
        <select>
          <option>-- เลือกขนาด --</option>
        </select>
      </div>
      <div className="form-group">
        <label>หน่วยน้ำ</label>
        <input type="text" disabled />
      </div>
      <div className="form-group">
        <label>ค่าบริการ</label>
        <input type="text" disabled />
      </div>
    </div>

    <div className="grid-container">
      <div className="grid-item">
        <h3>ค่าน้ำ</h3>
        <div className="grid-group">
          <label>ในเขต</label>
          <input type="text" />
          <span>บาท</span>
        </div>
        <div className="grid-group">
          <label>นอกเขต</label>
          <input type="text" />
          <span>บาท</span>
        </div>
        <div className="grid-group">
          <label>ข้อตกลงพิเศษ</label>
          <input type="text" />
          <span>บาท</span>
        </div>
      </div>
      <div className="grid-item">
        <h3>ภาษี</h3>
        <div className="grid-group">
          <label>ในเขต</label>
          <input type="text" />
          <span>บาท</span>
        </div>
        <div className="grid-group">
          <label>นอกเขต</label>
          <input type="text" />
          <span>บาท</span>
        </div>
        <div className="grid-group">
          <label>ข้อตกลงพิเศษ</label>
          <input type="text" />
          <span>บาท</span>
        </div>
      </div>
      <div className="grid-item">
        <h3>รวมทั้งสิ้น</h3>
        <div className="grid-group">
          <label>ในเขต</label>
          <input type="text" disabled />
          <span>บาท</span>
        </div>
        <div className="grid-group">
          <label>นอกเขต</label>
          <input type="text" disabled />
          <span>บาท</span>
        </div>
        <div className="grid-group">
          <label>ข้อตกลงพิเศษ</label>
          <input type="text" disabled />
          <span>บาท</span>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default WaterRateUI;
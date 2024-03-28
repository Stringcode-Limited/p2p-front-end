import { useState } from 'react';
import './ToggleSlider.css';

const ToggleSlider = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className={`toggle-slider ${isChecked ? 'checked' : ''}`}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        className="slider-input"
      />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleSlider;

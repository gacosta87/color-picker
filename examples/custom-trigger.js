import 'rc-color-picker-corbin/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import ColorPicker from 'rc-color-picker-corbin';

function changeHandler(colors) {
  console.log(colors);
}

ReactDOM.render(
  <div style={{ textAlign: 'center' }}>
    <ColorPicker
      color={'#36c'}
      onChange={changeHandler}
    >
      <span className="react-custom-trigger">choose color</span>
    </ColorPicker>
  </div>,
  document.getElementById('__react-content')
);

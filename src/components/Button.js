import React, { useState } from 'react';

const Button = ({name}) => {
    const [btn, setBtn] = useState("active");
    return (
        <button
              className={`${
                btn
                  ?  "buttonFlip":"button"
      }`}
              onClick={() => {
                setBtn(!btn);
                setTimeout(() => {
                  setBtn(btn);
                }, 400);
              }}
            >
              {name}
            </button>
    );
};

export default Button;
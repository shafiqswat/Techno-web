/** @format */

import React from "react";
import { Button } from "react-bootstrap";

function Btn({ text, style }) {
  return (
    <div>
      <Button className={style}>{text}</Button>
    </div>
  );
}

export default Btn;

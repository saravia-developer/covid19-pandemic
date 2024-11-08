import React from 'react';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

function Icons({ icons }) {

  switch (icons) {

    case "arrow-left":
      return <FaLongArrowAltLeft/>;
        
    case "arrow-right":
      return <FaLongArrowAltRight/>;
  }
}

export default Icons
import { useState } from "react";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";

export function MyDatePicker(mode) {
  //Component State  
  const [selected, setSelected] = useState();


  return <DayPicker mode={mode} selected={selected} onSelect={setSelected} />;
}
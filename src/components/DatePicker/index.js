import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Textfield from 'components/Textfield';
import './styles.css';

export default ({value, onChange, onBlur }) => {
    // const [startDate, setStartDate] = useState(new Date());
    // const CustomInput = ({ value, onClick }) => (
    //   <Textfield value={value>
    // );
    return (
      <DatePicker
        selected={value}
        onChange={date => onChange(date.getTime())}
        customInput={<Textfield />}
        minDate={new Date()}
        dateFormat="dd MMMM yyyy"
      />
    );
}
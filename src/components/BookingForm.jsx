import { useState } from "react";

function BookingForm() {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const [formData, setFormData] = useState({
    date: getTodayDate(),
    time: "17:00",
    guests: "1",
    occasion: "Birthday"
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.guests || isNaN(formData.guests) || formData.guests < 1 || formData.guests > 10) {
      newErrors.guests = "Must be between 1 and 10";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };
  return (
    <div className="bookingFormContainer">
      <form
        className="bookingFormGrid"
        onSubmit={handleSubmit}
        aria-labelledby="form-title"
      >

        <label htmlFor="date">Choose date</label>
        <input
          type="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
          aria-required="true"
        />
        {errors.date && <span style={{ color: "red" }} role="alert">{errors.date}</span>}

        <label htmlFor="time">Choose time</label>
        <select id="time" value={formData.time} onChange={handleChange} aria-required="true">
          {availableTimes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          min={0}
          value={formData.guests}
          onChange={handleChange}
          placeholder="1 - 10"
          aria-required="true"
          aria-describedby="guests-error"
        />
        {errors.guests && <span id="guests-error" style={{ color: "red" }} role="alert">{errors.guests}</span>}

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={formData.occasion} onChange={handleChange} aria-required="true">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        {/* <input className="button" type="submit" value="Make Your Reservation" aria-label="Submit reservation form" /> */}
        <button className="button" type="submit" >Make Your Reservation</button>
      </form>
    </div >
  );
}

export default BookingForm;

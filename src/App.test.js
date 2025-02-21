import { render, screen, fireEvent} from '@testing-library/react';
import BookingForm from "./components/BookingForm";

describe("BookingForm", () => {
  test("renders the form with initial values", () => {
    render(<BookingForm />);

    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toHaveValue("17:00");
    expect(screen.getByLabelText(/number of guests/i)).toHaveValue(1);
    expect(screen.getByLabelText(/occasion/i)).toHaveValue("Birthday");
  });

  test("shows an error when submitting with invalid guests number", () => {
    render(<BookingForm />);

    const guestsInput = screen.getByLabelText(/number of guests/i);
    fireEvent.change(guestsInput, { target: { value: "15" } });

    fireEvent.click(screen.getByRole("button", { name: /make your reservation/i }));

    expect(screen.getByRole("alert")).toHaveTextContent("Must be between 1 and 10");
  });

  test("shows an error when date is empty", () => {
    render(<BookingForm />);

    const dateInput = screen.getByLabelText(/choose date/i);
    fireEvent.change(dateInput, { target: { value: "" } });

    fireEvent.click(screen.getByRole("button", { name: /make your reservation/i }));

    expect(screen.getByRole("alert")).toHaveTextContent("Date is required");
  });

  test("submits form with valid data", () => {
    console.log = jest.fn(); // Mock console.log
    render(<BookingForm />);

    const guestsInput = screen.getByLabelText(/number of guests/i);
    fireEvent.change(guestsInput, { target: { value: "3" } });

    fireEvent.click(screen.getByRole("button", { name: /make your reservation/i }));

    expect(console.log).toHaveBeenCalledWith("Form submitted:", {
      date: expect.any(String),
      time: "17:00",
      guests: "3",
      occasion: "Birthday",
    });
  });

  test("updates form fields correctly", () => {
    render(<BookingForm />);

    const timeSelect = screen.getByLabelText(/choose time/i);
    fireEvent.change(timeSelect, { target: { value: "19:00" } });
    expect(timeSelect).toHaveValue("19:00");

    const occasionSelect = screen.getByLabelText(/occasion/i);
    fireEvent.change(occasionSelect, { target: { value: "Anniversary" } });
    expect(occasionSelect).toHaveValue("Anniversary");
  });
});

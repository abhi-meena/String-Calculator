import StringCalculator from "../models/StringCalculator.js";

export const addNumbers = (req, res) => {
    const { numbers } = req.body;
  
    try {
      const calculator = new StringCalculator();
      const result = calculator.add(numbers);
      res.status(200).json({ result });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
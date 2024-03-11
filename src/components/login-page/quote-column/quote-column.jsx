import { useState, useEffect } from "react";
import classes from "./quote-column.module.css";

export function QuotesColumn() {
  const [quotes, setQuotes] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch((error) => console.error("Error", error));

    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter % 15) + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const quote = quotes[counter];

  if (quote == undefined) return null;

  return <h1 className={classes.quotes}>&ldquo;{quote.text}&rdquo;</h1>;
}

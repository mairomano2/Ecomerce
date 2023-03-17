import { useState, useEffect } from "react";

export const Test = () => {
  const [test, setTest] = useState("initial");

  useEffect(() => {
    try {
      const request = fetch("/api")
        
      request
        .then((response) => {
          return response.json()
        })
        .then( data => (setTest(data.message)))
    } catch (error) {
      console.log("error =>", error);
    }
  }, []);

  return <h1>{test}</h1>;
};

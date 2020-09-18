// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { callRPC } from "../rpc";

export function RPCTest() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [result, setResult] = useState<number | null>(null);

  const num = 4;

  useEffect(() => {
    setIsLoading(true);
    callRPC("square", num)
      .then(setResult)
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Calculating the square of {num}...</div>;
  }

  if (error) {
    return <div>Failed to calculate the square of {num}</div>;
  }

  if (result != null) {
    return (
      <div>
        The square of {num} is {result}!
      </div>
    );
  }

  return null;
}

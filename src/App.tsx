import * as React from "react";
import { ThemeProvider } from "@fluentui/react";
import "./styles.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1 className="header">Quick Sort Algorithm</h1>
        <div className="content">
          <h4>Swap:</h4>
          <p>1. Given an array and two indexs, swap there values.</p>
          <h4>Partition:</h4>
          <p>
            1. Find a pivot data element at the index of
            (Math.floor((leftmostIndex + rightMostIndex)/2))
          </p>
          <p>2. While the left index is greater or equal to the right index.</p>
          <p>
            3. While the data element at the leftMost index is greater than the
            pivot, increment the leftmost index.
          </p>
          <p>
            4. While the data element at the rightmost index is lessThen the
            pivot, increment the rightMost index.
          </p>
          <p>
            5. Double check if the left index is greater or equal to the right
            index.
          </p>
          <p>
            6. Swap the left and right data element and increment left and
            decrement right.
          </p>
          <p>7. Return left.</p>
          <h4>Recursive Quick Sort Method:</h4>
          <p>1. Initialize an index set to the result partition.</p>
          <p>
            2. If the leftMost index is greater than index-1, recall the method
            and pass left and index-1.
          </p>
          <p>
            3. If the rightMost index is less than index, recall the method and
            pass index and right.
          </p>
          <p>4. Return data.</p>
          <img
            className="image"
            alt="Diagram"
            src="https://i2.wp.com/www.techiedelight.com/wp-content/uploads/Quicksort.png?w=1100http://"
          />
          <h4>Time Complexity: Best O(log N) | Worst O(log N^2)</h4>
          <h4>Auxiliary Space: O(N)</h4>
        </div>
      </div>
    </ThemeProvider>
  );
}

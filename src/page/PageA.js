import React, { Component, useEffect, useState, Suspense } from "react";
import "./PageA.css";
import { useHistory, generatePath, Prompt } from "react-router-dom";

let a = null;
export default function PageA() {
  const [count, setCount] = useState(0);
  let [isBlocking, setIsBlocking] = useState(false);

  const history = useHistory();

  useEffect(() => {
    ab();
  }, [count]);

  useEffect(() => {
    console.log("history: ", history);
  }, []);

  const ab = () => {
    a = setTimeout(() => {
      const newCount = count + 1;
      setCount(newCount);
    }, 1000);
  };

  console.log("isBlocking: ", isBlocking);
  return (
    <div>
      <span id="pageASpan">{count}</span>
      <div>
        <button
          onClick={() => {
            // 1 普通使用
            clearTimeout(a);
            history.push("/pageB", { aa: "aa", bb: "bb" });
            // 2 generatePath 用法
            // const a = generatePath('/pageB/:id', {
            //   id: 11,
            // });
            // console.log('a: ', a);
            // history.push(a);
            // promote
            // const a = new Prompt('bbb', true);
            // console.log('a: ', a);
            // 3
            // setIsBlocking(true);
          }}
        >
          Jump to 555555
        </button>
        <div class="A">
          <button theme={"dark"}>ddd</button>
        </div>
        <Prompt
          message={(location) =>
            `Are you sure you want to go to ${location.pathname}`
          }
          when={isBlocking}
        />
      </div>
    </div>
  );
}

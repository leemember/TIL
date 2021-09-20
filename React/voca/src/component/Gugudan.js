import React, { useRef, useState } from "react";

//꼭 구구단 컴포넌트 안에 넣어주어야 한다.
export default function Gugudan() {
  const [first, setFirst] = useState(Math.ceil(Math.random()));
  const [second, setSecond] = useState(Math.ceil(Math.random()));
  const [value, setValue] = useState();
  const [result, setResult] = useState();
  const inputRef = useRef;
  // ⭐️ useRef는 ref를 설정하면 useRef를 통해 만든 객체 안의 current 값이 실제 엘리먼트를 가르킨다.
  // ⭐️ 해당 적용된 dom을 가르킨다고 보면된다.

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(this.state.value) === this.state.first * this.state.second) {
      setResult("정답 :" + value);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      inputRef.current.focus();
    } else {
      setResult("땡");
      setValue("");
      // ⭐️ DOM 에 접근하기 위해서는 useRef를 사용할 때 current를 사용해야한다.
      inputRef.current.focus();
    }
  };

  return (
    <>
      <h1> hello, hooks</h1>
      <h2>
        {first} 곱하기 {second} 는?
      </h2>

      <form onSubmit={onSubmit}>
        <input value={value} ref={useRef} onChange={onChangeInput} />
      </form>
      <div id="result">{result}</div>
    </>
  );
}

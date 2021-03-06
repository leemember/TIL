# React JS

> 유투브 '코딩앙마' 님의 강의 참고

## 이벤트 처리 방법

### 첫 번째, 두 번째 방법

```
export default function Hello() {
  ⭐️ 첫 번째 방법입니다.
  function showName() {
    console.log("Mike");
  }
  return (
    <>
      <h1>Hello</h1>
      <button onClick={showName}>Show name</button>

      ⭐️ 두 번째 방법입니다. (직접 넣어주기)
      <button
        onClick={() => {
          console.log(30);
        }}
      >
        Show age
      </button>
    </>
  );
}
```

## 세 번째 방법

```
export default function Hello() {
  function showAge(age) {
    console.log(age);
  }
  return (
    <>
      <h1>Hello</h1>

      <button
        onClick={() => {
          showAge(50);
        }}
      >
        Show age
      </button>
    </>
  );
}
```

이렇게 매개변수 안에다가 `(50)`을 적으면

```
  function showAge(age) {
    console.log(age);
  }
```

이 함수로 인해 50이 찍혀 나온다.

## onChange

#### 첫 번째 방법

```
  function showText(e) {
    console.log(e.target.value);
  }

(...)

  return(
    <>
     <input type="text" onChange={showText} />
    </>
  )
```

이벤트 약자의 e (=event) 객체를 받고, e.target.value를 찍어준다.
그러면 input에 값이 바뀔 때마다 그대로 콘솔창에 찍혀나온다.

#### 두 번째 방법

```
  return(
    <>
     <input type="text" onChange={(e) => {
       console.log(e.target.value)
     }}
     />
    </>
  )
```

#### 세 번째 방법

```
  function showText(text) {
    console.log(text);
  }

(...)

  return(
    <>
     <input type="text" onChange={e => {
       const text = e.target.value;
       showText(text);
     }} />
    </>
  )
```

## 사용자들이 자주 사용하는 Hooks

### useState

`const [name, setName] = useState();` <br>
여기서 첫 번째 담긴 함수는 현재 상태를 의미하고 두 번째에 담긴 함수는 현재 state를 변경해주는 함수 입니다. 그리고 `useState()` 괄호에는 초기값을 넣어주면 됩니다.

### 첫 번째 방법

```
import { useState } from "react";

export default function Wellcome() {
  const [name, setName] = useState("Mike");

  function changeName() {
    setName(name === "Mike" ? "Jane" : "Mike");
  }

  return (
    <>
      <h1>state</h1>
      <h2 id="name">{name} 속성값</h2>
      <button onClick={changeName}>Change</button>
    </>
  );
}
```

### 두 번째 방법

- 버튼 안에 onClike 이벤트 안에다가 함수 적용하기

```
import { useState } from "react";

export default function Wellcome() {
  const [name, setName] = useState("Mike");

  return (
    <>
      <h1>state</h1>
      <h2 id="name">{name} 속성값</h2>
      <button
        onClick={() => {
          setName(name === "Mike" ? "Jane" : "Mike");
        }}
      >
        Change
      </button>
    </>
  );
}
```

export default function Hello() {
  function showName() {
    console.log("Mike");
  }

  function showAge(age) {
    console.log(age);
  }

  //이벤트 약자의 e (=event) 객체를 받고, e.target.value를 찍어준다.
//그러면 input에 값이 바뀔 때마다 그대로 콘솔창에 찍혀나온다.
  function showText(e) {
    console.log(e.target.value);
  }
  return (
    <>
      <h1>Hello</h1>
      <button onClick={showName}>Show name</button>

      <button
        onClick={() => {
          console.log(30);
        }}
      >
        Show age
      </button>

      <button
        onClick={() => {
          showAge(50);
        }}
      >
        Show age
      </button>

      <input type="text" onChange={showText} />
    </>
  );
}

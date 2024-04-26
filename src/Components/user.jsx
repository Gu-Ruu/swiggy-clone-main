import { useEffect, useState } from "react";
const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  async function getuserInfo() {
    const data = await fetch("https://api.github.com/users/Gu-Ruu");
    const Data = await data.json();
    console.log(Data);
  }
  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h3>Location: Mathura</h3>
      <h4>Contact: rudrakantverma_</h4>
    </div>
  );
};

export default User;

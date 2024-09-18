import { useState } from "react";

const LearnForm1 = () => {
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [address, setAddress] = useState("");
  let [age, setAge] = useState(0);
  let [country, setCountry] = useState("Nepal");
  let [gender, setGender] = useState("male");
  let [isMarried, setIsMarried] = useState(false);
  let [description, setDescription] = useState("");

  let genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  let countries = [
    { label: "Nepal", value: "nepal" },
    { label: "China", value: "china" },
    { label: "Usa", value: "usa" },
    { label: "Europe", value: "europe" },
  ];

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let data = {
            fullName: fullName,
            email: email,
            password: password,
            address: address,
            age: age,
            country: country,
            gender: gender,
            isMarried: isMarried,
            description: description,
          };
          console.log(data);
        }}
      >
        <div>
          <label htmlFor="fullname">FullName : </label>
          <input
            type="text"
            id="fullname"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="address">Address : </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="age">Age : </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label>Country : </label>
          <select
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          >
            {countries.map((v, i) => {
              return (
                <option key={i} value={v.value}>
                  {v.label}
                </option>
              );
            })}
          </select>
        </div>
        <br />
        <div>
          <label>Gender : </label>
          {genders.map((item, i) => {
            return (
              <span key={i}>
                <label htmlFor={item.value}> {item.label} </label>
                <input
                  type="radio"
                  id={item.value}
                  value={item.value}
                  checked={gender === item.value}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
              </span>
            );
          })}
        </div>
        <br />
        <div>
          <label htmlFor="isMarried">isMarried : </label>
          <input
            type="checkbox"
            id="isMarried"
            checked={isMarried === true}
            onChange={(e) => {
              setIsMarried(e.target.checked);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="description">Description : </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LearnForm1;

const LearnForm = () => {
  let handleSubmit = (e) => {
    e.preventDefault();

    console.log("i am form component");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name : </label>
          <input type="text" />
        </div>
        <br />
        <div>
          <label htmlFor="">Email : </label>
          <input type="email" />
        </div>
        <br />
        <div>
          <label htmlFor="">Password : </label>
          <input type="password" />
        </div>
        <br />
        <div>
          <label htmlFor="">Gender : </label>
          <input type="radio" />
        </div>
        <br />
        <div>
          <label htmlFor="">isMarried : </label>
          <input type="checkbox" />
        </div>
        <br />
        <div>
          <label htmlFor="">Phone</label>
          <input type="number" />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LearnForm;
const SetLocalStorage = () => {
  //Local Storage is the memory for a particular domain in particular browser.
  //All data in Local Storage are string.
  //If browser is closed, Local Storage data will persist in local.
  localStorage.setItem("name", "ram");
  localStorage.setItem("age", "50");

  return <div>SetLocalStorage</div>;
};

export default SetLocalStorage;

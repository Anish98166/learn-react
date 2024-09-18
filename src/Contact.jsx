import { useNavigate } from "react-router-dom";

const Contact = () => {
  let navigate = useNavigate();
  return (
    <>
      <div>Contact</div>
      <br />
      <button
        onClick={() => {
          navigate("/about", { replace: true });
        }}
      >
        Click to contact
      </button>
    </>
  );
};

export default Contact;

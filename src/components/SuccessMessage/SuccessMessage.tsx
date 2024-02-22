import iconSuccess from "../../assets/icon-success.svg";
import "./SuccessMessage.scss";

type SuccessMessageProps = {
  email: string;
  handleButton: () => void;
};

export const SuccessMessage = ({
  email,
  handleButton,
}: SuccessMessageProps) => {
  return (
    <div className="success-message-container">
      <img src={iconSuccess} alt="Success Icon" className="message-icon" />

      <h1 className="message-title">Thanks for subscribing!</h1>

      <p className="message-paragraph">
        A confirtmation email has been sent to <strong>{email}</strong>. Please
        open it and click the button inside to confirm your subscription.
      </p>

      <button onClick={handleButton} className="message-button">
        Dismiss message
      </button>
    </div>
  );
};

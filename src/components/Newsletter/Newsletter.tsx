import classNames from "classnames";
import iconList from "../../assets/icon-list.svg";
import illustrationSignUpDesktop from "../../assets/illustration-sign-up-desktop.svg";
import illustrationSignUpMobile from "../../assets/illustration-sign-up-mobile.svg";
import "./Newsletter.scss";

type NewsletterProps = {
  isDesktop: boolean;
  isFormError: boolean;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleButton: () => void;
};

export const Newsletter = ({
  isDesktop,
  isFormError,
  handleInput,
  handleButton,
}: NewsletterProps) => {
  return (
    <div className="newsletter-container">
      <div className="newsletter__image-container">
        <img
          src={isDesktop ? illustrationSignUpDesktop : illustrationSignUpMobile}
          alt="Illustration Sign Up"
          className="image"
        />
      </div>

      <div className="newsletter__content-container">
        <h1 className="content__title">Stay updated!</h1>

        <p className="content__paragraph">
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <ul className="content__list">
          <li className="content__list-item">
            <img src={iconList} alt="Icon list" className="list-item__icon" />
            Product discovery and building what matters
          </li>
          <li className="content__list-item">
            <img src={iconList} alt="Icon list" className="list-item__icon" />
            Measuring to ensure updates are a success
          </li>
          <li className="content__list-item">
            <img src={iconList} alt="Icon list" className="list-item__icon" />
            And much more!
          </li>
        </ul>

        <div className="content__form">
          <label className="content__form-label">
            <div>Email address</div>
            {isFormError && <div className="error">Valid email required</div>}
          </label>

          <input
            type="text"
            name="email"
            placeholder="email@company.com"
            className={classNames("content__form-input", {
              error: isFormError,
            })}
            onChange={handleInput}
          />

          <button
            type="button"
            className="content__form-button"
            onClick={handleButton}
          >
            Subscribe to monthly newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

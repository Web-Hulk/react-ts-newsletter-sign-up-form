import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { Newsletter } from "../../components/Newsletter/Newsletter";
import { SuccessMessage } from "../../components/SuccessMessage/SuccessMessage";

const Home = () => {
  const [userEmail, setUserEmail] = useState({ email: "" });
  const [isFormError, setIsFormError] = useState<boolean>(false);
  const [isNewsletterSubmitted, setIsNewsletterSubmitted] =
    useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserEmail({
      ...userEmail,
      [name]: value,
    });
  };

  const resetForm = () => {
    setUserEmail({ email: "" });
    setIsFormError(false);
    setIsNewsletterSubmitted(false);
  };

  const handleButton = () => {
    if (isNewsletterSubmitted) {
      resetForm();
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      emailRegex.test(userEmail.email)
        ? setIsNewsletterSubmitted(true)
        : setIsFormError(true);
    }
  };

  return (
    <>
      {isNewsletterSubmitted ? (
        <SuccessMessage email={userEmail.email} handleButton={handleButton} />
      ) : (
        <Newsletter
          isDesktop={isDesktop}
          isFormError={isFormError}
          handleInput={handleInput}
          handleButton={handleButton}
        />
      )}
    </>
  );
};

export default Home;

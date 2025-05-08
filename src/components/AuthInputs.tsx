import { useState } from "react";
import { styled } from "styled-components";

import { Button } from "@/components/Button";
import { CustomInput as Input } from "@/components/Input";

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const AuthInputs = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    identifier: "email" | "password",
    value: string
  ) => {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  };

  const handleLogin = () => {
    setSubmitted(true);
  };

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        <Input
          label="Email"
          invalid={emailNotValid}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange("email", event.target.value)
          }
        />
        <Input
          label="Password"
          invalid={passwordNotValid}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange("password", event.target.value)
          }
        />
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button className="button" onClick={handleLogin}>
          Sign In
        </Button>
      </div>
    </div>
  );
};

import { FieldErrorsImpl, FormProvider, useForm } from "react-hook-form";
import { FormControl, InputLabel, MenuItem, TextField } from "@mui/material";
import { CuiInput } from "./CuiInput";
import isEmail from "validator/lib/isEmail";
import { CuiButton } from "../button/cui-button";
import { CuiTooltip } from "../tooltip/cui-tooltip";
import { ReactNode } from "react";

interface FormState {
  email: string;
  userName: string;
  msg: string;
}

type CuiInputType = {
  label: string;
  name: string;
  defaultValue: string;
};

interface CuiContactFormProps {
  userName: CuiInputType;
  email: CuiInputType;
  message: CuiInputType;
}

export const CuiContactForm = ({
  userName,
  email,
  message,
}: CuiContactFormProps): JSX.Element => {
  const form = useForm<FormState>({ mode: "onTouched" });

  const onSubmit = () => {
    console.log("submit");
  };

  const getTooltipText = (errors: FieldErrorsImpl<FormState>): ReactNode => {
    console.log(Object.keys(errors));

    return Object.keys(errors).length
      ? "Please fix the form errors first"
      : undefined;
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormControl fullWidth>
          <CuiInput<FormState, "userName">
            label={userName.label}
            name={"userName"}
            defaultValue={userName.defaultValue}
          />
          <CuiInput<FormState, "email">
            label={email.label}
            rules={{
              validate: (value: string) =>
                isEmail(value, { allow_utf8_local_part: false }) ||
                "Please use a valid Email address",
              required: true,
            }}
            defaultValue={email.defaultValue}
            name={"email"}
            required={true}
          />
          <CuiInput
            label={message.label}
            variant="outlined"
            sx={{ marginBlockEnd: "1em" }}
            placeholder=""
            multiline
            rows={4}
            required={true}
            name={"msg"}
            rules={{
              validate: (value: string) =>
                value.length > 10 ||
                "Message can not be shorter than 10 character",
              required: true,
            }}
          />
        </FormControl>
        <CuiTooltip title={getTooltipText(form.formState.errors)}>
          <FormControl fullWidth>
            <CuiButton type="submit" disabled={!form.formState.isValid}>
              Send
            </CuiButton>
          </FormControl>
        </CuiTooltip>
      </form>
    </FormProvider>
  );
};

import TextField, {
  OutlinedTextFieldProps,
  TextFieldProps,
} from "@mui/material/TextField";
import {
  Controller,
  FieldPath,
  FieldPathValue,
  FieldValues,
  Path,
  useFormContext,
} from "react-hook-form";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";

interface CuiInputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends FieldValues {
  label: string;
  name: string;
  transform?: {
    input?: (value: FieldPathValue<TFieldValues, TName>) => string;
    output?: (
      event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => string;
  };
}

export const CuiInput = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  label,
  name,
  rules,
  transform,
  defaultValue = "" as FieldPathValue<TFieldValues, TName>,
  ...rest
}: CuiInputProps<TFieldValues, TName>) => {
  const formContext = useFormContext<TFieldValues>();

  return (
    <ErrorBoundary>
      <Controller
        control={formContext?.control}
        name={name as Path<TFieldValues>}
        render={({ field: { onBlur, ref, ...field }, fieldState }) => (
          <TextField
            onBlur={onBlur}
            variant="outlined"
            label={label}
            sx={{
              marginBlockEnd: "1em",
            }}
            onChange={(e) => field.onChange(e)}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            value={field.value}
          />
        )}
        rules={rules}
        defaultValue={defaultValue}
      />
    </ErrorBoundary>
  );
};

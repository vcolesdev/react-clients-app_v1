import useAddClientForm from "../../api/hooks/useAddClientForm.ts";

interface InputControl {
  extraClasses?: string;
  id?: string;
  name?: string;
  options?: any;
  placeholder?: string;
  type: string;
}

export default function InputControl({
  extraClasses,
  id,
  name,
  options,
  placeholder,
  type
}: InputControl) {
  const { register } = useAddClientForm();

  if (type === "text") {
    return (
      <input
        className={`${extraClasses ? extraClasses : ""}`}
        id={id && id}
        placeholder={placeholder ? placeholder : ""}
        type={
          type === "text"
            ? "text"
            : type === "email"
            ? "email"
            : type === "tel"
            ? "tel"
            : type === "password"
            ? "password"
            : "text"
        }
        {...register(name, { ...options })}
      />
    );
  }
}

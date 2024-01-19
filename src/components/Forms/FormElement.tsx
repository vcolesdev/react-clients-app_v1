import { FormProps } from "../../api/_interfaces.ts";
export default function Form({ action, children, id, name, onSubmit }: FormProps): JSX.Element {
  return (
    <form action={action && action} id={id} name={name} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

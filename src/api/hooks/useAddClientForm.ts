import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAddClientMutation } from "../../redux/clientsApi.ts";
import { IClient } from "../_interfaces.ts";

export const formClasses = {
  error: `mt-3 py-1 px-2 bg-red-50 border border-red-200 rounded text-red-600 text-sm font-medium`,
  input: `block w-full px-4 py-3 rounded-lg border border-2 border-gray-300 text-gray-500`,
  label: `inline-block ms-1 mb-1 uppercase text-sm text-gray-700 font-semibold tracking-wide`
};

export default function useAddClientForm() {
  // RTK Query hooks responsible for POSTing data to our database,and updating the state.
  const [sendRequest, { data: clients, isSuccess }] = useAddClientMutation();
  const [addClient, { isLoading }] = useAddClientMutation();
  const {
    formState,
    formState: { errors },
    formState: { isSubmitSuccessful },
    getValues,
    handleSubmit,
    register,
    reset
  } = useForm();

  useEffect(() => {
    // Reset the form after a successful submit.
    if (isSubmitSuccessful) {
      reset({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        comments: ""
      });
    }
  }, [addClient, getValues, isSubmitSuccessful, formState, reset]);

  // Submit handler that sends POSTs the formData to the database.
  const onSubmit = (formData) => {
    sendRequest(formData);

    // Code to execute after a successful "submit" event.
    if (isSubmitSuccessful) {
      // Get our submitted field values.
      const values = getValues();

      // Create a new client from interface IClient.
      const newClient: IClient = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone && values.phone,
        comments: values.comments && values.comments
        //status: true
      };

      // Dispatch our addClient mutation function.
      addClient(newClient);
    }
  };

  // Any extra data we can attach here...
  const handleFormButtonSubmit = () => {
    console.log("Submit button clicked");
  };

  return {
    addClient,
    clients,
    errors,
    formClasses,
    formState,
    getValues,
    handleSubmit,
    handleFormButtonSubmit,
    isLoading,
    isSubmitSuccessful,
    isSuccess,
    register,
    reset,
    sendRequest,
    onSubmit
  };
}

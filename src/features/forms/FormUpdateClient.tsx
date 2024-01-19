import Form from "../../components/Forms/FormElement.tsx";
import FormButton from "../../components/Forms/FormButton.tsx";
import { Fragment, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useGetClientQuery, useUpdateClientMutation } from "../../redux/clientsApi.ts";

const formClasses = {
  error: `mt-3 py-1 px-2 bg-red-50 border border-red-200 rounded text-red-600 text-sm font-medium`,
  input: `block w-full px-4 py-3 rounded-lg border border-2 border-gray-300 text-gray-500`,
  label: `inline-block ms-1 mb-1 uppercase text-sm text-gray-700 font-semibold tracking-wide`
};

export default function FormUpdateClient({ client, clientId }) {
  const {
    formState: { errors, isSubmitSuccessful },
    getValues,
    handleSubmit,
    register,
    reset
  } = useForm({});

  //const { id } = useParams();

  //const { data: clientById } = useGetClientQuery(id);

  const [updateClient, { isSuccess }] = useUpdateClientMutation();

  const navigate = useNavigate();

  useEffect(() => {
    reset({
      firstName: client.firstName,
      lastName: client.lastName,
      email: client.email,
      phone: client.phone,
      comments: client.comments
      //status: client.status,
    });
  }, [client, isSuccess, isSubmitSuccessful, navigate, reset]);

  const onSubmit = () => {
    const values = getValues();
    console.log(values);

    if (isSuccess) {
      updateClient({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        comments: values.comments
      });

      navigate(`/clients/${clientId}`);
    }
  };

  return (
    <Fragment>
      <Form id="formUpdateClient" name="updateClient" onSubmit={handleSubmit(onSubmit)}>
        <div className="py-6">
          {/* First Name */}
          <div className="mb-3">
            <label className={formClasses.label}>First Name</label>
            <input
              className={`${formClasses.input}`}
              id="firstname"
              type="text"
              {...register("firstName", {
                required: true
              })}
            />
            <div>
              {errors.firstName?.type === "required" && (
                <p className={formClasses.error} role="alert">
                  <span className="font-semibold">Form Error:</span> First name is required
                </p>
              )}
            </div>
          </div>

          {/* Last Name */}
          <div className="mb-3">
            <label className={formClasses.label}>Last Name</label>
            <input
              className={`mb-3 ${formClasses.input}`}
              id="lastname"
              type="text"
              {...register("lastName", {
                required: true
              })}
            />
            <div>
              {errors.lastName?.type === "required" && (
                <p className={formClasses.error} role="alert">
                  Last name is required
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className={formClasses.label}>Email Address</label>
            <input
              className={`mb-3 ${formClasses.input}`}
              id="email"
              {...register("email", { required: true })}
            />
            <div>
              {errors.email?.type === "required" && (
                <p className={formClasses.error} role="alert">
                  Email is required
                </p>
              )}
            </div>
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label className={formClasses.label}>Phone Number</label>
            <input
              className={`mb-3 ${formClasses.input}`}
              id="phone"
              type="tel"
              {...register("phone", {})}
            />
          </div>

          {/* Comments */}
          <div className="mb-3">
            <label className={formClasses.label}>Comments</label>
            <textarea
              className={`${formClasses.input}`}
              id="comments"
              placeholder="Some client comments here..."
              {...register("comments", {})}
            />
          </div>
        </div>
        <div>
          {/* Submit */}
          <FormButton
            extraClasses="me-3"
            id="updateClientFormSubmit"
            onClick={() => console.log("Submit Button clicked")}
            textContent="Update Client"
            type="submit"
          />
          {/* Reset */}
          <FormButton
            extraClasses="me-3"
            id="updateClientFormReset"
            onClick={() => console.log(`Reset Button clicked`)}
            textContent="Clear Form"
            type="reset"
          />
          {/* Cancel */}
          <FormButton
            id="id"
            onClick={() => console.log(`Cancel Button clicked`)}
            textContent="Cancel"
            to="/"
            type="cancel"
          />
        </div>
      </Form>
    </Fragment>
  );
}

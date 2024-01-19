import useAddClientForm from "../../api/hooks/useAddClientForm.ts";
import Form from "../../components/Forms/FormElement.tsx";
import FormButton from "../../components/Forms/FormButton.tsx";
import { Fragment } from "react";

export default function FormAddClient() {
  const { errors, handleSubmit, formClasses, onSubmit, register } = useAddClientForm();

  return (
    <Fragment>
      <Form
        action="/src/routes/Clients"
        id="formAddNewClient"
        name="addClient"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="py-6">
          {/* First Name */}
          <div className="mb-3">
            <label className={formClasses.label}>First Name</label>
            <input
              className={`${formClasses.input}`}
              id="firstname"
              type="text"
              {...register("firstName", { required: true })}
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
              {...register("lastName", { required: true })}
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
              {...register("phone")}
            />
          </div>

          {/* Comments */}
          <div className="mb-3">
            <label className={formClasses.label}>Comments</label>
            <textarea
              className={`${formClasses.input}`}
              id="comments"
              placeholder="Some client comments here..."
              {...register("comments")}
            />
          </div>
        </div>
        <div>
          {/* Submit */}
          <FormButton
            extraClasses="me-3"
            id="addClientFormSubmit"
            onClick={() => console.log("Submit Button clicked")}
            textContent="Add Client"
            type="submit"
          />
          {/* Reset */}
          <FormButton
            extraClasses="me-3"
            id="addClientFormReset"
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

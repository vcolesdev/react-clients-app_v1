export const formClasses = {
  error: `mt-3 py-1 px-2 bg-red-50 border border-red-200 rounded text-red-600 text-sm font-medium`,
  input: `block w-full px-4 py-3 rounded-lg border border-2 border-gray-300 text-gray-500`,
  label: `inline-block ms-1 mb-1 uppercase text-sm text-gray-700 font-semibold tracking-wide`
};

export default function useUpdateClientForm() {
  // Any extra data we can attach here...
  const handleFormButtonSubmit = () => {
    console.log("Submit button clicked");
  };

  return {
    formClasses,
    handleFormButtonSubmit
  };
}

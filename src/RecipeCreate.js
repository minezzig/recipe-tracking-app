import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  // declare an empty form - use to start and clear form
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  // declare useState for all of form data, set to empty data
  const [formData, setFormData] = useState({ ...initialFormState });
  // what do do when an input is changed, fill up new object with old info, add new key pair with the target: value
  const handleForm = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  // what to do when submitted.  reset form
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData); //run createRecipe function upon submit
    console.log("Submitted", formData);
    //reset form data
    setFormData(initialFormState);
  };
  return (
    <>
      <form name="create" onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  onChange={handleForm}
                  value={formData.name}
                />
              </td>
              <td>
                <input
                  type="text"
                  id="cuisine"
                  name="cuisine"
                  placeholder="Cuisine"
                  onChange={handleForm}
                  value={formData.cuisine}
                />
              </td>
              <td>
                <input
                  type="url"
                  id="photo"
                  name="photo"
                  placeholder="URL"
                  onChange={handleForm}
                  value={formData.photo}
                />
              </td>
              <td>
                <textarea
                  id="ingredients"
                  name="ingredients"
                  placeholder="Ingredients"
                  onChange={handleForm}
                  value={formData.ingredients}
                ></textarea>
              </td>
              <td>
                <textarea
                  id="preparation"
                  name="preparation"
                  placeholder="Preparation"
                  onChange={handleForm}
                  value={formData.preparation}
                ></textarea>
              </td>

              <td>
                <button type="submit">Create</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}

export default RecipeCreate;

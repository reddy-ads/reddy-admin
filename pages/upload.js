import React from "react";
import Form from "../components/shared/Form";
import { useForm } from "react-hook-form";

const Upload = () => {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    console.log(data);
  };

  const handleChangeUpload = (e) => {
    console.log(`e`, e.target.files);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form
          label="รูปตัวเอง"
          type="file"
          name="ProfilePicture"
          onChange={handleChangeUpload}
        />
        <input type="submit" />
      </form>
    </React.Fragment>
  );
};

export default Upload;

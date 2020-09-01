import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const Form = () => {
  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
  };
  return (
    <Editor
      initialValue="<p>This is the initial content of the editor</p>"
      init={{
        height: 500,
        menubar: `insert`,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
          "image",
        ],
        toolbar:
          "undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help | image",
      }}
      onEditorChange={handleEditorChange}
    />
  );
};

export default Form;

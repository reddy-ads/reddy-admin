import React from "react";
import { Editor } from "@tinymce/tinymce-react";
const EditorTinymce = () => {
  
  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
  };

  return (
    <Editor
      init={{
        height: 500,
        menubar: `insert`,
        paste_data_images: true,
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

export default EditorTinymce;

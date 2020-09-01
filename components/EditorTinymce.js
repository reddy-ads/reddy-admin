import React from "react";
import { Editor } from "@tinymce/tinymce-react";
const EditorTinymce = () => {
  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
  };

  return (
    <React.Fragment>
      <form className="user">
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-user"
            placeholder="Topic"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-user"
            placeholder="Category"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-user"
            placeholder="Email Address"
          />
        </div>
        <Editor
        apiKey='tgganvajpetwndk4a5rpicxpvluw20lx9tqik5i4nuaetmh7'
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
      </form>
    </React.Fragment>
  );
};

export default EditorTinymce;

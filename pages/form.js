import React from "react";
import generateMain from "../hoc/generateMain";
import EditorTinymce from "../components/EditorTinymce";
const EditorTinymceWithLayOut = generateMain(EditorTinymce);
const Form = () => {
  return <EditorTinymceWithLayOut />;
};

export default Form;

import React from "react";
const FormTags = () => {
  return (
    // <input
    //   type="text"
    //   className="form-control"
    //   placeholder="Category"
    // />
    <React.Fragment>
      <input type="checkbox" name="vehicle1" value="เกมมาใหม่" />
      <label> เกมมาใหม่</label>
      <input type="checkbox" name="vehicle2" value="เกมเก่า" />
      <label> เกมเก่า</label>
      <input type="checkbox" name="vehicle3" value="hot" />
      <label> hot</label>
      <input type="checkbox" name="vehicle3" value="console" />
      <label> console</label>
      <input type="checkbox" name="vehicle3" value="pc" />
      <label> pc</label>
      <input type="checkbox" name="vehicle3" value="mobile" />
      <label> mobile</label>
      <input type="checkbox" name="vehicle3" value="เกมมาแรง" />
      <label> เกมมาแรง</label>
    </React.Fragment>
  );
};

export default FormTags;

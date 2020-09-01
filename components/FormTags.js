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
      <label for=""> เกมมาใหม่</label>
      <input type="checkbox" name="vehicle2" value="เกมเก่า" />
      <label for=""> เกมเก่า</label>
      <input type="checkbox" name="vehicle3" value="hot" />
      <label for=""> hot</label>
      <input type="checkbox" name="vehicle3" value="console" />
      <label for=""> console</label>
      <input type="checkbox" name="vehicle3" value="pc" />
      <label for=""> pc</label>
      <input type="checkbox" name="vehicle3" value="mobile" />
      <label for=""> mobile</label>
      <input type="checkbox" name="vehicle3" value="เกมมาแรง" />
      <label for=""> เกมมาแรง</label>
    </React.Fragment>
  );
};

export default FormTags;

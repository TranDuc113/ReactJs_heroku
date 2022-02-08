export const validate = (values) => {
  const errors = {};
  if (
    values.Title == null ||
    typeof values.Title === "undefined" ||
    values.Title.trim() === ""
  ) {
    errors.Title = "Vui lòng nhập tiêu đề";
  } else if (values.Title.trim().length < 5) {
    errors.Title = "Tiêu đề phải lớn hơn 5 ký tự";
  }

  if (
    values.MoTa == null ||
    typeof values.MoTa === "undefined" ||
    values.MoTa.trim() === ""
  ) {
    errors.MoTa = "Vui lòng nhập tiêu đề";
  } else if (values.MoTa.trim().length < 5) {
    errors.MoTa = "Tiêu đề phải lớn hơn 5 ký tự";
  }
  return errors;
};

import React from "react";

const sizeClasses = {
  txtPoppinsMedium20Black900: "font-medium font-poppins",
  txtPoppinsMedium20Gray500: "font-medium font-poppins",
  txtRobotoRomanSemiBold18: "font-roboto font-semibold",
  txtRobotoRomanMedium30: "font-medium font-roboto",
  txtRobotoRomanRegular19Gray70002: "font-normal font-roboto",
  txtPoppinsRegular13: "font-normal font-poppins",
  txtPoppinsMedium20WhiteA700: "font-medium font-poppins",
  txtRobotoMedium20: "font-medium font-roboto",
  txtRobotoRomanSemiBold25: "font-roboto font-semibold",
  txtPoppinsMedium17: "font-medium font-poppins",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtRobotoRomanMedium26: "font-medium font-roboto",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtRobotoRomanBold24: "font-bold font-roboto",
  txtRobotoRomanMedium20: "font-medium font-roboto",
  txtRobotoBold28: "font-bold font-roboto",
  txtPoppinsSemiBold40: "font-poppins font-semibold",
  txtRobotoRomanExtraBold69: "font-extrabold font-roboto",
  txtJostSemiBold50: "font-jost font-semibold",
  txtRobotoRomanRegular18: "font-normal font-roboto",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtRobotoRomanRegular19: "font-normal font-roboto",
  txtRobotoRomanMedium17: "font-medium font-roboto",
  txtPoppinsMedium16Gray600: "font-medium font-poppins",
  txtPoppinsSemiBold40WhiteA700: "font-poppins font-semibold",
  txtRobotoRomanMedium15: "font-medium font-roboto",
  txtRobotoRomanRegular13: "font-normal font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

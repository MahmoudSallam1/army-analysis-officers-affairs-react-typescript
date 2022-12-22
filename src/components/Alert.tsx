import React from "react";
import {
  Alert as CharkaAlert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

type AlertProps = {
  message: string;
};

function Alert({ message }: AlertProps) {
  return (
    <CharkaAlert mt={4} status="error">
      <AlertIcon />
      <AlertTitle>{message}</AlertTitle>
      <AlertDescription>فشل الطلب مع رمز الحالة 404</AlertDescription>
    </CharkaAlert>
  );
}

export default Alert;

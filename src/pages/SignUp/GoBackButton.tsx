import { Center } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";

import { theme } from "../../style/theme";

interface GoBackButtonProps {
  right: string;
  top: string;
}

export const GoBackButton = ({ right, top }: GoBackButtonProps) => {
    const history = useHistory();

  return (
    <Center
      as="button"
      position="absolute"
      right={ right }
      top={ top }
      w= {["50px", "70px"]}
      h= "50px"
      bg= "purple.500"
      fontSize= "2xl"
      borderRadius= "md"
      _hover={{
           bg: "purple.600"
      }}
      onClick={ () => history.push("/") }
    >
      <FaArrowLeft color={theme.colors.white} />
    </Center>
  );
};

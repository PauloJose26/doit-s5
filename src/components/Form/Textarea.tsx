import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import {
  useState,
  useEffect,
  useCallback,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons";

interface TextareaProps extends ChakraTextareaProps {
  name: string;
  label?: string;
  error?: FieldError | null;
  icon?: IconType;
}

type textareaVariationProps = {
  [key: string]: string;
};

const TextareaVariation: textareaVariationProps = {
  error: "red.600",
  default: "gray.300",
  focus: "purple.800",
  filled: "green.600",
};

const BaseTextarea: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaProps
> = ({ name, label, error = null, icon: Icon, ...rest }, ref) => {
  const [value, setValue] = useState<string>("");
  const [variation, setVariation] = useState<string>("default");

  useEffect(() => {
    if (error) {
      setVariation("error");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      setVariation("focus");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      setVariation("filled");
    }
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel color="gray.400">{label}</FormLabel>}

      <InputGroup flexDirection="column">
        {Icon && (
          <InputLeftElement color={TextareaVariation[variation]} mt="5px">
            <Icon />
          </InputLeftElement>
        )}

        <ChakraTextarea
          name={name}
          bg="gray.50"
          variant="outline"
          color={TextareaVariation[variation]}
          borderColor={TextareaVariation[variation]}
          _hover={{ bgColor: "gray.100" }}
          _placeholder={{ color: "gray.300" }}
          _focus={{
            bg: "gray.100",
          }}
          size="lg"
          h="50px"
          onFocus={handleInputFocus}
          onBlurCapture={handleInputBlur}
          onChangeCapture={(e) => setValue(e.currentTarget.value)}
          {...rest}
          ref={ref}
        />

        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};

export const Textarea = forwardRef(BaseTextarea);

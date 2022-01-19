import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { useState, useEffect, useCallback, useRef } from "react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons";

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError | null;
    icon?: IconType;
}

type inputVariationProps = {
    [key: string]: string
};
const InputVariation: inputVariationProps = {
    error: "red.600",
    default: "gray.300",
    focus: "purple.800",
    filled: "green.600"
};

export const Input = ({ name, label, error = null, icon: Icon, ...rest }: InputProps) => {
    const [variation, setVariation] = useState("default");

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(error){
            setVariation("error");
        }
    }, [error]);

    const handleInputFocus = useCallback(() => {
        if(!error){
            setVariation("focus");
        }
    }, [error]);

    const handleInputBlur = useCallback(() => {
        if(inputRef.current?.value && !error){
            setVariation("filled");
        }
    }, [error]);

    return(
        <FormControl>
            {!!label && (
                <FormLabel>{ label }</FormLabel>
            )}

            <InputGroup flexDirection="column">
                {Icon && (
                    <InputLeftElement color={ InputVariation[variation] } mt="2.5">
                        <Icon />
                    </InputLeftElement>
                )}

                <ChakraInput 
                    name={ name } 
                    bg="gray.50" 
                    variant="outline"
                    color={ InputVariation[variation] }
                    borderColor={ InputVariation[variation] }
                    _hover={{ bgColor: "gray.100" }}
                    _placeholder={{ color: "gray.300" }}
                    size="lg"
                    h="60px"
                    onFocus={ handleInputFocus }
                    onBlurCapture={ handleInputBlur }
                    { ...rest } 
                />

                {!!error && (
                    <FormErrorMessage>{ error.message }</FormErrorMessage>
                ) }
            </InputGroup>
        </FormControl>
    );
};
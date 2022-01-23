import { Box, Skeleton, SkeletonProps } from "@chakra-ui/react";

interface CardSkeletonProps extends SkeletonProps {
  repeatCount: number;
}

export const CardSkeleton = ({
  repeatCount = 1,
  ...rest
}: CardSkeletonProps) => {
  const howMan = Array.from(Array(repeatCount).keys());

  return (
    <>
      {howMan.map((item, index) => (
        <Skeleton
          key={index}
          {...rest}
          speed={1}
          startColor="gray.100"
          endColor="gray.200"
        >
          <Box w={["100%", "300px"]} h="190px" padding="7" />
        </Skeleton>
      ))}
    </>
  );
};

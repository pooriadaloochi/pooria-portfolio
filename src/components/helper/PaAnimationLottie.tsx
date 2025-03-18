import Lottie from "lottie-react";

export type PaAnimationLottieProps = {
  animationPath: string;
}

export function PaAnimationLottie({ animationPath }: PaAnimationLottieProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: "95%",
    },
  };

  return <Lottie {...defaultOptions} />;
};


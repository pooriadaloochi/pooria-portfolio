import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all duration-300 ease-out";
const SCROLL_THRESHOLD = 50;

export function PaScrollToTopBottom() {
  const [btnCls, setBtnCls] = useState(`${DEFAULT_BTN_CLS} hidden`);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setBtnCls(DEFAULT_BTN_CLS.replace(" hidden", ""));
      } else {
        setBtnCls(`${DEFAULT_BTN_CLS} hidden`);
      }

      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
      setIsAtBottom(isBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClickBtn = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <Button
      className={btnCls}
      variant="text"
      onClick={onClickBtn}
      sx={{
        width: "fit-content",
        mx: "auto",
        position: "fixed",
        bottom: 8,
        right: "50%",
        zIndex: 50,
      }}
    >
      {isAtBottom ? <ArrowUpward /> : <ArrowDownward />}
    </Button>
  );
}

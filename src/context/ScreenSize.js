import { createContext, useContext, useState, useEffect } from "react";

const ScreenSize = createContext();

export function useScreenSize() {
  return useContext(ScreenSize);
}

export function ScreenProvider({ children }) {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const [xs, setXs] = useState(false);
  const [sm, setSm] = useState(false);
  const [md, setMd] = useState(false);
  const [lg, setLg] = useState(false);
  const [xl, setXl] = useState(false);

  useEffect(() => {
    const grabSize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    grabSize();
    window.addEventListener("resize", grabSize);
    return () => window.removeEventListener("resize", grabSize);
  }, []);

  useEffect(() => {
    width < 600 ? setXs(true) : setXs(false);
    width < 960 ? setSm(true) : setSm(false);
    width < 960 ? setSm(true) : setSm(false);
    width < 1280 ? setMd(true) : setMd(false);
    width < 1920 ? setLg(true) : setLg(false);
    width > 1920 ? setXl(true) : setXl(false);
  }, [width, height]);

  return (
    <ScreenSize.Provider
      value={{
        width: width,
        height: height,
        xs: xs,
        sm: sm,
        md: md,
        lg: lg,
        xl: xl,
      }}
    >
      {children}
    </ScreenSize.Provider>
  );
}

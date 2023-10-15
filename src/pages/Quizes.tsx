import { Box, Button } from "@mui/material";
import InputSelect from "../components/Cards/InputSelect";
import { quizes } from "../static/data";
import { Container, Title } from "../static/tags";
import { useEffect, useState } from "react";
import useDidMountEffect from "../hooks/useDidMountEffect";
import { useNavigate } from "react-router";
import { toastError } from "../toast/toast";

const Quizes = () => {
  const [isReady, setIsReady] = useState(false);
  const [exitCount, setExitCount] = useState(4);
  const navigate = useNavigate();

  function enterFullScreen(element: any) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    }else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    }else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    }else if(element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };

  const handleStart = () => {
    setIsReady(true);
    enterFullScreen(document.documentElement);
  }

  const handleKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape' || event.keyCode === 27) {
      event.preventDefault();
      let fullScreenElement = document.fullscreenElement ||
                              (document as any).mozFullScreenElement ||
                              (document as any).webkitFullscreenElement ||
                              (document as any).msFullscreenElement;
      if (fullScreenElement) {
        setTimeout(() => {
          enterFullScreen(document.documentElement);
        }, 10);
      }
    }
  }

  const handleVisibility = () => {
    if(!isReady) {
      return;
    }
    if (document.hidden) {
    } else {
      setExitCount(prev => prev - 1);
    }
  }

  useDidMountEffect(() => {
    if(exitCount === 0) {
      toastError("You failed the tests because there were many attempts to exit the page");
      return navigate("/profile");
    }
    alert(`You have ${exitCount} attempts left`);
  }, [exitCount]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.removeEventListener('visibilitychange', handleVisibility);
    }
  }, [isReady]);

  return (
    <Container>
      {!isReady 
        ? 
        <Box className="flex flex-col items-center mt-16">
          <Box component="p" className="mb-4">
            You cannot exit the page; on the third exit, the test will be closed
          </Box>
          <Button onClick={handleStart} variant="contained">Are you ready to start?</Button>
        </Box>
        :
        <Box className="flex flex-col gap-y-5">
          <Title className="mt-6">Quizes</Title>
          {quizes?.map(({ question, options, correctAnswer }, idx) => (
            <Box className="border-b border-black py-3" key={idx}>
              <InputSelect
                key={correctAnswer}
                question={question}
                options={options}
              />
            </Box>
          ))}
        </Box>
    }
    </Container>
  );
};

export default Quizes;

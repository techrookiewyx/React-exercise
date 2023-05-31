import { useEffect } from "react";

export function useFadeIn(ref,duration) { 
  useEffect(() => { 
    const node = ref.current;
    let startTime = performance.now();
    let frameId = null;
    function onFrame(now) { 
      const timePassed = now - startTime;
      const pgs = Math.min(timePassed / duration, 1);
      onProgress(pgs);
      if (pgs < 1) { 
        frameId = requestAnimationFrame(onFrame);
      }
    }
    function onProgress(pgs) { 
      node.style.opacity = pgs;
    }
    function start() { 
      onProgress(0);
      startTime = performance.now();
      frameId = requestAnimationFrame(onFrame);
    }
    function stop() {
      cancelAnimationFrame(frameId);
      startTime = null;
      frameId = null;
    }
    start();
    return () => stop();
  },[ref,duration])
}
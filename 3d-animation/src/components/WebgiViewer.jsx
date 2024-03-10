import React, {
  useState,
  useCallback,
  forwardRef,
  useRef,
  useImperativeHandle,
  useEffect,
} from "react";
import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
  mobileAndTabletCheck,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function WebgiViewer() {
  const canvasRef = useRef(null);

  const setupViewer = useCallback(async () => {
    // Initialize the viewer
    const viewer = new ViewerApp({
      canvas: canvasRef.current,
    });
    const manager = await viewer.addPlugin(AssetManagerPlugin);

    const camera = viewer.scene.activeCamera;
    const position = camera.position;
    const target = camera.target;

    await viewer.addPlugin(GBufferPlugin);
    await viewer.addPlugin(new ProgressivePlugin(32));
    await viewer.addPlugin(new TonemapPlugin(true));
    await viewer.addPlugin(GammaCorrectionPlugin);
    await viewer.addPlugin(SSRPlugin);
    await viewer.addPlugin(SSAOPlugin);

    await viewer.addPlugin(BloomPlugin);

    // Required for downloading files from the UI
    viewer.renderer.refreshPipeline();

    // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.

    // Import and add a GLB file.
    await manager.addFromPath("scene-black.glb");
    viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

    viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });

    window.scrollTo(0, 0);

    let needsUpdate = true;

    viewer.addEventListener("preFrame", () => {
      if(needsUpdate){
        camera.positionTargetUpdated(true);
        needsUpdate= false;
      }
      
    });
  }, []);

  useEffect(() => {
    setupViewer();
  }, []);

  return (
    <div id="webgi-canvas-container">
      <canvas id="webgi-canvas" ref={canvasRef}></canvas>
    </div>
  );
}

export default WebgiViewer;

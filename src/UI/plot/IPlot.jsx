import React, { useEffect, useRef, useState } from 'react'
import classes from './IPlot.module.css';

function IPlot({data}) {
  //CONSTANTS
  const WIDTH = 400;
  const HEIGHT = 300;
  const PADDING = 50;
  const PLOT_WIDTH = WIDTH - PADDING * 2;
  const PLOT_HEIGHT = HEIGHT - PADDING * 2;
  const START_X = PADDING + 0.5; 
  const START_Y = PADDING + PLOT_HEIGHT + 0.5; 
  const AXIS_X_TITLES = [0, 20, 40, 60, 80, 100]; //FIX
  const AXIS_Y_TITLES = [0, 200, 400, 600, 800, 1000]; //FIX
  const X_VALUES = [0, 20, 40, 60, 80, 100]; //FIX
  const Y_VALUES = [0, 100, 200, 600, 700, 800]; //FIX
  const X_AXIS_RANGE = 100;
  const Y_AXIS_RANGE = AXIS_Y_TITLES[AXIS_Y_TITLES.length - 1] - AXIS_Y_TITLES[0];
  const SCALE_X_PX = PLOT_WIDTH / (AXIS_X_TITLES.length - 1); //step in pixels
  const SCALE_Y_PX = PLOT_HEIGHT / (AXIS_Y_TITLES.length - 1); //step in pixels
  const GRID_COLOR = 'rgba(185, 201, 214, 0.589)';
  const GRID_LINE_WIDTH = 1;
  const AXIS_COLOR = 'rgba(15, 25, 61, 1)';
  const AXIS_LINE_WIDTH = 1;
  const AXIS_DELIMITERS_LENGTH = 10;
  const AXIS_FONT = "18px serif";
  const TEXT_COLOR = 'rgba(15, 25, 61, 1)';
 
  //HOOKS
  const [benchmarkData, setBenchmarkDataArr] = useState(null);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const canvas = useRef();

  useEffect(() => {
    setBenchmarkDataArr(data)
  }, [data])
  useEffect(() => {
    if (canvas.current) {
      handleCanvas();
    }
  }, [benchmarkData])

  //FUNCTIONS
  function handleCanvas() {
    setWidth(WIDTH);
    setHeight(HEIGHT);
    let ctx = canvas.current.getContext('2d');

    clearCanvas(ctx);
    drawGrid(ctx);
    drawText(ctx);
    drawPlot(ctx);
  }
  function clearCanvas(ctx) {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
  }
  function drawGrid(ctx) {
    for (let i = PADDING + 0.5; i <= PADDING + PLOT_WIDTH + 0.5; i += SCALE_X_PX) {
      //vertical grid lines
      ctx.beginPath();
      ctx.strokeStyle = GRID_COLOR;
      ctx.lineWidth = GRID_LINE_WIDTH;
      ctx.moveTo(i, PADDING);
      ctx.lineTo(i, PADDING + PLOT_HEIGHT);
      ctx.stroke();
      ctx.closePath();

      //axis delimiters for vertical axis
      ctx.beginPath();
      ctx.strokeStyle = AXIS_COLOR;
      ctx.lineWidth = AXIS_LINE_WIDTH;
      ctx.moveTo(i, PADDING + PLOT_HEIGHT - AXIS_DELIMITERS_LENGTH / 2);
      ctx.lineTo(i, PADDING + PLOT_HEIGHT + AXIS_DELIMITERS_LENGTH / 2);
      ctx.stroke();
      ctx.closePath();
    }
    
    for (let i = PADDING + 0.5; i <= PADDING + PLOT_HEIGHT + 0.5; i += SCALE_Y_PX) {
      //horizontal grid lines
      ctx.beginPath();
      ctx.strokeStyle = GRID_COLOR;
      ctx.lineWidth = GRID_LINE_WIDTH;
      ctx.moveTo(PADDING, i);
      ctx.lineTo(PADDING + PLOT_WIDTH, i);
      ctx.stroke();
      ctx.closePath();

      //axis delimiters for horizontal axis
      ctx.beginPath();
      ctx.strokeStyle = AXIS_COLOR;
      ctx.lineWidth = AXIS_LINE_WIDTH;
      ctx.moveTo(PADDING - AXIS_DELIMITERS_LENGTH / 2, i);
      ctx.lineTo(PADDING + AXIS_DELIMITERS_LENGTH / 2, i);
      ctx.stroke();
      ctx.closePath();
    }

    //vertical axis
    ctx.beginPath();
    ctx.strokeStyle = AXIS_COLOR;
    ctx.lineWidth = AXIS_LINE_WIDTH;
    ctx.moveTo(PADDING, PADDING + PLOT_HEIGHT + 0.5);
    ctx.lineTo(PADDING + PLOT_WIDTH, PADDING + PLOT_HEIGHT + 0.5);
    ctx.stroke();
    ctx.closePath();

    //horizontal axis
    ctx.beginPath();
    ctx.strokeStyle = AXIS_COLOR;
    ctx.lineWidth = AXIS_LINE_WIDTH;
    ctx.moveTo(PADDING + 0.5, PADDING);
    ctx.lineTo(PADDING + 0.5, PADDING + PLOT_HEIGHT);
    ctx.stroke();
    ctx.closePath();
  }
  function drawText(ctx) {
    for (let i = PADDING + 0.5; i <= PADDING + PLOT_WIDTH + 0.5; i += SCALE_X_PX) {
      ctx.font = AXIS_FONT;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillStyle = TEXT_COLOR;
      ctx.fillText(`${AXIS_X_TITLES[0]}%`, i, PADDING + PLOT_HEIGHT + 5);
      AXIS_X_TITLES.shift();
    }
    for (let i = PADDING + 0.5; i <= PADDING + PLOT_HEIGHT + 0.5; i += SCALE_Y_PX) {
      ctx.font = AXIS_FONT;
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = TEXT_COLOR;
      ctx.fillText(`${AXIS_Y_TITLES[AXIS_Y_TITLES.length - 1]}`, PADDING - (AXIS_DELIMITERS_LENGTH / 2) - 3, i);
      AXIS_Y_TITLES.pop();
    }
  }
  function drawPlot(ctx) {
    ctx.beginPath();
    ctx.moveTo(START_X, START_Y);

    for (let i = 0; i < X_VALUES.length; i++) {
      ctx.lineTo(xCanvasFromDecart(X_VALUES[i]), yCanvasFromDecart(Y_VALUES[i]));
    }

    ctx.stroke();
  }
  function xCanvasFromDecart(xDecart) {
    return START_X + (xDecart * PLOT_WIDTH / X_AXIS_RANGE);
  }
  function yCanvasFromDecart(yDecart) {
    return START_Y - (yDecart * PLOT_HEIGHT / Y_AXIS_RANGE);
  }

  return (
    <canvas ref={canvas} className={classes.canvas} width={width} height={height}>
      plot of a benchmark
    </canvas>
  )
}

export default IPlot
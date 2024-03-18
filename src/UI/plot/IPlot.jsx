import React, { useEffect, useRef, useState } from 'react'
import classes from './IPlot.module.css';
import { roundWithAcc } from '../../utils/math';

function IPlot({data, 
                dataWidth = 500, 
                dataHeight = 400, 
                dataLineColor = 'red', 
                gradStartColor = 'rgb(239, 0, 0)', 
                gradEndColor = 'rgba(239, 0, 0, 0.123)'}) {
  //CONSTANTS 
  const PADDING = 50;
  const GRID_COLOR = 'rgba(185, 201, 214, 0.589)';
  const GRID_LINE_WIDTH = 1;
  const AXIS_COLOR = 'rgba(15, 25, 61, 1)';
  const AXIS_LINE_WIDTH = 1;
  const AXIS_DELIMITERS_LENGTH = 10;
  const AXIS_FONT = "18px serif";
  const TEXT_COLOR = 'rgba(15, 25, 61, 1)';
  const LINE_WIDTH = 5;
  const LINE_COLOR = dataLineColor;

  //HOOKS
  const canvas = useRef();
  const [benchmarkData, setBenchmarkData] = useState({});

  //USE_EFFECT
  useEffect(() => {
    let width = dataWidth;
    let height = dataHeight;
    let plotWidth = width - PADDING * 2;
    let plotHeight = height - PADDING * 2;
    let startX = PADDING + 0.5;
    let startY = PADDING + plotHeight + 0.5;
    let xAxisTitles = [0, 20, 40, 60, 80, 100];
    let yAxisTitles = getYTitles();
    let xAxisRange = 100;
    let yAxisRange = yAxisTitles[yAxisTitles.length - 1] - yAxisTitles[0];
    let scaleXPX = plotWidth / (xAxisTitles.length - 1);
    let scaleYPX = plotHeight / (yAxisTitles.length - 1);
    let xValues = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    let yValues = getYValues();

    setBenchmarkData({
      width: width,
      height: height,
      plotWidth: plotWidth,
      plotHeight: plotHeight,
      startX: startX,
      startY: startY,
      xAxisTitles: xAxisTitles,
      yAxisTitles: yAxisTitles,
      xAxisRange: xAxisRange,
      yAxisRange: yAxisRange,
      scaleXPX: scaleXPX,
      scaleYPX: scaleYPX,
      xValues: xValues,
      yValues: yValues,
    })
  }, [data, dataWidth, dataHeight])

  useEffect(() => {
    if (canvas.current && benchmarkData.width) {
      handleCanvas();
    }
  }, [benchmarkData])

  //FUNCTIONS
  function handleCanvas() {
    let ctx = canvas.current.getContext('2d');
    clearCanvas(ctx)
    drawGrid(ctx);
    drawText(ctx);
    drawPlot(ctx);
  }
  function clearCanvas(ctx) {
    ctx.clearRect(0, 0, benchmarkData.width, benchmarkData.height);
  }
  function drawGrid(ctx) {
    for (let i = PADDING + 0.5; i <= PADDING + benchmarkData.plotWidth + 0.5; i += benchmarkData.scaleXPX) {
      //vertical grid lines
      ctx.beginPath();
      ctx.strokeStyle = GRID_COLOR;
      ctx.lineWidth = GRID_LINE_WIDTH;
      ctx.moveTo(i, PADDING);
      ctx.lineTo(i, PADDING + benchmarkData.plotHeight);
      ctx.stroke();
      ctx.closePath();

      //axis delimiters for vertical axis
      ctx.beginPath();
      ctx.strokeStyle = AXIS_COLOR;
      ctx.lineWidth = AXIS_LINE_WIDTH;
      ctx.moveTo(i, PADDING + benchmarkData.plotHeight - AXIS_DELIMITERS_LENGTH / 2);
      ctx.lineTo(i, PADDING + benchmarkData.plotHeight + AXIS_DELIMITERS_LENGTH / 2);
      ctx.stroke();
      ctx.closePath();
    }
    
    for (let i = PADDING + 0.5; i <= PADDING + benchmarkData.plotHeight + 0.5; i += benchmarkData.scaleYPX) {
      //horizontal grid lines
      ctx.beginPath();
      ctx.strokeStyle = GRID_COLOR;
      ctx.lineWidth = GRID_LINE_WIDTH;
      ctx.moveTo(PADDING, i);
      ctx.lineTo(PADDING + benchmarkData.plotWidth, i);
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
    ctx.moveTo(PADDING, PADDING + benchmarkData.plotHeight + 0.5);
    ctx.lineTo(PADDING + benchmarkData.plotWidth, PADDING + benchmarkData.plotHeight + 0.5);
    ctx.stroke();
    ctx.closePath();

    //horizontal axis
    ctx.beginPath();
    ctx.strokeStyle = AXIS_COLOR;
    ctx.lineWidth = AXIS_LINE_WIDTH;
    ctx.moveTo(PADDING + 0.5, PADDING);
    ctx.lineTo(PADDING + 0.5, PADDING + benchmarkData.plotHeight);
    ctx.stroke();
    ctx.closePath();
  }
  function drawText(ctx) {
    for (let i = PADDING + 0.5; i <= PADDING + benchmarkData.plotWidth + 0.5; i += benchmarkData.scaleXPX) {
      ctx.font = AXIS_FONT;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillStyle = TEXT_COLOR;
      ctx.fillText(`${roundWithAcc( benchmarkData.xAxisTitles[0], 2 )}%`, i, PADDING + benchmarkData.plotHeight + 5);
      benchmarkData.xAxisTitles.shift();
    }
    for (let i = PADDING + 0.5; i <= PADDING + benchmarkData.plotHeight + 0.5; i += benchmarkData.scaleYPX) {
      let digit = benchmarkData.yAxisTitles[benchmarkData.yAxisTitles.length - 1];
      if (digit < 10) {
        digit = roundWithAcc(digit, 2)
      } else {
        digit = Math.trunc(digit)
      }

      ctx.font = AXIS_FONT;
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = TEXT_COLOR;
      ctx.fillText(`${digit}`, PADDING - (AXIS_DELIMITERS_LENGTH / 2) - 3, i);
      benchmarkData.yAxisTitles.pop();
    }
  }
  function drawPlot(ctx) {
    const grd = ctx.createLinearGradient(0, 0, 0, benchmarkData.height);
    grd.addColorStop(0, gradStartColor);
    grd.addColorStop(1, gradEndColor);
    ctx.fillStyle = grd;

    ctx.beginPath();
    ctx.lineWidth = LINE_WIDTH;
    ctx.strokeStyle = LINE_COLOR;
    ctx.moveTo(benchmarkData.startX, benchmarkData.startY);
    for (let i = 0; i < benchmarkData.xValues.length; i++) {
      console.log(benchmarkData.yValues[i])
      ctx.lineTo(xCanvasFromDecart(benchmarkData.xValues[i]), yCanvasFromDecart(benchmarkData.yValues[i]));
    }
    ctx.stroke();

    ctx.lineTo(PADDING + benchmarkData.plotWidth, benchmarkData.startY);
    ctx.fill();
  }
  function xCanvasFromDecart(xDecart) {
    return benchmarkData.startX + (xDecart * benchmarkData.plotWidth / benchmarkData.xAxisRange);
  }
  function yCanvasFromDecart(yDecart) {
    return benchmarkData.startY - (yDecart * benchmarkData.plotHeight / benchmarkData.yAxisRange);
  }
  function getYTitles() {
    let yTitles = [];
    let yTitlesAll = [0];
    data.forEach((item) => {
      if (item.percentile !== 0.95) {
        yTitlesAll.push(item.value)
      }
    })
    yTitlesAll.forEach((item, index) => {
      if (index % 2 == 0) {
        yTitles.push(item)
      }
    })
    return yTitles
  }
  function getYValues() {
    let yValues = [0];
    data.forEach((item) => {
      if (item.percentile !== 0.95) {
        yValues.push(item.value)
      }
    })
    return yValues
  }

  return (
    <canvas ref={canvas} 
            className={classes.canvas} 
            width={benchmarkData.width} 
            height={benchmarkData.height}
    >
      plot of a benchmark
    </canvas> 
  )
}

export default IPlot
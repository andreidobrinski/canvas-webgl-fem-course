const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: 'A4', // array uses [ width, height ]
  orientation: 'landscape',
  units: 'cm',
  pixelsPerInch: 300
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'orange';
    context.fillRect(0, 0, width, height);

    context.beginPath();
    context.arc(
      width / 2,
      height / 2,
      2,
      // width * 0.2, // use width to be resolution-independent
      0,
      Math.PI * 2,
      false
    );
    context.fillStyle = 'red';
    context.fill();

    context.lineWidth = width * 0.05; // use width to be resolution-independent
    context.strokeStyle = 'blue';
    context.stroke();
  };
};

canvasSketch(sketch, settings);

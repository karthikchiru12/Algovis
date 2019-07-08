/*MIT License

Copyright (c) 2016 Jakub Młokosiewicz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
Developed by hckr : https://github.com/hckr/k-means-visualization
*/





let canvas = document.getElementsByTagName('canvas')[0],
    ctx = canvas.getContext('2d'),

    colors = [
        '#ED0A3F',
        '#0095B7',
        '#33CC99',
        '#00468C',
        '#0066FF',
        '#EE34D2',
        '#C88A65',
        '#A50B5E',
        '#733380',
        '#87421F'
    ],

    distanceFunctions = {
        "Euclidean": euclideanDistance,
        "Manhattan": manhattanDistance
    },
    distance, // function (will be dynamically set)

    buttonAddDataPointsManually = document.getElementById('add-data-points-manually'),
    buttonAddDataPointsRandomly = document.getElementById('add-data-points-randomly'),
    buttonRemoveAllDataPoints = document.getElementById('remove-all-data-points'),

    buttonAddCentroidsManually = document.getElementById('add-centroids-manually'),
    buttonAddCentroidsRandomly = document.getElementById('add-centroids-randomly'),
    buttonRemoveAllCentroids = document.getElementById('remove-all-centroids'),

    buttonReassignDataPoints = document.getElementById('reassign-data-points'),
    buttonUpdateCentroidsPositions = document.getElementById('update-centroids-positions'),
    buttonRunStepsInLoop = document.getElementById('run-steps-in-loop'),

    inputAddDataPointsRandomlyCount = document.getElementById('add-data-points-randomly-count'),
    inputAddCentroidsRandomlyCount = document.getElementById('add-centroids-randomly-count'),
    inputRunStepsInLoopMilliseconds = document.getElementById('run-steps-in-loop-milliseconds'),

    selectDistanceFunction = document.getElementById('distance-function');


canvas.addEventListener('click', (e) => addNewPoint(getPointClickedOnCanvas(e)), false);

buttonAddDataPointsManually.addEventListener('click', toggleAddingDataPointsManually, false);
buttonAddDataPointsRandomly.addEventListener('click', () => addDataPointsRandomly(+inputAddDataPointsRandomlyCount.value), false);
buttonRemoveAllDataPoints.addEventListener('click', removeAllDataPoints, false);

buttonAddCentroidsManually.addEventListener('click', toggleAddingCentroidsManually, false);
buttonAddCentroidsRandomly.addEventListener('click', () => addCentroidsRandomly(+inputAddCentroidsRandomlyCount.value), false);
buttonRemoveAllCentroids.addEventListener('click', removeAllCentroids, false);

buttonReassignDataPoints.addEventListener('click', reassignDataPoints, false);
buttonUpdateCentroidsPositions.addEventListener('click', updateCentroidsPositions, false);
buttonRunStepsInLoop.addEventListener('click', runStepsInLoop, false);

inputAddDataPointsRandomlyCount.addEventListener('keyup', (e) => ifEnterThenCall(e, () => buttonAddDataPointsRandomly.click()));
inputAddCentroidsRandomlyCount.addEventListener('keyup', (e) => ifEnterThenCall(e, () => buttonAddCentroidsRandomly.click()));
inputRunStepsInLoopMilliseconds.addEventListener('keyup', (e) => ifEnterThenCall(e, restartLoop));

fillDistanceFunctionSelect();
changeDistanceFunction();
selectDistanceFunction.addEventListener('change', changeDistanceFunction, false);


let dataPoints = [],
    centroids = [],
    dataPointsAssignedCentroids = {}, // { dataPointIndex: centroidIndex }
    addingDataPointsManually = false,
    addingCentroidsManually = false,
    steps = [
        reassignDataPoints,
        updateCentroidsPositions
    ],
    currentStep,
    nextAfter,
    timeout,
    loopRunning = false;

function addNewPoint(point) {
    if (addingDataPointsManually) {
        dataPoints.push(point);
        redrawAll();
    } else if (addingCentroidsManually) {
        if (tryAddNewCentroid(point)) {
            redrawAll();
        } else {
            showCentroidLimitReachedMessage();
            toggleAddingCentroidsManually();
        }
    }
}

function getPointClickedOnCanvas(e) {
    let canvasRect = canvas.getBoundingClientRect();
    return [
        e.clientX - canvasRect.left - 1,
        e.clientY - canvasRect.top - 1
    ];
};

function toggleAddingDataPointsManually() {
    if (addingCentroidsManually) {
        toggleAddingCentroidsManually();
    }
    addingDataPointsManually = !addingDataPointsManually;
    toggleButtonText(buttonAddDataPointsManually);
    updateCanvasStyles();
}

function addDataPointsRandomly(count) {
    for (let i = 0; i < count; ++i) {
        let newPoint;
        do {
            newPoint = [
                randInt(0, canvas.width - 1),
                randInt(0, canvas.height - 1)
            ];
        } while (newPoint in centroids);
        dataPoints.push(newPoint);
    }
    redrawAll();
}

function removeAllDataPoints() {
    dataPoints = [];
    dataPointsAssignedCentroids = {};
    redrawAll();
}

function toggleAddingCentroidsManually() {
    if (!addingCentroidsManually && isCentroidLimitReached()) {
        showCentroidLimitReachedMessage();
        return;
    }
    if (addingDataPointsManually) {
        toggleAddingDataPointsManually();
    }
    addingCentroidsManually = !addingCentroidsManually;
    toggleButtonText(buttonAddCentroidsManually);
    updateCanvasStyles();
}

function addCentroidsRandomly(count) {
    let limitReached = false;
    for (let i = 0; i < count; ++i) {
        let newPoint;
        do {
            newPoint = [
                randInt(0, canvas.width - 1),
                randInt(0, canvas.height - 1)
            ];
        } while (newPoint in centroids);
        if (!tryAddNewCentroid(newPoint)) {
            limitReached = true;
            break;
        }
    }
    redrawAll();
    if (limitReached) {
        showCentroidLimitReachedMessage();
    }
}

function removeAllCentroids() {
    centroids = [];
    dataPointsAssignedCentroids = {};
    redrawAll();
}

function reassignDataPoints() {
    dataPoints.map((point, pointIndex) => {
        let smallestDistance = Number.MAX_SAFE_INTEGER,
            closestCentroidIndex = undefined;
        centroids.map((centroid, centroidIndex) => {
            let dist = distance(point, centroid);
            if (dist < smallestDistance) {
                smallestDistance = dist;
                closestCentroidIndex = centroidIndex;
            }
        });
        dataPointsAssignedCentroids[pointIndex] = closestCentroidIndex;
    });
    redrawAll();
}

function updateCentroidsPositions() {
    centroids.map((centroid, centroidIndex) => {
        let assignedPoints = dataPoints.filter((_, pointIndex) => dataPointsAssignedCentroids[pointIndex] == centroidIndex),
            sumX = 0,
            sumY = 0;
        if (assignedPoints.length == 0)
            return;
        assignedPoints.map(([x, y]) => {
            sumX += x;
            sumY += y;
        });
        centroid[0] = sumX / assignedPoints.length;
        centroid[1] = sumY / assignedPoints.length;
    });
    redrawAll();
}

function runStepsInLoop() {
    toggleButtonText(buttonRunStepsInLoop);
    if (!loopRunning) {
        loopRunning = true;
        currentStep = 0;
        nextAfter = +inputRunStepsInLoopMilliseconds.value;
        if (isNaN(nextAfter) || nextAfter <= 0) {
            alert('Wrong value!');
            return;
        }
        enqueNextStep(0);
    } else {
        clearTimeout(timeout);
        loopRunning = false;
    }
}

function ifEnterThenCall(e, func) {
    e.keyCode == 13 && func();
}

function restartLoop() {
    if (loopRunning) {
        runStepsInLoop();
    }
    runStepsInLoop();
}

function euclideanDistance(point1, point2) {
    return Math.sqrt(Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2));
}

function manhattanDistance(point1, point2) {
    return Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]);
}

function fillDistanceFunctionSelect() {
    for (let name in distanceFunctions) {
        let option = document.createElement('option');
        option.value = option.innerHTML = name;
        selectDistanceFunction.appendChild(option);
    }
}

function changeDistanceFunction() {
    distance = distanceFunctions[selectDistanceFunction.value];
}

function redrawAll() {
    canvas.width = canvas.width;
    dataPoints.map(drawDataPoint);
    centroids.map(drawCentroid);
}

function tryAddNewCentroid(point) {
    if (isCentroidLimitReached()) {
        return false;
    }
    centroids.push(point);
    return true;
}

function showCentroidLimitReachedMessage() {
    // using timeout to show alert after canvas is refreshed
    setTimeout(() => alert(`Sorry, reached limit of ${colors.length} colors.`), 50);
}

function toggleButtonText(button) {
    let currentText = button.innerHTML;
    button.innerHTML = button.getAttribute('data-toggle');
    button.setAttribute('data-toggle', currentText);
}

function updateCanvasStyles() {
    if (addingDataPointsManually || addingCentroidsManually) {
        canvas.classList.add('canvas-picking-active');
    } else {
        canvas.classList.remove('canvas-picking-active');
    }
}

function randInt(min, max) {
    if (arguments.length == 1) {
        max = arguments[0];
        min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isCentroidLimitReached() {
    return centroids.length >= colors.length;
}

function enqueNextStep(overrideAfter) {
    let delay = overrideAfter != undefined ? overrideAfter : nextAfter;
    timeout = setTimeout(() => {
        steps[currentStep]();
        currentStep = (currentStep + 1) % steps.length;
        enqueNextStep();
    }, delay);
}

function drawDataPoint([x, y], index) {
    ctx.save();
        ctx.fillStyle = colors[dataPointsAssignedCentroids[index]];
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
    ctx.restore();
}

function drawCentroid([x, y], index) {
    ctx.save()
        ctx.strokeStyle = ctx.fillStyle = colors[index];
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.save();
            ctx.arc(x, y, 8, 0, 2 * Math.PI);
            ctx.stroke();
        ctx.restore();
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = 'white';
        ctx.stroke();
    ctx.restore();
}
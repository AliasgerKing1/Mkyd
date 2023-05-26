/*eslint-disable */
import React, { useEffect, useState } from 'react'
const DrawCanvas = () => {
    let [initialColour, setInitialColour] = useState(2)
    let [coustomColour, setCoustomColour] = useState(2)
    let [changeBrushSize, setChangeBrushSize] = useState(5)
    let [toolCurrentlyInUse, setToolCurrentlyInUse] = useState(1)
    let [isFill, setIsFill] = useState(false)
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [endX, setEndX] = useState(0);
    const [endY, setEndY] = useState(0);
    const [rectangles, setRectangles] = useState([]);
    const [texts, setTexts] = useState([]);

    let sizeChanging = (event) => {
        setChangeBrushSize(event.target.value)
    }
    let colouChanging = (event) => {
        setInitialColour(event.target.value)
    }
    let selectCoustomColour = (event) => {
        setCoustomColour(event.target.value)
    }
    let fillChanging = (event) => {
        setIsFill(event.target.checked)
    }
    const handleMouseDown = (event) => {
        if (event.button === 0) {
            // Get the starting coordinates of the mouse pointer
            const x = event.clientX;
            const y = event.clientY;
            setStartX(x);
            setStartY(y);
            const text = {
                startX,
                startY,
            };
            if (toolCurrentlyInUse == 5) {
                setTexts([...texts, text])
            }
            // console.log("start x", x)
            // console.log("start y", y)
        }
    };
    const handleMouseUp = (event) => {
        // Mouse button is released
        const x = event.clientX;
        const y = event.clientY;
        setEndX(x);
        setEndY(y);
        // console.log(" end x", x)
        // console.log(" end y", y)

        // Create a new rectangle object
        const rectangle = {
            startX,
            startY,
            width: endX - startX,
            height: endY - startY,
        };
        if (toolCurrentlyInUse == 3) {
            setRectangles([...rectangles, rectangle]);
        }
    };

    let clearCanvas = () => {
        setRectangles([])
        setTexts([])
    }
    let saveImg = () => {
        // const link = document.createElement("a"); // creating <a> element
        // link.download = `${Date.now()}.jpg`; // passing current date as link download value
        // link.href = canvas.toDataURL(); // passing canvasData as link href value
        // link.click(); // clicking link to download image
    }
    return (
        <>
            <div className='body'>
                <div className="container">
                    <section className="tools-board">
                        <div className="row">
                            <label className="title">Shapes</label>
                            <ul className="options">
                                <li className={`option tool ${toolCurrentlyInUse == 3 ? "active" : ""}`} id="rectangle" onClick={() => setToolCurrentlyInUse(3)}>
                                    <img src="/assets/media/icons/icons_Drawing/rectangle.svg" alt="" />
                                    <span>Rectangle</span>
                                </li>
                                <li className={`option tool ${toolCurrentlyInUse == 4 ? "active" : ""}`} id="triangle" onClick={() => setToolCurrentlyInUse(4)}>
                                    <img src="/assets/media/icons/icons_Drawing/triangle.svg" alt="" />
                                    <span>Triangle</span>
                                </li>
                                <li className={`option tool ${toolCurrentlyInUse == 5 ? "active" : ""}`} id="text" onClick={() => setToolCurrentlyInUse(5)}>
                                    <img src="/assets/media/icons/icons_Drawing/text.svg" alt="" />
                                    <span>Text</span>
                                </li>

                                <li className="option">
                                    <input type="checkbox" id="fill-color" value onChange={(e) => fillChanging(e)} />
                                    <label for="fill-color">Fill color</label>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <label className="title">Options</label>
                            <ul className="options">
                                <li className={`option tool ${toolCurrentlyInUse == 1 ? "active" : ""}`} id="brush" onClick={() => setToolCurrentlyInUse(1)}>
                                    <img src="/assets/media/icons/icons_Drawing/brush.svg" alt="" />
                                    <span>Brush</span>
                                </li>
                                <li className={`option tool ${toolCurrentlyInUse == 2 ? "active" : ""}`} id="eraser" onClick={() => setToolCurrentlyInUse(2)}>
                                    <img src="/assets/media/icons/icons_Drawing/eraser.svg" alt="" />
                                    <span>Eraser</span>
                                </li>
                                <li className="option">
                                    <input type="range" min="1" max="30" defaultValue="5" onChange={(e) => sizeChanging(e)} />
                                </li>
                            </ul>
                        </div>
                        <div className="row colors">
                            <label className="title">Colors</label>
                            <ul className="options">
                                <li className={`option ${initialColour == 1 ? "selected" : ""}`} value="1" onClick={(e) => colouChanging(e)}></li>
                                <li className={`option ${initialColour == 2 ? "selected" : ""}`} value="2" onClick={(e) => colouChanging(e)}></li>
                                <li className={`option ${initialColour == 3 ? "selected" : ""}`} value="3" onClick={(e) => colouChanging(e)}></li>
                                <li className={`option ${initialColour == 4 ? "selected" : ""}`} value="4" onClick={(e) => colouChanging(e)}></li>
                                <li className={`option ${initialColour == 5 ? "selected" : ""}`} value="5" style={{ backgroundColor: coustomColour }} onClick={(e) => colouChanging(e)}>
                                    <input type="color" id="color-picker" onChange={(e) => selectCoustomColour(e)} />
                                </li>
                            </ul>
                        </div>
                        <div className="row buttons">
                            <button className="clear-canvas" onClick={clearCanvas}>Clear Canvas</button>
                            <button className="save-img" onClick={saveImg}>Save As Image</button>
                        </div>
                    </section>
                    <section className="Drawing-board" onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        style={{ width: '100%' }}>
                        {/* onMouseMove={(e) => handleMouseOver(e)} */}
                        {rectangles.map((rectangle, index) => (
                            <div
                                key={index}
                                className="rectangle"
                                style={{
                                    position: 'absolute',
                                    left: rectangle.startX,
                                    top: rectangle.startY,
                                    width: rectangle.width,
                                    height: rectangle.height,
                                    background: 'green'
                                }}

                            />
                        ))}
                        {texts.map((text, index) => (
                            <input
                                type="text"
                                key={index}
                                className="text"
                                style={{
                                    left: text.startX,
                                    top: text.startY,
                                }}

                            />
                        ))}
                    </section>
                </div>
            </div >
        </>
    )
}

export default DrawCanvas



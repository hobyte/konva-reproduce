import { useId, useLayoutEffect, useRef } from "react";
import { Stage, Layer, Rect } from "react-konva";

export function PergamentCanvas({ parent }: { parent: HTMLElement }) {
    const stageRef = useRef(null);
    const id = useId();
    const width = parent.innerWidth;
    const height = 400;

    useLayoutEffect(() => {
        const stage = stageRef.current;
        stage.setWidth(parent.innerWidth)
        stage.draw()
    }, []);

    return (
        <Stage
            className="pergament-stage"
            id={id}
            width={width}
            height={height}
            ref={stageRef}
        >
            <Layer>
                {[...Array(10)].map((x, i) =>
                    <Rect
                        width={20}
                        height={20}
                        x={i * 50}
                        y={20}
                    >
                    </Rect>
                )}
            </Layer>
        </Stage>
    );
};
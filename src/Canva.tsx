import React from "react";
import useCanvaStore from "./Store";

const Canva = () => {
    const { bg, mutateColor } = useCanvaStore((state: any) => ({
        bg: state.bg,
        mutateColor: state.mutateColor,
    }));
    return (
        <div
            style={{
                height: 600,
                width: 1000,
                backgroundColor: bg,
                textAlign: "center",
                fontSize: "4rem",
            }}
            onClick={() =>
                mutateColor(
                    `rgb(${Math.round(Math.random() * 255)} ${Math.round(
                        Math.random() * 255
                    )} ${Math.round(Math.random() * 255)})`
                )
            }>
            Canva
        </div>
    );
};

export default Canva;

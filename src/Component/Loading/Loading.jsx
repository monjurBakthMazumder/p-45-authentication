import { SpinnerDiamond } from "spinners-react";

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-[80vh]">
            <SpinnerDiamond size={90} thickness={180} speed={180} color="rgba(57, 59, 172, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" />
        </div>
    );
};

export default Loading;
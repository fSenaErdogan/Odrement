import Dark from "./Dark"
import Pastel from "./Pastel"
import Vibrant from "./Vibrant"

const Inputs = () => {

    return (
        <>
        <div className="flex-col flex gap-1 text-[16px]">
            <span className="text-white font-semibold text-lg ms-1 text-center mt-1">PASTEL</span>
            <Pastel/>

            <span className="text-white font-semibold text-lg ms-1 text-center mt-1">VİBRANT</span>
            <Vibrant/>

            <span className="text-white font-semibold text-lg ms-1 text-center mt-1">DARK</span>
            <Dark/>
        </div>
        </>
    )
}

export default Inputs

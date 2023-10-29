import PInput1 from "./Input01" //PASTEL INPUTLAR
import PInput2 from "./Input02"
import PInput3 from "./Input03"
import PInput4 from "./Input04"
import PInput5 from "./Input05"
import PInput6 from "./Input06"
import PInput7 from "./Input07"
import PInput8 from "./Input08"
import PInput9 from "./Input09"
import PInput10 from "./Input10"

const Pastel = () => {

    return (
        <>
            <div className="pastel bg-white p-5 rounded-md items-center gap-5 justify-center flex flex-wrap text-black/70">
                <PInput1 placeholder="Input01" />
                <PInput2 placeholder="Input02" />
                <PInput3 placeholder="Input03" />
                <PInput4 placeholder="Input04" />
                <PInput5 placeholder="Input05" />
                <PInput6 placeholder="Input06" />
                <PInput7 placeholder="Input07" />
                <PInput8 placeholder="Input08" />
                <PInput9 placeholder="Input09" />
                <PInput10 placeholder="Input10" />
                {/*
                */}
            </div >
        </>
    )
}

export default Pastel

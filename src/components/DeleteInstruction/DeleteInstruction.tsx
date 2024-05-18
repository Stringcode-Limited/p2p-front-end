import "./DeleteInstruction.css";

interface Instruction{
    notes: string;
}

const DeleteInstruction = ({notes}:Instruction) => {
    return (
        <>
            <div className="instruction">
                <p>{notes}</p>
            </div>
        </>
    )
}

export default DeleteInstruction

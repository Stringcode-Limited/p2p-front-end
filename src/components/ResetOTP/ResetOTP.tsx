import "./ResetOTP.css"
interface Ireset {
    label: string;
    display?: 'hide' | 'show';

}

const ResetOTP = ({ label, display }: Ireset) => {
    return (
        <>
            <div>
                <div className="resetOTP">
                    <label htmlFor="" className="resetlabel">{label}</label>
                    <div className="resetInput">
                        <input type="text" />
                        <p className={display}>send</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetOTP

import "./ResetOTP.css"
interface Ireset {
    label: string;
    display?: 'hide' | 'show';
    img?: string;

}

const ResetOTP = ({ label, display, img }: Ireset) => {
    return (
        <>
            <div>
                <div className="resetOTP">
                    <div className="labelWrapper">
                    <label htmlFor="" className="resetlabel">{label}</label>
                    <img src={img}  />
                    </div>
                    <div className="resetInput">
                        <input type="text" />
                        <p className={display}>Send</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetOTP

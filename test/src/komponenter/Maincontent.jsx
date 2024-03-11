
import billede from "../assets/kiste.png"
export default function Maincontent(){
    return(
        <div className="content">
            <div className="left">
                <h3>Farvel</h3>
                <p>Sig farvel til folk som var det sidste gang i så hinanden! Livet er vigtigt</p>
            </div>
            <div className="middle">
                <img style={{width:"90%"}} src={billede}/>
            </div>
            <div className="right">
                <h3>Livet efter døden</h3>
                <p>Frygt ej livet er uendeligt og livets rejse har aldrig en endestation.</p>
            </div>
        </div>
    )
}
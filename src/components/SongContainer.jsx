import * as React from 'react';
import M from "materialize-css/dist/js/materialize.min.js";

const SongContainer = () => {

    React.useEffect(()=>{
        M.AutoInit();
    })
    return ( 
        <div className="container section">
            <div className="card">
    <div className="card-content">
      <p className="card-title right">'עטור הוודג</p>
        <button className="btn-floating btn-large waves-effect waves-light" title="הקשיבו הקשיבו"><i className="material-icons volumeIcon">volume_up</i></button>
        <br/>
      <p className="right">נכתב במקור ע"י אריק אינשטיין וב12 לנובמבר נרצח ע"י ליבי וגילי</p>
    </div>
    <div className="card-tabs">
      <ul className="tabs tabs-fixed-width">
        <li className="tab"><a href="#test4">מילות השיר המקורי</a></li>
        <li className="tab"><a className="active" href="#test5">מילות השיר</a></li>
      </ul>
    </div>
    <div className="card-content grey lighten-5">
      <div id="test4">מילות השיר המקורי</div>
      <div id="test5" className="right">עטור הוודג' רוז גולד
(וואלה לא זוכר מה הוא כתב)
הוודג' מתחרז עם עיניים ואור
(אנ'לא סגור למה)

הבייבידול שלך צמרירי ורך
נודר - תענוג לעל ליל
לא הייתי רוצה להיות לך בפרינדזון
אל תקראי לי יא אח
חולם עלייך בתולה וקדושה
יא עיוני איזו אישה!

מה נפלו פנייך מאמי?
מדוע את משחקת אותה?
חדל ללרלר על קרוב על רחוק
ואני, שלא פעם עושה לך סטוק
מתנחלת נפשי בביתך כבר שבועיים
באלוהים שבועיים
אם ממני את נפרדת
אני מתאבד.</div>

    </div>
  </div>
        </div>
     );
}
 
export default SongContainer;
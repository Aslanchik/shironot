import * as React from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const SongContainer = () => {

    React.useEffect(()=>{
        M.AutoInit();
    })
    return ( 
        <div className="container section">
            <div className="card">
    <div className="card-content">
      <div className="card-title center">'עטור הוודג</div>
      <p className="center">נכתב במקור ע"י אברהם חלפי והולחן ע"י יוני רכטר, וב12 לנובמבר נרצח ע"י ליבי וגילי</p>
      <br/>
      <AudioPlayer
    src="עטור הוודג.mp3"

  />
    </div>
    <div className="card-tabs">
      <ul className="tabs tabs-fixed-width">
        <li className="tab"><a href="#test4">מילות השיר המקורי</a></li>
        <li className="tab"><a className="active" href="#test5">מילות השיר</a></li>
      </ul>
    </div>
    <div className="card-content grey lighten-5">
      <blockquote id="test4" className="center"><p>עטור מצחך זהב שחור</p>
<p>(אינני זוכר אם כתבו כך בשיר)</p>
<p>מצחך מתחרז עם עיניים ואור</p>
<p>(אינני זוכר אם חרזו כך בשיר)</p>
<p>אך למי שתהיי</p>
<p>חייו מלאי שיר</p>
<br/>
<p>חלוקך הורוד צמרירי ורך</p>
<p>את בו מתעטפת תמיד לעת ליל</p>
<p>לא הייתי רוצה להיות לך אח</p>
<p>לא נזיר מתפלל לדמותו של מלאך</p>
<p>ורואה חלומות עגומים של קדושה</p>
<p>...ולמולו את אישה</p>
<br/>
<p>את אוהבת להיות</p>
<p>עצובה ושותקת</p>
<p>להקשיב לסיפור על קרוב על רחוק</p>
<p>ואני, שלא פעם אביט בך בשקט</p>
<p>אין קול ודברים</p>
<p>שוכח הכל על אודות אחרים</p>
<p>שוכנת נפשי בין כתלי ביתך</p>
<p>ושבויה בין כתלייך</p>
<p>ממני נפרדת</p>
<p>.עת אני בגופי נפרד ממך</p>
</blockquote>
      <blockquote id="test5" className="center"><p>עטור הוודג' רוז גולד</p>
<p>(וואלה לא זוכר מה הוא כתב)</p>
<p>הוודג' מתחרז עם עיניים ואור</p>
<p>(אנ'לא סגור למה)</p>
<br/>
<p>הבייבידול שלך צמרירי ורך</p>
<p>נודר - תענוג לעל ליל</p>
<p>לא הייתי רוצה להיות לך בפרינדזון</p>
<p>אל תקראי לי יא אח</p>
<p>חולם עלייך בתולה וקדושה</p>
<p>יא עיוני איזו אישה!</p>
<br/>
<p>מה נפלו פנייך מאמי?</p>
<p>מדוע את משחקת אותה?</p>
<p>חדל ללרלר על קרוב על רחוק</p>
<p>ואני, שלא פעם עושה לך סטוק</p>
<p>מתנחלת נפשי בביתך כבר שבועיים</p>
<p>באלוהים שבועיים</p>
<p>אם ממני את נפרדת</p>
<p>.אני מתאבד</p>
</blockquote>

    </div>
  </div>
        </div>
     );
}
 
export default SongContainer;
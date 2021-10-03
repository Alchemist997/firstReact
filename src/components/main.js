import css from './Main.module.css'
import { Route } from "react-router"
import Messages from "./main/messages"
import profile from "./main/profile"
import news from "./main/news"
import music from "./main/music"
import settings from "./main/settings"
import Sidebar from "./sidebar"

let Main = props => {

    return <main className={css.main}>
        <Sidebar />
        <div className={css.article}>
            <Route path="/messages" render={() => <Messages data={props.data} />} />
            <Route path="/profile" component={profile} />
            <Route path="/news" component={news} />
            <Route path="/music" component={music} />
            <Route path="/settings" component={settings} />
        </div>
    </main>
}

export default Main
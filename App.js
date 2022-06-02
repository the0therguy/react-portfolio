import GlobalStyle from "./globalStyle";
import {ThemeProvider} from "styled-components";
import {lightTheme, DarkTheme} from "./components/Themes";
import {Route, Switch, HashRouter} from "react-router-dom";
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import BlogPage from "./components/BlogPage";
import MySkillPage from "./components/MySkillPage";
import MyCV from "./SubComponents/MyCV";

function App() {
    return <>
        <GlobalStyle/>
            <ThemeProvider theme={lightTheme}>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Main}/>
                        <Route exact path="/about" component={AboutPage}/>
                        <Route exact path="/work" component={WorkPage}/>
                        <Route exact path="/blog" component={BlogPage}/>
                        <Route exact path="/skills" component={MySkillPage}/>
                        <Route exact path="/mycv" component={MyCV}/>
                    </Switch>
                </HashRouter>
            </ThemeProvider>
    </>

}

export default App


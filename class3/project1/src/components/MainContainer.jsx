import CardContainer from "./CardContainer"
import Navbar from "./Navbar"

function MainContainer({colorTheme, colorChangeTheme}) {
    // console.log(colorTheme,colorSetTheme,colorChangeTheme)
    // let heading = "this is heading";
    return (
        <div className="main-conatiner">
            
            <Navbar colorTheme={colorTheme} colorChangeTheme={colorChangeTheme} />
            <CardContainer  heading = "this is heading" />
        </div>
    )
}

export default MainContainer
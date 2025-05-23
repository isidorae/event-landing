import Main from "../components/Main.jsx"
import ActionMessages from "../components/homepage/ActionMessages.jsx"
import AboutEvent from "../components/homepage/AboutEvent.jsx"
import FooterComp from "../components/FooterComp.jsx"
import Speakers from "../components/homepage/Speakers.jsx"
import FinalMsgs from "../components/homepage/FinalMsgs.jsx"

export default function Home() { 
    return (
        <>
        <div className="vh-100">
            <Main/>
            <ActionMessages />
            <AboutEvent />
            <Speakers />
            <FinalMsgs />
            <FooterComp/>
        </div>
        </>
    )
}
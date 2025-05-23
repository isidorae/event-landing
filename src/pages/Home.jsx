import Main from "../components/Main"
import ActionMessages from "../components/homepage/ActionMessages"
import AboutEvent from "../components/homepage/AboutEvent"
import FooterComp from "../components/FooterComp"
import Speakers from "../components/homepage/Speakers"
import FinalMsgs from "../components/homepage/FinalMsgs"

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
import HeroImg from "./homepage/HeroImg";
import ActionMessages from "./homepage/ActionMessages";
import AboutEvent from "./homepage/AboutEvent";
import Speakers from "./homepage/Speakers";
import FinalMsgs from "./homepage/FinalMsgs";
import FooterComp from "./FooterComp";
import JoinNow from "./homepage/JoinNow";
import { useRef } from "react";


export default function Main() {

    const formRef = useRef(null);

    return(
        <>
        <HeroImg ref={formRef}/>
        <ActionMessages />
        <AboutEvent />
        <Speakers />
        <FinalMsgs />
        <JoinNow formRef={formRef}/>
        <FooterComp/>
        </>
    )
 }
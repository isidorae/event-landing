import HeroImg from "./homepage/HeroImg";
import ActionMessages from "./homepage/ActionMessages";
import AboutEvent from "./homepage/AboutEvent";
import Speakers from "./homepage/Speakers";
import FinalMsgs from "./homepage/FinalMsgs";
import FooterComp from "./FooterComp";
import JoinNow from "./homepage/JoinNow";
import { useRef } from "react";
import ComeCTA from "./homepage/ComeCTA";
import AgendaList from "./homepage/AgendaList";


export default function Main() {

    const formRef = useRef(null);

    return(
        <>
        <HeroImg ref={formRef}/>
        <Speakers ref={formRef} />
        <AboutEvent />
        <ActionMessages />
        <FinalMsgs />
        <AgendaList />
        <JoinNow formRef={formRef}/>
        <ComeCTA />
        <FooterComp/>
        </>
    )
 }
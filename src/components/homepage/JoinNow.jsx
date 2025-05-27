import HubspotForm from "../HubspotForm";

export default function JoinNow({formRef}) {

    return(
        <>
        <div ref={formRef} className="border rounded p-5 m-5">
            <h2 className="text-bolder">Inscríbete Aquí</h2>
           <HubspotForm />
        </div>
        </>
    )

}
import { useEffect } from "react";

const useCreateFormHbspt = (hbsptSettings) => {
    useEffect(() => {
        const script = document.createElement('script');
        if (hbsptSettings) {
            script.src = 'https://js.hsforms.net/forms/v2.js';
            document.body.appendChild(script);
            script.addEventListener('load', () => {
                if (typeof window !== 'undefined' && window.hbspt) {
                    window.hbspt.forms.create({
                        region: hbsptSettings.region,
                        portalId: hbsptSettings.portalId,
                        formId: hbsptSettings.formId,
                        target: hbsptSettings.target
                    })
                }
            });
        }
        return () => {
            //TODO delete form
        }
    }, [])
}

export default useCreateFormHbspt;
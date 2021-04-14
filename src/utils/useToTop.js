import { useEffect } from "react";

const useToTop = () => {
    return useEffect(() => {
        window.scrollTo(0,0)
    },[])
}

export default useToTop;
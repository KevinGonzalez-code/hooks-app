import { useEffect, useState } from "react";

export default function useFecth(url) {
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {

        setState({ data: null, loading: true, error: null });

        fetch(url)
            .then(res => res.json())
            .then(data => setState({
                loading: false,
                data: data,
                error: null
            }));
    }, [url]);


    return state;
}

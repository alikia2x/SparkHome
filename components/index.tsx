import { useRecoilState } from "recoil";
import Background from "./background";
import Search from "./search/search";
import { bgFocusState } from "./state/background";

export default function Homepage() {
    const [isFocus, setFocus] = useRecoilState(bgFocusState);
    return (
        <div className="h-full fixed overflow-hidden w-full bg-black">
            <Background
                src="rgb(23,25,29)"
                isFocus={isFocus}
                onClick={() => setFocus(false)}
            />
            <Search
                onFocus={() => {
                    setFocus(true);
                    console.log("focus");
                }}
            />
        </div>
    );
}
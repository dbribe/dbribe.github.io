import {UI, Link, registerStyle, RawHTML} from "UI";
import {StyleSheet, styleRule} from "UI";
import {MediumLogo, FacebookLogo, InstagramLogo, GitHubLogo, LinkedInLogo, PinterestLogo, YouTubeLogo, TwitterLogo,
    Shadow, DBribe} from "./SVGComponents";


class IndexPageStyle extends StyleSheet {
    @styleRule
    container = {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    };
}


@registerStyle(IndexPageStyle)
export class IndexPage extends UI.Element {
    extraNodeAttributes(attr) {
        attr.addClass(this.styleSheet.container);
    }

    render() {
        return [
            <div style={{flex: 1, width: "-webkit-fill-available", maxWidth: "550px", padding: "30px", paddingTop: 0}}>
                <DBribe style={{display: "block", margin: "10vh auto", marginBottom: "5vh", width: "100%"}}/>
            </div>,
            <div style={{ minHeight: "40vh", margin: "0 auto", textAlign: "center"}}>
                <YouTubeLogo/>
                <LinkedInLogo/>
                <FacebookLogo/>
                <InstagramLogo/>
                <TwitterLogo/>
                <MediumLogo/>
                <PinterestLogo/>
                <GitHubLogo/>
            </div>
        ];
    }
}
import {UI, Image, Link, registerStyle, StyleSheet, styleRule} from "UI";



const getPathPrefix = () => window.location.hostname === "localhost" ? "../../" : "dbribeapp/";

let transitionDelay = .9;

const getTransitionDelay = () => {
    transitionDelay += .1;
    return transitionDelay;
};

class ImportedSVG extends Image {
    getDefaultOptions() {
        return Object.assign({}, super.getDefaultOptions(), {
            src: getPathPrefix() + "static/svg/" + this.getSVGName() + ".svg",
        });
    }

    getSVGName() {
        return this.options.svgName;
    }

    extraNodeAttributes(attr) {
        super.extraNodeAttributes(attr);
        attr.setStyle({
            opacity: 0,
            transform: "translateY(-69px)",
            transition: "transform, opacity",
            transitionDuration: "1s",
            transitionTimingFunction: "ease",
            transitionDelay: getTransitionDelay() + "s",
        });
    }

    onMount() {
        super.onMount();
        setTimeout(() => {
            this.setStyle({
                opacity: 1,
                transform: "translateY(0)",
            });
        });
    }
}


class LogoStyle extends StyleSheet {
    @styleRule
    logo = {
        display: "inline-block",
        margin: "20px",
        transitionProperty: "transform",
        transitionTimingFunction: "ease",
        transform: "translateY(0) scale(1)",
        transitionDuration: ".3s",
        ":hover": {
            transform: "translateY(-8px) scale(1.1)",
        }
    }
}


@registerStyle(LogoStyle)
export class Logo extends Link {
    getDefaultOptions() {
        return Object.assign({}, super.getDefaultOptions(), {
            href: this.getHref(),
            newTab: true,
        });
    }

    extraNodeAttributes(attr) {
        super.extraNodeAttributes(attr);
        attr.addClass(this.styleSheet.logo);
    }

    render() {
        return [<ImportedSVG svgName={this.getSVGName()}/>];
    }
}


export class MediumLogo extends Logo {
    getSVGName() {return "medium";}

    getHref() {return "https://medium.com/@dbribe";}
}


export class FacebookLogo extends Logo {
    getSVGName() {return "facebook";}

    getHref() {return "https://www.facebook.com/k1r496";}
}


export class GitHubLogo extends Logo {
    getSVGName() {return "github";}

    getHref() {return "https://github.com/dbribe";}
}


export class InstagramLogo extends Logo {
    getSVGName() {return "instagram";}

    getHref() {return "https://www.instagram.com/dbribe/";}
}


export class LinkedInLogo extends Logo {
    getSVGName() {return "linkedin";}

    getHref() {return "https://www.linkedin.com/in/denis-mita/";}
}


export class PinterestLogo extends Logo {
    getSVGName() {return "pinterest";}

    getHref() {return "https://www.pinterest.co.uk/skywalkerrr1996/";}
}


export class TwitterLogo extends Logo {
    getSVGName() {return "twitter";}

    getHref() {return "https://twitter.com/d_bribe";}
}


export class YouTubeLogo extends Logo {
    getSVGName() {return "youtube";}

    getHref() {return "https://www.youtube.com/channel/UC0k47b8_h6x2I7R5vMTLpMg?view_as=subscriber";}
}


export class Shadow extends ImportedSVG {
    getSVGName() {return "shadow";}
}


export class DBribe extends ImportedSVG {
    getSVGName() {return "dbribe";}
}
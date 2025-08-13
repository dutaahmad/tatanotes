import { memo, SVGAttributes } from 'react';

function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1080"
            height="1080"
            fill="none"
            viewBox="0 0 1080 1080"
            {...props}
        >
            <g clipPath="url(#a)">
                <circle cx="540" cy="540" r="540" fill="#000"></circle>
                <g fill="#D9D9D9" filter="url(#b)">
                    <path d="M477.664 289.75H157.376s-5.346 26.048 0 41.378c7.559 21.679 43.282 41.378 43.282 41.378H391.1v610.122l86.565 31.232-.001-645.492h56.267zM590.198 513.19l86.565 111.72v357.718L590.198 1018zM823.923 277.344C953.769 430.443 906.88 571.816 875.861 639.4v-.007L706.176 368.368h.884l-7.065-9.871-1.591-2.542-.211.024-47.4-66.229H533.932l56.266 78.618 19.477 10.344L875.02 793.994l.841 2.642.526-.503 1.638 2.565-.055-4.101c73.51-71.964 178.69-262.756 75.799-475.875C849.892 103.558 626.267 58.732 533.931 62.18l-51.648 86.408q-.23.243-.29.485l.29-.485c9.057-9.632 213.95-21.799 341.64 128.756"></path>
                </g>
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M0 0h1080v1080H0z"></path>
                </clipPath>
                <filter
                    id="b"
                    width="865.665"
                    height="970"
                    x="155"
                    y="62"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dx="20" dy="10"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2001_3"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2001_3"
                        result="shape"
                    ></feBlend>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dx="10" dy="8"></feOffset>
                    <feComposite
                        in2="hardAlpha"
                        k2="-1"
                        k3="1"
                        operator="arithmetic"
                    ></feComposite>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"></feColorMatrix>
                    <feBlend in2="shape" result="effect2_innerShadow_2001_3"></feBlend>
                </filter>
            </defs>
        </svg>
    );
}

export default memo(AppLogoIcon);
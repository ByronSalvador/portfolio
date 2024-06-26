interface Props {
    width?: string,
    height?: string
    classes?: string
}


export default function InstagramIcon({ width = "100%", height = "100%", classes = "fill-[#758CA3] group-hover:fill-primary-900 duration-300" }: Props) {
    return (
        <svg
            className={classes}
            width={width}
            height={height}
            viewBox="0 0 48 48" version="1.1" id="Shopicons" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
                <g id="instagram_00000127030415805702900630000013396224003006281109_"> <path d="M0-.019h48v48H0v-48z" fill="none"></path> <path d="M36.019 8A3.986 3.986 0 0 1 40 11.981v24.038A3.986 3.986 0 0 1 36.019 40H11.981A3.986 3.986 0 0 1 8 36.019V11.981A3.986 3.986 0 0 1 11.981 8h24.038m0-4H11.981A7.98 7.98 0 0 0 4 11.981v24.038A7.98 7.98 0 0 0 11.981 44h24.038A7.98 7.98 0 0 0 44 36.019V11.981A7.98 7.98 0 0 0 36.019 4z"></path> <path d="M24 34c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-16c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6z"></path> <circle cx="35" cy="13" r="2"></circle> </g> </g></svg>
    )
}

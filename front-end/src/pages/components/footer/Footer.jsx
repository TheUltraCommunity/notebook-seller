import Logo from "../../../assets/logos/logo-notebookseller.png";

export default function Footer(){

    const currentYear = new Date().getFullYear();

    return(
        <div className="w-full flex justify-center items-center mx-auto space-x-3">
            <img src={Logo} alt="logo" className="w-11 h-11" />
            <p className="text-black/80">{currentYear} © All rights reserved.</p>
        </div>
    )
}
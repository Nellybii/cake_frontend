import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

function Footer() {
    return (
        <>
            <div className='footer'>
                <a href="#"><FaFacebook /></a>
                <a href="#"> <FaInstagram /></a>
                <a href="#"><FaWhatsapp /></a>
                <a href="#"> <IoCallOutline /></a>
            </div>
        </>)
}

export default Footer